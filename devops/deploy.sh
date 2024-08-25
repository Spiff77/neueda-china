#!/bin/bash

if [ -d "music-app" ]; then
  rm -rf music-app
fi

# Set the repository URL
REPO_URL="http://github.com/Spiff77/music-app"

# Clone the repository
echo "Cloning the repository from $REPO_URL..."
git clone $REPO_URL || { echo "Failed to clone repository"; exit 1; }

# Navigate into the repository directory
cd music-app || { echo "Failed to enter repository directory"; exit 1; }

# Install, test, and start for music-back-end
echo "Handling music-back-end..."
cd music-back-end || { echo "Failed to enter music-back-end directory"; exit 1; }

echo "Installing dependencies..."
npm install || { echo "Failed to install dependencies for music-back-end"; exit 1; }

echo "Running tests..."
npm test || { echo "Tests failed for music-back-end"; exit 1; }

echo "Starting the application..."
npm start &

# Go back to the root directory
cd .. || { echo "Failed to return to the root directory"; exit 1; }

# Install, test, and start for music-front-end
echo "Handling music-front-end..."
cd music-front-end || { echo "Failed to enter music-front-end directory"; exit 1; }

echo "Installing dependencies..."
npm install || { echo "Failed to install dependencies for music-front-end"; exit 1; }

if [ -d "__test__" ]; then
    echo "Running tests..."
    npm test || { echo "Tests failed for $dir"; exit 1; }
else
    echo "__test__ directory not found. Skipping tests for $dir."
fi
echo "Starting the application..."
npm start &

# Wait for both background processes to complete
wait

echo "Deployment completed successfully."

