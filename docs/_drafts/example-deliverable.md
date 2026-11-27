---
# TEMPLATE (not published). To use it: copy this file into the _posts folder,
# rename it YYYY-MM-DD-short-title.md, then edit the lines below.
layout: news-post
title: "Title of the news item"
date: 2027-01-15 10:00:00 +0100
# Type of item. Announcement, Deliverable, Publication or Tool are suggested,
# but any word works and automatically becomes a button in the News filter.
label: Deliverable
summary: "One or two sentences shown on the card."
image: /assets/img/news/example.jpg
thumb: /assets/img/news/example-small.jpg
image_alt: "Describe the image"
image_caption: "Caption and credits"
links:
  - { label: "Download deliverable (PDF)", url: "/assets/files/D1.1.pdf" }
  - { label: "Read the related paper", url: "https://doi.org/..." }
tags: [BLUESHORES]
---

Write the full text here, in normal Markdown. It is shown when the item is unfolded.

To add a picture inside the text, put the image in docs/assets/img/news/ and write:

![Description]({{ "/assets/img/news/photo.jpg" | relative_url }})
*Caption of the picture.*
