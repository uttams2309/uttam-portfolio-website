package com.utsingh.portfolio.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    
    @Value("${spring.profiles.active:default}")
    private String activeProfile;
    
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        if ("production".equals(activeProfile) || "heroku".equals(activeProfile)) {
            // Production CORS configuration with specific origins
            registry.addMapping("/**")
                    .allowedOrigins(
                        "https://utsingh.netlify.app",
                        "https://portfolio-backend-uttam-60b57a60be26.herokuapp.com"
                    )
                    .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                    .allowedHeaders("*")
                    .allowCredentials(false);
        } else {
            // Development CORS configuration
            registry.addMapping("/**")
                    .allowedOriginPatterns("*")
                    .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                    .allowedHeaders("*")
                    .allowCredentials(false);
        }
    }
}
