# firebase-todos — Chapter 11 companion source

The chapter 9/10 hooks to-do app, now with Firebase Authentication (email + password)
and Cloud Firestore (one `todos` collection, each document stamped with the owner's uid).

## Run against your own Firebase project
1. Copy `.env.example` to `.env.local` and paste your web app's config values.
2. Set `VITE_USE_EMULATORS=false`.
3. Paste `firestore.rules` into Firestore > Rules in the console and click Publish.
4. `npm install` then `npm run dev` and open http://localhost:5173

## Run fully offline with the Firebase Emulator Suite (needs Java 21+)
1. Copy `.env.example` to `.env.local` and leave `VITE_USE_EMULATORS=true`.
2. Terminal 1: `npx firebase emulators:start --project demo-todos`
3. Terminal 2: `npm run dev`
4. Emulator UI: http://127.0.0.1:4000
