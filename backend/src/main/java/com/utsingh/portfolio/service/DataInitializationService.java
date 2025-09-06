package com.utsingh.portfolio.service;

import com.utsingh.portfolio.model.Portfolio;
import com.utsingh.portfolio.repository.PortfolioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Profile("!heroku")
public class DataInitializationService implements CommandLineRunner {
    
    @Autowired
    private PortfolioRepository portfolioRepository;
    
    @Override
    public void run(String... args) throws Exception {
        // Check if data already exists
        if (portfolioRepository.count() == 0) {
            initializePortfolioData();
        }
    }
    
    private void initializePortfolioData() {
        Portfolio portfolio = new Portfolio();
        
        // Personal Info
        Portfolio.PersonalInfo personalInfo = new Portfolio.PersonalInfo();
        personalInfo.setName("Uttam Singh");
        personalInfo.setTitle("Full Stack Developer & Data Engineer");
        personalInfo.setEmail("uttams2309@gmail.com");
        personalInfo.setPhone("+91-XXXXXXXXXX");
        personalInfo.setLocation("India");
        personalInfo.setBio("Passionate full-stack developer with expertise in modern web technologies, data engineering, and machine learning. I love building scalable applications and solving complex problems.");
        personalInfo.setProfileImage("/assets/images/profile.jpg");
        personalInfo.setSocialLinks(Arrays.asList(
            "https://github.com/uttamsingh",
            "https://linkedin.com/in/uttamsingh",
            "https://twitter.com/uttamsingh"
        ));
        personalInfo.setResume("/assets/resume.pdf");
        portfolio.setPersonalInfo(personalInfo);
        
        // Projects
        List<Portfolio.Project> projects = Arrays.asList(
            createProject("1", "Portfolio Website", "A modern, responsive portfolio website built with React and Spring Boot", 
                Arrays.asList("React", "Spring Boot", "MongoDB", "Tailwind CSS"), 
                "https://github.com/uttamsingh/portfolio", "https://uttamsingh.dev", 
                "/assets/images/portfolio-project.jpg", "Web Development", "Completed"),
            
            createProject("2", "E-Commerce Platform", "Full-featured e-commerce platform with payment integration", 
                Arrays.asList("React", "Node.js", "PostgreSQL", "Stripe API"), 
                "https://github.com/uttamsingh/ecommerce", "https://ecommerce-demo.com", 
                "/assets/images/ecommerce-project.jpg", "Web Development", "In Progress"),
            
            createProject("3", "Data Analytics Dashboard", "Real-time analytics dashboard for business intelligence", 
                Arrays.asList("Python", "Django", "PostgreSQL", "Chart.js"), 
                "https://github.com/uttamsingh/analytics", "", 
                "/assets/images/analytics-project.jpg", "Data Engineering", "Completed")
        );
        portfolio.setProjects(projects);
        
        // Skills
        List<Portfolio.Skill> skills = Arrays.asList(
            createSkill("1", "React", "Frontend", 90, "react-icon", "Modern JavaScript library for building user interfaces"),
            createSkill("2", "Spring Boot", "Backend", 85, "spring-icon", "Java framework for building enterprise applications"),
            createSkill("3", "MongoDB", "Database", 80, "mongodb-icon", "NoSQL database for modern applications"),
            createSkill("4", "Python", "Programming", 88, "python-icon", "Versatile programming language for various applications"),
            createSkill("5", "Machine Learning", "AI/ML", 75, "ml-icon", "Building intelligent systems and predictive models"),
            createSkill("6", "Docker", "DevOps", 70, "docker-icon", "Containerization platform for application deployment")
        );
        portfolio.setSkills(skills);
        
        // Achievements
        List<Portfolio.Achievement> achievements = Arrays.asList(
            createAchievement("1", "AWS Certified Developer", "Certified in AWS cloud development", "2023-06-15", 
                "Amazon Web Services", "https://aws.amazon.com/certification", "/assets/images/aws-cert.jpg", 
                "Certification", Arrays.asList("AWS", "Cloud Computing")),
            
            createAchievement("2", "Hackathon Winner", "First place in National Coding Hackathon", "2023-03-20", 
                "TechFest 2023", "", "/assets/images/hackathon-win.jpg", 
                "Competition", Arrays.asList("Problem Solving", "Team Leadership"))
        );
        portfolio.setAchievements(achievements);
        
        // Experiences
        List<Portfolio.Experience> experiences = Arrays.asList(
            createExperience("1", "Tech Solutions Inc.", "Senior Full Stack Developer", 
                "Led development of multiple web applications and mentored junior developers", 
                "2022-01-01", "Present", "Remote", 
                Arrays.asList("Developed 5+ web applications", "Mentored 3 junior developers", "Improved system performance by 40%"),
                Arrays.asList("React", "Spring Boot", "AWS"), "/assets/images/company1-logo.jpg"),
            
            createExperience("2", "StartupXYZ", "Full Stack Developer", 
                "Built scalable web applications from scratch", 
                "2020-06-01", "2021-12-31", "Bangalore, India", 
                Arrays.asList("Built 3 major applications", "Implemented CI/CD pipelines", "Reduced deployment time by 60%"),
                Arrays.asList("Node.js", "React", "MongoDB"), "/assets/images/company2-logo.jpg")
        );
        portfolio.setExperiences(experiences);
        
        // Education
        List<Portfolio.Education> education = Arrays.asList(
            createEducation("1", "Indian Institute of Technology", "Bachelor of Technology", 
                "Computer Science and Engineering", "2016-07-01", "2020-05-31", "8.5 CGPA", 
                "Specialized in software engineering and data structures", 
                Arrays.asList("Data Structures", "Algorithms", "Database Systems", "Software Engineering"),
                "/assets/images/iit-logo.jpg")
        );
        portfolio.setEducation(education);
        
        // Travels
        List<Portfolio.Travel> travels = Arrays.asList(
            createTravel("1", "Goa", "India", "Beautiful beaches and vibrant culture", "2023-12-01", 
                Arrays.asList("/assets/images/goa1.jpg", "/assets/images/goa2.jpg"), 
                Arrays.asList("Beach surfing", "Local cuisine", "Sunset photography"), "5 days"),
            
            createTravel("2", "Manali", "India", "Scenic mountain views and adventure sports", "2023-08-15", 
                Arrays.asList("/assets/images/manali1.jpg", "/assets/images/manali2.jpg"), 
                Arrays.asList("Trekking", "River rafting", "Mountain photography"), "7 days")
        );
        portfolio.setTravels(travels);
        
        // Hackathons
        List<Portfolio.Hackathon> hackathons = Arrays.asList(
            createHackathon("1", "TechFest 2023", "National level hackathon focused on social impact", 
                "2023-03-18", "Mumbai, India", "1st Place", "EcoTrack", 
                "Mobile app for tracking and reducing carbon footprint", 
                Arrays.asList("React Native", "Node.js", "MongoDB"), 
                "https://github.com/uttamsingh/ecotrack", "https://slides.com/ecotrack-presentation",
                Arrays.asList("Uttam Singh", "John Doe", "Jane Smith")),
            
            createHackathon("2", "CodeForGood 2022", "Hackathon for developing solutions for NGOs", 
                "2022-11-12", "Delhi, India", "2nd Place", "EduConnect", 
                "Platform connecting students with educational resources", 
                Arrays.asList("React", "Express.js", "PostgreSQL"), 
                "https://github.com/uttamsingh/educonnect", "",
                Arrays.asList("Uttam Singh", "Alice Johnson"))
        );
        portfolio.setHackathons(hackathons);
        
        // Additional Data
        Map<String, Object> additionalData = new HashMap<>();
        additionalData.put("theme", "dark");
        additionalData.put("lastUpdated", "2024-01-15");
        additionalData.put("version", "1.0.0");
        portfolio.setAdditionalData(additionalData);
        
        // Save to database
        portfolioRepository.save(portfolio);
        System.out.println("Portfolio data initialized successfully!");
    }
    
