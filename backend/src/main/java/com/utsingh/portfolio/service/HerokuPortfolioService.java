package com.utsingh.portfolio.service;

import com.utsingh.portfolio.model.Portfolio;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Profile("heroku")
public class HerokuPortfolioService {
    
    private static final Portfolio SAMPLE_PORTFOLIO = createSamplePortfolio();
    
    /**
     * Get all portfolios
     */
    public List<Portfolio> getAllPortfolios() {
        return Arrays.asList(SAMPLE_PORTFOLIO);
    }
    
    /**
     * Get portfolio by ID
     */
    public Optional<Portfolio> getPortfolioById(String id) {
        if (SAMPLE_PORTFOLIO.getId().equals(id)) {
            return Optional.of(SAMPLE_PORTFOLIO);
        }
        return Optional.empty();
    }
    
    /**
     * Get portfolio by name
     */
    public Optional<Portfolio> getPortfolioByName(String name) {
        if (SAMPLE_PORTFOLIO.getPersonalInfo().getName().equals(name)) {
            return Optional.of(SAMPLE_PORTFOLIO);
        }
        return Optional.empty();
    }
    
    /**
     * Create new portfolio - returns sample portfolio for demo
     */
    public Portfolio createPortfolio(Portfolio portfolio) {
        return SAMPLE_PORTFOLIO;
    }
    
    /**
     * Update existing portfolio - returns sample portfolio for demo
     */
    public Portfolio updatePortfolio(String id, Portfolio portfolio) {
        return SAMPLE_PORTFOLIO;
    }
    
    /**
     * Delete portfolio by ID - always returns true for demo
     */
    public boolean deletePortfolio(String id) {
        return true;
    }
    
    /**
     * Add project to portfolio - returns sample portfolio for demo
     */
    public Portfolio addProject(String portfolioId, Portfolio.Project project) {
        return SAMPLE_PORTFOLIO;
    }
    
    /**
     * Update project in portfolio - returns sample portfolio for demo
     */
    public Portfolio updateProject(String portfolioId, String projectId, Portfolio.Project updatedProject) {
        return SAMPLE_PORTFOLIO;
    }
    
    /**
     * Delete project from portfolio - returns sample portfolio for demo
     */
    public Portfolio deleteProject(String portfolioId, String projectId) {
        return SAMPLE_PORTFOLIO;
    }
    
    /**
     * Add skill to portfolio - returns sample portfolio for demo
     */
    public Portfolio addSkill(String portfolioId, Portfolio.Skill skill) {
        return SAMPLE_PORTFOLIO;
    }
    
    /**
     * Add achievement to portfolio - returns sample portfolio for demo
     */
    public Portfolio addAchievement(String portfolioId, Portfolio.Achievement achievement) {
        return SAMPLE_PORTFOLIO;
    }
    
    /**
     * Add experience to portfolio - returns sample portfolio for demo
     */
    public Portfolio addExperience(String portfolioId, Portfolio.Experience experience) {
        return SAMPLE_PORTFOLIO;
    }
    
    /**
     * Add education to portfolio - returns sample portfolio for demo
     */
    public Portfolio addEducation(String portfolioId, Portfolio.Education education) {
        return SAMPLE_PORTFOLIO;
    }
    
    /**
     * Add travel to portfolio - returns sample portfolio for demo
     */
    public Portfolio addTravel(String portfolioId, Portfolio.Travel travel) {
        return SAMPLE_PORTFOLIO;
    }
    
    /**
     * Add hackathon to portfolio - returns sample portfolio for demo
     */
    public Portfolio addHackathon(String portfolioId, Portfolio.Hackathon hackathon) {
        return SAMPLE_PORTFOLIO;
    }
    
    /**
     * Check if portfolio exists by email - always returns true for demo
     */
    public boolean existsByEmail(String email) {
        return true;
    }
    
