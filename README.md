# Boilerplate REST API using Bun

This repository contains a boilerplate for building a REST API using the [Bun](https://bun.sh/) runtime, an alternative to Node.js designed to be faster and more efficient. The project is structured using `Elysia`, a minimalist web framework for Bun, and `mongoose` for MongoDB object modeling.

## Features

- **Elysia Framework**: Utilizes Elysia for handling HTTP requests and middleware.
- **MongoDB Integration**: Includes MongoDB setup and models for authors and posts.
- **Error Handling**: Implements a middleware for error handling and response standardization.
- **Environment Variable Support**: Configured to use environment variables for database connections and server configurations.
- **Docker Support**: Ready to be containerized for deployment using Docker.

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your system.
- MongoDB database.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/aashari/boilerplate-rest-api-bun.git
   ```

2. Navigate to the project directory:
   ```sh
   cd boilerplate-rest-api-bun
   ```

3. Install dependencies:
   ```sh
   bun install
   ```

4. Set up your environment variables by creating a `.env` file based on the `.env.example`.

5. Start the server:
   ```sh
   bun run dev
   ```

## Usage

The API provides endpoints for managing posts and authors:

- `GET /posts`: Retrieve all posts.
- `POST /posts`: Create a new post.
- `GET /posts/:id`: Retrieve a post by ID.
- `PUT /posts/:id`: Update a post by ID.
- `DELETE /posts/:id`: Delete a post by ID.

## Structure

- `src/index.ts`: Main application file where the server is configured and started.
- `src/_mongo/`: Contains MongoDB connection setup and models.
- `src/posts/`: Houses the posts-related routes and services.
- `src/authors/`: (If exists) Should contain author-related functionality.
- `src/types.ts`: Defines types and DTOs (Data Transfer Objects).

## Contributing

Contributions to improve this boilerplate are welcome. Please adhere to the following steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
5. Push to the branch (`git push origin feature/AmazingFeature`).
6. Open a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.
