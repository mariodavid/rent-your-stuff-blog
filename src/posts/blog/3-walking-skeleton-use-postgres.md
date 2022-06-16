---
title: "#3 - Walking Skeleton - Use PostgreSQL as database"
category: "Database"
date: "2022-01-29 09:00:00 +02:00"
desc: "Walking Skeleton - Use PostgreSQL as database"
thumbnail: "./images/issue-3.jpg"
alt: "#3 - Walking Skeleton - Use PostgreSQL as database"
videoSrcURL: https://www.youtube.com/embed/OvIc2x1X-9g
---

In this issue we will continue to configure our walking skeleton by preparing our application to use Postgres
as our main database engine. The video includes in particular:

* spin up PostgreSQL as our local database via docker compose
* connect to PostgreSQL through IntelliJ IDEA
* configure the Jmix version to use the local database for local development
* explain the workflow of Liquibase changelogs applied to local PostgreSQL
* configure the GitHub Action CI pipeline to spin up PostgreSQL as a service
* configure Jmix to retrieve DB connection information via environment variables