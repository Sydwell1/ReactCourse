# Beginning React with Hooks: chapter 10, routing (Vite)

The chapter 7 GitHub search project with routing added: a navbar (Home, GitHub), a route for each view, a `/github/user/:login/:id` route that shows one user, and a button that navigates back in code.

```
npm install
npm run dev
```

Open http://localhost:5173. Needs Node.js 20.19 or newer (or 22.12+) and an internet connection. GitHub allows only about 10 searches a minute per address without a login.

Files that changed from the start project: `src/App.jsx` (the router, navbar and routes), `src/GitHub.jsx` (the avatar is now a `Link`) and the new `src/GitHubUser.jsx`. `react-router` was added with `npm install react-router`.
