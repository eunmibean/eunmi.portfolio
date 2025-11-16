# Personal Portfolio Website

A clean, modern, and responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript.

## Features

- **Multi-tab Navigation**: Home, About, Experience, Projects, Skills, Contact
- **Responsive Design**: Works on all devices and screen sizes
- **Modern UI**: Clean, professional design with smooth transitions
- **Contact Form**: Functional contact form with validation
- **Easy to Customize**: Well-commented code for easy content updates

## File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── style.css           # All CSS styles and responsive design
├── script.js           # JavaScript for navigation and form handling
└── README.md           # This file
```

## Deployment to GitHub Pages

Follow these steps to deploy your portfolio to GitHub Pages:

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., `your-username.github.io` or `portfolio`)
4. Make sure it's set to "Public"
5. Check "Add a README file"
6. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface**
1. In your new repository, click "uploading an existing file"
2. Drag and drop all your portfolio files (`index.html`, `style.css`, `script.js`)
3. Add a commit message like "Add portfolio website files"
4. Click "Commit changes"

**Option B: Using Git Commands**
```bash
# Clone the repository
git clone https://github.com/your-username/your-repository-name.git

# Navigate to the folder
cd your-repository-name

# Copy your portfolio files into this folder
# Then add, commit, and push
git add .
git commit -m "Add portfolio website files"
git push origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, go to "Settings" (top navigation)
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Select "main" branch and "/ (root)" folder
5. Click "Save"

### Step 4: Access Your Website

- Your website will be available at: `https://your-username.github.io/your-repository-name/`
- If you named your repository `your-username.github.io`, it will be at: `https://your-username.github.io/`

⚠️ **Note**: It may take a few minutes for your site to be live after the first deployment.

## Customization Guide

### Update Personal Information

**In `index.html`:**

1. **Header/Navigation**: Replace "Your Name" in the logo section
2. **Hero Section**: Update name, title, and description
3. **About Section**: Replace placeholder text with your story
4. **Experience Section**: Add your work experiences in the timeline
5. **Projects Section**: Add your projects with descriptions and links
6. **Skills Section**: Update with your actual skills
7. **Contact Section**: Add your real contact information

### Key sections to customize:

```html
<!-- Update your name -->
<h1>Your Name</h1>

<!-- Update hero content -->
<h2 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h2>
<p class="hero-subtitle">Your Job Title</p>

<!-- Update contact info -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="tel:+1234567890">+1 (234) 567-890</a>
```

### Add Your Projects

Replace the example projects in the Projects section:

```html
<div class="project-card">
    <div class="project-image">
        <!-- Add actual project image or screenshot -->
        <img src="path-to-your-image.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Your project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="your-demo-link" class="project-link">Live Demo</a>
            <a href="your-github-link" class="project-link">GitHub</a>
        </div>
    </div>
</div>
```

### Update Colors and Styling

**In `style.css`:**

- **Primary Color**: Change `#2563eb` to your preferred color
- **Accent Color**: Update `#fbbf24` for highlights
- **Background**: Modify gradient colors in `.hero` section

### Add Resume Download

1. Add your resume PDF to the repository
2. Update the resume link in the Contact section:

```html
<a href="your-resume.pdf" class="btn primary" download>Download Resume</a>
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## License

This project is open source and available under the [MIT License](LICENSE).

## Need Help?

If you encounter any issues:

1. Check that all file paths are correct
2. Ensure files are properly uploaded to GitHub
3. Verify GitHub Pages is enabled in repository settings
4. Check browser console for any JavaScript errors

For additional support, feel free to create an issue in this repository.