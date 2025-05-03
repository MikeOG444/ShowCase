# Contributing to ShowCase

Thank you for considering contributing to ShowCase! This document outlines the process for contributing to the project and helps ensure a smooth collaboration experience for everyone involved.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. We expect all contributors to be respectful, inclusive, and considerate of others.

## Getting Started

1. **Fork the repository** on GitHub.
2. **Clone your fork** to your local machine.
3. **Set up the development environment** by following the instructions in the README.md.
4. **Create a new branch** for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-you-are-fixing
   ```

## Development Workflow

### Branching Strategy

We follow a trunk-based development approach:

- `main` branch is always deployable
- Feature branches should be short-lived and merged frequently
- Use descriptive branch names prefixed with `feature/`, `fix/`, `docs/`, etc.

### Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

Types include:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: Code changes that neither fix a bug nor add a feature
- `perf`: Performance improvements
- `test`: Adding or correcting tests
- `chore`: Changes to the build process or auxiliary tools

Example:
```
feat(activity-logging): add GPS verification for check-ins

Implements the GPS-based location verification for activity check-ins.
This allows users to verify they were physically present at an activity.

Closes #123
```

### Pull Request Process

1. **Update your branch** with the latest changes from `main`:
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Run tests** to ensure your changes don't break existing functionality:
   ```bash
   npm test
   ```

3. **Update documentation** if necessary, including:
   - Code comments
   - README updates
   - API documentation
   - User guides

4. **Submit a pull request** to the `main` branch with:
   - A clear title following the commit message format
   - A description that explains the changes and their purpose
   - Reference to any related issues (e.g., "Closes #123")

5. **Address review feedback** promptly and make requested changes.

6. **Once approved**, a maintainer will merge your pull request.

## Code Standards

### TypeScript/JavaScript

- Follow the ESLint configuration in the project
- Use TypeScript for type safety
- Write unit tests for new functionality
- Document public APIs with JSDoc comments

### Python (Backend)

- Follow PEP 8 style guide
- Use type hints
- Write unit tests for new functionality
- Document functions and classes with docstrings

### CSS/Styling

- Use the design token system for all visual styles
- Follow the atomic design pattern for components
- Ensure responsive design works across target devices

## Testing

- Write unit tests for all new functionality
- Include integration tests for API endpoints
- Add end-to-end tests for critical user flows
- Ensure tests pass before submitting a pull request

## Documentation

- Update documentation for any changes to APIs or user-facing features
- Keep the README up to date
- Document complex logic or algorithms
- Add comments for non-obvious code

## Questions?

If you have any questions or need help with the contribution process, please:
- Open an issue with the "question" label
- Reach out to the maintainers
- Check existing documentation and discussions

Thank you for contributing to ShowCase!
