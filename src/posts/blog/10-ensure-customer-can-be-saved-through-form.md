---
title: "#10 - Ensure Customers can be saved through the form - Part 1"
category: "Testing"
date: "2022-02-18 09:00:00 +02:00"
desc: "Ensure Customers can be saved through the form - Part 1"
thumbnail: "./images/issue-10.jpg"
alt: "#10 - Ensure Customers can be saved through the form - Part 1"
videoSrcURL: https://www.youtube.com/embed/NjI7EgJC37s
---

Following up on issue #9, in this video, we will check the customer edit form works correctly

* Interact with the form input components to set values to the UI
* assert on the results through the database
* create a Test API abstraction: FormInteractions to get rid of all the helper methods on the form interaction
* use the "move" & "change signature" refactoring from IntelliJ IDEA
* encounter flaky tests through test data interactions