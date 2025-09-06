# Portfolio Website - Complete Full-Stack Application

## Overview
This is a complete full-stack portfolio website built with React frontend, Spring Boot backend, and MongoDB database. The application showcases personal information, projects, skills, achievements, travels, and hackathons in an interactive and responsive interface.

## Architecture

### Frontend (React + Vite)
- **Framework**: React 18 with Vite for fast development
- **Styling**: Tailwind CSS for responsive design
- **UI Components**: Material-UI for enhanced user interface
- **State Management**: React hooks for local state management
- **API Integration**: Axios for HTTP requests with interceptors
- **Routing**: React Router for single-page application navigation

### Backend (Spring Boot)
- **Framework**: Spring Boot 3.5.4
- **Architecture**: MVC (Model-View-Controller) pattern
- **Database**: MongoDB with Spring Data MongoDB
- **API**: RESTful API with CORS configuration
- **Data Initialization**: Automatic sample data seeding
- **Build Tool**: Maven with wrapper

### Database (MongoDB Atlas)
- **Type**: NoSQL document database
- **Hosting**: MongoDB Atlas cloud service
- **Connection**: Secure connection string with authentication
- **Collections**: Portfolio data with nested documents

## Project Structure

```
portfolio-website/
├── backend/                    # Spring Boot backend
│   ├── src/main/java/com/utsingh/portfolio/
│   │   ├── PortfolioApplication.java
│   │   ├── config/
│   │   │   └── WebConfig.java
│   │   ├── controller/
│   │   │   └── PortfolioController.java
│   │   ├── model/
│   │   │   └── Portfolio.java
│   │   ├── repository/
│   │   │   └── PortfolioRepository.java
│   │   └── service/
│   │       ├── PortfolioService.java
│   │       └── DataInitializationService.java
│   ├── src/main/resources/
│   │   └── application.properties
│   ├── pom.xml
│   ├── Procfile                # Heroku deployment
│   └── system.properties       # Java version for Heroku
├── frontend/                   # React frontend
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/             # Page components
│   │   ├── utils/
│   │   │   └── api.js         # API integration
│   │   └── data/
│   │       └── placeholder.js  # Fallback data
│   ├── public/
│   │   └── _redirects         # Vercel routing
│   ├── package.json
│   └── vite.config.js
├── README.md
├── DEPLOYMENT.md
└── FINAL_DOCUMENTATION.md
```

## Features

### Frontend Features
1. **Responsive Design**: Mobile-first approach with Tailwind CSS
2. **Interactive Navigation**: Smooth scrolling and section-based navigation
3. **Dynamic Content**: Data fetched from backend API
4. **Fallback System**: Graceful degradation to placeholder data
5. **Modern UI**: Clean, professional design with animations
6. **SEO Friendly**: Proper meta tags and semantic HTML

### Backend Features
1. **RESTful API**: Complete CRUD operations for portfolio data
2. **Data Validation**: Input validation and error handling
3. **CORS Configuration**: Proper cross-origin resource sharing
4. **Auto-initialization**: Sample data seeding on startup
5. **MongoDB Integration**: Efficient NoSQL data operations
6. **Modular Architecture**: Clean separation of concerns

### Database Schema
```javascript
Portfolio {
  id: ObjectId,
  personalInfo: {
    name: String,
    title: String,
    email: String,
    location: String,
    bio: String,
    profileImage: String,
    socialLinks: [String]
  },
  projects: [{
    id: String,
    title: String,
    description: String,
    category: String,
    technologies: [String],
    githubUrl: String,
    liveUrl: String,
    imageUrl: String
  }],
  skills: [{
    id: String,
    name: String,
    category: String,
    proficiency: String,
    description: String
  }],
  achievements: [{
    id: String,
    title: String,
    organization: String,
    date: String,
    category: String,
    description: String
  }],
  experiences: [{
    id: String,
    title: String,
    company: String,
    startDate: String,
    endDate: String,
    description: String,
    technologies: [String]
  }],
  education: [{
    id: String,
    degree: String,
    institution: String,
    startDate: String,
    endDate: String,
    description: String
  }],
  travels: [{
    id: String,
    destination: String,
    country: String,
    date: String,
    description: String,
    images: [String],
    highlights: [String]
  }],
  hackathons: [{
    id: String,
    name: String,
    date: String,
    location: String,
    projectTitle: String,
    projectDescription: String,
    technologies: [String],
    result: String,
    githubUrl: String,
    presentationUrl: String
  }]
}
```

## API Endpoints

### Portfolio Management
- `GET /api/portfolio` - Get all portfolios
- `GET /api/portfolio/{id}` - Get portfolio by ID
- `POST /api/portfolio` - Create new portfolio
- `PUT /api/portfolio/{id}` - Update portfolio
- `DELETE /api/portfolio/{id}` - Delete portfolio

