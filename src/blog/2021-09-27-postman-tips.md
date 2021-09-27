---
title: "Postman Tips and Tricks 🧙‍♂️"
date: "2021-09-27"
description: "Handy tips and tricks about Postman that you may not know!"
image: https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80
---

![Astronaut](https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80)

Over the past year, I've been working a lot with [Postman](https://www.postman.com/) - an API platform for building and using APIs. And I thought that in this post I'd share several tips and tricks that I've picked up over the past year. So let's dive in.

# Postman Interceptor with Swagger UI

The [Interceptor](https://learning.postman.com/docs/sending-requests/capturing-request-data/interceptor/) is a fantastic way of capturing HTTP requests from within your browser. The best way I've used the Interceptor extension is working with [Swagger UI](https://swagger.io/tools/swagger-ui/). If you submit a request via Swagger with the Interceptor running, you'll capture the request to the API. Even though the request could return a response you weren't expecting, it still captures the headers and the request you sent. This could save some time with writing tests for the same endpoint.