    private Portfolio.Project createProject(String id, String title, String description, List<String> technologies,
                                          String githubUrl, String liveUrl, String imageUrl, String category, String status) {
        Portfolio.Project project = new Portfolio.Project();
        project.setId(id);
        project.setTitle(title);
        project.setDescription(description);
        project.setTechnologies(technologies);
        project.setGithubUrl(githubUrl);
        project.setLiveUrl(liveUrl);
        project.setImageUrl(imageUrl);
        project.setCategory(category);
        project.setStatus(status);
        project.setStartDate("2023-01-01");
        project.setEndDate("2023-06-30");
        project.setFeatures(Arrays.asList("Responsive Design", "User Authentication", "Real-time Updates"));
        return project;
    }
    
    private Portfolio.Skill createSkill(String id, String name, String category, int proficiency, String icon, String description) {
        Portfolio.Skill skill = new Portfolio.Skill();
        skill.setId(id);
        skill.setName(name);
        skill.setCategory(category);
        skill.setProficiency(proficiency);
        skill.setIcon(icon);
        skill.setDescription(description);
        skill.setProjects(Arrays.asList("1", "2"));
        return skill;
    }
    
    private Portfolio.Achievement createAchievement(String id, String title, String description, String date,
                                                  String organization, String certificateUrl, String imageUrl,
                                                  String category, List<String> skills) {
        Portfolio.Achievement achievement = new Portfolio.Achievement();
        achievement.setId(id);
        achievement.setTitle(title);
        achievement.setDescription(description);
        achievement.setDate(date);
        achievement.setOrganization(organization);
        achievement.setCertificateUrl(certificateUrl);
        achievement.setImageUrl(imageUrl);
        achievement.setCategory(category);
        achievement.setSkills(skills);
        return achievement;
    }
    
