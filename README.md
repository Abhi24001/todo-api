# \# Todo API

# 

# A Node.js Todo REST API with JWT Authentication, PostgreSQL, Docker, AWS ECS Fargate, and GitHub Actions CI/CD.

# 

# \## Features

# 

# \* User Registration

# \* User Login

# \* JWT Authentication

# \* Todo CRUD Operations

# \* PostgreSQL Database

# \* Swagger API Documentation

# 

# \## API Endpoints

# 

# \### Authentication

# 

# \* POST /auth/signup

# \* POST /auth/login

# 

# \### Todos

# 

# \* POST /todos

# \* GET /todos

# \* PUT /todos/:id

# \* DELETE /todos/:id

# 

# \### Health Check

# 

# \* GET /health

# 

# \## Docker

# 

# Build Image:

# 

# docker build -t todo-api .

# 

# Run Container:

# 

# docker run -p 3000:3000 todo-api

# 

# \## AWS Services Used

# 

# \* Amazon ECS Fargate

# \* Amazon ECR

# \* Amazon RDS PostgreSQL

# \* Application Load Balancer

# \* CloudWatch Logs

# 

# \## CI/CD

# 

# GitHub Actions Pipeline:

# 

# 1\. Checkout Source Code

# 2\. Build Docker Image

# 3\. Push Image to Amazon ECR

# 4\. Deploy to Amazon ECS

# 

# \## Public URL

# 

# Health Endpoint:

# 

# http://todo-api-alb-1542586732.ap-south-1.elb.amazonaws.com/health

# 

# Swagger UI:

# 

# http://todo-api-alb-1542586732.ap-south-1.elb.amazonaws.com/api-docs

# 

# \## Monitoring

# 

# CloudWatch Logs are used for application logs and ECS metrics are used for CPU and memory monitoring.

# 

