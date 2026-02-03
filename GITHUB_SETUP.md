# Personal Website Setup Guide

## Option 1: Using GitHub CLI (if installed)

```bash
cd ~/Desktop/Wei/Personal\ Website
gh repo create Personal-Website --public --description "A modern personal portfolio website for a product designer"
git push -u origin main
```

## Option 2: Manual Setup

1. **Create GitHub Repository**
   - Go to: https://github.com/new
   - Repository name: `Personal-Website`
   - Description: `A modern personal portfolio website for a product designer`
   - Set to: **Public**
   - ✅ DO NOT check: "Add a README file"
   - ✅ DO NOT check: "Add .gitignore"
   - ✅ DO NOT check: "Choose a license"
   - Click "Create repository"

2. **Push to GitHub**
   ```bash
   cd ~/Desktop/Wei/Personal\ Website
   git remote add origin https://github.com/YOUR_USERNAME/Personal-Website.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository → Settings → Pages
   - Branch: `main`
   - Folder: `/(root)`
   - Click Save
   - Your site will be live at: `https://YOUR_USERNAME.github.io/Personal-Website/`

## Quick Commands (after creating repo)

```bash
cd ~/Desktop/Wei/Personal\ Website

# If repo doesn't have a remote yet:
git remote add origin https://github.com/YOUR_USERNAME/Personal-Website.git

# Push to GitHub:
git push -u origin main
```

## Local Development

To view the website locally:

```bash
cd ~/Desktop/Wei/Personal\ Website

# Using Python
python3 -m http.server 8000

# Then open http://localhost:8000 in your browser
```

Or simply open `index.html` directly in your browser.