    private Portfolio.Experience createExperience(String id, String company, String position, String description,
                                                String startDate, String endDate, String location,
                                                List<String> responsibilities, List<String> technologies, String companyLogo) {
        Portfolio.Experience experience = new Portfolio.Experience();
        experience.setId(id);
        experience.setCompany(company);
        experience.setPosition(position);
        experience.setDescription(description);
        experience.setStartDate(startDate);
        experience.setEndDate(endDate);
        experience.setLocation(location);
        experience.setResponsibilities(responsibilities);
        experience.setTechnologies(technologies);
        experience.setCompanyLogo(companyLogo);
        return experience;
    }
    
    private Portfolio.Education createEducation(String id, String institution, String degree, String field,
                                              String startDate, String endDate, String grade, String description,
                                              List<String> courses, String logo) {
        Portfolio.Education education = new Portfolio.Education();
        education.setId(id);
        education.setInstitution(institution);
        education.setDegree(degree);
        education.setField(field);
        education.setStartDate(startDate);
        education.setEndDate(endDate);
        education.setGrade(grade);
        education.setDescription(description);
        education.setCourses(courses);
        education.setLogo(logo);
        return education;
    }
    
    private Portfolio.Travel createTravel(String id, String destination, String country, String description,
                                        String date, List<String> images, List<String> highlights, String duration) {
        Portfolio.Travel travel = new Portfolio.Travel();
        travel.setId(id);
        travel.setDestination(destination);
        travel.setCountry(country);
        travel.setDescription(description);
        travel.setDate(date);
        travel.setImages(images);
        travel.setHighlights(highlights);
        travel.setDuration(duration);
        return travel;
    }
    
    private Portfolio.Hackathon createHackathon(String id, String name, String description, String date,
                                               String location, String result, String projectTitle,
                                               String projectDescription, List<String> technologies,
                                               String githubUrl, String presentationUrl, List<String> teamMembers) {
        Portfolio.Hackathon hackathon = new Portfolio.Hackathon();
        hackathon.setId(id);
        hackathon.setName(name);
        hackathon.setDescription(description);
        hackathon.setDate(date);
        hackathon.setLocation(location);
        hackathon.setResult(result);
        hackathon.setProjectTitle(projectTitle);
        hackathon.setProjectDescription(projectDescription);
        hackathon.setTechnologies(technologies);
        hackathon.setGithubUrl(githubUrl);
        hackathon.setPresentationUrl(presentationUrl);
        hackathon.setTeamMembers(teamMembers);
        return hackathon;
    }
}
