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

IMAGES HERE SHOWING SWAGGER AND INTERCEPTOR

# Environments can share the same name for variables.

Say you have an application that can is deployed onto three different environments; test, dev, preproduction. You have a postman collection that can run on each environment, and the only difference is the URL used for each environment (i.e, testapp.com, devapp.com). How can we easily manage this without duplicating the collection (one for each environment)? Simply create environments in Postman where each share the same name for a variable (but have different values).

Example:

__Environment 1__
Name: Dev App
Variable: environment
Value: devapp.com

__Environment 2__
Name: Test App
Variable: environment
Value: testapp.com

These two environments have a variable that although has the same name, the value is different. So if we were to use these variables in a request on Postman, it would look like this:

```
www.{{environment}}/hello
```

The application has the endpoint called hello, but by changing the environment in postman - the collection can be used across multiple environments. This avoids duplicating the collection!

# Working with XML

I honestly hate XML - it's the worst thing to work with in Postman. Thankfully, there is a great method called xml2Json which takes an XML response and converts into a JSON!

Like so:

```
var jsonObject = xml2Json(responseBody);
console.log(jsonObject);
```

And then you can access different properties of the response:

```
console.log(jsonObject['soap:Envelope']['soap:Body']['Property'])
```

Now you can work with XML using your existing knowledge of working with JSON!