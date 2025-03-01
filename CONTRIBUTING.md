# Contributing to Boilerplate REST API using Bun

Thank you for considering contributing to this project! Here are some guidelines to help you get started.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct, which is to be respectful and constructive in all interactions.

## How Can I Contribute?

### Reporting Bugs

- Check if the bug has already been reported in the [Issues](https://github.com/aashari/boilerplate-rest-api-bun/issues)
- If not, create a new issue using the bug report template
- Include as much detail as possible, including steps to reproduce, expected behavior, and your environment

### Suggesting Enhancements

- Check if the enhancement has already been suggested in the [Issues](https://github.com/aashari/boilerplate-rest-api-bun/issues)
- If not, create a new issue using the feature request template
- Describe the enhancement in detail, including the motivation and potential implementation

### Pull Requests

1. Fork the repository
2. Create a new branch for your feature or bugfix: `git checkout -b feature/your-feature-name` or `git checkout -b fix/your-bugfix-name`
3. Make your changes
4. Run tests if available
5. Commit your changes with a descriptive commit message
6. Push to your branch
7. Submit a pull request to the `main` branch

## Development Setup

1. Clone the repository
2. Install dependencies with `bun install`
3. Set up environment variables by copying `.env.example` to `.env`
4. Start MongoDB using Docker Compose: `./api.sh mongo-up`
5. Start the development server: `bun run dev`

## Coding Guidelines

- Follow the existing code style
- Write clear, descriptive commit messages
- Add comments for complex logic
- Update documentation when necessary

## Testing

- Add tests for new features when possible
- Ensure all tests pass before submitting a pull request

## Documentation

- Update the README.md if your changes require it
- Add JSDoc comments to new functions and classes

Thank you for your contributions! 