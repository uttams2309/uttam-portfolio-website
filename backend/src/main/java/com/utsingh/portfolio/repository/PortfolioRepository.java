package com.utsingh.portfolio.repository;

import com.utsingh.portfolio.model.Portfolio;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PortfolioRepository extends MongoRepository<Portfolio, String> {
    
    /**
     * Find portfolio by personal info name
     */
    @Query("{'personalInfo.name': ?0}")
    Optional<Portfolio> findByPersonalInfoName(String name);
    
    /**
     * Find portfolios by project category
     */
    @Query("{'projects.category': ?0}")
    List<Portfolio> findByProjectCategory(String category);
    
    /**
     * Find portfolios by skill name
     */
    @Query("{'skills.name': ?0}")
    List<Portfolio> findBySkillName(String skillName);
    
    /**
     * Find portfolios by achievement category
     */
    @Query("{'achievements.category': ?0}")
    List<Portfolio> findByAchievementCategory(String category);
    
    /**
     * Find portfolios by experience company
     */
    @Query("{'experiences.company': ?0}")
    List<Portfolio> findByExperienceCompany(String company);
    
    /**
     * Find portfolios by education institution
     */
    @Query("{'education.institution': ?0}")
    List<Portfolio> findByEducationInstitution(String institution);
    
    /**
     * Find portfolios by travel destination
     */
    @Query("{'travels.destination': ?0}")
    List<Portfolio> findByTravelDestination(String destination);
    
    /**
     * Find portfolios by hackathon name
     */
    @Query("{'hackathons.name': ?0}")
    List<Portfolio> findByHackathonName(String hackathonName);
    
    /**
     * Check if portfolio exists by personal info email
     */
    @Query("{'personalInfo.email': ?0}")
    boolean existsByPersonalInfoEmail(String email);
}
