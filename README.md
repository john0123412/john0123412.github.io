# john0123412.github.io

Personal portfolio built with Vue 3 + Vite, deployed via GitHub Actions to GitHub Pages.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
```

## Deployment

Push to `main` triggers GitHub Actions which builds and deploys automatically.

## Security

- No backend, no forms, no user input accepted
- CSP headers restrict all external resource loading
- X-Frame-Options DENY prevents clickjacking
- No third-party scripts or tracking
