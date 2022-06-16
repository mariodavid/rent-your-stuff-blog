---
title: "#26 -  Create Rental Order - Part 2"
category: "Testing"
date: "2022-04-03 09:00:00 +02:00"
desc: "Domain Model Validation Tests"
thumbnail: "./images/issue-26.jpg"
alt: "#26 -  Create Rental Order - Part 2 - Domain Model Validation Tests"
videoSrcURL: https://www.youtube.com/embed/-ZZgZUsWjmI
---

This video is about adding validation tests for the new domain model of rental orders

* create validation test for `Order` and `OrderLine`
* check on `@PresentOrFuture`
* talk about flakiness with `LocalDateTime.now()` in test cases