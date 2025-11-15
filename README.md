# WordCamp Asia 2026
Setup guide for the WordCamp Asia 2026 theme.

## CSS Build Process

This project uses a modular CSS structure with separate files organized in folders:
- `utils/` - Global utility styles
- `layouts/` - Layout-specific styles (announcement, hero-banner, tickets)
- `pages/` - Page-specific styles (attendees, posts, sponsors, organizer, new-home-page)

The main `style.css` file imports all these modules using `@import` statements.

### Building the Minified CSS

To compile and minify all CSS files into `style.min.css`:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the minified CSS:**
   ```bash
   npm run build
   ```

   This will:
   - Resolve all `@import` statements in `style.css`
   - Combine all CSS files in the correct order
   - Minify the output
   - Generate `style.min.css`

3. **Watch mode (auto-rebuild on changes):**
   ```bash
   npm run build:watch
   ```

### File Structure

```
├── style.css              # Main CSS file with @import statements
├── style.min.css          # Generated minified CSS (gitignored)
├── utils/
│   └── global.css         # Global utility styles
├── layouts/
│   ├── announcement.css
│   ├── hero-banner.css
│   └── tickets.css
└── pages/
    ├── attendees.css
    ├── new-home-page.css
    ├── organizer.css
    ├── posts.css
    └── sponsors.css
```
