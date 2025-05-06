# Full-Stack MERN CRUD Sample
This is a template to create a full-stack MERN CRUD application. 
It is a simple application that allows you to create, read, update 
and delete a list of items. It is a good starting point 
for a full-stack MERN application.

Contrary to popular MERN using MongoDB, 
this template uses MySQL as the database.
This assumes that you need MySQL for your project, like
if you need a lot of joins and connections among the tables.

## Getting Started

### Using GitHub Codespaces

This project is configured to work seamlessly with GitHub Codespaces, allowing you to develop entirely in the browser without any local setup.

1. **Open in Codespaces**:
   - Click the "Code" button on the GitHub repository
   - Select the "Codespaces" tab
   - Click "Create codespace on main"

2. **Setting up the Environment**:
   - Copy the environment configuration file:
     ```bash
     cp backend-api/env.example backend-api/.env
     ```
   - Install all dependencies from the root directory:
     ```bash
     npm install
     ```
   - migrate the BE and whenver you need to refresh it:
     ```bash
     cd backend-api && npx knex migrate:rollback --all && npx knex migrate:latest && npx knex seed:run && cd ..
     ```

3. **Run the Application**:

   From the root directory, run both frontend and backend:
   ```bash
   npm run dev
   ```

5. **Access the Application**:
   - The frontend application will be available on port 3000
     - Look for the "PORTS" tab in the bottom panel of VS Code
     - Right-click on port 3000
     - Select "Port Visibility" → "Public"
   - The application will now be accessible from your browser
   - Click on the "Open in Browser" button for port 3000 in the PORTS tab
   - Backend API is available on port 5000 (remains private as it's only accessed by the frontend)

   **Note:** From time to time, there can be odd behavior when forwarding
     ports like `3000`. Try a hard refresh, reopen the tab, or toggle the
     port visibility (e.g., switch between **Private** and **Public**)
     if it doesn't respond as expected.

6. **Optional - Run Services Separately**:

   to run only the backend:
   ```bash
   npm run backend
   ```

   to run only the frontend:
   ```bash
   npm run frontend
   ```

### Local Development Setup

Please make sure that you have MySQL installed on your machine.
And have the MySQL server running. 
Create a database called `personal_details`.

### Backend
once your cmd is at the root of the project,

`cd backend-api`

create a file called .env and copy the contents of env.example to it
if you rename from .env.example to .env, there will be a commit and this 
can lead to confusion because .env should not be committed

or simply

`cp env.example .env`

then 

`npm install`

then run the rollback , migrations and seeder 
in one cmd line in powershell

`npx knex migrate:rollback --all; npx knex migrate:latest; npx knex seed:run`

or 

`npx knex migrate:rollback --all && npx knex migrate:latest && npx knex seed:run`

then run the server

`node server.js`

### Frontend
then open a new cmd and cd to the root of the project

`cd frontend-app`

`npm install`

`npm start`

open your browser and go to http://localhost:3000

## Interacting with the Database

We all know that in development, having easy access to interact with the database is crucial.

### Local Setup
In your local environment, you can use MySQL along with PHPMyAdmin for 
managing your database. I’m using this setup for this project as well.

### Codespace Setup
In Codespaces, I included the **SQLTools** extension to simplify database interactions. 
This extension allows you to easily connect to and manage MySQL (or other databases) 
directly within VS Code, making it convenient for working in a cloud-based development environment.

## Full Stack Features

### Node.js As Backend API Server
As the usual backend server for a MERN stack application,
this template uses Node.js with Express.js as the backend API server.

### Express.js for Routing
Express.js is used for routing. This is considered as the standard
for routing in Node.js.

### MySQL for Database
MySQL is used as the database. This is one of the most popular database
for web applications. It is a relational database. This is in
contrast to MongoDB which is a NoSQL database.

### React.js for Frontend
React.js is used for the frontend. This is one of the most popular
frontend frameworks for web applications. It is a component-based
framework. It is in contrast to Angular which is a MVC framework.

### Knex.js for Query Builder
Knex.js is used as the query builder for MySQL. This is a popular
query builder for Node.js. It is in contrast to Sequelize which is
an ORM for Node.js. Also, this almost looks like Laravel's query builder.

### Modular Approach
Modular approach is achieved by manually separating files
and folders appropriately. This is in contrast to Laravel
which has a lot of files and folders out of the box and 
the NWidart Laravel Modules package which has a modular
approach for Laravel.

### No Authentication
This template does not have authentication. This is because
the focus of this template is to show how to do CRUD in MERN.
Adding authentication is a different topic and mostly will
depend on your requirements or in a team company directions.

### No Input Validation & Sanitization
This template does not have input validation and sanitization.
Not all applications need validation and sanitization because
they add an overhead to the development. But if you need it,
or your team decides to add it, there are a lot of packages
that you can use to add this feature.

### No Unit Testing
This template does not have unit testing. This is because
the focus of this template is to show how to do CRUD in MERN.
Adding unit testing is a different topic and mostly will
depend on your requirements or in a team company directions.

## MERN vs Laravel
As for what I feel, they are almost similar in terms of the
development experience. The only difference is that Laravel
has a lot of features out of the box. While MERN has a lot of
packages that you can use to build your application. Meaning,
in MERN, you need to install them as you need them, while Laravel
by default already has this.

For example, I started using Postman to test my endpoints.
I used the usual Key-Value pair to send data to the server in
the body. To my surprise, it did not work. I had to install
a package called body-parser to make it work. While in Laravel,
it works out of the box. Or in MERN to avoid installing
body-parser, you can use the way of sending data to the server
using JSON format.
