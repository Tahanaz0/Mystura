// firebase-messaging-sw.js

importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyB28hsrV1kpqM8I3hT3B6rTEhpwg0ClcRs",
  authDomain: "mystura-36340.firebaseapp.com",
  projectId: "mystura-36340",
  storageBucket: "mystura-36340.firebasestorage.app",
  messagingSenderId: "174901325860",
  appId: "1:174901325860:web:4c4c3b0e2d75383360a8b1",
  measurementId: "G-LKVX7BSBPN"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
  });
});
