# Shield India - Business Website

A modern, responsive business website for Shield India Industrial Solutions, built with React and Tailwind CSS.

## Features

### 🏠 **Home Page**
- Hero section with company introduction
- Features and benefits showcase
- Company statistics
- Services preview
- Call-to-action sections

### 📄 **About Page**
- Company mission and vision
- Core values
- Company timeline and milestones
- Leadership team
- Company statistics

### 🛠️ **Services Page**
- Comprehensive service offerings
- Service categories with detailed features
- Process workflow
- Why choose us section
- Consultation request

### 📦 **Products Page**
- Product catalog with categories
- Filter and search functionality
- Product details and pricing
- Category overview
- Quote request

### 📞 **Contact Page**
- Contact form with validation
- Company contact information
- Business hours and location
- Emergency support details
- Interactive map placeholder

### 🔐 **Admin Dashboard**
- Business statistics and metrics
- Recent activities tracking
- Quick action buttons
- Safety metrics visualization
- Project management overview

## Pages Structure

```
/                   - Home page
/about              - About us page
/services            - Services page
/products            - Products page
/contact             - Contact page
/login               - Admin login
/dashboard           - Admin dashboard (protected)
```

## Technology Stack

- **React 18** - Frontend framework
- **React Router** - Navigation and routing
- **Tailwind CSS** - Styling and responsive design
- **Lucide React** - Modern icons
- **Local Storage** - Simple authentication

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Navigate to the frontend directory:**
   ```bash
   cd SI_WEBPAGE
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

### Quick Start (Windows)
Run the provided batch file:
```bash
start_frontend.bat
```

## Admin Access

### Login Credentials
- **Username:** `admin`
- **Password:** `admin123`

### Dashboard Features
- View business statistics
- Monitor recent activities
- Access quick actions
- Track safety metrics
- Manage projects and clients

## Website Features

### 🎨 **Modern Design**
- Clean, professional appearance
- Responsive design for all devices
- Consistent branding with Shield India theme
- Smooth animations and transitions

### 📱 **Mobile Responsive**
- Optimized for mobile devices
- Touch-friendly navigation
- Responsive grid layouts
- Mobile-first approach

### ⚡ **Performance**
- Fast loading times
- Optimized images and assets
- Efficient component structure
- Minimal bundle size

### 🔍 **SEO Ready**
- Semantic HTML structure
- Meta tags and descriptions
- Clean URL structure
- Accessible design

## Customization

### Colors and Branding
The website uses a primary color scheme that can be customized in the Tailwind configuration:
- Primary: Blue shades (#2563eb, #1d4ed8, etc.)
- Secondary: Gray shades for text and backgrounds
- Accent: Various colors for different sections

### Content Management
- All content is stored in component files
- Easy to update text, images, and links
- Modular component structure
- Reusable components

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.js`
3. Update navigation in `src/components/Navbar.js`
4. Add link in footer if needed

## File Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Navigation bar
│   ├── Footer.js       # Footer component
│   └── ProtectedRoute.js # Route protection
├── pages/              # Page components
│   ├── Home.js         # Home page
│   ├── About.js        # About page
│   ├── Services.js     # Services page
│   ├── Products.js     # Products page
│   ├── Contact.js      # Contact page
│   ├── Login.js        # Login page
│   └── Dashboard.js    # Admin dashboard
├── App.js              # Main app component
└── index.js            # App entry point
```

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify** - Drag and drop the `build` folder
- **Vercel** - Connect your GitHub repository
- **GitHub Pages** - Use the `gh-pages` package
- **Traditional hosting** - Upload the `build` folder to your server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Support

For technical support or questions about the website:
- Check the console for any errors
- Ensure all dependencies are installed
- Verify Node.js version compatibility
- Contact the development team

## License

This project is proprietary to Shield India Industrial Solutions.

---

**Shield India** - Your trusted partner for industrial safety and protection solutions. 