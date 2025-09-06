# Deployment Guide - Portfolio Website

This guide provides step-by-step instructions for deploying your portfolio website to various hosting platforms.

## 🌐 Deployment Options

### Option 1: Netlify (Frontend) + Railway (Backend)
**Recommended for beginners**

### Option 2: Vercel (Frontend) + Heroku (Backend)
**Popular choice with good free tiers**

### Option 3: AWS (Full Stack)
**Enterprise-grade solution**

---

## 🚀 Option 1: Netlify + Railway Deployment

### Step 1: Deploy Backend to Railway

1. **Create Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your repository

3. **Configure Environment Variables**
   ```
   MONGODB_URI=mongodb+srv://uttams2309:Using%402309@portfolio-dev-db.tpykk4o.mongodb.net/
   MONGODB_DATABASE=portfolio
   PORT=8080
   ```

4. **Configure Build Settings**
   - Root Directory: `personal portfolio website/backend/portfolio`
   - Build Command: `./mvnw clean package -DskipTests`
   - Start Command: `java -jar target/portfolio-0.0.1-SNAPSHOT.jar`

5. **Deploy**
   - Railway will automatically deploy
   - Note your backend URL (e.g., `https://your-app.railway.app`)

### Step 2: Deploy Frontend to Netlify

1. **Update API Configuration**
   - Edit `frontend/react_template/src/utils/api.js`
   - Update production API URL:
   ```javascript
   const API_BASE_URL = import.meta.env.MODE === 'development' 
     ? 'http://localhost:8080/api' 
     : 'https://your-railway-app.railway.app/api';
   ```

2. **Build for Production**
   ```bash
   cd "personal portfolio website/frontend/react_template"
   npm run build
   ```

3. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect GitHub repository

4. **Configure Netlify**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Base directory: `personal portfolio website/frontend/react_template`

---

## 🚀 Option 2: Vercel + Heroku Deployment

### Step 1: Deploy Backend to Heroku

1. **Install Heroku CLI**
   ```bash
   # macOS
   brew tap heroku/brew && brew install heroku
   
   # Windows
   # Download from heroku.com/cli
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku App**
   ```bash
   cd "personal portfolio website/backend/portfolio"
   heroku create your-portfolio-backend
   ```

4. **Set Environment Variables**
   ```bash
   heroku config:set MONGODB_URI="mongodb+srv://uttams2309:Using%402309@portfolio-dev-db.tpykk4o.mongodb.net/"
   heroku config:set MONGODB_DATABASE="portfolio"
   ```

5. **Create Procfile**
   ```bash
   echo "web: java -jar target/portfolio-0.0.1-SNAPSHOT.jar" > Procfile
   ```

6. **Deploy**
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

### Step 2: Deploy Frontend to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Update API Configuration**
   ```javascript
   const API_BASE_URL = import.meta.env.MODE === 'development' 
     ? 'http://localhost:8080/api' 
     : 'https://your-portfolio-backend.herokuapp.com/api';
   ```

3. **Deploy**
   ```bash
   cd "personal portfolio website/frontend/react_template"
   vercel
   ```

4. **Configure Vercel**
   - Follow the prompts
   - Set build command: `npm run build`
   - Set output directory: `dist`

---

## 🚀 Option 3: AWS Full Stack Deployment

### Step 1: Backend on AWS Elastic Beanstalk

1. **Install AWS CLI**
   ```bash
   # macOS
   brew install awscli
   
   # Configure
   aws configure
   ```

2. **Install EB CLI**
   ```bash
   pip install awsebcli
   ```

3. **Initialize EB Application**
   ```bash
   cd "personal portfolio website/backend/portfolio"
   eb init
   ```

4. **Create Environment**
   ```bash
   eb create production
   ```

5. **Set Environment Variables**
   ```bash
   eb setenv MONGODB_URI="your-mongodb-uri"
   eb setenv MONGODB_DATABASE="portfolio"
   ```

6. **Deploy**
   ```bash
   eb deploy
   ```

### Step 2: Frontend on AWS S3 + CloudFront

1. **Build for Production**
   ```bash
   cd "personal portfolio website/frontend/react_template"
   npm run build
   ```

2. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://your-portfolio-website
   ```

3. **Upload Files**
   ```bash
   aws s3 sync dist/ s3://your-portfolio-website
   ```

4. **Configure S3 for Static Hosting**
   ```bash
   aws s3 website s3://your-portfolio-website --index-document index.html
   ```

5. **Set Up CloudFront** (Optional)
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure custom domain

---

## 🔧 Production Configuration

### Backend Production Settings

1. **Update application.properties for Production**
   ```properties
   # Use environment variables
   spring.data.mongodb.uri=${MONGODB_URI}
   spring.data.mongodb.database=${MONGODB_DATABASE:portfolio}
   server.port=${PORT:8080}
   
   # Production settings
   spring.profiles.active=production
   logging.level.root=WARN
   logging.level.com.utsingh.portfolio=INFO
   
   # CORS for production
   spring.web.cors.allowed-origins=${FRONTEND_URL:https://your-frontend-domain.com}
   ```

