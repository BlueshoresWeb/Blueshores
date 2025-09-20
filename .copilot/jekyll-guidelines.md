# Jekyll Development Guidelines

This file provides specific guidance for Jekyll and static site development in the Blueshores repository.

## Jekyll Best Practices

### Configuration Management
- Main configuration is in `docs/_config.yml`
- Use environment-specific configurations when needed
- Keep baseurl configuration for GitHub Pages compatibility

### Content Creation
- Use consistent front matter across all pages
- Include semantic permalinks that reflect content structure
- Maintain navigation consistency across the site

### Development Workflow
```bash
# Start local development server
cd docs
bundle exec jekyll serve --watch --drafts

# Build for production (mimics GitHub Pages)
bundle exec jekyll build --destination _site
```

### Common Jekyll Patterns

#### Page Template
```yaml
---
layout: default
title: Page Title
permalink: /page-url
description: Brief page description for SEO
---

# Page Title

Content here...
```

#### Navigation Patterns
```markdown
<!-- Internal links with baseurl support -->
[Link Text]({{ "/path/to/page" | relative_url }})

<!-- External links -->
[External Link](https://example.com)

<!-- Asset references -->
![Alt text]({{ "/assets/images/image.jpg" | relative_url }})
```

## Content Strategy

### Research Content Guidelines
- Lead with clear problem statements
- Include methodology sections where appropriate
- Provide specific, measurable outcomes
- Use consistent terminology for technical concepts

### Page Structure Standards
- Start with project context and objectives
- Include clear section headings
- End with navigation links to related content
- Maintain consistent voice and tone

### SEO and Accessibility
- Use descriptive page titles and headings
- Include alt text for all images
- Maintain proper heading hierarchy (h1 → h2 → h3)
- Use semantic HTML through Jekyll's markdown rendering