# Use Docker Node image version
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy code from project to the working directory
COPY . .

# Run the app on this port
EXPOSE 3000

# Start the development server
CMD npm run dev