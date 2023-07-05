# first-CRUD-angular-spring-boot-project
my first CRUD full stack project using angular and spring boot
# FrontendFullstackProject
## By Ramesh Fadatare, link: https://www.youtube.com/watch?v=m3_dJSqkFzU&list=PLGRDMO4rOGcNzi3CpBWsCdQSzbjdWWy-f&index=25
## Purpose of the project
- This Employee Management System is a full-stack application built with Spring Boot for the backend, Angular for the frontend, and PostgreSQL for the database.
- The purpose of this project is to provide a user-friendly system for managing employees which allows users to view, create, update, and delete employee records.
- The system provides a comprehensive solution for managing employee data, including personal information, job details, and other relevant data.

# What I learned
## Spring boot
- Developed REST web services with Spring Boot
    - Created controller class
        - Defined the application's endpoints and behaviours for handling HTTP requests for managing employees, including retrieving all employees, creating new employees, getting employees by ID, updating employee details, and deleting employees
        - Use @RestController to indicate the class is a controller
        - Specified the base URL path with @RequestMapping
        - All endpoints defined in this class will be prefixed with the base URL
        - Created functions with annotations @GetMapping, @PostMapping, @PutMapping, @DeleteMapping, to handle CRUD operations for the Employee Entity
- Created Employee Entity class & repository
        - Used @Entity, @Table, @Id, @GeneratedValue, @Column, which are part of JPA specification. Those annotations are usde to map Java objects to database tables and define the database schema
        - The JPA imlements Hibernate, and tables and columns specified with the annotations are automatically created in the defined schema(PostgreSQL)
- Created Employee Repository interface, which extend JpaRepository
        - For using common database operations, CRUD

## Angular
- Developed four components for different functionalities
    - CreateEmployeeComponent
- Developed a service to hold the functionaly for HTTP requests


# Issues I Had
## 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.'
- Resolved this issue by adding '@CrossOrigin(origins = {"http://localhost:4200", "http://example.com"})'
- Enabled CORS(Cross-origin resource sharing) to allow requests from different domains
- The annotation allows request from the specific origins to access the controller's endpoint
