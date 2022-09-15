---
title: "#29 - Create Rental Order - Part 5"
category: "Testing"
date: "2022-05-10 09:00:00 +02:00"
desc: "Test Data Creation"
thumbnail: "./images/issue-29.jpg"
alt: "#29 - Create rental order - Part 5 - Test Data Creation"
videoSrcURL: https://www.youtube.com/embed/mnzbQ6dwEzM
---

In order to create a storage test for the order, lets improve our test data creation approach a little. This video will guide you through this process:

* add two new dependencies to your Jmix application: Lombok & MapStruct
* use Lomboks `@Builder` annotation for a data class that only contains the business attributes
* use MapStruct for mapping the data class to the JPA entity using the Jmix DataManager
* create pre-build product data with the Products test bean
* refactor the product storage test to use the new approach
