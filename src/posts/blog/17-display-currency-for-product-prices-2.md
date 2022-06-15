---
title: "#17 - Display Currency for Product Prices - Part 2"
category: "Entity"
date: "2021-03-07 09:00:00 +02:00"
desc: "Display Currency for Product Prices - Part 2"
thumbnail: "./images/issue-17.jpg"
alt: "#17 - Display Currency for Product Prices - Part 2"
videoSrcURL: https://www.youtube.com/embed/7yHDpVPH0qQ
---

After introducing the `Money` embeddable entity, we need to fix the product tests:

* use `Money` wrapper class instead of `BigDecimal` directly
* extend `FormInteractions` to enter a value to a currency field
* add `@Valid` & `@NotNull` annotation to the price attribute for proper bean validation