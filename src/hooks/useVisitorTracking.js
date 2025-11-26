import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, set, onDisconnect, increment } from "firebase/database";

export default function useVisitorTracking() {
  const [totalVisits, setTotalVisits] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    const db = getDatabase();

    console.log("Connected to Firebase ✔");

    // Track total visits
    const totalRef = ref(db, "visits/total");
    set(totalRef, increment(1));

    // Track active visitors
    const myConnectionRef = ref(db, `visits/active/${Date.now()}`);
    set(myConnectionRef, true);

    // Remove user when they disconnect
    onDisconnect(myConnectionRef).remove();

    // LIVE LISTENERS
    const activeRef = ref(db, "visits/active");
    const totalVisitsRef = ref(db, "visits/total");

    // Active users listener
    onValue(activeRef, (snap) => {
      const data = snap.val();
      const count = data ? Object.keys(data).length : 0;
      setActiveUsers(count);
    });

    // Total visits listener
    onValue(totalVisitsRef, (snap) => {
      setTotalVisits(snap.val() || 0);
    });

  }, []);

  return { totalVisits, activeUsers };
}
