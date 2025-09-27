# Shield India Frontend - No Database Required

This is a simplified version of the Shield India frontend that works without any database connection.

## 🚀 Quick Start

### Option 1: Use the batch file (Windows)
```bash
# Double-click or run:
start_frontend.bat
```

### Option 2: Manual commands
```bash
# Navigate to the frontend directory
cd SI_WEBPAGE

# Install dependencies
npm install

# Start the development server
npm start
```

## 🌐 Access the Application

- **Main Page**: http://localhost:3000
- **Test Page**: http://localhost:3000/test

## ✨ Features

- ✅ **Product Catalog**: Browse industrial protection products
- ✅ **Search & Filter**: Find products by name, category, or protection type
- ✅ **Responsive Design**: Works on mobile and desktop
- ✅ **Modern UI**: Built with Tailwind CSS and Lucid React icons
- ✅ **No Database Required**: Uses mock data for demonstration

## 📱 What You Can Do

1. **Browse Products**: View a catalog of industrial safety equipment
2. **Search Products**: Use the search bar to find specific items
3. **Filter by Category**: Filter by Fire Extinguishers, Safety Gloves, etc.
4. **Filter by Protection Type**: Filter by Fire Protection, Electrical Protection, etc.
5. **View Product Details**: See specifications and product codes
6. **Contact Information**: View company contact details

## 🛠️ Sample Products Included

- ABC Fire Extinguisher 5kg
- Smoke Detector
- MCB 32A Circuit Breaker
- Chemical Resistant Gloves
- Safety Helmet
- Safety Boots

## 🔧 Troubleshooting

### If you see "Us is not defined" error:
- This has been fixed in the current version
- Make sure you're using the latest code

### If npm install fails:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### If the page is blank:
- Check browser console (F12) for errors
- Make sure you're on http://localhost:3000
- Try refreshing the page

## 📁 Project Structure

```
SI_WEBPAGE/
├── src/
│   ├── pages/
│   │   ├── CustomerView.js    # Main product catalog
│   │   └── TestPage.js        # Simple test page
│   ├── components/            # Reusable components
│   ├── App.js                # Main app component
│   └── index.js              # Entry point
├── package.json              # Dependencies
└── start_frontend.bat        # Quick start script
```

## 🎯 Next Steps

Once the frontend is working, you can:
1. Add more products to the mock data
2. Customize the styling
3. Add more features like shopping cart
4. Connect to the backend when the database is ready

## 📞 Support

If you encounter any issues:
1. Check the browser console (F12) for error messages
2. Make sure Node.js is installed
3. Try running `npm install` again
4. Restart the development server

---

**Enjoy your Shield India frontend! 🛡️** 