    /**
     * Create sample portfolio data
     */
    private static Portfolio createSamplePortfolio() {
        Portfolio portfolio = new Portfolio();
        portfolio.setId("sample-portfolio-id");
        
        // Personal Info
        Portfolio.PersonalInfo personalInfo = new Portfolio.PersonalInfo();
        personalInfo.setName("Uttam Singh");
        personalInfo.setEmail("uttams2309@gmail.com");
        personalInfo.setPhone("+91-9876543210");
        personalInfo.setLocation("India");
        personalInfo.setBio("Full Stack Developer with expertise in Java, React, and cloud technologies");
        personalInfo.setLinkedin("https://linkedin.com/in/uttam-singh");
        personalInfo.setGithub("https://github.com/uttam-singh");
        personalInfo.setWebsite("https://uttam-portfolio-2024.netlify.app");
        portfolio.setPersonalInfo(personalInfo);
        
        // Skills
        Portfolio.Skill skill1 = new Portfolio.Skill();
        skill1.setId("skill-1");
        skill1.setName("Java");
        skill1.setCategory("Programming Languages");
        skill1.setProficiency("Advanced");
        skill1.setYearsOfExperience(3);
        
        Portfolio.Skill skill2 = new Portfolio.Skill();
        skill2.setId("skill-2");
        skill2.setName("React");
        skill2.setCategory("Frontend");
        skill2.setProficiency("Advanced");
        skill2.setYearsOfExperience(2);
        
        Portfolio.Skill skill3 = new Portfolio.Skill();
        skill3.setId("skill-3");
        skill3.setName("Spring Boot");
        skill3.setCategory("Backend");
        skill3.setProficiency("Advanced");
        skill3.setYearsOfExperience(2);
        
        portfolio.setSkills(Arrays.asList(skill1, skill2, skill3));
        
        // Projects
        Portfolio.Project project1 = new Portfolio.Project();
        project1.setId("project-1");
        project1.setTitle("Portfolio Website");
        project1.setDescription("A full-stack portfolio website built with React and Spring Boot");
        project1.setTechnologies(Arrays.asList("React", "Spring Boot", "MongoDB", "Heroku", "Netlify"));
        project1.setGithubUrl("https://github.com/uttam-singh/portfolio");
        project1.setLiveUrl("https://uttam-portfolio-2024.netlify.app");
        project1.setCategory("Web Development");
        project1.setStartDate("2024-01-01");
        project1.setEndDate("2024-03-01");
        
        Portfolio.Project project2 = new Portfolio.Project();
        project2.setId("project-2");
        project2.setTitle("E-commerce Platform");
        project2.setDescription("A scalable e-commerce platform with microservices architecture");
        project2.setTechnologies(Arrays.asList("Java", "Spring Cloud", "Docker", "Kubernetes", "PostgreSQL"));
        project2.setGithubUrl("https://github.com/uttam-singh/ecommerce");
        project2.setCategory("Backend Development");
        project2.setStartDate("2023-06-01");
        project2.setEndDate("2023-12-01");
        
        portfolio.setProjects(Arrays.asList(project1, project2));
        
        // Experiences
        Portfolio.Experience experience1 = new Portfolio.Experience();
        experience1.setId("exp-1");
        experience1.setCompany("Tech Solutions Inc.");
        experience1.setPosition("Full Stack Developer");
        experience1.setStartDate("2022-01-01");
        experience1.setEndDate("Present");
        experience1.setDescription("Developed and maintained web applications using Java, Spring Boot, and React");
        experience1.setLocation("Remote");
        
        portfolio.setExperiences(Arrays.asList(experience1));
        
        // Education
        Portfolio.Education education1 = new Portfolio.Education();
        education1.setId("edu-1");
        education1.setInstitution("Indian Institute of Technology");
        education1.setDegree("Bachelor of Technology");
        education1.setFieldOfStudy("Computer Science");
        education1.setStartDate("2018-08-01");
        education1.setEndDate("2022-05-01");
        education1.setGrade("8.5 CGPA");
        
        portfolio.setEducation(Arrays.asList(education1));
        
        // Achievements
        Portfolio.Achievement achievement1 = new Portfolio.Achievement();
        achievement1.setId("ach-1");
        achievement1.setTitle("Best Developer Award");
        achievement1.setDescription("Awarded for outstanding performance in software development");
        achievement1.setDate("2023-12-01");
        achievement1.setIssuer("Tech Solutions Inc.");
        
        portfolio.setAchievements(Arrays.asList(achievement1));
        
        // Travels
        Portfolio.Travel travel1 = new Portfolio.Travel();
        travel1.setId("travel-1");
        travel1.setDestination("Japan");
        travel1.setDate("2023-10-01");
        travel1.setDescription("Explored Tokyo and Kyoto, experienced Japanese culture and technology");
        travel1.setImages(Arrays.asList("japan1.jpg", "japan2.jpg"));
        
        portfolio.setTravels(Arrays.asList(travel1));
        
        // Hackathons
        Portfolio.Hackathon hackathon1 = new Portfolio.Hackathon();
        hackathon1.setId("hack-1");
        hackathon1.setName("TechCrunch Disrupt");
        hackathon1.setDate("2023-09-15");
        hackathon1.setPosition("2nd Place");
        hackathon1.setDescription("Built an AI-powered chatbot for customer service");
        hackathon1.setTeamSize(4);
        hackathon1.setTechnologies(Arrays.asList("Python", "TensorFlow", "React", "Node.js"));
        
        portfolio.setHackathons(Arrays.asList(hackathon1));
        
        return portfolio;
    }
}
