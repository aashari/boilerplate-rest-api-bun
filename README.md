# Boilerplate REST API with Bun

This repository, `boilerplate-rest-api-bun`, is a template for setting up a REST API using Bun, a fast all-in-one JavaScript runtime. It features Elysia as the core framework for handling HTTP requests and integrates MongoDB for data persistence.

## Features

- **Elysia Framework**: Utilizes Elysia for efficient request handling.
- **MongoDB Integration**: Comes with MongoDB setup for database management.
- **Error Handling**: Robust error handling and logging mechanism.
- **Environment Configuration**: Supports `.env` for environment variables.
- **Data Models and DTOs**: Includes predefined data models and DTOs for Authors and Posts.

## Project Structure

```
src/
|- _mongo/
|  |- index.ts
|  |- model.author.ts
|  |- model.posts.ts
|- authors/
|  |- dto.ts
|- posts/
|  |- dto.ts
|  |- index.ts
|  |- service.ts
|- types.ts
|- index.ts
```

- `src/` - Main source code directory.
- `_mongo/` - MongoDB connection and model definitions.
- `authors/` - DTOs for author data.
- `posts/` - REST API endpoints, services, and DTOs for posts.
- `types.ts` - Type definitions and extensions.
- `index.ts` - Main application entry point.

## Getting Started

### Prerequisites

- Bun
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aashari/boilerplate-rest-api-bun.git
   ```
2. Navigate to the project directory:
   ```bash
   cd boilerplate-rest-api-bun
   ```
3. Install dependencies:
   ```bash
   bun install
   ```
4. Set up your `.env` file with the necessary environment variables.

### Running the Application

1. Start the server:
   ```bash
   bun run dev
   ```
2. The server should now be running on the specified port.

## API Endpoints

- `GET /posts` - Retrieve a list of posts.
- Additional endpoints as defined in your routes.

## Contributing

Contributions are welcome. Please follow the standard fork and pull request workflow.

## License

This project is open-sourced under the [MIT License](LICENSE).
