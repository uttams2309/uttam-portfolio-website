# Portfolio Website - Full Stack Application

A modern, responsive portfolio website built with React frontend, Spring Boot backend, and MongoDB database.

## 🚀 Features

- **Modern React Frontend**: Built with Vite, Tailwind CSS, and Material-UI
- **Spring Boot Backend**: RESTful API with proper MVC architecture
- **MongoDB Integration**: Cloud-hosted MongoDB Atlas database
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Real-time Data**: Dynamic content loaded from database
- **Comprehensive Sections**: About, Development, Achievements, Travel, Hackathons, and more

## 🏗️ Architecture

### Frontend (React)
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS + Material-UI
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Icons**: React Icons
- **Animations**: Framer Motion

### Backend (Spring Boot)
- **Framework**: Spring Boot 3.5.4
- **Database**: Spring Data MongoDB
- **Architecture**: MVC Pattern
- **API**: RESTful endpoints
- **CORS**: Configured for frontend integration

### Database (MongoDB)
- **Hosting**: MongoDB Atlas
- **Collections**: Portfolio data with nested documents
- **Connection**: Secure connection string with authentication

## 📁 Project Structure

```
personal portfolio website/
├── backend/
│   └── portfolio/
│       ├── src/main/java/com/utsingh/portfolio/
│       │   ├── PortfolioApplication.java
│       │   ├── config/
│       │   │   └── WebConfig.java
│       │   ├── controller/
│       │   │   └── PortfolioController.java
│       │   ├── model/
│       │   │   └── Portfolio.java
│       │   ├── repository/
│       │   │   └── PortfolioRepository.java
│       │   └── service/
│       │       ├── PortfolioService.java
│       │       └── DataInitializationService.java
│       ├── src/main/resources/
│       │   └── application.properties
│       └── pom.xml
└── frontend/
    └── react_template/
        ├── src/
        │   ├── components/
        │   ├── pages/
        │   ├── data/
        │   ├── utils/
        │   │   └── api.js
        │   ├── App.jsx
        │   └── main.jsx
        ├── package.json
        └── vite.config.js
```

## 🛠️ Installation & Setup

### Prerequisites
- Java 17 or higher
- Node.js 16 or higher
- npm or pnpm
- MongoDB Atlas account (or local MongoDB)

### Backend Setup

1. **Navigate to backend directory**:
   ```bash
   cd "personal portfolio website/backend/portfolio"
   ```

2. **Configure MongoDB connection**:
   - Update `src/main/resources/application.properties`
   - Set your MongoDB connection string

3. **Run the Spring Boot application**:
   ```bash
   ./mvnw spring-boot:run
   ```
   
   The backend will start on `http://localhost:8080`

### Frontend Setup

1. **Navigate to frontend directory**:
   ```bash
   cd "personal portfolio website/frontend/react_template"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   
   The frontend will start on `http://localhost:5173`

## 🔧 Configuration

### MongoDB Connection
Update the connection string in `application.properties`:
```properties
spring.data.mongodb.uri=mongodb+srv://username:password@cluster.mongodb.net/
spring.data.mongodb.database=portfolio
```

### CORS Configuration
The backend is configured to allow requests from:
- `http://localhost:5173` (Vite dev server)
- `http://localhost:3000` (Alternative React dev server)

### Environment Variables
For production deployment, consider using environment variables:
- `MONGODB_URI`: MongoDB connection string
- `MONGODB_DATABASE`: Database name
- `SERVER_PORT`: Backend server port

## 📊 API Endpoints

### Portfolio Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/portfolio` | Get all portfolios |
| GET | `/api/portfolio/{id}` | Get portfolio by ID |
| GET | `/api/portfolio/name/{name}` | Get portfolio by name |
| POST | `/api/portfolio` | Create new portfolio |
| PUT | `/api/portfolio/{id}` | Update portfolio |
| DELETE | `/api/portfolio/{id}` | Delete portfolio |

### Section-specific Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/portfolio/{id}/projects` | Add project |
| POST | `/api/portfolio/{id}/skills` | Add skill |
| POST | `/api/portfolio/{id}/achievements` | Add achievement |
| POST | `/api/portfolio/{id}/experiences` | Add experience |
| POST | `/api/portfolio/{id}/education` | Add education |
| POST | `/api/portfolio/{id}/travels` | Add travel |
| POST | `/api/portfolio/{id}/hackathons` | Add hackathon |

### Utility Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/portfolio/exists/{email}` | Check if portfolio exists |
| GET | `/api/portfolio/health` | Health check |

## 🗄️ Database Schema

### Portfolio Document Structure

