# E-Commerce Frontend Assignment

Created a modern, responsive e-commerce web app built with Next.js, Tailwind CSS, Zustand, and lucide-react.

## Features

- **Home Page**: Product grid with filters (category, price, color), search with debouncing, and beautiful UI.
- **Product Detail Page**: Carousel, quantity selector, add-to-cart, and reviews section.
- **Cart Page**: Update quantity, remove items, price summary, and persistent cart state (localStorage).
- **Dynamic Routing**: Product detail pages use dynamic routes.
- **State Management**: Cart and filters managed with Zustand, with localStorage persistence.
- **URL Sync**: Filters and search sync with URL query params.
- **Styling**: Tailwind CSS for rapid, consistent design. Custom color themes (purple for filters, green for product grid/Running Shoes).
- **Icons**: lucide-react for modern, lightweight icons.
- **Image Handling**: Uses Next.js `<Image />` with images referenced by path from `/public`.
- **Production Ready**: Deployed on Vercel with optimized build settings.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [lucide-react](https://lucide.dev/)
- [Vercel](https://vercel.com/) (deployment)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Xerox563/Whatbytes-Assignment.git
cd frontend-whatbytes
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

### 4. Build for production

```bash
npm run build
npm start
```

## Deployment

This project is ready for deployment on [Vercel](https://vercel.com/):

1. Push your code to GitHub.
2. Import the repo in Vercel and follow the prompts.
3. If you encounter image or `sharp` errors, ensure all images in `/public` are referenced by path, not imported.
4. For persistent build errors, add the following to `next.config.js`:
   ```js
   eslint: { ignoreDuringBuilds: true },
   typescript: { ignoreBuildErrors: true },
   ```

## Customization

- **Colors**: Edit `tailwind.config.js` or use Tailwind classes in components.
- **Products**: Update mock product data in `/src/data/products.ts` (or similar).
- **Images**: Place images in `/public` and reference them by path (e.g., `/logo.png`).

## Troubleshooting

- **Image Import Errors**: Never import images from `/public`—use string paths in `<Image src="/your-image.png" />`.
- **OneDrive Issues**: Avoid running the project from a OneDrive folder to prevent file lock errors.
- **Build Fails on Vercel**: See the Deployment section above.

## License

This project is for educational/demo purposes. Contact the author for other uses.
