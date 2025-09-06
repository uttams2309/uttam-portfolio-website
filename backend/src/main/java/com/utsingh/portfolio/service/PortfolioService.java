package com.utsingh.portfolio.service;

import com.utsingh.portfolio.model.Portfolio;
import com.utsingh.portfolio.repository.PortfolioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Profile("!heroku")
public class PortfolioService {
    
    @Autowired
    private PortfolioRepository portfolioRepository;
    
    /**
     * Get all portfolios
     */
    public List<Portfolio> getAllPortfolios() {
        return portfolioRepository.findAll();
    }
    
    /**
     * Get portfolio by ID
     */
    public Optional<Portfolio> getPortfolioById(String id) {
        return portfolioRepository.findById(id);
    }
    
    /**
     * Get portfolio by name
     */
    public Optional<Portfolio> getPortfolioByName(String name) {
        return portfolioRepository.findByPersonalInfoName(name);
    }
    
    /**
     * Create new portfolio
     */
    public Portfolio createPortfolio(Portfolio portfolio) {
        // Generate IDs for nested objects if not provided
        generateIdsForNestedObjects(portfolio);
        return portfolioRepository.save(portfolio);
    }
    
    /**
     * Update existing portfolio
     */
    public Portfolio updatePortfolio(String id, Portfolio portfolio) {
        portfolio.setId(id);
        generateIdsForNestedObjects(portfolio);
        return portfolioRepository.save(portfolio);
    }
    
    /**
     * Delete portfolio by ID
     */
    public boolean deletePortfolio(String id) {
        if (portfolioRepository.existsById(id)) {
            portfolioRepository.deleteById(id);
            return true;
        }
        return false;
    }
    
    /**
     * Add project to portfolio
     */
    public Portfolio addProject(String portfolioId, Portfolio.Project project) {
        Optional<Portfolio> portfolioOpt = portfolioRepository.findById(portfolioId);
        if (portfolioOpt.isPresent()) {
            Portfolio portfolio = portfolioOpt.get();
            if (project.getId() == null || project.getId().isEmpty()) {
                project.setId(UUID.randomUUID().toString());
            }
            portfolio.getProjects().add(project);
            return portfolioRepository.save(portfolio);
        }
        throw new RuntimeException("Portfolio not found with id: " + portfolioId);
    }
    
    /**
     * Update project in portfolio
     */
    public Portfolio updateProject(String portfolioId, String projectId, Portfolio.Project updatedProject) {
        Optional<Portfolio> portfolioOpt = portfolioRepository.findById(portfolioId);
        if (portfolioOpt.isPresent()) {
            Portfolio portfolio = portfolioOpt.get();
            List<Portfolio.Project> projects = portfolio.getProjects();
            for (int i = 0; i < projects.size(); i++) {
                if (projects.get(i).getId().equals(projectId)) {
                    updatedProject.setId(projectId);
                    projects.set(i, updatedProject);
                    return portfolioRepository.save(portfolio);
                }
            }
            throw new RuntimeException("Project not found with id: " + projectId);
        }
        throw new RuntimeException("Portfolio not found with id: " + portfolioId);
    }
    
    /**
     * Delete project from portfolio
     */
    public Portfolio deleteProject(String portfolioId, String projectId) {
        Optional<Portfolio> portfolioOpt = portfolioRepository.findById(portfolioId);
        if (portfolioOpt.isPresent()) {
            Portfolio portfolio = portfolioOpt.get();
            portfolio.getProjects().removeIf(project -> project.getId().equals(projectId));
            return portfolioRepository.save(portfolio);
        }
        throw new RuntimeException("Portfolio not found with id: " + portfolioId);
    }
    
    /**
     * Add skill to portfolio
     */
    public Portfolio addSkill(String portfolioId, Portfolio.Skill skill) {
        Optional<Portfolio> portfolioOpt = portfolioRepository.findById(portfolioId);
        if (portfolioOpt.isPresent()) {
            Portfolio portfolio = portfolioOpt.get();
            if (skill.getId() == null || skill.getId().isEmpty()) {
                skill.setId(UUID.randomUUID().toString());
            }
            portfolio.getSkills().add(skill);
            return portfolioRepository.save(portfolio);
        }
        throw new RuntimeException("Portfolio not found with id: " + portfolioId);
    }
    
    /**
     * Add achievement to portfolio
     */
    public Portfolio addAchievement(String portfolioId, Portfolio.Achievement achievement) {
        Optional<Portfolio> portfolioOpt = portfolioRepository.findById(portfolioId);
        if (portfolioOpt.isPresent()) {
            Portfolio portfolio = portfolioOpt.get();
            if (achievement.getId() == null || achievement.getId().isEmpty()) {
                achievement.setId(UUID.randomUUID().toString());
            }
            portfolio.getAchievements().add(achievement);
            return portfolioRepository.save(portfolio);
        }
        throw new RuntimeException("Portfolio not found with id: " + portfolioId);
    }
    
