---
title: "#24 - Introduce Multi-Tenancy - Part 2 - Make Tests run as a Tenant"
category: "Testing"
date: "2022-03-28 09:00:00 +02:00"
desc: "Make Tests run as a Tenant"
thumbnail: "./images/issue-24.jpg"
alt: "#24 - Introduce Multi-Tenancy - Part 2 - Make Tests run as a Tenant"
videoSrcURL: https://www.youtube.com/embed/0ttvK9bicHI
---

Let's make our tests run as a particular tenant to mirror the actual user scenario

* create a Tenant and a user on-the-fly before each test
* creating a JUnit 5 extension to automatically setup tenant creating before each test