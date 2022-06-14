---
title: "#6 - Ensure only valid Customers can be stored"
category: "Testing"
date: "2021-02-06 09:00:00 +02:00"
desc: "Ensure only valid Customers can be stored"
thumbnail: "./images/issue-6.jpg"
alt: "#6 - Ensure only valid Customers can be stored"
videoSrcURL: https://www.youtube.com/embed/9sd0JGK0UKE
---

In this issue we will implement the very first test case to back up our implementation of storing customers.

* create Junit 5 Test
* interact with the DataManager in a Spring Integration Test
* use assertJ to assert the customer was correctly saved
* Use SystemAuthenticator to authenticate in an integration test
* Use Bean validation explicitly in the integration test to check for proper bean validation annotations are present