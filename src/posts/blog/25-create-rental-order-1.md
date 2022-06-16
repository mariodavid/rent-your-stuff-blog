---
title: "#25 -  Create Rental Order - Part 1 - Domain Model"
category: "Testing"
date: "2022-03-31 09:00:00 +02:00"
desc: "Make Tests run as a Tenant"
thumbnail: "./images/issue-25.jpg"
alt: "#25 -  Create Rental Order - Part 1 - Domain Model"
videoSrcURL: https://www.youtube.com/embed/FE6mumiSWu8
---

Let's enhance our domain model and add a central piece to the table: the rental order

* create the `Order` and `OrderLine` entity
* use association, and composition for modeling out the connection
* configure instance names for entities
* use `@SystemLevel` to declare the "tenant" attribute as something that should not be used in UI code generation and UI components (like the Filter component)