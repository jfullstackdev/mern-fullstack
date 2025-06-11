# MERN Stack Backend

This is the backend portion of the MERN stack application, supporting:

- MySQL (for Personal Details)
- Express.js API server

## Project Structure

- `/routes` - API route handlers
  - `/personal-details` - MySQL-based API routes
- `/utils` - Utility functions including database connections
- `/database` - MySQL migrations and seeds

## Features

- MySQL database support
- RESTful API endpoints
- Error handling middleware
- Environment-based configuration

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start

# Lint code
npm run lint

# Format code with Prettier
npm run format
```

## Environment Configuration

The server uses environment variables loaded from `config.env` (committed to version control with default values) and optionally from `.env` (for secrets, not committed):

- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `DB_HOST` - MySQL host
- `DB_USER` - MySQL username
- `DB_PASSWORD` - MySQL password
- `DB_NAME` - MySQL database name

## API Endpoints

### MySQL Personal Details

- `GET /personal-details` - Get all personal details
- `POST /personal-details` - Create a new personal details entry
- `PUT /personal-details/:id` - Update an existing entry
- `DELETE /personal-details/:id` - Delete an entry

## Database Connections

The application connects to:

- MySQL via Knex.js
