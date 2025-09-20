# Blueshores Repository

Blueshores is a research and development initiative focused on creating hybrid multifunctional foreshore infrastructure that optimizes environmental and blue economy benefits for working ports. The project website is built using Jekyll and deployed via GitHub Pages.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap and Build the Repository
- **Install Ruby and dependencies**:
  ```bash
  # Ruby is pre-installed (3.2.3+)
  sudo gem install bundler
  ```
- **Navigate to docs directory**: `cd docs`
- **Install Jekyll dependencies**: `sudo bundle install` -- takes 30-45 seconds. NEVER CANCEL. Set timeout to 120+ seconds.
- **Build the site**: `bundle exec jekyll build` -- takes 1-2 seconds. NEVER CANCEL. Set timeout to 30+ seconds.
- **Start development server**: `bundle exec jekyll serve --host=0.0.0.0` -- starts in 3-5 seconds. NEVER CANCEL. Set timeout to 60+ seconds.

### Development Workflow
- **ALWAYS run the bootstrapping steps first** before making any changes to the site
- **View the site**: Navigate to `http://localhost:4000` after starting the development server
- **Auto-regeneration**: Jekyll automatically rebuilds when files change during development
- **Stop server**: Use Ctrl+C to stop the development server

## Validation

### Always Manually Validate Changes
After making any changes to the website:

1. **Start the development server**: `cd docs && bundle exec jekyll serve --host=0.0.0.0`
2. **Test all main pages** by visiting:
   - Home: `http://localhost:4000/`
   - Objectives: `http://localhost:4000/objectives`
   - Case Studies: `http://localhost:4000/case-studies/`
   - Individual case studies:
     - Venice: `http://localhost:4000/case-studies/venice`
     - Eastern Scheldt: `http://localhost:4000/case-studies/eastern-scheldt`
     - Cork Harbour: `http://localhost:4000/case-studies/cork-harbour`
   - News: `http://localhost:4000/news/`
   - About: `http://localhost:4000/about`
3. **Verify navigation** between pages works correctly
4. **Check page titles** and content loads properly
5. **Test responsive design** if making layout changes

### Command Line Validation
You can also validate pages programmatically:
```bash
# Test that pages return 200 status and have proper titles
curl -s http://localhost:4000/ | grep "<title>"
curl -s http://localhost:4000/objectives | grep "<title>"
curl -s http://localhost:4000/case-studies/ | grep "<title>"
```

## Repository Structure

### Key Directories and Files
- **`/docs/`** - All website content and Jekyll configuration
  - **`_config.yml`** - Jekyll site configuration
  - **`Gemfile`** - Ruby dependencies specification
  - **`index.md`** - Home page content
  - **`objectives.md`** - Project objectives page
  - **`about.md`** - About page content
  - **`case-studies/`** - Case study pages directory
    - **`index.md`** - Case studies overview
    - **`venice.md`** - Venice Lagoon case study
    - **`eastern-scheldt.md`** - Eastern Scheldt case study
    - **`cork-harbour.md`** - Cork Harbour case study
  - **`news/`** - News and updates directory
    - **`index.md`** - News overview page

### Generated Files (Do Not Edit)
- **`docs/_site/`** - Generated static site (excluded from git)
- **`docs/Gemfile.lock`** - Locked dependency versions
- **`docs/.sass-cache/`** - Sass compilation cache
- **`docs/.jekyll-cache/`** - Jekyll compilation cache

## Common Tasks

### Adding New Content
- **New page**: Create `.md` file with YAML front matter in appropriate directory
- **New case study**: Add `.md` file in `docs/case-studies/` directory
- **Update navigation**: Modify `docs/_config.yml` header_pages section if needed

### Troubleshooting
- **"cannot load such file -- webrick" error**: The Gemfile includes webrick dependency, run `sudo bundle install`
- **Permission errors during bundle install**: Use `sudo bundle install` as documented above
- **Server won't start**: Ensure you're in the `docs` directory and dependencies are installed
- **Pages not updating**: Restart the development server with Ctrl+C then `bundle exec jekyll serve --host=0.0.0.0`

### Build Timing Expectations
- **Bundle install**: 30-45 seconds (first time with all dependencies)
- **Jekyll build**: 1-2 seconds (site is small and builds quickly)
- **Jekyll serve startup**: 3-5 seconds to start development server
- **Page regeneration**: <1 second for individual page changes

## Site Configuration

### Theme and Styling
- Uses **Minima theme** (GitHub Pages compatible)
- Custom styling can be added via `docs/assets/` directory
- Site title: "Blueshores"
- Site description: "Living foreshores for working ports"

### GitHub Pages Deployment
- Automatically deploys from `/docs` directory on `main` branch
- Live site: https://blueshoresweb.github.io/Blueshores/
- No manual deployment steps required

## Important Notes

- **NEVER CANCEL** build or serve commands - they complete quickly but need proper timeouts
- **Always test locally** before committing changes to ensure the site builds and functions correctly
- **The site uses Jekyll 3.9.x** for GitHub Pages compatibility
- **All content is in Markdown** with YAML front matter for page metadata
- **No complex build pipeline** - standard Jekyll workflow with bundle and serve commands