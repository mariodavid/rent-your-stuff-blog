---
title: "#11 - Ensure Customers can be saved through the form - Part 2"
category: "Testing"
date: "2021-02-18 09:00:00 +02:00"
desc: "Ensure Customers can be saved through the form - Part 2"
thumbnail: "./images/issue-11.jpg"
alt: "#11 - Ensure Customers can be saved through the form - Part 2"
videoSrcURL: https://www.youtube.com/embed/Al-TD-vdWyo
---

Following up from issue #10, in this video we will try to fix our flaky tests:

* identify the test data that causes the problem
* cleanup test data by removing all data from the db via `DataManger`
* create Test API: `DatabaseCleanup` for encapsulating this logic as a Spring Bean