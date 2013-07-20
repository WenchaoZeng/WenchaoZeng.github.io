---
layout: default
title: News
permalink: /news/
author: all
---

{% for post in site.posts %}
  {{ post.url }}
{% endfor %}
