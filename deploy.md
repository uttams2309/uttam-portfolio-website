# Quick Deployment Guide

## Prerequisites
- Heroku CLI installed
- Vercel CLI installed (optional)
- GitHub account

## Step 1: Deploy Backend to Heroku

1. **Login to Heroku**
   ```bash
   heroku login
   ```

2. **Create Heroku App**
   ```bash
   cd portfolio-website
   heroku create uttam-portfolio-backend
   ```

3. **Set Environment Variables**
   ```bash
   heroku config:set MONGODB_URI="mongodb+srv://uttams2309:Using%402309@portfolio-dev-db.tpykk4o.mongodb.net/"
   heroku config:set MONGODB_DATABASE="portfolio"
   ```

4. **Deploy Backend**
   ```bash
   git subtree push --prefix=backend heroku main
   ```

## Step 2: Deploy Frontend to Vercel

1. **Install Vercel CLI** (if not installed)
   ```bash
   npm i -g vercel
   ```

2. **Update API URL in frontend**
   - Edit `frontend/src/utils/api.js`
   - Replace the production API URL with your Heroku app URL:
   ```javascript
   const API_BASE_URL = import.meta.env.MODE === 'development' 
     ? 'http://localhost:8080/api' 
     : 'https://uttam-portfolio-backend.herokuapp.com/api';
   ```

3. **Deploy Frontend**
   ```bash
   cd frontend
   vercel
   ```

## Step 3: Alternative - Deploy via GitHub

1. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/portfolio-website.git
   git push -u origin main
   ```

2. **Deploy Backend via Heroku Dashboard**
   - Go to heroku.com
   - Create new app
   - Connect to GitHub repository
   - Set build path to `backend/`
   - Add environment variables

3. **Deploy Frontend via Vercel Dashboard**
   - Go to vercel.com
   - Import GitHub repository
   - Set build path to `frontend/`
   - Deploy

## Environment Variables Needed

### Backend (Heroku)
- `MONGODB_URI`: Your MongoDB connection string
- `MONGODB_DATABASE`: portfolio
- `PORT`: 8080 (automatically set by Heroku)

### Frontend (Vercel)
- `VITE_API_BASE_URL`: Your Heroku backend URL

## Testing Deployment

1. **Test Backend**
   ```bash
   curl https://your-heroku-app.herokuapp.com/api/portfolio/health
   ```

2. **Test Frontend**
   - Visit your Vercel URL
   - Check if data loads from backend
   - Test all pages and navigation

## Troubleshooting

### Backend Issues
- Check Heroku logs: `heroku logs --tail`
- Verify MongoDB connection
- Ensure Java 17 is specified in system.properties

### Frontend Issues
- Check build logs in Vercel dashboard
- Verify API URL is correct
- Check CORS configuration in backend

## Post-Deployment

1. **Custom Domain** (Optional)
   - Add custom domain in Vercel
   - Update CORS settings in backend

2. **Monitoring**
   - Set up Heroku monitoring
   - Configure error tracking

3. **Updates**
   - Push to GitHub
   - Automatic deployments will trigger
