# Shield India Frontend

A modern React Vite frontend application for Shield India Industrial Protection Solutions. This application provides a comprehensive interface for managing industrial safety equipment, categories, protection types, and employees.

## Features

- **Modern UI/UX**: Built with React 18 and Vite for fast development and optimal performance
- **Authentication System**: Secure login/logout functionality with protected routes
- **Dashboard**: Comprehensive admin dashboard with statistics and quick actions
- **CRUD Operations**: Full Create, Read, Update, Delete functionality for all entities
- **Responsive Design**: Mobile-first approach with custom CSS utilities
- **Real-time Search**: Advanced search and filtering capabilities
- **Modern Icons**: Beautiful icons using Lucide React

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Custom CSS with utility classes (Tailwind-like)
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **State Management**: React Hooks

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend Spring Boot application running on port 8080

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Access the application:**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:8080

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Authentication

- Admin login is required to access protected routes
- Authentication state is stored in localStorage
- Protected routes automatically redirect to login page
- Demo credentials: username: `admin`, password: `admin123`

## Features Overview

### Dashboard
- Statistics overview (items, categories, protection types, employees)
- Quick action cards for common tasks
- Recent items table
- System status and performance metrics

### Items Management
- Complete CRUD operations
- Advanced search and filtering
- Category and protection type filtering
- Image support for products

### Categories Management
- Category creation and management
- Protection type association
- Item count display
- Search and filtering

### Protection Types Management
- Protection type configuration
- Description and metadata management
- Category and item associations

### Employees Management
- Employee account management
- Role-based access control (Admin, Manager, Employee)
- Department and designation tracking
- Search and filtering by role/department

## API Endpoints

The frontend communicates with the Spring Boot backend on port 8080:

- `/api/items` - Product management
- `/api/categories` - Category management  
- `/api/protection-types` - Protection type management
- `/api/employees` - Employee management and authentication

## Deployment

### Build for Production
```bash
npm run build
```

The built files in the `dist/` directory can be deployed to any static hosting service.

## Support

For support and questions, please contact:
- Email: info@shieldindia.com
- Phone: +91 123 456 7890
