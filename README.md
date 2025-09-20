# Blueshores
Blueshores repo. DEVELOPING HYBRID MULTIFUNCTIONAL FORESHORE INFRASTRUCTURE THAT OPTIMISES ENVIRONMENTAL AND BLUE ECONOMY BENEFITS (BLUE-SHORES)

## Website

The project website is built using Jekyll and deployed via GitHub Pages from the `/docs` directory.

- **Site URL**: [https://blueshoresweb.github.io/Blueshores/](https://blueshoresweb.github.io/Blueshores/)
- **Source**: The website content is maintained in the `/docs` folder
- **Deployment**: Automatic deployment to GitHub Pages on commits to the `main` branch

### Local Development

To work with the website locally:

1. Install Jekyll and dependencies
2. Navigate to the `/docs` directory 
3. Run `bundle install` to install dependencies
4. Run `bundle exec jekyll serve` to start the development server
5. View the site at `http://localhost:4000`

### Site Structure

- **Home** (`/`) - Project overview and navigation
- **Objectives** (`/objectives`) - Project goals and approach
- **Case Studies** (`/case-studies/`) - Research locations and findings
- **News** (`/news/`) - Updates and announcements
- **About** (`/about`) - Project information and team details

## Development

### GitHub Copilot Configuration

This repository includes GitHub Copilot instructions to help contributors and maintainers work effectively with the Jekyll-based website. The configuration includes:

- **`.github/copilot-instructions.md`** - Main Copilot configuration with repository context and guidelines
- **`.copilot/`** - Additional configuration files for specific development scenarios
  - `jekyll-guidelines.md` - Jekyll and static site development best practices
  - `content-style-guide.md` - Writing guidelines and terminology for the project
  - `workspace-config.md` - File patterns and common development tasks
  - `code-patterns.md` - Examples of common code patterns and structures

These files provide context about the project structure, coding standards, content conventions, and domain-specific knowledge to help GitHub Copilot provide more relevant suggestions.
