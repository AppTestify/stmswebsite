# St. Teresa's Primary Teachers Education College Website

A modern, responsive, and SEO-friendly website for St. Teresa's Primary Teachers Education College, Bettiah built with React.js, Vite, and Tailwind CSS.

## Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🚀 **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and Twitter Card support
- 🎯 **Accessibility** - WCAG compliant with proper semantic HTML
- 🌙 **Dark Mode** - Optional dark/light mode toggle
- 📸 **Image Gallery** - Filterable gallery with lightbox functionality
- 📝 **Dynamic Content** - JSON-based content management
- 🔍 **Search Functionality** - Search through notices and gallery
- 📱 **Mobile Navigation** - Responsive navigation with mobile menu

## Tech Stack

- **Frontend**: React.js 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.13
- **Routing**: React Router DOM 7.9.3
- **Icons**: React Icons 5.5.0
- **Development**: ESLint for code quality

## Project Structure

```
st-teresa-website/
├── public/
│   └── images/           # Static images and assets
├── src/
│   ├── assets/           # Images, logos, backgrounds
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── layouts/          # Page layouts
│   │   └── DefaultLayout.jsx
│   ├── pages/            # Main pages
│   │   ├── Home/         # Home page components
│   │   │   ├── Hero.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── FacilitiesSection.jsx
│   │   │   ├── GalleryPreview.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── NewsNotices.jsx
│   │   ├── About.jsx
│   │   ├── Academics.jsx
│   │   ├── Infrastructure.jsx
│   │   ├── Admissions.jsx
│   │   ├── Gallery.jsx
│   │   ├── Notices.jsx
│   │   ├── Contact.jsx
│   │   └── Error404.jsx
│   ├── data/             # JSON data files
│   │   ├── notices.js
│   │   ├── gallery.js
│   │   └── facilities.js
│   ├── hooks/            # Custom React hooks
│   │   └── useDarkMode.js
│   ├── App.jsx           # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd stteresa_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Pages Overview

### 🏠 Home Page
- Hero section with college branding
- About section with key statistics
- Facilities preview with modern cards
- Gallery preview with filtering
- Student testimonials carousel
- Latest notices section

### 📖 About Page
- Principal's message
- Vision and mission statements
- College history timeline
- Achievement statistics
- Prospectus download

### 🎓 Academics Page
- Program details (B.Ed & D.El.Ed)
- Curriculum structure
- Assessment methods
- Faculty information

### 🏢 Infrastructure Page
- Modern facilities showcase
- Technology infrastructure
- Campus tour section
- Safety and security features

### 📝 Admissions Page
- Admission process steps
- Eligibility criteria
- Fee structure table
- Online application form
- Contact information

### 📸 Gallery Page
- Filterable image gallery
- Lightbox functionality
- Category-based filtering
- Search functionality

### 📢 Notices Page
- Searchable notices
- Category filtering
- Priority-based sorting
- PDF download links

### 📞 Contact Page
- Contact information
- Interactive contact form
- Location map
- FAQ section

## Customization

### Adding New Content

1. **Notices**: Update `src/data/notices.js`
2. **Gallery Images**: Update `src/data/gallery.js`
3. **Facilities**: Update `src/data/facilities.js`

### Styling

The project uses Tailwind CSS for styling. You can customize:
- Colors in the component files
- Typography using Tailwind classes
- Spacing and layout
- Dark mode colors

### SEO Optimization

The website includes:
- Meta tags for search engines
- Open Graph tags for social sharing
- Twitter Card support
- Structured data ready for implementation

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact:
- Email: info@stptedbettiah.com
- Phone: +91-XXXX-XXXXXX

---

**St. Teresa's Primary Teachers Education College**  
*Shaping the future of education through excellence in teacher training*