---
title: "#27 -  Create Rental Order - Part 3"
category: "Entity"
date: "2022-04-15 09:00:00 +02:00"
desc: "Custom Bean Validation"
thumbnail: "./images/issue-27.jpg"
alt: "#27 -  Create Rental Order - Part 3 - Custom Bean Validation"
videoSrcURL: https://www.youtube.com/embed/iOksgEAR8lA
---

Let's create a custom validation for a rental order: a valid rental period

* create a custom validation annotation `ValidRentalPeriod` and ConstraintValidator `ValidRentalPeriodValidator`
* refactor validation tests to create custom assertion methods by creating a `ValidationVerification` class that encapsulates the validation assertion checks
