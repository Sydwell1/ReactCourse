# Beginning React with Hooks: chapter 11, starting point (Vite)

This is the to-do app from chapter 9 (Context, `useReducer`, Axios and json-server), plus the Firebase setup files the modern version of chapter 11 needs:

- `.env.example`: copy it to `.env.local` and fill in your Firebase values
- `firebase.json` and `.firebaserc`: settings for the local Firebase Emulator Suite
- `firestore.rules`: the security rules to publish in the Firebase console

```
npm install
npm install firebase
npm install -D firebase-tools      (only if you use the local emulators)
npm run dev
```

Open http://localhost:5173. Then follow the companion page: you replace json-server with Firebase Authentication and Cloud Firestore. Needs Node.js 20.19 or newer (or 22.12+). The emulators need Java 21 or newer.
