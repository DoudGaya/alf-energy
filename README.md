# Alfuttaim Energy Website

A modern, responsive website for Alfuttaim Energy built with Next.js, TypeScript, and Sanity CMS.

## Features

- ✨ **Animated Counters** - Eye-catching statistics with smooth animations
- 📰 **News Management** - Full CMS for news articles with pagination
- 🖼️ **Gallery System** - Image gallery with modal viewer and categories
- 🗺️ **Interactive Maps** - Google Maps integration for project locations
- 📱 **Responsive Design** - Mobile-first, fully responsive design
- 🌙 **Dark Mode** - Theme switching capability
- 🔍 **SEO Optimized** - Meta tags, OG images, and structured data
- 📊 **CMS Integration** - Sanity CMS for content management
- 🚀 **Performance** - Optimized images and fast loading

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Maps**: Google Maps JavaScript API
- **Animations**: Framer Motion

## Setup Instructions

### 1. Environment Variables

Copy the `.env.local` file and fill in your values:

```bash
# Google Maps API key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key

# Sanity Configuration  
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# SEO
GOOGLE_SITE_VERIFICATION=your_google_verification_code
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Sanity CMS

1. Create a Sanity account at [sanity.io](https://sanity.io)
2. Run the setup script:
   ```bash
   ./setup-sanity.sh
   ```
3. Follow the prompts to create a new project
4. Update your `.env.local` with the project ID

### 4. Google Maps Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable the Maps JavaScript API
4. Create an API key
5. Add the key to your `.env.local`

### 5. Run Development Server

```bash
npm run dev
```

Visit:
- Website: http://localhost:3000
- Sanity Studio: http://localhost:3000/studio

## Content Management

### Adding News Articles

1. Go to http://localhost:3000/studio
2. Click "News" in the sidebar
3. Create a new document with:
   - Title
   - Slug (auto-generated)
   - Overview (short description)
   - Featured image
   - Body content
   - Categories
   - Publish date

### Managing Gallery

1. Go to http://localhost:3000/studio
2. Click "Gallery" in the sidebar
3. Upload images with:
   - Title
   - Description
   - Image file
   - Category

## Page Structure

```
/                 - Homepage with stats, news, gallery
/about           - About page
/services        - Services page
/projects        - Projects with map integration
/news            - News listing with pagination
/news/[slug]     - Individual news articles
/gallery         - Image gallery with modal
/contact         - Contact page
/studio          - Sanity CMS (admin only)
```

## Key Components

- `AnimatedCounter` - Statistics with scroll-triggered animations
- `NewsSection` - Homepage news preview
- `GallerySection` - Homepage gallery preview
- `ProjectMap` - Interactive Google Maps
- `ShareButtons` - Social media sharing
- `GalleryGrid` - Gallery with modal viewer

## SEO Features

- Dynamic OG image generation
- Structured metadata
- Twitter Cards
- Open Graph tags
- Sitemap generation
- robots.txt

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Make sure to:
1. Set all environment variables
2. Configure build settings
3. Set up domain and SSL

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For support or questions:
- Email: support@alfuttaim-energy.com
- Documentation: [Next.js](https://nextjs.org/docs) | [Sanity](https://www.sanity.io/docs)

## License

© 2024 Alfuttaim Energy. All rights reserved.
