#!/bin/sh

read -p 'Title: ' title
SLUG="$(echo $title | sed -r 's/[\.\, \?]+/-/g' | tr '[:upper:]' '[:lower:]')"
DATE=$(date +"%Y-%m-%d")
DATE_TIME=$(date +"%Y-%m-%dT%H:%M:%S%z")
tee -a content/posts/${SLUG}.md <<EOF
---
title: ${title}
description: 
reading_time: 1
date: ${DATE_TIME}
---