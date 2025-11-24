# ✨ The Sparkling Cleaners

A modern, responsive website for The Sparkling Cleaners - a professional cleaning services company based in the UK.

## 🎨 Features

- **Modern React Application** - Built with React 18 and Vite for fast development and optimal performance
- **Flat UI Design** - Clean, modern interface with intuitive navigation
- **Light Blue Theme** - Professional color scheme reflecting cleanliness and trust
- **Responsive Design** - Mobile-first approach ensuring great experience on all devices
- **SEO Optimized** - Proper meta tags and semantic HTML structure

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed on your machine
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/josephmuchie/thesparklingcleaners.git
   cd thesparklingcleaners
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the website

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
thesparklingcleaners/
├── public/
│   ├── cleaning-icon.svg      # Favicon
│   └── ...
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Footer.jsx       # Site footer
│   │   └── Hero.jsx         # Homepage hero section
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Homepage
│   │   ├── About.jsx        # About page
│   │   ├── Services.jsx     # Services page
│   │   └── Contact.jsx      # Contact page
│   ├── styles/              # CSS stylesheets
│   │   ├── index.css        # Global styles and variables
│   │   └── App.css          # Component-specific styles
│   ├── assets/              # Static assets (images, etc.)
│   ├── App.jsx              # Main app component
│   └── main.jsx             # React entry point
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
└── vite.config.js          # Vite configuration
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#3498db`
- **Primary Light**: `#5dade2`
- **Primary Dark**: `#2980b9`
- **Secondary**: `#e3f2fd`
- **Accent**: `#f39c12`

### Typography
- Font Family: Inter, system fonts
- Flat UI principles with clean, readable text
- Consistent spacing and hierarchy

### Components
- Responsive navigation with mobile menu
- Card-based layouts for services
- Call-to-action buttons with hover effects
- Contact forms with validation

## 📱 Pages Included

1. **Homepage** - Hero section, service overview, and call-to-action
2. **About** - Company story, mission, values, and statistics
3. **Services** - Detailed cleaning service offerings with pricing
4. **Contact** - Contact form, business information, and service areas

## 🔧 Customization

### Updating Colors
Edit CSS variables in `src/styles/index.css`:
```css
:root {
  --primary-color: #3498db;
  --primary-light: #5dade2;
  --primary-dark: #2980b9;
  /* ... */
}
```

### Adding New Pages
1. Create component in `src/pages/`
2. Import and add route in `src/App.jsx`
3. Update navigation in `src/components/Header.jsx`

### Modifying Services
Update the services array in `src/pages/Services.jsx` to modify offerings, pricing, and descriptions.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The `dist` folder will contain the production-ready files.

### Deploy to Vercel, Netlify, or similar
1. Build the project
2. Upload the `dist` folder to your hosting provider
3. Configure your domain and SSL

## 📞 Business Information

**The Sparkling Cleaners**
- Phone: +44 123 456 7890
- Email: info@sparklingcleaners.co.uk
- Areas: London, Manchester, Birmingham & Nationwide UK
- Hours: Mon-Fri 8AM-6PM, Sat 9AM-4PM

## 📄 License

Copyright © 2025 The Sparkling Cleaners. All rights reserved.

## 🤝 Contributing

This is a business website template. For customizations or improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Support

For questions about this template or customization needs, please contact the development team.