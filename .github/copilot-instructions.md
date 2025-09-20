# GitHub Copilot Instructions for Blueshores Repository

## Project Overview

This repository contains the Jekyll-based website for the **Blueshores** research project, which focuses on developing hybrid multifunctional foreshore infrastructure that optimizes environmental and blue economy benefits for working ports.

**Project Description**: DEVELOPING HYBRID MULTIFUNCTIONAL FORESHORE INFRASTRUCTURE THAT OPTIMISES ENVIRONMENTAL AND BLUE ECONOMY BENEFITS (BLUE-SHORES)

## Repository Structure

```
/
├── README.md                 # Main repository documentation
├── docs/                     # Jekyll website source
│   ├── _config.yml          # Jekyll configuration
│   ├── Gemfile              # Ruby dependencies
│   ├── index.md             # Homepage
│   ├── about.md             # About page
│   ├── objectives.md        # Project objectives
│   ├── case-studies/        # Research case studies
│   └── news/                # News and updates
└── .github/
    └── workflows/pages.yml  # GitHub Pages deployment
```

## Technology Stack

- **Static Site Generator**: Jekyll
- **Language**: Ruby (for Jekyll), Markdown (for content)
- **Hosting**: GitHub Pages
- **Theme**: Minima
- **Deployment**: GitHub Actions (automatic on main branch)

## Development Guidelines

### Jekyll and Markdown Best Practices

1. **Front Matter**: All pages should include proper YAML front matter:
   ```yaml
   ---
   layout: default
   permalink: /page-name
   ---
   ```

2. **Internal Links**: Always use Jekyll's `relative_url` filter for internal links:
   ```markdown
   [Link text]({{ "/path" | relative_url }})
   ```

3. **Content Structure**: Maintain consistent heading hierarchy:
   - Use `#` for page titles
   - Use `##` for main sections  
   - Use `###` for subsections

4. **Navigation**: Update `_config.yml` header_pages when adding new top-level pages

### Content Conventions

1. **Case Studies**: Place in `/docs/case-studies/` directory with descriptive filenames
2. **News Items**: Place in `/docs/news/` directory
3. **Page Navigation**: Include navigation links at the bottom of pages where appropriate
4. **Consistent Terminology**: Use project-specific terms correctly:
   - "Blue economy" (not "blue Economy")
   - "Foreshore infrastructure" 
   - "Working ports"
   - "Hybrid multifunctional"

### Code Quality Standards

1. **Markdown Formatting**:
   - Use consistent list formatting (prefer `-` for unordered lists)
   - Include blank lines around code blocks and headers
   - Use semantic line breaks (one sentence per line in source)

2. **YAML Configuration**:
   - Maintain proper indentation (2 spaces)
   - Quote string values when they contain special characters
   - Keep configurations organized and commented

3. **File Organization**:
   - Use lowercase filenames with hyphens (kebab-case)
   - Place assets in appropriate directories
   - Maintain consistent directory structure

## Domain Knowledge

### Research Context
- **Focus Area**: Coastal engineering and marine ecology
- **Geographic Scope**: Multiple case studies including Venice, Eastern Scheldt, and Cork Harbour
- **Key Themes**: Environmental protection, economic development, community benefits

### Technical Concepts
- **Living Foreshores**: Natural coastal protection systems
- **Storm Surge Barriers**: Engineered coastal protection infrastructure
- **Blue Carbon**: Carbon sequestration in marine ecosystems
- **Aquaculture Integration**: Sustainable seafood production in coastal areas

## Deployment and Testing

### Local Development
```bash
cd docs
bundle install
bundle exec jekyll serve
```

### Deployment
- Automatic deployment via GitHub Actions to GitHub Pages
- Triggered on pushes to `main` branch
- Site URL: https://blueshoresweb.github.io/Blueshores/

### Quality Checks
- Ensure all internal links work correctly with `baseurl` configuration
- Validate markdown syntax
- Check that new pages appear in navigation where appropriate
- Verify responsive design on mobile devices

## Contributing Guidelines

1. **Content Updates**: When adding new content, ensure it follows the established structure and style
2. **Link Maintenance**: Always use relative URLs for internal links
3. **Asset Management**: Optimize images and place them in appropriate directories
4. **SEO Considerations**: Include descriptive page titles and meta descriptions
5. **Accessibility**: Use proper heading structure and alt text for images

## Common Tasks

### Adding a New Case Study
1. Create markdown file in `/docs/case-studies/`
2. Include proper front matter with permalink
3. Follow established content structure
4. Add navigation links to connect with other case studies
5. Update case studies index if needed

### Adding News Items
1. Create markdown file in `/docs/news/`
2. Include date in filename or front matter
3. Update news index page if needed
4. Consider adding links from other relevant pages

### Updating Site Configuration
1. Modify `_config.yml` for site-wide changes
2. Update `Gemfile` for dependency changes
3. Test locally before committing
4. Consider impact on GitHub Pages build

## Security and Maintenance

- Keep Jekyll and gem dependencies updated
- Review and update GitHub Actions workflow as needed
- Monitor site performance and accessibility
- Maintain backup of content and configuration