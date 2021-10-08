---
title: "Building an API in .NET and deploying it to Azure 🧙‍♂️"
date: "2021-10-07"
description: "Taking a look at building something and putting in in production"
image: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2068&q=80
---

![Server](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2068&q=80)

A while back, I looked at creating an [API in Python](https://joshblewitt.dev/blog/2021-03-11-video-game-api/) and getting it hosted on Heroku. It was a great project to do and recently, I've been thinking of doing some smaller projects in .NET again.

I'm not a stranger to .NET. When I studied Computer Science at University, C# was the first programming language I studied. I worked on several projects using C# but I didn't go beyond the basics (I remember building a pretty cool address book as my first assignment at University though!). When I joined my current work place in 2016, C# is used as the main language. So after some time, I decided to get back into the language by building a few small projects!

But I will say that .NET has made some big changes over the past few years, especially with [.NET Core](https://dotnet.microsoft.com/learn/aspnet/what-is-aspnet-core), which was an effort to include cross platform support for Linux and MacOS and the successor to .NET Framework. With all these changes and good documentation, I decided to jump back in.

My first small project is the [game shop](https://github.com/JB-26/cSharp-game-shop). A simple program that creates objects and stores them in a list. Has the capability of writing the objects to a text file or even JSON so you import them into the program again (to save time from entering your collection again!).

But then I decided I wanted to take another step into making an API and hosting it on Azure.

If you want to take a look at the completed API (and run the Postman collection when you can make requests to it), you can see it [here](https://github.com/JB-26/videoGameApi)!

Azure is used in so many businesses so it would be good to get some more experience with it. So let's jump in!

### Building the API

This API will be taking the game shop project but just making it so that a user can:
- __C__ reate
- __R__ read
- __U__ pdate
- __D__ elete

For this API, it won't be writing information to a databse _yet_ so for now it will store the objects in memory. Which isn't good if there are lots of users writing information to it, but for now - it'll do.