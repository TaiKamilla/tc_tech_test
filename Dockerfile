FROM node:alpine

# Make directory
RUN mkdir -p /usr/src/todo-service \
# Give permissions
&& chown -R node:node /usr/src/todo-service

# Set working directory
WORKDIR /usr/src/todo-service

# Copy package.json and package-lock.json
COPY package*.json ./

# Change user
USER node

# RUN npm install

# Copy source code
COPY --chown=node:node . .

# Expose port
EXPOSE 3000
