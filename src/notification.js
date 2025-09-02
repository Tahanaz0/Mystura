import { messaging } from "./firebase";
import { getToken, onMessage } from "firebase/messaging";

export const requestForToken = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: "BIaliax-_dW6Kr3jpw-6oe-CS250Fyan-VxXgzPGQVcGyXga3hIsPaRR4-xcZwASFW5FrVklGM_5peP1Hh_k82Q"
    });
    if (token) {
      console.log("FCM Token:", token);
      return token;
    } else {
      console.log("No registration token available.");
    }
  } catch (error) {
    console.error("An error occurred while retrieving token. ", error);
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
