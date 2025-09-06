package com.utsingh.portfolio.controller;

import com.utsingh.portfolio.model.Portfolio;
import com.utsingh.portfolio.service.PortfolioService;
import com.utsingh.portfolio.service.HerokuPortfolioService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/portfolio")
@CrossOrigin(origins = {"*"})
@Tag(name = "Portfolio", description = "Portfolio management API for managing personal portfolio data including projects, skills, achievements, and experiences")
public class PortfolioController {
    
    @Autowired(required = false)
    private PortfolioService portfolioService;
    
    @Autowired(required = false)
    private HerokuPortfolioService herokuPortfolioService;
    
    @Autowired
    private Environment environment;
    
    private boolean isHerokuProfile() {
        return Arrays.asList(environment.getActiveProfiles()).contains("heroku");
    }
    
    @Operation(
        summary = "Get all portfolios",
        description = "Retrieve a list of all portfolio records from the database"
    )
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Successfully retrieved portfolios",
                    content = @Content(mediaType = "application/json", 
                                     schema = @Schema(implementation = Portfolio.class))),
        @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    @GetMapping
    public ResponseEntity<List<Portfolio>> getAllPortfolios() {
        try {
            List<Portfolio> portfolios = isHerokuProfile() ? 
                herokuPortfolioService.getAllPortfolios() : 
                portfolioService.getAllPortfolios();
            return ResponseEntity.ok(portfolios);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    @Operation(
        summary = "Get portfolio by ID",
        description = "Retrieve a specific portfolio by its unique identifier"
    )
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Portfolio found",
                    content = @Content(mediaType = "application/json", 
                                     schema = @Schema(implementation = Portfolio.class))),
        @ApiResponse(responseCode = "404", description = "Portfolio not found"),
        @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    @GetMapping("/{id}")
    public ResponseEntity<Portfolio> getPortfolioById(
            @Parameter(description = "Portfolio ID", required = true) @PathVariable String id) {
        try {
            Optional<Portfolio> portfolio = isHerokuProfile() ? 
                herokuPortfolioService.getPortfolioById(id) : 
                portfolioService.getPortfolioById(id);
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
            Optional<Portfolio> portfolio = isHerokuProfile() ? 
                herokuPortfolioService.getPortfolioByName(name) : 
                portfolioService.getPortfolioByName(name);
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
            Portfolio createdPortfolio = isHerokuProfile() ? 
                herokuPortfolioService.createPortfolio(portfolio) : 
                portfolioService.createPortfolio(portfolio);
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
            Portfolio updatedPortfolio = isHerokuProfile() ? 
                herokuPortfolioService.updatePortfolio(id, portfolio) : 
                portfolioService.updatePortfolio(id, portfolio);
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
            boolean deleted = isHerokuProfile() ? 
                herokuPortfolioService.deletePortfolio(id) : 
                portfolioService.deletePortfolio(id);
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
            Portfolio updatedPortfolio = isHerokuProfile() ? 
                herokuPortfolioService.addProject(portfolioId, project) : 
                portfolioService.addProject(portfolioId, project);
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
            Portfolio updatedPortfolio = isHerokuProfile() ? 
                herokuPortfolioService.updateProject(portfolioId, projectId, project) : 
                portfolioService.updateProject(portfolioId, projectId, project);
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
            Portfolio updatedPortfolio = isHerokuProfile() ? 
                herokuPortfolioService.deleteProject(portfolioId, projectId) : 
                portfolioService.deleteProject(portfolioId, projectId);
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
            Portfolio updatedPortfolio = isHerokuProfile() ? 
                herokuPortfolioService.addSkill(portfolioId, skill) : 
                portfolioService.addSkill(portfolioId, skill);
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
            Portfolio updatedPortfolio = isHerokuProfile() ? 
                herokuPortfolioService.addAchievement(portfolioId, achievement) : 
                portfolioService.addAchievement(portfolioId, achievement);
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
            Portfolio updatedPortfolio = isHerokuProfile() ? 
                herokuPortfolioService.addExperience(portfolioId, experience) : 
                portfolioService.addExperience(portfolioId, experience);
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
            Portfolio updatedPortfolio = isHerokuProfile() ? 
                herokuPortfolioService.addEducation(portfolioId, education) : 
                portfolioService.addEducation(portfolioId, education);
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
            Portfolio updatedPortfolio = isHerokuProfile() ? 
                herokuPortfolioService.addTravel(portfolioId, travel) : 
                portfolioService.addTravel(portfolioId, travel);
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
            Portfolio updatedPortfolio = isHerokuProfile() ? 
                herokuPortfolioService.addHackathon(portfolioId, hackathon) : 
                portfolioService.addHackathon(portfolioId, hackathon);
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
            boolean exists = isHerokuProfile() ? 
                herokuPortfolioService.existsByEmail(email) : 
                portfolioService.existsByEmail(email);
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
