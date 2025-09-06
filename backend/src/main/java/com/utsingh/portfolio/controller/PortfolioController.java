package com.utsingh.portfolio.controller;

import com.utsingh.portfolio.model.Portfolio;
import com.utsingh.portfolio.service.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/portfolio")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class PortfolioController {
    
    @Autowired
    private PortfolioService portfolioService;
    
    /**
     * Get all portfolios
     */
    @GetMapping
    public ResponseEntity<List<Portfolio>> getAllPortfolios() {
        try {
            List<Portfolio> portfolios = portfolioService.getAllPortfolios();
            return ResponseEntity.ok(portfolios);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    /**
     * Get portfolio by ID
     */
    @GetMapping("/{id}")
    public ResponseEntity<Portfolio> getPortfolioById(@PathVariable String id) {
        try {
            Optional<Portfolio> portfolio = portfolioService.getPortfolioById(id);
            return portfolio.map(ResponseEntity::ok)
                          .orElse(ResponseEntity.notFound().build());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    /**
     * Get portfolio by name
     */
    @GetMapping("/name/{name}")
    public ResponseEntity<Portfolio> getPortfolioByName(@PathVariable String name) {
        try {
            Optional<Portfolio> portfolio = portfolioService.getPortfolioByName(name);
            return portfolio.map(ResponseEntity::ok)
                          .orElse(ResponseEntity.notFound().build());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    /**
     * Create new portfolio
     */
    @PostMapping
    public ResponseEntity<Portfolio> createPortfolio(@RequestBody Portfolio portfolio) {
        try {
            Portfolio createdPortfolio = portfolioService.createPortfolio(portfolio);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdPortfolio);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    
    /**
     * Update existing portfolio
     */
    @PutMapping("/{id}")
    public ResponseEntity<Portfolio> updatePortfolio(@PathVariable String id, @RequestBody Portfolio portfolio) {
        try {
            Portfolio updatedPortfolio = portfolioService.updatePortfolio(id, portfolio);
            return ResponseEntity.ok(updatedPortfolio);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    
    /**
     * Delete portfolio by ID
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePortfolio(@PathVariable String id) {
        try {
            boolean deleted = portfolioService.deletePortfolio(id);
            return deleted ? ResponseEntity.noContent().build() 
                          : ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    // Project endpoints
    
    /**
     * Add project to portfolio
     */
    @PostMapping("/{portfolioId}/projects")
    public ResponseEntity<Portfolio> addProject(@PathVariable String portfolioId, 
                                               @RequestBody Portfolio.Project project) {
        try {
            Portfolio updatedPortfolio = portfolioService.addProject(portfolioId, project);
            return ResponseEntity.ok(updatedPortfolio);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    
    /**
     * Update project in portfolio
     */
    @PutMapping("/{portfolioId}/projects/{projectId}")
    public ResponseEntity<Portfolio> updateProject(@PathVariable String portfolioId,
                                                  @PathVariable String projectId,
                                                  @RequestBody Portfolio.Project project) {
        try {
            Portfolio updatedPortfolio = portfolioService.updateProject(portfolioId, projectId, project);
            return ResponseEntity.ok(updatedPortfolio);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    
    /**
     * Delete project from portfolio
     */
    @DeleteMapping("/{portfolioId}/projects/{projectId}")
    public ResponseEntity<Portfolio> deleteProject(@PathVariable String portfolioId,
                                                  @PathVariable String projectId) {
        try {
            Portfolio updatedPortfolio = portfolioService.deleteProject(portfolioId, projectId);
            return ResponseEntity.ok(updatedPortfolio);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    // Skill endpoints
    
    /**
     * Add skill to portfolio
     */
    @PostMapping("/{portfolioId}/skills")
    public ResponseEntity<Portfolio> addSkill(@PathVariable String portfolioId,
                                             @RequestBody Portfolio.Skill skill) {
        try {
            Portfolio updatedPortfolio = portfolioService.addSkill(portfolioId, skill);
            return ResponseEntity.ok(updatedPortfolio);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    
    // Achievement endpoints
    
    /**
     * Add achievement to portfolio
     */
    @PostMapping("/{portfolioId}/achievements")
    public ResponseEntity<Portfolio> addAchievement(@PathVariable String portfolioId,
                                                   @RequestBody Portfolio.Achievement achievement) {
        try {
            Portfolio updatedPortfolio = portfolioService.addAchievement(portfolioId, achievement);
            return ResponseEntity.ok(updatedPortfolio);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    
    // Experience endpoints
    
    /**
     * Add experience to portfolio
     */
    @PostMapping("/{portfolioId}/experiences")
    public ResponseEntity<Portfolio> addExperience(@PathVariable String portfolioId,
                                                  @RequestBody Portfolio.Experience experience) {
        try {
            Portfolio updatedPortfolio = portfolioService.addExperience(portfolioId, experience);
            return ResponseEntity.ok(updatedPortfolio);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    
    // Education endpoints
    
    /**
     * Add education to portfolio
     */
    @PostMapping("/{portfolioId}/education")
    public ResponseEntity<Portfolio> addEducation(@PathVariable String portfolioId,
                                                 @RequestBody Portfolio.Education education) {
        try {
            Portfolio updatedPortfolio = portfolioService.addEducation(portfolioId, education);
            return ResponseEntity.ok(updatedPortfolio);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    
    // Travel endpoints
    
    /**
     * Add travel to portfolio
     */
    @PostMapping("/{portfolioId}/travels")
    public ResponseEntity<Portfolio> addTravel(@PathVariable String portfolioId,
                                              @RequestBody Portfolio.Travel travel) {
        try {
            Portfolio updatedPortfolio = portfolioService.addTravel(portfolioId, travel);
            return ResponseEntity.ok(updatedPortfolio);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    
    // Hackathon endpoints
    
    /**
     * Add hackathon to portfolio
     */
    @PostMapping("/{portfolioId}/hackathons")
    public ResponseEntity<Portfolio> addHackathon(@PathVariable String portfolioId,
                                                 @RequestBody Portfolio.Hackathon hackathon) {
        try {
            Portfolio updatedPortfolio = portfolioService.addHackathon(portfolioId, hackathon);
            return ResponseEntity.ok(updatedPortfolio);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    
    /**
     * Check if portfolio exists by email
     */
    @GetMapping("/exists/{email}")
    public ResponseEntity<Boolean> existsByEmail(@PathVariable String email) {
        try {
            boolean exists = portfolioService.existsByEmail(email);
            return ResponseEntity.ok(exists);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    /**
     * Health check endpoint
     */
    @GetMapping("/health")
    public ResponseEntity<String> healthCheck() {
        return ResponseEntity.ok("Portfolio API is running successfully!");
    }
}
