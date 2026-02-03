#!/bin/bash

# Personal Website - GitHub Setup Script
# Run this script to push your website to GitHub

echo "🚀 Setting up GitHub repository..."

# Change to project directory
cd "$(dirname "$0")"

# Initialize git if not already done
if [ ! -d .git ]; then
    git init
    git add .
    git commit -m "Initial commit: Personal website for product designer"
fi

# Create GitHub repository (you'll need gh CLI or create manually at https://github.com/new)
echo ""
echo "📝 To complete setup:"
echo "1. Create a new repository at https://github.com/new"
echo "   - Name: 'Personal-Website' or 'personal-website'"
echo "   - Description: 'A modern personal portfolio website for a product designer'"
echo "   - Set to Public"
echo "   - DO NOT initialize with README, .gitignore, or license"
echo ""
echo "2. Then run these commands:"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""

# Ask user for GitHub username and repo name
read -p "Enter your GitHub username: " GH_USERNAME
read -p "Enter your repository name (e.g., personal-website): " REPO_NAME

# Add remote and push
git remote add origin "https://github.com/$GH_USERNAME/$REPO_NAME.git"
git branch -M main
git push -u origin main

echo ""
echo "✅ Website pushed to https://github.com/$GH_USERNAME/$REPO_NAME"
echo ""
echo "🌐 To enable GitHub Pages:"
echo "1. Go to your repository Settings"
echo "2. Click 'Pages' in the left sidebar"
echo "3. Under 'Branch', select 'main' and '/ (root)'"
echo "4. Click Save"
echo ""
echo "Your site will be live at: https://$GH_USERNAME.github.io/$REPO_NAME/"
