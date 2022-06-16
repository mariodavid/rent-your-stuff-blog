---
title: "#7 - Ensure only valid Addresses can be stored"
category: "Testing"
date: "2022-02-09 09:00:00 +02:00"
desc: "Ensure only valid Customers can be stored"
thumbnail: "./images/issue-7.jpg"
alt: "#7 - Ensure only valid Addresses can be stored"
videoSrcURL: https://www.youtube.com/embed/vTiHsGMGyE4
---

In this issue we will implement the second test case, which is dealing with the Address entity.

* test validation of Address entity
* create ValidationVerification Test API abstraction, to more easily test for validation violations
* split test cases to check one aspect on every test
* refactor CustomerIntegrationTest to use the new ValidationVerification Test API
* make ValidationVerification more generic through Java generics