#!/bin/bash

# Deployment script for GitHub Pages
# Usage: ./deploy.sh "commit message"

echo "🚀 Deploying to GitHub Pages..."

# Check if commit message is provided
if [ -z "$1" ]; then
    COMMIT_MSG="Update website"
else
    COMMIT_MSG="$1"
fi

echo "📝 Commit message: $COMMIT_MSG"

# Add all changes
echo "📦 Staging changes..."
git add .

# Commit
echo "💾 Committing changes..."
git commit -m "$COMMIT_MSG"

# Push to GitHub
echo "🌐 Pushing to GitHub..."
git push origin main

echo "✅ Deployment complete!"
echo "🔗 Your site will be live at: https://choras.github.io"
echo "⏳ Please wait 1-2 minutes for GitHub Pages to rebuild"
