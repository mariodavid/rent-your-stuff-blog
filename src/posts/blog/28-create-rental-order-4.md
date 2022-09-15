---
title: "#28 - Create Rental Order - Part 4"
category: "Testing"
date: "2022-04-28 09:00:00 +02:00"
desc: "Verify @InstanceName"
thumbnail: "./images/issue-28.jpg"
alt: "#28 - Create rental order - Part 4 - Verify @InstanceName"
videoSrcURL: https://www.youtube.com/embed/uZTn-ZgYJX4
---

The `@InstanceName` annotated method for the Order entity is going to be tested this time:

* create a test case for the `Order::getInstanceName` method
* verify the parameter injection mechanism of the `@InstanceName` methods works as expected
