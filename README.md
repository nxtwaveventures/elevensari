# 11Sari Website

A modern e-commerce website for traditional Indian sarees and suits.

## Project Structure

```
11sari/
├── src/
│   ├── styles/
│   │   ├── main.css        # Core styles and design system
│   │   └── custom-pages.css # Page-specific styles
│   ├── js/
│   │   ├── utils.js        # Utility functions
│   │   └── search.js       # Search functionality
│   ├── pages/             # HTML pages
│   └── components/        # Reusable HTML components
├── public/
│   ├── assets/
│   │   ├── images/
│   │   ├── fonts/
│   │   └── icons/
│   └── index.html        # Entry point
└── README.md
```

## Design System

The project uses a minimalistic design system with:

- CSS variables for consistent styling
- Modular JavaScript with utility functions
- Responsive design breakpoints
- Reusable components

### CSS Variables

Key design tokens are defined in `src/styles/main.css`:

- Colors (primary, accent, neutrals)
- Typography (fonts, sizes)
- Spacing
- Shadows
- Borders
- Transitions

### JavaScript Modules

- `utils.js`: Common utility functions
- `search.js`: Search functionality with real-time filtering

## Development

1. Clone the repository
2. No build step required - this is a simple static site
3. Open `public/index.html` in your browser

## Best Practices

- Use CSS variables for consistency
- Keep JavaScript modular and minimal
- Follow BEM naming convention for CSS
- Optimize images before adding to assets
- Keep code DRY (Don't Repeat Yourself)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for all screen sizes
- Progressive enhancement approach

## Performance

The website is optimized for performance:

- Minimal JavaScript
- Optimized images
- CSS variables for efficient styling
- Lazy loading for images
- Debounced search functionality

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - see LICENSE file for details 