---
layout: default
title: Case Studies
permalink: /case-studies/
---

<div class="hero-panel page-hero">
  <p class="hero-eyebrow">Three coastal environments</p>
  <h1>Case Studies</h1>
  <p class="hero-lead">Explore our ongoing research and implementation projects across different coastal environments.</p>
</div>

<section class="home-section">
<h2>Featured Case Studies</h2>
<p class="section-intro">Each case study demonstrates different aspects of hybrid multifunctional foreshore infrastructure. Select one to explore it.</p>
<div class="cs-picker">
{%- assign cases = site.pages | where: "layout", "case-study" | sort: "order" -%}
{%- for c in cases -%}
{%- assign slug = c.name | replace: ".md", "" -%}
{%- assign level = 1 -%}
{%- if c.tide == "meso" -%}{%- assign level = 2 -%}{%- elsif c.tide == "macro" -%}{%- assign level = 3 -%}{%- endif -%}
<button class="cs-tab" type="button" aria-expanded="false" aria-controls="cs-{{ slug }}" data-slug="{{ slug }}"><span class="cs-tide"><span class="tide-meter" data-level="{{ level }}" aria-hidden="true"><i></i><i></i><i></i></span>{{ c.tide | capitalize }}-tidal</span><span class="cs-title">{{ c.place }}</span><span class="cs-desc">{{ c.short }}</span><span class="card-link"><span class="cta-closed">Explore &darr;</span><span class="cta-open">Close &uarr;</span></span></button>
<article class="cs-panel" id="cs-{{ slug }}" aria-label="{{ c.place | escape }} case study">
<div class="cs-panel-head"><h3>{{ c.place }}</h3><div class="cs-chips"><span class="cs-chip">Tide: {{ c.tide | capitalize }}</span><span class="cs-chip">Slope: {{ c.slope | capitalize }}</span><span class="cs-chip">Energy: {{ c.energy | capitalize }}</span></div></div>
<figure class="cs-figure">
{%- if c.figure and c.figure != "" -%}
<img src="{{ c.figure | relative_url }}" alt="{{ c.figure_alt | default: c.place | escape }}" loading="lazy">
{%- if c.figure_caption and c.figure_caption != "" -%}<figcaption>{{ c.figure_caption }}</figcaption>{%- endif -%}
{%- else -%}
<div class="cs-figure-frame"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M21 16l-5-5-8 8"/></svg><span>Figure: installations at {{ c.place }}</span></div>
{%- endif -%}
</figure>
<div class="cs-body">
<div class="cs-block"><h4>Constraints</h4><p>{{ c.constraints | capitalize }}.</p></div>
<div class="cs-block"><h4>Intervention</h4>{{ c.intervention | markdownify }}</div>
<div class="cs-block"><h4>Monitoring</h4>{{ c.monitoring | markdownify }}</div>
<div class="cs-block"><h4>Transfer notes</h4>{{ c.transfer | markdownify }}</div>
</div>
<div class="cs-kpis"><h4>Outcomes (KPI snapshot)</h4><div class="cs-kpi-grid">
{%- for kpi in c.kpis -%}
{%- assign meta = site.data.indicators[kpi.key] -%}
<div class="cs-kpi"><b>{{ kpi.value | default: "TBD" }}</b><span>{{ meta.label }} ({{ meta.unit }})</span></div>
{%- endfor -%}
</div></div>
<div class="cs-foot"><a class="cs-more" href="{{ c.url | relative_url }}">Open as a full page &rarr;</a></div>
</article>
{%- endfor -%}
</div>
</section>

<div class="cta-row">
  <a class="btn btn-solid" href="{{ '/objectives' | relative_url }}">Learn more about our objectives</a>
  <a class="btn btn-outline" href="{{ '/' | relative_url }}">Back to Home</a>
</div>

<script src="{{ '/assets/js/case-explorer.js' | relative_url }}" defer></script>