### Section Management
- `POST /api/portfolio/{id}/projects` - Add project
- `PUT /api/portfolio/{id}/projects/{projectId}` - Update project
- `DELETE /api/portfolio/{id}/projects/{projectId}` - Delete project
- `POST /api/portfolio/{id}/skills` - Add skill
- `PUT /api/portfolio/{id}/skills/{skillId}` - Update skill
- `DELETE /api/portfolio/{id}/skills/{skillId}` - Delete skill
- Similar endpoints for achievements, experiences, education, travels, hackathons

## Development Setup

### Prerequisites
- Node.js 18+ and npm
- Java 17+
- Maven 3.6+
- MongoDB Atlas account

### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd portfolio-website/backend
   ```

2. Configure MongoDB connection in `application.properties`:
   ```properties
   spring.data.mongodb.uri=mongodb+srv://username:password@cluster.mongodb.net/portfolio
   ```

3. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```

4. Backend will be available at `http://localhost:8080`

### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd portfolio-website/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Frontend will be available at `http://localhost:5173`

## Deployment

### Backend Deployment (Heroku)
1. Create Heroku app:
   ```bash
   heroku create your-app-name
   ```

2. Set environment variables:
   ```bash
   heroku config:set SPRING_DATA_MONGODB_URI="your-mongodb-connection-string"
   ```

3. Deploy using git subtree:
   ```bash
   git subtree push --prefix=backend heroku main
   ```

### Frontend Deployment (Vercel)
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy from frontend directory:
   ```bash
   cd frontend
   vercel --prod
   ```

3. Update API endpoints in `src/utils/api.js` to point to deployed backend

## Configuration Files

### Backend Configuration
- `Procfile`: Heroku process definition
- `system.properties`: Java version specification
- `application.properties`: Spring Boot configuration

### Frontend Configuration
- `_redirects`: Vercel routing for SPA
- `vite.config.js`: Vite build configuration
- `tailwind.config.js`: Tailwind CSS configuration

## Data Flow

1. **Frontend Request**: User interacts with React components
2. **API Call**: Frontend makes HTTP request via Axios
3. **Backend Processing**: Spring Boot controller handles request
4. **Service Layer**: Business logic processed in service layer
5. **Database Operation**: MongoDB operations via Spring Data
6. **Response**: Data returned through the same chain
7. **UI Update**: React components re-render with new data

## Error Handling

### Frontend
- API request interceptors for error logging
- Graceful fallback to placeholder data
- User-friendly error messages
- Loading states and error boundaries

### Backend
- Global exception handling
- Input validation with meaningful error messages
- CORS configuration for cross-origin requests
- Proper HTTP status codes

## Security Considerations

1. **CORS Configuration**: Properly configured for production domains
2. **Environment Variables**: Sensitive data stored in environment variables
3. **Input Validation**: Server-side validation for all inputs
4. **MongoDB Security**: Connection string with authentication
5. **HTTPS**: Enforced in production deployments

## Performance Optimizations

### Frontend
- Vite for fast development and optimized builds
- Lazy loading of components
- Efficient re-rendering with React hooks
- Optimized images and assets

### Backend
- Connection pooling for MongoDB
- Efficient queries with Spring Data MongoDB
- Proper indexing in database
- Caching strategies where applicable

## Testing Strategy

### Frontend Testing
- Component testing with React Testing Library
- Integration testing for API calls
- E2E testing with Cypress (recommended)

### Backend Testing
- Unit tests for service layer
- Integration tests for controllers
- Repository tests with embedded MongoDB

## Monitoring and Logging

### Frontend
- Console logging for development
- Error tracking with interceptors
- Performance monitoring

### Backend
- Spring Boot Actuator for health checks
- Structured logging with SLF4J
- Application metrics and monitoring

## Future Enhancements

1. **Authentication**: User login and admin panel
2. **Content Management**: Dynamic content editing
3. **Analytics**: User interaction tracking
4. **SEO**: Server-side rendering with Next.js
5. **PWA**: Progressive Web App features
6. **Internationalization**: Multi-language support
7. **Real-time Updates**: WebSocket integration
8. **Image Upload**: File upload functionality
9. **Search**: Full-text search capabilities
10. **Comments**: User feedback system

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Check WebConfig.java CORS configuration
   - Verify frontend API base URL

2. **Database Connection**
   - Verify MongoDB connection string
   - Check network access in MongoDB Atlas

3. **Build Failures**
   - Ensure Java 17 is installed
   - Check Maven wrapper files exist

4. **API Not Found**
   - Verify backend is running on correct port
   - Check API endpoint URLs in frontend

### Development Tips

1. Use browser developer tools for debugging
2. Check backend logs for error details
3. Verify environment variables are set correctly
4. Test API endpoints with tools like Postman
5. Use React Developer Tools for component debugging

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact:
- Email: uttams2309@gmail.com
- GitHub: https://github.com/uttams2309
- LinkedIn: [Your LinkedIn Profile]

---

**Note**: This documentation provides a comprehensive overview of the portfolio website application. For specific implementation details, refer to the code comments and individual component documentation.