    /**
     * Add experience to portfolio
     */
    public Portfolio addExperience(String portfolioId, Portfolio.Experience experience) {
        Optional<Portfolio> portfolioOpt = portfolioRepository.findById(portfolioId);
        if (portfolioOpt.isPresent()) {
            Portfolio portfolio = portfolioOpt.get();
            if (experience.getId() == null || experience.getId().isEmpty()) {
                experience.setId(UUID.randomUUID().toString());
            }
            portfolio.getExperiences().add(experience);
            return portfolioRepository.save(portfolio);
        }
        throw new RuntimeException("Portfolio not found with id: " + portfolioId);
    }
    
    /**
     * Add education to portfolio
     */
    public Portfolio addEducation(String portfolioId, Portfolio.Education education) {
        Optional<Portfolio> portfolioOpt = portfolioRepository.findById(portfolioId);
        if (portfolioOpt.isPresent()) {
            Portfolio portfolio = portfolioOpt.get();
            if (education.getId() == null || education.getId().isEmpty()) {
                education.setId(UUID.randomUUID().toString());
            }
            portfolio.getEducation().add(education);
            return portfolioRepository.save(portfolio);
        }
        throw new RuntimeException("Portfolio not found with id: " + portfolioId);
    }
    
    /**
     * Add travel to portfolio
     */
    public Portfolio addTravel(String portfolioId, Portfolio.Travel travel) {
        Optional<Portfolio> portfolioOpt = portfolioRepository.findById(portfolioId);
        if (portfolioOpt.isPresent()) {
            Portfolio portfolio = portfolioOpt.get();
            if (travel.getId() == null || travel.getId().isEmpty()) {
                travel.setId(UUID.randomUUID().toString());
            }
            portfolio.getTravels().add(travel);
            return portfolioRepository.save(portfolio);
        }
        throw new RuntimeException("Portfolio not found with id: " + portfolioId);
    }
    
    /**
     * Add hackathon to portfolio
     */
    public Portfolio addHackathon(String portfolioId, Portfolio.Hackathon hackathon) {
        Optional<Portfolio> portfolioOpt = portfolioRepository.findById(portfolioId);
        if (portfolioOpt.isPresent()) {
            Portfolio portfolio = portfolioOpt.get();
            if (hackathon.getId() == null || hackathon.getId().isEmpty()) {
                hackathon.setId(UUID.randomUUID().toString());
            }
            portfolio.getHackathons().add(hackathon);
            return portfolioRepository.save(portfolio);
        }
        throw new RuntimeException("Portfolio not found with id: " + portfolioId);
    }
    
    /**
     * Check if portfolio exists by email
     */
    public boolean existsByEmail(String email) {
        return portfolioRepository.existsByPersonalInfoEmail(email);
    }
    
    /**
     * Generate IDs for nested objects if not provided
     */
    private void generateIdsForNestedObjects(Portfolio portfolio) {
        if (portfolio.getProjects() != null) {
            portfolio.getProjects().forEach(project -> {
                if (project.getId() == null || project.getId().isEmpty()) {
                    project.setId(UUID.randomUUID().toString());
                }
            });
        }
        
        if (portfolio.getSkills() != null) {
            portfolio.getSkills().forEach(skill -> {
                if (skill.getId() == null || skill.getId().isEmpty()) {
                    skill.setId(UUID.randomUUID().toString());
                }
            });
        }
        
        if (portfolio.getAchievements() != null) {
            portfolio.getAchievements().forEach(achievement -> {
                if (achievement.getId() == null || achievement.getId().isEmpty()) {
                    achievement.setId(UUID.randomUUID().toString());
                }
            });
        }
        
        if (portfolio.getExperiences() != null) {
            portfolio.getExperiences().forEach(experience -> {
                if (experience.getId() == null || experience.getId().isEmpty()) {
                    experience.setId(UUID.randomUUID().toString());
                }
            });
        }
        
        if (portfolio.getEducation() != null) {
            portfolio.getEducation().forEach(education -> {
                if (education.getId() == null || education.getId().isEmpty()) {
                    education.setId(UUID.randomUUID().toString());
                }
            });
        }
        
        if (portfolio.getTravels() != null) {
            portfolio.getTravels().forEach(travel -> {
                if (travel.getId() == null || travel.getId().isEmpty()) {
                    travel.setId(UUID.randomUUID().toString());
                }
            });
        }
        
        if (portfolio.getHackathons() != null) {
            portfolio.getHackathons().forEach(hackathon -> {
                if (hackathon.getId() == null || hackathon.getId().isEmpty()) {
                    hackathon.setId(UUID.randomUUID().toString());
                }
            });
        }
    }
}
