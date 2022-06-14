---
title: "#8 - Ensure customers are loaded in UI"
category: "Testing"
date: "2021-02-12 09:00:00 +02:00"
desc: "Ensure customers are loaded in UI"
thumbnail: "./images/issue-8.jpg"
alt: "#8 - Ensure customers are loaded in UI"
videoSrcURL: https://www.youtube.com/embed/ivNqWy4Wi94
---

Let's implement our first web integration test to verify the UI layer also works as expected

* add a dependency to `io.jmix.ui:jmix-ui-test-assist`
* use @UiTest annotation to start a web integration test
* Interact with the regular Jmix UI APIs, like screens to run the system under test
* interact with Screen components, like the Table to check if a particular Customer is displayed
* spin up an ad-hoc test database for UI tests, by using Spring Boot's `@AutoConfigureTestDatabase`
* setup & cleanup test data programmatically through `DataManager`