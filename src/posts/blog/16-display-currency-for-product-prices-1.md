---
title: "#16 - Display Currency for Product Prices - Part 1"
category: "Entity"
date: "2021-03-04 09:00:00 +02:00"
desc: "Display Currency for Product Prices - Part 1"
thumbnail: "./images/issue-16.jpg"
alt: "#16 - Display Currency for Product Prices - Part 1"
videoSrcURL: https://www.youtube.com/embed/rnBOOfKns5o
---

In this issue, we will add currency to the Product Price entity

* use `CurrencyField` component
* create `Money` embeddable entity for storing amount & currency
* use Spring Boots Configuration Properties binding to configure default currency via `application.properties`
* use `Messages` API for translations of the currency value