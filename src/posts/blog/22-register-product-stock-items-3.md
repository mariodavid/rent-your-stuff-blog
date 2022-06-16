---
title: "#22 - Register product stock items - Part 3"
category: "Testing"
date: "2021-03-22 09:00:00 +02:00"
desc: "Remove flakiness from UI integration test"
thumbnail: "./images/issue-22.jpg"
alt: "#21 - Register product stock items - Part 3 - Remove flakiness from UI integration test"
videoSrcURL: https://www.youtube.com/embed/XOpVhtrN_DQ
---

After finding out about the problem with the UI integration tests in video #21, 
let's dig deeper into the problem and resolve the root cause of the flaky tests:

* see tests running in isolation, but not in the whole suite
* debug tests to find problem of incorrect entity comparison
* find out that multiple screens are still open from other tests
* reason about shared state of "opened screens"
* fix by clearing up all screens at the beginning of each test case