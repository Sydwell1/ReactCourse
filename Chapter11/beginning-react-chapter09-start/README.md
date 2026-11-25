# Beginning React: chapter 9 (CRUD with Firebase) starting point

A Create React App project with everything the book's chapter 9 needs already
installed, so you can follow the book from section 9.2 onward.

    npm install
    npm start          (opens http://localhost:3000)

## What is different from the book's text

1. Do NOT run `npm install firebase`, `react-router-dom` or `formik`. They are
   already in package.json with versions that work with the book's code
   (react-router-dom 5, react-bootstrap 1.6.7, firebase 11 with the "compat" API).
2. The book writes `import * as firebase from 'firebase'`. That no longer works.
   Use these two lines instead (already in this project):

       import firebase from 'firebase/compat/app';
       import 'firebase/compat/database';

   Everything else in the book's Firebase code (firebase.database().ref(...),
   .on('value', ...), push, update, remove) is unchanged.
3. Bootstrap's CSS is imported in src/index.js already (book section 9.4).
4. UserForm.js is included as the book's section 9.5 listing (the book tells you
   to copy it from GitHub). You change it again in sections 9.7 and 9.8.

## Firebase console (do this once, with your own Google account)

1. Create a Firebase project, then add a Web app to it (the </> icon).
2. Copy the config values into `firebaseConfig` in src/index.js.
3. In the console, open the Realtime Database (NOT Cloud Firestore), create the
   database and start it in test mode. Menu names change from time to time; look
   for "Realtime Database".
4. Copy the database URL it shows into `databaseURL` in src/index.js.
5. Import users.json (in this folder) at the root of the database, using the
   three-dot menu > Import JSON.
6. Rules (book section 9.4): `.read` and `.write` set to `true`, then Publish.

The public rules let anyone read and write your database. That is fine for a
class exercise with a throw-away project, but delete the project afterwards and
never use these rules for real data.

Finished code for comparison: beginning-react-chapter09.zip
