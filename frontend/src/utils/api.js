// src/utils/api.js
import axios from 'axios';
import defaultProfileImage from '../../public/assets/images/propic.jpeg'

// Base URL for our Spring Boot API
const API_BASE_URL = import.meta.env.MODE === 'development' 
  ? 'http://localhost:8080/api' 
  : 'https://portfolio-backend-uttam-60b57a60be26.herokuapp.com/api';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for logging
apiClient.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to: ${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    console.log(`Response received from: ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('Response error:', error);
    if (error.response) {
      console.error('Error status:', error.response.status);
      console.error('Error data:', error.response.data);
    }
    return Promise.reject(error);
  }
);

/**
 * Transform MongoDB portfolio data to frontend expected format
 * @param {Object} portfolioData - Raw portfolio data from MongoDB
 * @returns {Object} Transformed data matching frontend expectations
 */
const transformPortfolioData = (portfolioData) => {
  const { personalInfo, projects, skills, achievements, experiences, education, travels, hackathons } = portfolioData;
  
  return {
    about: {
      name: personalInfo?.name || "Unknown",
      title: personalInfo?.title || "Developer",
      email: personalInfo?.email || "",
      location: personalInfo?.location || "",
      linkedinUrl: personalInfo?.socialLinks?.[1] || "",
      githubUrl: personalInfo?.socialLinks?.[0] || "",
      profileImage: defaultProfileImage,
      summary: personalInfo?.bio || "",
      education: education?.map(edu => ({
        degree: edu.degree,
        institution: edu.institution,
        duration: `${edu.startDate} - ${edu.endDate}`,
        description: edu.description
      })) || [],
      skills: skills?.map(skill => ({
        name: skill.name,
        description: skill.description,
        level: skill.proficiency,
        category: skill.category
      })) || []
    },
    
    development: {
      introduction: "I specialize in building scalable, maintainable, and user-friendly applications using modern technologies and best practices.",
      skills: skills?.filter(skill => skill.category === 'Frontend' || skill.category === 'Backend' || skill.category === 'DevOps')
        .map(skill => ({
          name: skill.name,
          description: skill.description,
          level: skill.proficiency,
          category: skill.category.toLowerCase()
        })) || [],
      projects: projects?.filter(project => project.category === 'Web Development')
        .map(project => ({
          title: project.title,
          description: project.description,
          image: project.imageUrl || "https://via.placeholder.com/300",
          technologies: project.technologies || [],
          githubLink: project.githubUrl,
          demoLink: project.liveUrl
        })) || []
    },
    
    achievements: {
      introduction: "A collection of recognitions, awards, and milestones that mark my professional journey and accomplishments.",
      totalAwards: achievements?.filter(a => a.category === 'Competition').length || 0,
      totalCertifications: achievements?.filter(a => a.category === 'Certification').length || 0,
      totalPublications: 0,
      totalHonors: achievements?.length || 0,
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      quoteAuthor: "Albert Schweitzer",
      items: achievements?.map(achievement => ({
        title: achievement.title,
        organization: achievement.organization,
        date: achievement.date,
        description: achievement.description,
        type: achievement.category
      })) || []
    },
    
    travelling: {
      introduction: "Exploring new places, experiencing different cultures, and creating lasting memories through my travels around the world.",
      countriesVisited: travels?.map(travel => travel.country).filter((country, index, arr) => arr.indexOf(country) === index) || [],
      totalTrips: travels?.length || 0,
      favoriteDestinations: travels?.map(travel => travel.destination) || [],
      trips: travels?.map(travel => ({
        location: `${travel.destination}, ${travel.country}`,
        date: travel.date,
        description: travel.description,
        image: travel.images?.[0] || "https://via.placeholder.com/400x300",
        highlights: travel.highlights || []
      })) || [],
      philosophy: "Travel has been my greatest teacher. It's opened my mind to new perspectives, challenged my assumptions, and helped me grow as a person.",
      philosophyImage: "https://via.placeholder.com/600x400"
    },
    
    hackathons: {
      introduction: "My journey through various hackathons where I've collaborated, innovated, and built solutions under time pressure.",
      totalParticipated: hackathons?.length || 0,
      totalWins: hackathons?.filter(h => h.result?.includes('1st') || h.result?.includes('First')).length || 0,
      totalProjects: hackathons?.length || 0,
      teamSize: "3-4",
      projects: hackathons?.map(hackathon => ({
        title: hackathon.projectTitle,
        description: hackathon.projectDescription,
        image: "https://via.placeholder.com/300",
        technologies: hackathon.technologies || [],
        githubLink: hackathon.githubUrl,
        demoLink: hackathon.presentationUrl
      })) || [],
      timeline: hackathons?.map(hackathon => ({
        name: hackathon.name,
        date: hackathon.date,
        location: hackathon.location,
        description: hackathon.description,
        achievement: hackathon.result
      })) || []
    },
    
    // Add other sections with placeholder data for now
    problemSolving: {
      introduction: "I excel at solving complex technical challenges through a combination of analytical thinking, algorithmic knowledge, and creative approaches.",
      approaches: [],
      platforms: [],
      projects: projects?.filter(project => project.category === 'Problem Solving') || []
    },
    
    machineLearning: {
      introduction: "I combine theoretical knowledge with practical implementation to build effective machine learning and AI solutions for real-world problems.",
      skills: skills?.filter(skill => skill.category === 'AI/ML') || [],
      projects: projects?.filter(project => project.category === 'Machine Learning') || [],
      researchAreas: [],
      publications: []
    },
    
    dataEngineering: {
      introduction: "I specialize in designing and implementing scalable data infrastructure and ETL pipelines for analytics and machine learning systems.",
      skills: skills?.filter(skill => skill.category === 'Database' || skill.category === 'Data Engineering') || [],
      projects: projects?.filter(project => project.category === 'Data Engineering') || [],
      technologies: {},
      pipelineDescription: ""
    },
    
    computerScience: {
      introduction: "My foundation in computer science fundamentals enables me to solve complex problems and build robust systems across different domains.",
      coreAreas: skills?.filter(skill => skill.category === 'Programming') || [],
      projects: projects?.filter(project => project.category === 'Computer Science') || [],
      researchInterests: [],
      coreConcepts: []
    }
  };
};

/**
 * Fetch user data from MongoDB via Spring Boot API
 * @returns {Promise<Object>} User data
 */
export const fetchUserData = async () => {
  try {
    console.log('Attempting to fetch data from Spring Boot API...');
    // First try to get all portfolios and return the first one
    const response = await apiClient.get('/portfolio');
    const portfolios = response.data;
    
    if (portfolios && portfolios.length > 0) {
      console.log('Successfully fetched portfolio data from API:', portfolios[0]);
      const transformedData = transformPortfolioData(portfolios[0]);
      console.log('Transformed data:', transformedData);
      return transformedData;
    } else {
      // If no portfolios exist, return placeholder data
      console.log('No portfolios found in database, using placeholder data');
      const { placeholderData } = await import('../data/placeholder');
      return placeholderData;
    }
  } catch (error) {
    console.error('Error fetching user data from API:', error);
    console.error('Error details:', {
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
      url: error.config?.url
    });
    // Fallback to placeholder data if API fails
    console.log('API failed, falling back to placeholder data');
    const { placeholderData } = await import('../data/placeholder');
    return placeholderData;
  }
};

/**
 * Update user data in MongoDB
 * @param {Object} data - Updated user data
 * @returns {Promise<Object>} Updated user data
 */
export const updateUserData = async (data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/portfolio`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating user data:', error);
    throw error;
  }
};

/**
 * Add a new item to a specific section
 * @param {string} section - Section name (e.g., 'projects', 'skills')
 * @param {Object} item - Item to add
 * @returns {Promise<Object>} Updated section data
 */
export const addSectionItem = async (section, item) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/portfolio/${section}`, item);
    return response.data;
  } catch (error) {
    console.error(`Error adding item to ${section}:`, error);
    throw error;
  }
};

/**
 * Delete an item from a specific section
 * @param {string} section - Section name
 * @param {string} itemId - ID of the item to delete
 * @returns {Promise<Object>} Updated section data
 */
export const deleteSectionItem = async (section, itemId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/portfolio/${section}/${itemId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting item from ${section}:`, error);
    throw error;
  }
};
