PlacementHub - Quick Deploy notes

1) Create a MongoDB Atlas free cluster and obtain MONGO_URI. Replace in backend/.env or set in Render/Vercel env.

2) Push code to GitHub.

3) Deploy backend:
   - Use Render: New -> Web Service -> Connect repo -> choose backend folder -> build: npm install && npm run build? (not needed) start: npm start
   See Render docs: https://render.com/docs/deploy-node-express-app

4) Deploy frontend:
   - Use Vercel: Import repo, point to frontend folder, build command: npm run build, output: build
   See Vercel docs: https://vercel.com/guides/deploying-react-with-vercel

5) Set environment vars on the hosting platform (MONGO_URI, JWT_SECRET, SMTP_*).

