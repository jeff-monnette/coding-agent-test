# Frontend

React frontend for the coding-agent-test project, built with Vite.

## Features

- React 19 with Vite for fast development
- Organized folder structure (components, pages, services, assets)
- API service layer for backend communication
- Sample page that demonstrates backend connectivity
- ESLint and Prettier configured

## Installation

```bash
cd frontend
npm install
```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## API Integration

The frontend communicates with the backend running on `http://localhost:3001`. Make sure the backend server is running before starting the frontend.

## Project Structure

```
frontend/
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/          # Page components
│   ├── services/       # API service layer
│   ├── assets/         # Static assets
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Application entry point
├── public/             # Static public files
└── package.json        # Dependencies and scripts
```

## Development

- Run `npm run lint` to check code style
- Run `npm run lint:fix` to auto-fix linting issues
- Run `npm run format` to format code with Prettier

## Environment

The frontend is configured to connect to the backend at `http://localhost:3001`. Modify the `API_BASE_URL` in `src/services/api.js` if your backend runs on a different port.
