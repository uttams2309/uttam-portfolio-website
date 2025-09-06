package com.utsingh.portfolio.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.List;
import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "portfolio")
public class Portfolio {
    
    @Id
    private String id;
    
    private PersonalInfo personalInfo;
    private List<Project> projects;
    private List<Skill> skills;
    private List<Achievement> achievements;
    private List<Experience> experiences;
    private List<Education> education;
    private List<Travel> travels;
    private List<Hackathon> hackathons;
    private Map<String, Object> additionalData;
    
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PersonalInfo {
        private String name;
        private String title;
        private String email;
        private String phone;
        private String location;
        private String bio;
        private String profileImage;
        private List<String> socialLinks;
        private String resume;
    }
    
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Project {
        private String id;
        private String title;
        private String description;
        private List<String> technologies;
        private String githubUrl;
        private String liveUrl;
        private String imageUrl;
        private String category;
        private String status;
        private String startDate;
        private String endDate;
        private List<String> features;
    }
    
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Skill {
        private String id;
        private String name;
        private String category;
        private int proficiency; // 1-100
        private String icon;
        private String description;
        private List<String> projects; // Project IDs where this skill was used
    }
    
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Achievement {
        private String id;
        private String title;
        private String description;
        private String date;
        private String organization;
        private String certificateUrl;
        private String imageUrl;
        private String category;
        private List<String> skills;
    }
    
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Experience {
        private String id;
        private String company;
        private String position;
        private String description;
        private String startDate;
        private String endDate;
        private String location;
        private List<String> responsibilities;
        private List<String> technologies;
        private String companyLogo;
    }
    
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Education {
        private String id;
        private String institution;
        private String degree;
        private String field;
        private String startDate;
        private String endDate;
        private String grade;
        private String description;
        private List<String> courses;
        private String logo;
    }
    
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Travel {
        private String id;
        private String destination;
        private String country;
        private String description;
        private String date;
        private List<String> images;
        private List<String> highlights;
        private String duration;
    }
    
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Hackathon {
        private String id;
        private String name;
        private String description;
        private String date;
        private String location;
        private String result;
        private String projectTitle;
        private String projectDescription;
        private List<String> technologies;
        private String githubUrl;
        private String presentationUrl;
        private List<String> teamMembers;
    }
}
