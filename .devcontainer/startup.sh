#!/bin/bash
set -e

# Initialize .env file for backend
echo "Setting up backend environment..."
cd /workspace/backend-api
if [ ! -f .env ]; then
  cp env.example .env
  sed -i 's/DB_PASSWORD=/DB_PASSWORD=password/' .env
fi

# Install backend dependencies
echo "Installing backend dependencies..."
npm install

# Run database migrations and seed
echo "Setting up database..."
npx knex migrate:latest
npx knex seed:run

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd /workspace/frontend-app
npm install

echo "Setup complete! You can now start the application:"
echo "- Backend: cd /workspace/backend-api && node server.js"
echo "- Frontend: cd /workspace/frontend-app && npm start"
echo "- Or run both: cd /workspace && npm run dev"