```javascript
{
  "_id": "ObjectId",
  "personalInfo": {
    "name": "String",
    "title": "String",
    "email": "String",
    "phone": "String",
    "location": "String",
    "bio": "String",
    "profileImage": "String",
    "socialLinks": ["String"],
    "resume": "String"
  },
  "projects": [{
    "id": "String",
    "title": "String",
    "description": "String",
    "technologies": ["String"],
    "githubUrl": "String",
    "liveUrl": "String",
    "imageUrl": "String",
    "category": "String",
    "status": "String",
    "startDate": "String",
    "endDate": "String",
    "features": ["String"]
  }],
  "skills": [{
    "id": "String",
    "name": "String",
    "category": "String",
    "proficiency": "Number",
    "icon": "String",
    "description": "String",
    "projects": ["String"]
  }],
  "achievements": [{
    "id": "String",
    "title": "String",
    "description": "String",
    "date": "String",
    "organization": "String",
    "certificateUrl": "String",
    "imageUrl": "String",
    "category": "String",
    "skills": ["String"]
  }],
  "experiences": [{
    "id": "String",
    "company": "String",
    "position": "String",
    "description": "String",
    "startDate": "String",
    "endDate": "String",
    "location": "String",
    "responsibilities": ["String"],
    "technologies": ["String"],
    "companyLogo": "String"
  }],
  "education": [{
    "id": "String",
    "institution": "String",
    "degree": "String",
    "field": "String",
    "startDate": "String",
    "endDate": "String",
    "grade": "String",
    "description": "String",
    "courses": ["String"],
    "logo": "String"
  }],
  "travels": [{
    "id": "String",
    "destination": "String",
    "country": "String",
    "description": "String",
    "date": "String",
    "images": ["String"],
    "highlights": ["String"],
    "duration": "String"
  }],
  "hackathons": [{
    "id": "String",
    "name": "String",
    "description": "String",
    "date": "String",
    "location": "String",
    "result": "String",
    "projectTitle": "String",
    "projectDescription": "String",
    "technologies": ["String"],
    "githubUrl": "String",
    "presentationUrl": "String",
    "teamMembers": ["String"]
  }],
  "additionalData": {
    "theme": "String",
    "lastUpdated": "String",
    "version": "String"
  }
}
```

## 🚀 Deployment

### Backend Deployment (Spring Boot)

1. **Build the application**:
   ```bash
   ./mvnw clean package
   ```

2. **Run the JAR file**:
   ```bash
   java -jar target/portfolio-0.0.1-SNAPSHOT.jar
   ```

3. **Environment Variables for Production**:
   ```bash
   export MONGODB_URI="your-production-mongodb-uri"
   export SERVER_PORT=8080
   ```

### Frontend Deployment (React)

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service (Netlify, Vercel, etc.)

3. **Update API base URL** for production in `src/utils/api.js`

### Hosting Recommendations

**Backend:**
- Heroku
- Railway
- AWS Elastic Beanstalk
- Google Cloud Run
- DigitalOcean App Platform

**Frontend:**
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

**Database:**
- MongoDB Atlas (recommended)
- AWS DocumentDB
- Google Cloud Firestore

## 🔍 Testing

### Backend Testing
```bash
cd "personal portfolio website/backend/portfolio"
./mvnw test
```

### Frontend Testing
```bash
cd "personal portfolio website/frontend/react_template"
npm run test
```

### API Testing
Use tools like Postman or curl to test the API endpoints:

```bash
# Get all portfolios
curl http://localhost:8080/api/portfolio

# Health check
curl http://localhost:8080/api/portfolio/health
```

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Failed**
   - Check your connection string
   - Verify network access in MongoDB Atlas
   - Ensure correct username/password

2. **CORS Errors**
   - Verify CORS configuration in `WebConfig.java`
   - Check if frontend URL is in allowed origins

3. **Port Conflicts**
   - Backend default: 8080
   - Frontend default: 5173
   - Change ports in configuration if needed

4. **Build Errors**
   - Ensure Java 17+ for backend
   - Ensure Node.js 16+ for frontend
   - Clear npm cache: `npm cache clean --force`

## 📝 Development Notes

### Data Transformation
The frontend expects a different data structure than what's stored in MongoDB. The `transformPortfolioData` function in `api.js` handles this mapping.

### Auto-initialization
The `DataInitializationService` automatically populates the database with sample data on first run.

### Hot Reload
Both frontend (Vite) and backend (Spring Boot DevTools) support hot reload during development.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Uttam Singh**
- Email: uttams2309@gmail.com
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

---

## 🎯 Next Steps

- [ ] Add authentication and authorization
- [ ] Implement admin panel for content management
- [ ] Add image upload functionality
- [ ] Implement search and filtering
- [ ] Add analytics and monitoring
- [ ] Set up CI/CD pipeline
- [ ] Add comprehensive testing
- [ ] Implement caching strategies
- [ ] Add email contact form
- [ ] SEO optimization
