# Backend

Node.js backend for the coding-agent-test project.

## Features

- Express.js server
- CORS enabled for frontend communication
- Environment configuration with dotenv
- Organized folder structure (routes, controllers, models, middleware)
- ESLint and Prettier configured

## Installation

```bash
cd backend
npm install
```

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/hello` - Sample API endpoint

## Project Structure

```
backend/
├── routes/          # Express routes
├── controllers/     # Route controllers
├── models/          # Data models
├── middleware/      # Custom middleware
├── server.js        # Main server file
└── package.json     # Dependencies and scripts
```

## Development

- Run `npm run lint` to check code style
- Run `npm run lint:fix` to auto-fix linting issues
- Run `npm run format` to format code with Prettier