2. **Create application-production.properties**
   ```properties
   # Disable debug logging
   logging.level.org.springframework.data.mongodb=WARN
   
   # Enable compression
   server.compression.enabled=true
   server.compression.mime-types=application/json,application/xml,text/html,text/xml,text/plain
   ```

### Frontend Production Settings

1. **Environment Variables**
   Create `.env.production`:
   ```
   VITE_API_BASE_URL=https://your-backend-domain.com/api
   ```

2. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     build: {
       outDir: 'dist',
       sourcemap: false,
       minify: 'terser',
       rollupOptions: {
         output: {
           manualChunks: {
             vendor: ['react', 'react-dom'],
             router: ['react-router-dom'],
             ui: ['@mui/material', '@emotion/react', '@emotion/styled']
           }
         }
       }
     }
   })
   ```

---

## 🔒 Security Considerations

### Backend Security

1. **Environment Variables**
   - Never commit sensitive data
   - Use platform-specific environment variable management

2. **CORS Configuration**
   ```java
   @Override
   public void addCorsMappings(CorsRegistry registry) {
       registry.addMapping("/api/**")
               .allowedOrigins(System.getenv("FRONTEND_URL"))
               .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
               .allowedHeaders("*")
               .allowCredentials(true);
   }
   ```

3. **MongoDB Security**
   - Use MongoDB Atlas with IP whitelisting
   - Enable authentication
   - Use connection string with credentials

### Frontend Security

1. **API Keys**
   - Use environment variables for any API keys
   - Prefix with `VITE_` for Vite to include them

2. **Content Security Policy**
   Add to `index.html`:
   ```html
   <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;">
   ```

---

## 📊 Monitoring and Analytics

### Backend Monitoring

1. **Health Check Endpoint**
   Already implemented: `/api/portfolio/health`

2. **Application Metrics**
   Add to `pom.xml`:
   ```xml
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-actuator</artifactId>
   </dependency>
   ```

3. **Logging**
   Configure structured logging for production

### Frontend Analytics

1. **Google Analytics**
   ```javascript
   // Add to index.html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

---

## 🚨 Troubleshooting Deployment Issues

### Common Backend Issues

1. **Port Binding Error**
   ```bash
   # Ensure PORT environment variable is set
   export PORT=8080
   ```

2. **MongoDB Connection Timeout**
   - Check MongoDB Atlas network access
   - Verify connection string format
   - Ensure database user has proper permissions

3. **Build Failures**
   ```bash
   # Clear Maven cache
   ./mvnw clean
   
   # Skip tests if needed
   ./mvnw clean package -DskipTests
   ```

### Common Frontend Issues

1. **API Connection Errors**
   - Verify backend URL is correct
   - Check CORS configuration
   - Ensure backend is running

2. **Build Failures**
   ```bash
   # Clear npm cache
   npm cache clean --force
   
   # Delete node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Routing Issues on Production**
   Add `_redirects` file to `public` folder:
   ```
   /*    /index.html   200
   ```

---

## 📈 Performance Optimization

### Backend Optimization

1. **Database Indexing**
   ```javascript
   // Add indexes in MongoDB
   db.portfolio.createIndex({"personalInfo.email": 1})
   db.portfolio.createIndex({"personalInfo.name": 1})
   ```

2. **Caching**
   Add Redis caching:
   ```xml
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-data-redis</artifactId>
   </dependency>
   ```

### Frontend Optimization

1. **Code Splitting**
   Already configured in Vite build

2. **Image Optimization**
   - Use WebP format
   - Implement lazy loading
   - Use CDN for images

3. **Bundle Analysis**
   ```bash
   npm run build -- --analyze
   ```

---

## ✅ Deployment Checklist

### Pre-deployment
- [ ] Update API URLs for production
- [ ] Set environment variables
- [ ] Test locally with production build
- [ ] Update CORS configuration
- [ ] Verify MongoDB connection

### Backend Deployment
- [ ] Build application successfully
- [ ] Deploy to hosting platform
- [ ] Verify health check endpoint
- [ ] Test API endpoints
- [ ] Check logs for errors

### Frontend Deployment
- [ ] Build for production
- [ ] Deploy to hosting platform
- [ ] Test all pages load correctly
- [ ] Verify API integration works
- [ ] Test responsive design

### Post-deployment
- [ ] Set up monitoring
- [ ] Configure analytics
- [ ] Test from different devices
- [ ] Set up backup strategy
- [ ] Document deployment process

---

## 🎯 Next Steps After Deployment

1. **Custom Domain**
   - Purchase domain name
   - Configure DNS settings
   - Set up SSL certificate

2. **CI/CD Pipeline**
   - Set up GitHub Actions
   - Automate testing and deployment
   - Configure staging environment

3. **Monitoring**
   - Set up error tracking (Sentry)
   - Configure uptime monitoring
   - Set up performance monitoring

4. **SEO Optimization**
   - Add meta tags
   - Configure sitemap
   - Implement structured data

5. **Security Enhancements**
   - Set up rate limiting
   - Implement authentication
   - Add input validation

---

**Need Help?**
- Check the main README.md for troubleshooting
- Review platform-specific documentation
- Test locally before deploying to production
