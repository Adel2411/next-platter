# Use the official Node.js image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your files (including .env)
COPY . .

# Build Next.js
RUN npm run build

# Expose desired port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
