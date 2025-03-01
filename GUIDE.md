# Comprehensive Guide: Running and Testing the Boilerplate REST API

This guide provides step-by-step instructions for running the Boilerplate REST API with Bun and testing it using `curl` commands. This is perfect for beginners who want to understand how to work with a REST API.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Setting Up the Project](#setting-up-the-project)
3. [Running the API in the Background](#running-the-api-in-the-background)
4. [Testing the API with curl](#testing-the-api-with-curl)
5. [Stopping the API and Cleaning Up](#stopping-the-api-and-cleaning-up)
6. [Troubleshooting](#troubleshooting)

## Prerequisites

Before you begin, make sure you have the following installed:

- [Bun](https://bun.sh/) - JavaScript runtime
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) - For running MongoDB
- [curl](https://curl.se/) - For testing the API endpoints

## Setting Up the Project

### Step 1: Clone the repository

```sh
git clone https://github.com/aashari/boilerplate-rest-api-bun.git
cd boilerplate-rest-api-bun
```

### Step 2: Set up environment variables

```sh
# Copy the example environment file
cp .env.example .env
```

The default configuration in `.env` should work with the provided Docker Compose setup:

```
# Server Configuration
PORT=3000
SERVER_NAME=boilerplate-rest-api-bun

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017
MONGODB_DATABASE=boilerplate_db

# Environment
NODE_ENV=development
```

### Step 3: Start MongoDB using Docker Compose

```sh
docker-compose up -d
```

This command starts MongoDB and Mongo Express in detached mode. You can access Mongo Express at http://localhost:8081 to manage your MongoDB database through a web interface.

### Step 4: Install dependencies

```sh
bun install
```

## Running the API in the Background

### Option 1: Using nohup (recommended for production-like environments)

```sh
# Start the API in the background and redirect output to app.log
nohup bun run dev > app.log 2>&1 &

# Check the logs to verify the API is running
tail -f app.log
```

You should see output similar to:
```
$ bun run --watch src/index.ts
[mongo.ts] 🦊 attempting to connect to MongoDB at mongodb://localhost:27017/boilerplate_db
[index.ts] 🦊 successfully started Elysia server on localhost:3000
[mongo.ts] 🦊 successfully connected to MongoDB
```

Press `Ctrl+C` to stop watching the logs (this won't stop the API).

### Option 2: Using a separate terminal (recommended for development)

```sh
# Start the API in the foreground
bun run dev
```

## Testing the API with curl

Now that the API is running, you can test the endpoints using `curl` commands.

### 1. Test the root endpoint

```sh
curl -X GET http://localhost:3000/
```

Expected response:
```json
{"status":200,"message":"🤖 🇮🇩 hello world!"}
```

### 2. Working with Authors

#### Create a new author

```sh
curl -X POST http://localhost:3000/authors \
  -H "Content-Type: application/json" \
  -d '{"username": "johndoe"}'
```

Expected response (note the `_id` will be different):
```json
{
  "status": 200,
  "result": {
    "username": "johndoe",
    "created_at": "2025-03-01T03:08:39.568Z",
    "_id": "67c27a6efbe6324cba9634a7",
    "__v": 0
  }
}
```

Save the `_id` value for later use.

#### Get all authors

```sh
curl -X GET http://localhost:3000/authors
```

#### Get a specific author by ID

```sh
curl -X GET http://localhost:3000/authors/YOUR_AUTHOR_ID
```

Replace `YOUR_AUTHOR_ID` with the `_id` from the create author response.

#### Update an author

```sh
curl -X PUT http://localhost:3000/authors/YOUR_AUTHOR_ID \
  -H "Content-Type: application/json" \
  -d '{"username": "johndoe_updated"}'
```

### 3. Working with Posts

#### Create a new post

```sh
curl -X POST http://localhost:3000/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Post",
    "content": "This is the content of my first post",
    "author": "YOUR_AUTHOR_ID"
  }'
```

Replace `YOUR_AUTHOR_ID` with the `_id` from the create author response.

#### Get all posts

```sh
curl -X GET http://localhost:3000/posts
```

#### Get a specific post by ID

```sh
curl -X GET http://localhost:3000/posts/YOUR_POST_ID
```

Replace `YOUR_POST_ID` with the `_id` from the create post response.

#### Update a post

```sh
curl -X PUT http://localhost:3000/posts/YOUR_POST_ID \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Post Title",
    "content": "This is the updated content of my first post"
  }'
```

#### Delete a post

```sh
curl -X DELETE http://localhost:3000/posts/YOUR_POST_ID
```

#### Delete an author

```sh
curl -X DELETE http://localhost:3000/authors/YOUR_AUTHOR_ID
```

## Stopping the API and Cleaning Up

### Step 1: Stop the API

```sh
# Find the process ID
ps aux | grep "bun run dev"

# Kill the process
kill YOUR_PROCESS_ID
```

Or, if you know there's only one Bun process running:

```sh
pkill -f "bun run dev"
```

### Step 2: Stop and remove Docker containers

```sh
docker-compose down
```

To also remove the volumes (this will delete all data in MongoDB):

```sh
docker-compose down -v
```

## Troubleshooting

### MongoDB Connection Issues

If you see errors like "Authentication failed" or "Connection refused":

1. Check if MongoDB is running:
   ```sh
   docker ps
   ```

2. Verify your `.env` file has the correct MongoDB URI:
   ```
   MONGODB_URI=mongodb://localhost:27017
   ```

3. Try restarting the MongoDB container:
   ```sh
   docker-compose restart mongodb
   ```

### API Not Starting

If the API fails to start:

1. Check the logs:
   ```sh
   tail -f app.log
   ```

2. Verify that all dependencies are installed:
   ```sh
   bun install
   ```

3. Make sure the port is not already in use:
   ```sh
   lsof -i :3000
   ```

### curl Command Issues

If curl commands are not working:

1. Verify the API is running:
   ```sh
   curl http://localhost:3000/
   ```

2. Check for typos in your commands, especially in IDs and JSON syntax.

3. Ensure you're using the correct HTTP method (GET, POST, PUT, DELETE).

## Next Steps

Now that you've successfully set up and tested the Boilerplate REST API, you can:

1. Explore the code to understand how it works
2. Add new features or endpoints
3. Integrate with a frontend application
4. Deploy to a production environment

Happy coding! 