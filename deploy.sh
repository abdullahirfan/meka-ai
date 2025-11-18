#!/bin/bash

# Meka AI - GitHub Pages Deployment Script
# This script helps you deploy your website to GitHub Pages

echo "🚀 Meka AI - GitHub Pages Deployment"
echo "===================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed!"
    echo ""
    echo "Please install Git first:"
    echo "  macOS: Run 'xcode-select --install' in Terminal"
    echo "  Or download from: https://git-scm.com/downloads"
    echo ""
    exit 1
fi

echo "✅ Git is installed"
echo ""

# Check if already a git repository
if [ -d ".git" ]; then
    echo "✅ Git repository already initialized"
else
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized"
fi

echo ""
echo "📝 Please enter your GitHub username:"
read github_username

if [ -z "$github_username" ]; then
    echo "❌ GitHub username is required!"
    exit 1
fi

echo ""
echo "📝 Please enter your repository name (default: meka-ai):"
read repo_name

if [ -z "$repo_name" ]; then
    repo_name="meka-ai"
fi

echo ""
echo "📋 Configuration:"
echo "  GitHub Username: $github_username"
echo "  Repository Name: $repo_name"
echo "  Your site will be at: https://$github_username.github.io/$repo_name/"
echo ""

echo "Do you want to continue? (y/n)"
read confirm

if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
    echo "❌ Deployment cancelled"
    exit 0
fi

echo ""
echo "📦 Adding files to Git..."
git add .

echo "💾 Creating commit..."
git commit -m "Deploy Meka AI website to GitHub Pages"

echo "🔗 Adding remote repository..."
git remote remove origin 2>/dev/null
git remote add origin "https://github.com/$github_username/$repo_name.git"

echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📋 Next steps:"
echo "1. Go to: https://github.com/$github_username/$repo_name"
echo "2. Click 'Settings' → 'Pages'"
echo "3. Under 'Source', select 'main' branch"
echo "4. Click 'Save'"
echo "5. Your site will be live at: https://$github_username.github.io/$repo_name/"
echo ""
echo "🎉 Done!"
