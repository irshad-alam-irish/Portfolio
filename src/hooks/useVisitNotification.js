import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

export const useVisitNotification = () => {
    useEffect(() => {
        const sendVisitNotification = async () => {
            // prevent duplicate emails in the same session
            if (sessionStorage.getItem('visit_notification_sent')) {
                return;
            }

            try {
                // 1. Fetch IP and location data
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();

                // 2. Detect browser name
                const ua = navigator.userAgent;
                let browserName = 'Unknown';
                if (ua.includes('Chrome')) browserName = 'Chrome';
                else if (ua.includes('Safari')) browserName = 'Safari';
                else if (ua.includes('Firefox')) browserName = 'Firefox';
                else if (ua.includes('Edge')) browserName = 'Edge';

                // 3. EmailJS credentials
                const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
                const templateId = import.meta.env.VITE_EMAILJS_VISIT_TEMPLATE_ID;
                const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

                if (serviceId && templateId && publicKey) {
                    // 4. Send the email
                    await emailjs.send(
                        serviceId,
                        templateId,
                        {
                            time: new Date().toLocaleString(),
                            location: `${data.city}, ${data.region}, ${data.country_name}`,
                            device: `${navigator.platform} (${data.org})`,
                            browser: browserName,
                            screen: `${window.screen.width}x${window.screen.height}`,
                            ip: data.ip
                        },
                        publicKey
                    );

                    console.log("Visit notification sent successfully!");

                    // prevent re-sending again in same session
                    sessionStorage.setItem('visit_notification_sent', 'true');
                } else {
                    console.warn("EmailJS keys missing for visit notification.");
                }

            } catch (error) {
                console.error("Failed to send visit notification:", error);
            }
        };

        sendVisitNotification();
    }, []);
};
