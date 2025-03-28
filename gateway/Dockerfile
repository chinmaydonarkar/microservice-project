# Use an optimized Node.js image
FROM node:latest AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Copy application code
COPY . .

# Expose port for the Gateway service
EXPOSE 6000

# Start the service
CMD ["node", "src/server.js"]
