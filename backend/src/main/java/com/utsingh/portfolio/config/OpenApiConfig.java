package com.utsingh.portfolio.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class OpenApiConfig {

    @Value("${server.servlet.context-path:/api}")
    private String contextPath;

    @Bean
    public OpenAPI portfolioOpenAPI() {
        Server prodServer = new Server();
        prodServer.setUrl("https://portfolio-backend-uttam-60b57a60be26.herokuapp.com");
        prodServer.setDescription("Production Server");

        Server localServer = new Server();
        localServer.setUrl("http://localhost:8080" + contextPath);
        localServer.setDescription("Local Development Server");

        Contact contact = new Contact();
        contact.setEmail("uttams2309@gmail.com");
        contact.setName("Uttam Singh");
        contact.setUrl("https://utsingh.netlify.app");

        License mitLicense = new License()
                .name("MIT License")
                .url("https://choosealicense.com/licenses/mit/");

        Info info = new Info()
                .title("Portfolio API")
                .version("1.0.0")
                .contact(contact)
                .description("REST API for Uttam Singh's Portfolio Website. This API provides endpoints to retrieve portfolio data including personal information, skills, projects, achievements, and experiences across different domains.")
                .license(mitLicense);

        return new OpenAPI()
                .info(info)
                .servers(List.of(prodServer, localServer));
    }
}
