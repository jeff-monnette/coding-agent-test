# coding-agent-test

Full-stack application with Node.js backend and React frontend, organized as a monorepo.

## Project Structure

```
coding-agent-test/
├── backend/            # Node.js Express backend
│   ├── routes/         # API routes
│   ├── controllers/    # Route controllers
│   ├── models/         # Data models
│   ├── middleware/     # Custom middleware
│   ├── server.js       # Main server file
│   └── package.json    # Backend dependencies
├── frontend/           # React frontend with Vite
│   ├── src/
│   │   ├── components/ # Reusable components
│   │   ├── pages/      # Page components
│   │   ├── services/   # API services
│   │   └── assets/     # Static assets
│   └── package.json    # Frontend dependencies
├── package.json        # Root package.json with scripts
└── README.md          # This file
```

## Quick Start

### Prerequisites
- Node.js (>=16.0.0)
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd coding-agent-test
```

2. Install all dependencies:
```bash
npm run install:all
```

### Development

Start both backend and frontend in development mode:
```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:3001`
- Frontend development server on `http://localhost:5173`

### Individual Commands

#### Backend Only
```bash
npm run dev:backend    # Start backend in development mode
npm run start:backend  # Start backend in production mode
```

#### Frontend Only
```bash
npm run dev:frontend   # Start frontend in development mode
npm run start:frontend # Serve built frontend
```

### Building for Production

```bash
npm run build
```

### Code Quality

```bash
npm run lint    # Lint both projects
npm run format  # Format code with Prettier
```

## API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/hello` - Sample API endpoint

## Features

### Backend
- Express.js server with CORS enabled
- Organized folder structure
- Environment configuration with dotenv
- ESLint and Prettier configured
- Sample API endpoints

### Frontend
- React 19 with Vite
- API service layer for backend communication
- Sample page demonstrating backend connectivity
- ESLint and Prettier configured
- Responsive design

## Development Workflow

1. Make changes to backend or frontend code
2. Both servers will automatically reload during development
3. The frontend will display backend status and sample API data
4. Use `npm run lint` to check code quality
5. Use `npm run format` to format code

## Deployment

For production deployment:
1. Run `npm run build` to build the frontend
2. Deploy the backend to your server
3. Serve the built frontend files from `frontend/dist`
4. Update API_BASE_URL in frontend if needed