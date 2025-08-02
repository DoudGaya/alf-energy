#!/bin/bash

# Sanity Setup Script for Alfuttaim Energy

echo "🚀 Setting up Sanity for Alfuttaim Energy..."

# Check if Sanity CLI is installed
if ! command -v sanity &> /dev/null; then
    echo "Installing Sanity CLI..."
    npm install -g @sanity/cli
fi

echo "📝 To complete the setup:"
echo ""
echo "1. Create a Sanity account at https://sanity.io"
echo "2. Run 'sanity init' in your project directory"
echo "3. Choose 'Create new project'"
echo "4. Enter project name: 'Alfuttaim Energy'"
echo "5. Choose 'Yes' to use TypeScript"
echo "6. Select 'Clean project with no predefined schemas'"
echo "7. Copy the project ID from the output"
echo "8. Update your .env.local file with:"
echo "   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here"
echo ""
echo "9. Visit http://localhost:3000/studio to access your CMS"
echo ""
echo "✅ After setup, you can:"
echo "   - Add news articles"
echo "   - Upload gallery images"
echo "   - Manage content categories"
echo ""
echo "📖 Documentation: https://www.sanity.io/docs"
