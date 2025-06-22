# Logo Setup Guide

## Adding Your Logo

1. **Replace the placeholder logo file:**
   - Navigate to `SI_WEBPAGE/public/logo.png`
   - Replace the placeholder file with your actual Shield India Industrial Solutions logo

2. **Logo specifications:**
   - **Format:** PNG (preferred) or JPG
   - **Size:** 200x200 pixels or larger (recommended: 400x400)
   - **Background:** Transparent background preferred
   - **Quality:** High resolution for crisp display

3. **Logo placement:**
   The logo will automatically appear in:
   - **Favicon:** Browser tab icon
   - **Navbar:** Top navigation bar
   - **Footer:** Bottom of the page
   - **Home page:** Hero section

4. **Fallback:**
   If the logo fails to load, the system will automatically show a shield icon as a fallback.

## Current Configuration

The logo is configured in:
- `public/index.html` - Favicon and page title
- `src/components/Navbar.js` - Navigation bar logo
- `src/components/Footer.js` - Footer logo
- `src/pages/Home.js` - Hero section logo

## Testing

After adding your logo:
1. Start the frontend: `npm start`
2. Check that the logo appears in all locations
3. Verify the favicon shows in the browser tab
4. Test on different screen sizes to ensure proper scaling

## Company Name

The website is configured for "Shield India Industrial Solutions" and will display:
- "Shield India" as the main brand name
- "Industrial Solutions" as the subtitle 