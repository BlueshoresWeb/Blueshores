---
layout: default
title: About
permalink: /about
team_photo: "/assets/img/teams/team.png"
team_photo_alt: ""      # short description of the photo
team_photo_caption: ""  # caption and credits
---

<div class="hero-panel page-hero">
  <p class="hero-eyebrow">Project and partners</p>
  <h1>About Blueshores</h1>
  <p class="hero-lead">Blueshores is a research and development initiative focused on creating hybrid multifunctional foreshore infrastructure that optimises environmental and blue economy benefits for working ports.</p>
</div>

{::nomarkdown}
<section class="about-section">
<h2>Partners &amp; Supporting Organisations</h2>
<div class="logo-grid" aria-label="Partner logos">
<a class="logo-card" href="https://www.unipd.it/en/" target="_blank" rel="noopener"><img src="{{ '/assets/img/logos/unipd.png' | relative_url }}" alt="UNIPD" loading="lazy"></a>
<a class="logo-card" href="https://www.nioz.nl/en" target="_blank" rel="noopener"><img src="{{ '/assets/img/logos/NIOZ.png' | relative_url }}" alt="NIOZ" loading="lazy"></a>
<a class="logo-card" href="https://www.aqua.dtu.dk/" target="_blank" rel="noopener"><img src="{{ '/assets/img/logos/DTU.png' | relative_url }}" alt="DTU" loading="lazy"></a>
<a class="logo-card" href="https://ihcantabria.com/" target="_blank" rel="noopener"><img src="{{ '/assets/img/logos/IHC.png' | relative_url }}" alt="FIHAC" loading="lazy"></a>
<a class="logo-card" href="https://www.dept.aueb.gr/en/ReSEES" target="_blank" rel="noopener"><img src="{{ '/assets/img/logos/ATH2.png' | relative_url }}" alt="Athena" loading="lazy"></a>
<a class="logo-card" href="https://www.ucc.ie/en/" target="_blank" rel="noopener"><img src="{{ '/assets/img/logos/UCC.png' | relative_url }}" alt="UCC" loading="lazy"></a>
<a class="logo-card" href="https://www.cut.ac.cy/?languageId=1" target="_blank" rel="noopener"><img src="{{ '/assets/img/logos/CUT.png' | relative_url }}" alt="CUT" loading="lazy"></a>
<a class="logo-card" href="https://www.mit.gov.it/en" target="_blank" rel="noopener"><img src="{{ '/assets/img/logos/MIT.JPG' | relative_url }}" alt="PIOPP" loading="lazy"></a>
<a class="logo-card" href="https://www.regione.veneto.it/" target="_blank" rel="noopener"><img src="{{ '/assets/img/logos/Veneto.png' | relative_url }}" alt="Veneto Region" loading="lazy"></a>
</div>
<h3 class="about-sub">Project Partners</h3>
<ul class="partner-list">
<li><b>UNIPD</b> University of Padova</li>
<li><b>NIOZ</b> The Netherlands Institute for Sea Research</li>
<li><b>DTU</b> National Institute for Aquatic Resources, Technical University of Denmark</li>
<li><b>FIHAC</b> Fundación Instituto de Hidráulica Ambiental de Cantabria</li>
<li><b>UCC</b> University College Cork</li>
<li><b>Athena</b> Athina-Erevnitiko Kentro Kainotomias Stis Technologies Tis Pliroforias, Ton Epikoinonion KaiTis Gnosis</li>
<li><b>CUT</b> Technologiko Panepistimio Kyprou</li>
<li><b>PIOPP</b> Provveditorato interregionale per le Opere pubbliche Veneto - Trentino Alto Adige - Friuli Venezia Giulia</li>
<li><b>VR</b> Veneto Region</li>
</ul>
</section>

<section class="about-section">
<details class="fold">
<summary><h2>Project Mission</h2></summary>
<div class="fold-body"><p>Our mission is to develop innovative coastal solutions that enhance coastal protection and resilience, support sustainable port operations, and restore and protect marine ecosystems, while generating economic opportunities through the blue economy and engaging local communities and stakeholders.</p></div>
</details>
<details class="fold">
<summary><h2>Research Approach</h2></summary>
<div class="fold-body"><p>We combine interdisciplinary research with practical implementation, bringing together expertise in coastal engineering, for the design and implementation of advanced infrastructure; marine ecology, to restore ecosystems and enhance biodiversity; blue economy, to develop sustainable economic strategies; stakeholder engagement, to foster collaboration with communities and industry; and climate adaptation, to plan resilience for future conditions.</p></div>
</details>
</section>

<section class="about-section">
<h2>Project Team</h2>
<figure class="team-figure">
{%- if page.team_photo and page.team_photo != "" -%}
<img src="{{ page.team_photo | relative_url }}" alt="{{ page.team_photo_alt | default: 'The Blueshores project team' | escape }}" loading="lazy">
{%- if page.team_photo_caption and page.team_photo_caption != "" -%}<figcaption>{{ page.team_photo_caption }}</figcaption>{%- endif -%}
{%- else -%}
<div class="cs-figure-frame"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M21 16l-5-5-8 8"/></svg><span>Photo of the project team</span></div>
{%- endif -%}
</figure>
<p class="about-note">In Venice, October 2025.</p>
</section>

<section class="about-section">
<h2>Funding and Support</h2>
<div class="funding-layout">
  <div class="logo-grid logo-grid--single" aria-label="Funder logo">
    <a class="logo-card" href="https://bluepartnership.eu/projects/developing-hybrid-multifunctional-foreshore-infrastructure-optimises-environmental-and" target="_blank" rel="noopener"><img src="{{ '/assets/img/logos/SBEP.svg' | relative_url }}" alt="Sustainable Blue Economy Partnership" loading="lazy"></a>
  </div>
  <p class="funding-text"><b>BLUESHORES</b> Developing hybrid multifunctional foreshore infrastructure that optimises environmental and blue economy benefits, is part of the Joint Transnational Call for proposals 2024: “Unified paths to a climate-neutral, sustainable and resilient blue economy: engaging civil society, academia, policy and industry” launched by the Sustainable Blue Economy Partnership.</p>
</div>
</section>

<section class="about-section">
<h2>Contact Information</h2>
<div class="contact-card">
<p class="contact-label">More Information on the project</p>
<p class="contact-name">Prof. Laura Airoldi</p>
<p class="contact-mail"><em>laura.airoldi AT unipd.it</em></p>
</div>
</section>
{:/nomarkdown}

