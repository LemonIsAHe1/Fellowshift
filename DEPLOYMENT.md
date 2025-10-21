# Deployment Guide

This guide will help you deploy the Fellowship Rotation Assistant to GitHub Pages.

## Initial Setup

### 1. Push to GitHub Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Fellowship Rotation Assistant"

# Add your GitHub repository as remote
git remote add origin https://github.com/LemonIsAHe1/Fellowshift.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository: https://github.com/LemonIsAHe1/Fellowshift
2. Click on **Settings** tab
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - Source: Select **GitHub Actions**
5. The GitHub Actions workflow will automatically deploy your site

### 3. Wait for Deployment

- The workflow will run automatically after you push to main
- Check the **Actions** tab to see the deployment progress
- Once complete, your site will be live at: **https://lemonisahe1.github.io/Fellowshift/**

## Making Updates

After the initial setup, any time you want to update the site:

```bash
# Make your changes to the code

# Stage changes
git add .

# Commit with a descriptive message
git commit -m "Add new feature or fix"

# Push to GitHub
git push
```

The site will automatically rebuild and redeploy!

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (test before deploying)
npm run build

# Preview production build locally
npm run preview
```

## Troubleshooting

### If GitHub Pages doesn't work:

1. Make sure GitHub Pages is set to "GitHub Actions" in Settings > Pages
2. Check that the workflow file exists at `.github/workflows/deploy.yml`
3. Verify the workflow ran successfully in the Actions tab
4. Wait a few minutes after the first deployment

### If you see 404 errors:

- Make sure the `base` in `vite.config.ts` matches your repository name
- It should be `base: '/Fellowshift/'` (with slashes)

## Custom Domain (Optional)

If you want to use a custom domain:

1. Go to Settings > Pages
2. Under "Custom domain", enter your domain
3. Update `vite.config.ts` to remove or change the `base` setting
4. Configure DNS records with your domain provider

## Repository Information

- **Repository**: https://github.com/LemonIsAHe1/Fellowshift
- **Live Site**: https://lemonisahe1.github.io/Fellowshift/
- **Game Info**: https://www.method.gg/fellowship

