---
layout: default
title: News
permalink: /news/
---

<div class="hero-panel page-hero">
  <p class="hero-eyebrow">Updates from the project</p>
  <h1>News</h1>
  <p class="hero-lead">Stay updated on the latest developments, research findings, and project milestones from the Blueshores initiative.</p>
</div>

{::nomarkdown}
<section class="home-section">
{%- assign labels = site.posts | map: "label" | compact | uniq | sort -%}
{%- if labels.size > 1 -%}
<div class="news-filter" role="group" aria-label="Filter news by type" hidden>
<button class="news-chip is-active" type="button" data-filter="all" aria-pressed="true">All</button>
{%- for l in labels -%}
<button class="news-chip" type="button" data-filter="{{ l | slugify }}" aria-pressed="false">{{ l }}</button>
{%- endfor -%}
</div>
{%- endif -%}
<div class="news-feed">
{%- for post in site.posts -%}
{%- assign thumb = post.thumb | default: post.image -%}
<article class="news-item" id="news-{{ post.slug }}" data-slug="{{ post.slug }}" data-label="{{ post.label | slugify }}">
<div class="news-head">
{%- if thumb and thumb != "" -%}
<img class="news-thumb" src="{{ thumb | relative_url }}" alt="" loading="lazy">
{%- endif -%}
<div class="news-text">
<p class="news-meta"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%-d %B %Y" }}</time>{% if post.label %}<span class="news-label">{{ post.label }}</span>{% endif %}</p>
<h2 class="news-title">{{ post.title }}</h2>
<p class="news-summary">{{ post.summary }}</p>
<button class="news-toggle" type="button" aria-expanded="false" aria-controls="body-{{ post.slug }}"><span class="t-closed">Read more &darr;</span><span class="t-open">Show less &uarr;</span></button>
</div>
</div>
<div class="news-body" id="body-{{ post.slug }}">
{%- if post.image and post.image != "" -%}
<figure class="news-figure"><img src="{{ post.image | relative_url }}" alt="{{ post.image_alt | default: post.title | escape }}" loading="lazy">{%- if post.image_caption and post.image_caption != "" -%}<figcaption>{{ post.image_caption }}</figcaption>{%- endif -%}</figure>
{%- endif -%}
{{ post.content }}
{%- if post.links and post.links.size > 0 -%}
<div class="news-actions">
{%- for l in post.links -%}
{%- assign ext = false -%}
{%- if l.url contains "://" -%}{%- assign ext = true -%}{%- endif -%}
<a class="btn {% if forloop.first %}btn-solid{% else %}btn-outline{% endif %}" href="{% if ext %}{{ l.url }}{% else %}{{ l.url | relative_url }}{% endif %}"{% if ext %} target="_blank" rel="noopener"{% endif %}>{{ l.label }}</a>
{%- endfor -%}
</div>
{%- endif -%}
{%- if post.tags and post.tags.size > 0 -%}
<p class="news-tags">{% for tag in post.tags %}#{{ tag }} {% endfor %}</p>
{%- endif -%}
<p class="news-foot"><a href="{{ post.url | relative_url }}">Open as a full page &rarr;</a></p>
</div>
</article>
{%- else -%}
<p>News will be published here as the project progresses.</p>
{%- endfor -%}
</div>
</section>
{:/nomarkdown}

<div class="cta-row">
  <a class="btn btn-solid" href="{{ '/case-studies/' | relative_url }}">Explore case studies</a>
  <a class="btn btn-outline" href="{{ '/' | relative_url }}">Back to Home</a>
</div>

<script src="{{ '/assets/js/news-feed.js' | relative_url }}" defer></script>
