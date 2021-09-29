---
title: "Postman Tips and Tricks 👨‍🚀"
date: "2021-09-27"
description: "Handy tips and tricks about Postman that you may not know!"
image: https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80
---

![Astronaut](https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80)

Over the past year, I've been working a lot with [Postman](https://www.postman.com/) - an API platform for building and using APIs. And I thought that in this post I'd share several tips and tricks that I've picked up over the past year. So let's dive in.

# Postman Interceptor with Swagger UI

The [Interceptor](https://learning.postman.com/docs/sending-requests/capturing-request-data/interceptor/) is a fantastic way of capturing HTTP requests from within your browser. The best way I've used the Interceptor extension is working with [Swagger UI](https://swagger.io/tools/swagger-ui/). If you submit a request via Swagger with the Interceptor running, you'll capture the request to the API. Even though the request could return a response you weren't expecting, it still captures the headers and the request you sent. This could save some time with writing tests for the same endpoint.

![Postman Interceptor](https://i.imgur.com/R9Pp8o3.jpg)

![Postman history](https://i.imgur.com/Q4nvK5v.jpg)

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

# Don't forget to clear your variables!

One thing I found when working with Postman is that sometimes, you can refer to variables which can have a value that you weren't expecting. I had this happen when I had several folders where the initial setup was the same but had slightly different variations to them.

To avoid any cross over from variables in previous requests, I started to clear out the variables at the end of a series of requests.

This can be done like so:

```
pm.globals.clear();
pm.environment.clear();
pm.collectionVariables.clear();
```

Just remember that this is a destructive method. Once it runs, it removes the variables from the current scope! So only use it if you really need it!


# Remember you can export your requests as code snippets in different languages!

One handy feature of Postman is to export your request into another language! From C# to Ruby, Postman can export your request so you can make the same request in a different language. It's a cool trick if you're working on an application that makes a request to the endpoint you're using in Postman.

![Postman code snippet](https://i.imgur.com/yQrp4u4.jpg)