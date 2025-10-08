# Workspace Configuration for GitHub Copilot

## File Patterns and Purposes

### Content Files
- `docs/*.md` - Main site pages (home, about, objectives, publications)
- `docs/case-studies/*.md` - Research case studies and examples
- `docs/news/*.md` - Project updates and announcements

### Configuration Files
- `docs/_config.yml` - Jekyll site configuration
- `docs/Gemfile` - Ruby dependencies for Jekyll
- `.github/workflows/pages.yml` - GitHub Pages deployment

### Template Files and Layouts
- Jekyll uses the `minima` theme with default layouts
- Custom layouts would go in `docs/_layouts/` (currently using theme defaults)

## Common Development Tasks

### Adding New Content
1. **New Page**: Create in `docs/` with proper front matter
2. **New Case Study**: Create in `docs/case-studies/` and update index
3. **News Item**: Create in `docs/news/` directory

### Site Maintenance
1. **Update Navigation**: Modify `header_pages` in `_config.yml`
2. **Update Dependencies**: Modify `docs/Gemfile`
3. **Site Configuration**: Update `docs/_config.yml`

### Content Updates
1. **Link Maintenance**: Ensure all internal links use `relative_url` filter
2. **Content Review**: Check for consistency with style guide
3. **Navigation**: Update cross-references between related content

## Development Environment

### Local Setup
```bash
cd docs
bundle install
bundle exec jekyll serve
```

### GitHub Actions
- Automatic builds and deployment on push to main
- Ruby 3.1 environment
- Jekyll build with GitHub Pages compatibility

## Key Integrations

### GitHub Pages
- Site deployed to: https://blueshoresweb.github.io/Blueshores/
- Automatic deployment from `docs/` directory
- Uses GitHub Pages compatible Jekyll configuration

### External References
- Research publications and datasets
- Partner organization websites
- Government and regulatory resources

## Quality Assurance

### Content Validation
- Internal links function correctly
- Images load and display properly
- Navigation consistency across pages
- Mobile responsiveness

### Technical Validation
- Jekyll build succeeds without errors
- GitHub Pages deployment completes successfully
- Site performance remains optimal