# Honghui Chen - Personal Academic Website

A professional academic portfolio website showcasing research interests, publications, and photography.

## 🌐 Live Website
Visit: [https://choras.github.io](https://choras.github.io)

## 📋 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Research Portfolio**: Showcases AI for Psychology and Clinical Psychology research
- **Publications**: Academic papers and conference presentations
- **Photography Gallery**: Personal, landscape, and documentary photography with lightbox viewer
- **Side Navigation**: Fixed navigation that follows scroll position
- **Interactive UI**: Smooth scrolling, hover effects, and animations

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- Vanilla JavaScript
- Google Fonts (Crimson Text, Lato)

## 📁 Project Structure

```
.
├── index.html              # Main homepage
├── photography.html        # Photography gallery page
├── styles.css             # Main stylesheet
├── script.js              # JavaScript functionality
├── CV-Honghui Chen-0925.pdf  # Curriculum Vitae
├── pic/                   # Images directory
│   ├── BG.jpeg           # Homepage background
│   ├── BG2.JPG           # Photography page background
│   ├── CV.png            # CV icon
│   ├── personal2.jpg     # Profile photo
│   ├── logos/            # Institution logos
│   ├── Personal/         # Personal photography
│   ├── landscape/        # Landscape photography
│   └── Documentary/      # Documentary photography
└── README.md             # This file
```

## 🚀 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Name it: `choras.github.io` (must be exactly this format)
5. Set to **Public**
6. **Do NOT** initialize with README (we already have one)
7. Click **"Create repository"**

### Step 2: Initialize Git and Push

Open Terminal in this project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit with message
git commit -m "Initial commit: Personal academic website"

# Add remote repository
git remote add origin https://github.com/choras/choras.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository: `https://github.com/choras/choras.github.io`
2. Click on **"Settings"** tab
3. Scroll down to **"Pages"** section (left sidebar)
4. Under **"Source"**, select **"main"** branch
5. Click **"Save"**
6. Wait 1-2 minutes for deployment

Your website will be live at: **https://choras.github.io**

### Alternative: Using GitHub Desktop

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. Click **"Add an Existing Repository"**
4. Choose this project folder
5. Click **"Publish repository"**
6. Make sure the name is `choras.github.io`
7. Uncheck **"Keep this code private"**
8. Click **"Publish repository"**

## 🔄 Updating the Website

Whenever you make changes to your website:

```bash
# Stage all changes
git add .

# Commit changes
git commit -m "Update: description of changes"

# Push to GitHub
git push
```

GitHub Pages will automatically rebuild and deploy your site within 1-2 minutes.

## 📝 Customization

### Updating Personal Information

- Edit `index.html` for homepage content
- Modify `styles.css` for styling changes
- Update `script.js` for functionality changes

### Adding Photos

1. Place images in appropriate folders in `pic/`
2. Update `photography.html` to reference new images
3. Follow the existing structure for grid items

### Updating CV

Replace `CV-Honghui Chen-0925.pdf` with your updated CV file (keep the same filename or update the link in `index.html`)

## 🌟 Key Sections

1. **Home**: Introduction and social media links
2. **Interests**: Research focus areas
3. **Skills**: Technical capabilities
4. **Education**: Academic background
5. **Publications**: Research papers
6. **Conferences**: Presentations and talks
7. **Awards**: Recognition and honors
8. **Photography**: Visual portfolio
9. **Experience**: Professional background
10. **About**: Personal story and philosophy

## 📧 Contact

- **Email**: Listed on website
- **GitHub**: [https://github.com/choraschan](https://github.com/choraschan)
- **LinkedIn**: [Choras Chan](https://www.linkedin.com/in/choras-chan-33b7502b7/)

## 📄 License

© 2025 Honghui Chen. This work is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

---

**Note**: Make sure all image files are properly uploaded to GitHub. Large files (>100MB) should be handled with Git LFS if necessary.
