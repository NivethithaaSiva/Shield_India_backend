# Shield India Frontend

A React-based frontend for the Shield India Industrial Protection Solutions web application.

## Features

- **Customer View**: Public page to browse products without authentication
- **Admin Dashboard**: Protected admin interface for managing products, categories, and employees
- **Employee Authentication**: Secure login system for admin access
- **Modern UI**: Built with Tailwind CSS and Lucid React icons

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Backend Spring Boot application running on port 8080

### Installation

1. **Install dependencies:**
   ```bash
   cd SI_WEBPAGE
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Access the application:**
   - Customer View: http://localhost:3000
   - Admin Login: http://localhost:3000/login
   - Admin Dashboard: http://localhost:3000/admin (requires login)

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── ProtectedRoute.js
│   ├── Navbar.js
│   └── Sidebar.js
├── pages/              # Page components
│   ├── Login.js
│   ├── AdminDashboard.js
│   ├── CustomerView.js
│   └── Dashboard.js
├── services/           # API services
│   └── api.js
├── App.js             # Main app component
└── index.js           # Entry point
```

## API Endpoints

The frontend communicates with the Spring Boot backend on port 8080:

- `/api/items` - Product management
- `/api/categories` - Category management  
- `/api/protection-types` - Protection type management
- `/api/employees` - Employee management and authentication

## Authentication

- Admin login is required to access the admin dashboard
- Customer view is publicly accessible
- Authentication state is stored in localStorage

## Styling

- Tailwind CSS for styling
- Lucid React for icons
- Custom CSS classes defined in `src/index.css` 