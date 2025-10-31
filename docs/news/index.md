---
layout: default
permalink: /news/
---

# News

Stay updated on the latest developments, research findings, and project milestones from the Blueshores initiative.

## Latest Updates

{% assign sorted_posts = site.posts | sort: 'date' | reverse %}
{% for post in sorted_posts %}
<article class="news-item">
  <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
  <p class="post-meta">
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
    {% if post.categories.size > 0 %}
    <span class="categories">
      {% for category in post.categories %}
        <span class="category">{{ category | replace: "-", " " | capitalize }}</span>
      {% endfor %}
    </span>
    {% endif %}
  </p>
  <div class="post-excerpt">
    {{ post.excerpt }}
  </div>
  <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
</article>
{% endfor %}

## Categories

Browse news by category:

- **Research & Development**: Updates on ongoing studies and findings
- **Project Implementation**: Key achievements and implementation progress  
- **Partnerships & Collaboration**: Collaborations and stakeholder developments
- **Community Engagement**: Stakeholder involvement and public participation
- **Events & Presentations**: Conferences, workshops, and presentations
- **Publications & Reports**: Research papers and technical reports

## Stay Connected

Follow our progress as we develop innovative solutions for living foreshores that benefit both the environment and working ports.

[Back to Home]({{ "/" | relative_url }}) | [Learn about our objectives]({{ "/objectives" | relative_url }}) | [Explore case studies]({{ "/case-studies/" | relative_url }})