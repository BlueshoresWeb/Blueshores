# Blueshores
Blueshores repo. DEVELOPING HYBRID MULTIFUNCTIONAL FORESHORE INFRASTRUCTURE THAT OPTIMISES ENVIRONMENTAL AND BLUE ECONOMY BENEFITS (BLUE-SHORES)

## Website

The project website is built using Jekyll and deployed via GitHub Pages from the `/docs` directory.

- **Site URL**: [https://blueshoresweb.github.io/Blueshores/](https://blueshoresweb.github.io/Blueshores/)
- **Source**: The website content is maintained in the `/docs` folder
- **Deployment**: Automatic deployment to GitHub Pages on commits to the `main` branch

### ⚠️ Deployment Issue

**Status**: GitHub Pages deployment is currently failing due to repository configuration.

**Action Required**: A repository administrator needs to configure GitHub Pages to use "GitHub Actions" as the deployment source.

📖 **See [GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md) for detailed setup instructions.**

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
