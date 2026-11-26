# Blueshores Website

This directory contains the Jekyll-based website for the Blueshores project, deployed to GitHub Pages.

## Local Development

1. Install Ruby and Bundler
2. Run `bundle install` to install dependencies
3. Run `bundle exec jekyll serve` to start the development server
4. Visit `http://localhost:4000` to view the site

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch.

- **Live Site**: https://blueshoresweb.github.io/Blueshores/
- **Deployment**: Automatic via GitHub Actions (`.github/workflows/pages.yml`)

## Configuration

- `_config.yml` - Main Jekyll configuration
- `Gemfile` - Ruby dependencies
- GitHub Actions workflow handles building and deployment

## Content Structure

- `index.md` - Home page
- `about.md` - About page
- `objectives.md` - Project objectives
- `case-studies/` - Case study pages
- `news/` - News and updates

All internal links use Jekyll's `relative_url` filter to ensure proper baseurl handling.
version January 2026 - 
