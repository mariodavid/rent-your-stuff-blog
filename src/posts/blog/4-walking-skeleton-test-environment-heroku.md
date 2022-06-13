---
title: "#4 - Walking Skeleton - Test Environment on Heroku"
category: "Database"
date: "2021-01-26 09:00:00 +02:00"
desc: "Walking Skeleton - Test Environment on Heroku
thumbnail: "./images/issue-4.jpg"
alt: "#4 - Walking Skeleton - Test Environment on Heroku"
videoSrcURL: https://www.youtube.com/embed/saJ8koAOxZ4
---

In this issue we will finish the walking skeleton topic by deploying the application on Heroku into our
test environment. In particular, we will perform the following steps:

* create Procfile for Heroku to tell how to run the Jmix application
* use a Spring profile "heroku" to configure the Jmix app in case of Heroku deployment
* use the Heroku Spring boot environment variables for fetching the database connection for Jmix
* let the Jmix app run on Java 17
* see Heroku logs of the Jmix application
* see the running application