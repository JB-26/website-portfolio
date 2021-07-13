---
title: "Creating a CLI Python to communicate with the video game API 👾 (Plus, thoughts on PyCharm)"
date: "2021-07-13"
---

I haven't written some Python in a while so I decided to jump back in and write something new.

So I decided to write a small CLI application that communicates to the Video Game API. For those, who don't remember, I wrote the [API in Flask](https://github.com/JB-26/video-game-api) a few months back. The API is hosted on [Heroku](https://mighty-cliffs-81365.herokuapp.com/) and anyone can access it.

Also, I'll be using [PyCharm](https://www.jetbrains.com/pycharm/) for this project. I still love Visual Studio Code to death, but I wanted to try something new for a change. I'm aware of JetBrains' range of products so I thought I'd take PyCharm for a spin.

If you want to check out the code for this project, you can view the GitHub repo [here](https://github.com/JB-26/VideoGameAPIPythonCLI).

With that out of the way, let's get started!

## Introducing the Requests library

The Video Game API has various endpoints which use different HTTP request methods. After doing some research, I came across a Python library called [Requests](https://docs.python-requests.org/en/master/). The library has good documentation and it looked easy to implement, so I decided to give it a go.

The first endpoint I'll be looking at is the Login endpoint, which returns a JWT for authorisation.

