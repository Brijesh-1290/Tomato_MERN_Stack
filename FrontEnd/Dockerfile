# Step 1: Build the React app

FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve the built app using 'serve'

FROM node:18-alpine
WORKDIR /app
# Install 'serve' globally
RUN npm install -g serve
# Copy built files from previous stage
COPY --from=build /app/build ./build
EXPOSE 3000
# Serve the app
CMD ["serve", "-s", "build", "-l", "3000"]