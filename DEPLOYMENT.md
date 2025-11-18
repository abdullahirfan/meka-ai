# 🚀 Deploy Meka AI to GitHub Pages - Step by Step Guide

## Prerequisites

Before you begin, you need:
1. A GitHub account ([Sign up here](https://github.com/join))
2. Git installed on your computer

## Option 1: Using GitHub Desktop (Easiest)

### Step 1: Install GitHub Desktop
1. Download from: https://desktop.github.com/
2. Install and open GitHub Desktop
3. Sign in with your GitHub account

### Step 2: Add Your Project
1. In GitHub Desktop, click **File** → **Add Local Repository**
2. Click **Choose...** and select: `/Users/abdullahirfan/Projects/meka-ai`
3. Click **Add Repository**
4. If prompted "This directory does not appear to be a Git repository", click **Create a Repository**

### Step 3: Publish to GitHub
1. Click **Publish repository** button in the top bar
2. Enter repository name: `meka-ai`
3. Add description: "Meka AI - Award Winning AI Solution Provider"
4. Uncheck "Keep this code private" (or keep it checked if you want it private)
5. Click **Publish Repository**

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub: `https://github.com/YOUR-USERNAME/meka-ai`
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Source**, select **main** branch
5. Click **Save**
6. Wait 1-2 minutes for deployment
7. Your site will be live at: `https://YOUR-USERNAME.github.io/meka-ai/`

---

## Option 2: Using Terminal (For Advanced Users)

### Step 1: Install Git
```bash
# Check if Git is installed
git --version

# If not installed, install Xcode Command Line Tools
xcode-select --install
```

### Step 2: Navigate to Project
```bash
cd /Users/abdullahirfan/Projects/meka-ai
```

### Step 3: Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: Meka AI website"
```

### Step 4: Create GitHub Repository
1. Go to: https://github.com/new
2. Repository name: `meka-ai`
3. Description: "Meka AI - Award Winning AI Solution Provider"
4. Choose Public or Private
5. **DO NOT** check "Initialize this repository with a README"
6. Click **Create repository**

### Step 5: Push to GitHub
```bash
# Replace YOUR-USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR-USERNAME/meka-ai.git
git branch -M main
git push -u origin main
```

### Step 6: Enable GitHub Pages
1. Go to: `https://github.com/YOUR-USERNAME/meka-ai`
2. Click **Settings** → **Pages**
3. Under **Source**, select **main** branch
4. Click **Save**
5. Your site will be at: `https://YOUR-USERNAME.github.io/meka-ai/`

---

## Option 3: Using the Automated Script

We've created a deployment script for you!

### Run the Script
```bash
cd /Users/abdullahirfan/Projects/meka-ai
./deploy.sh
```

Follow the prompts to enter your GitHub username and repository name.

---

## Troubleshooting

### "Git is not installed"
- **macOS**: Run `xcode-select --install` in Terminal
- **Download**: https://git-scm.com/downloads

### "Permission denied (publickey)"
You need to set up SSH keys or use HTTPS with a personal access token:
1. Go to: https://github.com/settings/tokens
2. Click **Generate new token (classic)**
3. Give it a name and select **repo** scope
4. Copy the token
5. When pushing, use: `https://YOUR-TOKEN@github.com/YOUR-USERNAME/meka-ai.git`

### "Repository already exists"
If you already created the repository on GitHub:
```bash
git remote add origin https://github.com/YOUR-USERNAME/meka-ai.git
git push -u origin main
```

### "Updates were rejected"
If the remote has changes you don't have locally:
```bash
git pull origin main --rebase
git push -u origin main
```

---

## Updating Your Live Site

After making changes to your website:

### Using GitHub Desktop
1. Open GitHub Desktop
2. Review your changes
3. Enter a commit message
4. Click **Commit to main**
5. Click **Push origin**
6. Changes will be live in 1-2 minutes

### Using Terminal
```bash
cd /Users/abdullahirfan/Projects/meka-ai
git add .
git commit -m "Update website content"
git push
```

---

## Custom Domain (Optional)

To use a custom domain like `www.meka-ai.com`:

1. Buy a domain from a registrar (GoDaddy, Namecheap, etc.)
2. In your repository, create a file named `CNAME` with your domain:
   ```
   www.meka-ai.com
   ```
3. In your domain registrar's DNS settings, add:
   - **Type**: CNAME
   - **Name**: www
   - **Value**: YOUR-USERNAME.github.io
4. Wait for DNS propagation (up to 24 hours)

---

## Support

If you encounter any issues:
1. Check GitHub's documentation: https://docs.github.com/en/pages
2. GitHub Pages status: https://www.githubstatus.com/
3. Contact GitHub Support: https://support.github.com/

---

## Your Website URLs

After deployment, your website will be available at:

- **GitHub Pages**: `https://YOUR-USERNAME.github.io/meka-ai/`
- **Repository**: `https://github.com/YOUR-USERNAME/meka-ai`

Replace `YOUR-USERNAME` with your actual GitHub username.

---

**🎉 Congratulations! Your Meka AI website is now live!**
