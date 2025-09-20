# Common Code Patterns and Examples

This file provides examples of common patterns used in the Blueshores repository to help GitHub Copilot understand the expected code style and structure.

## Jekyll Front Matter Patterns

### Standard Page
```yaml
---
layout: default
permalink: /page-name
title: Page Title (optional, defaults to page name)
description: Brief description for SEO (optional)
---
```

### Case Study Page
```yaml
---
layout: default
permalink: /case-studies/location-name
---
```

### News Article
```yaml
---
layout: default
permalink: /news/article-slug
date: 2024-01-01
author: Author Name (optional)
---
```

## Markdown Content Patterns

### Page Header Structure
```markdown
# Main Page Title

Brief introduction paragraph that explains the page purpose and context.

## Section Heading

Content for this section...

### Subsection

More detailed content...
```

### Case Study Structure
```markdown
# [Location] Case Study

Brief description of the location and its significance to the project.

## Project Overview

Clear description of the work being done at this location.

## Key Features

- **Feature Name**: Description of this feature
- **Another Feature**: Description with specific details
- **Third Feature**: Technical or implementation details

## Research Focus

- Primary research questions being addressed
- Methodological approaches being used
- Innovation opportunities identified

## Expected Benefits

- Environmental outcomes and impact
- Economic benefits and opportunities  
- Community and stakeholder benefits

[Navigation links at bottom of page]
```

### Internal Link Patterns
```markdown
<!-- Navigation between pages -->
[Back to Home]({{ "/" | relative_url }})
[Learn about our objectives]({{ "/objectives" | relative_url }})
[Explore case studies]({{ "/case-studies/" | relative_url }})

<!-- Links within case studies -->
[Previous: Venice]({{ "/case-studies/venice" | relative_url }}) | [Next: Cork Harbour]({{ "/case-studies/cork-harbour" | relative_url }})

<!-- Links to specific sections -->
[Back to Case Studies]({{ "/case-studies/" | relative_url }})
```

### List Formatting
```markdown
## Consistent List Style

- Use hyphens for unordered lists
- Keep parallel structure in list items
- Use consistent capitalization
- Include brief but descriptive content

## Numbered Lists for Processes

1. First step with clear action
2. Second step building on the first
3. Final step with expected outcome
```

## Jekyll Configuration Patterns

### Navigation Configuration (_config.yml)
```yaml
header_pages:
  - index.md
  - objectives.md
  - case-studies/index.md
  - news/index.md
  - about.md
```

### Plugin Configuration
```yaml
plugins:
  - jekyll-feed
  - jekyll-sitemap
```

## File Naming Conventions

### Content Files
- `kebab-case-filenames.md` for all content
- `index.md` for directory landing pages
- Descriptive names that reflect content: `cork-harbour.md`, `eastern-scheldt.md`

### Directory Structure
```
docs/
├── index.md              # Homepage
├── about.md              # About page
├── objectives.md         # Project objectives
├── case-studies/         # Case study content
│   ├── index.md         # Case studies landing page
│   ├── venice.md        # Individual case studies
│   ├── eastern-scheldt.md
│   └── cork-harbour.md
└── news/                 # News and updates
    └── index.md         # News landing page
```

## Common Content Fragments

### Page Footer Navigation
```markdown
[Back to Home]({{ "/" | relative_url }}) | [View our objectives]({{ "/objectives" | relative_url }}) | [Read the latest news]({{ "/news/" | relative_url }})
```

### Case Study Navigation
```markdown
[Previous: Eastern Scheldt]({{ "/case-studies/eastern-scheldt" | relative_url }}) | [Back to Case Studies]({{ "/case-studies/" | relative_url }})
```

### Research Context Introduction
```markdown
Our [Location] case study focuses on developing multifunctional foreshore solutions that:

- Address specific local challenges
- Support existing economic activities
- Enhance environmental outcomes
- Engage community stakeholders
```

## SEO and Accessibility Patterns

### Image References
```markdown
![Descriptive alt text]({{ "/assets/images/image-name.jpg" | relative_url }})
```

### Heading Hierarchy
- Use `#` for page titles only
- Use `##` for main sections
- Use `###` for subsections
- Avoid skipping heading levels