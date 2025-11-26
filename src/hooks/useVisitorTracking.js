import { useEffect, useState } from 'react';
import { ref, onValue, runTransaction, push, onDisconnect, set, serverTimestamp } from 'firebase/database';
import { db } from '../firebase';

export function useVisitorTracking() {
    const [stats, setStats] = useState({ totalVisits: 0, activeUsers: 0 });

    useEffect(() => {
        // 1. Track Total Visits (Increment only once per session)
        const visitKey = 'hasVisited_v1';
        const hasVisited = sessionStorage.getItem(visitKey);
        

        if (!hasVisited) {
            const totalVisitsRef = ref(db, 'visits/total');
            runTransaction(totalVisitsRef, (currentValue) => {
                return (currentValue || 0) + 1;
            }).catch(err => console.error("Visit increment error:", err));
            sessionStorage.setItem(visitKey, 'true');
        }

        // 2. Track Active Users (Presence)
        const connectedRef = ref(db, '.info/connected');
        const activeUsersRef = ref(db, 'visits/active');

        const unsubscribeConnected = onValue(connectedRef, (snap) => {
            if (snap.val() === true) {
                // Create unique user connection entry
                const userRef = push(activeUsersRef);

                // Remove connection on disconnect
                onDisconnect(userRef).remove().catch(err => console.error("onDisconnect error:", err));

                // Add active user data
                set(userRef, {
                    timestamp: serverTimestamp(),
                    userAgent: navigator.userAgent
                }).catch(err => console.error("Set active user error:", err));
            }
        });

        // 3. Listen for stats changes to update UI
        const totalRef = ref(db, 'visits/total');
        
        const unsubscribeTotal = onValue(totalRef, (snapshot) => {
            setStats(prev => ({ ...prev, totalVisits: snapshot.val() || 0 }));
        }, (error) => {
            console.error("Error reading total visits:", error);
        });

        const unsubscribeActive = onValue(activeUsersRef, (snapshot) => {
            setStats(prev => ({ ...prev, activeUsers: snapshot.size || 0 }));
        }, (error) => {
            console.error("Error reading active users:", error);
        });

        return () => {
            unsubscribeConnected();
            unsubscribeTotal();
            unsubscribeActive();
        };
    }, []);

    return stats;
}
