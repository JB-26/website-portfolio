---
title: "Monitoring your bandwidth with Python! 📈"
date: "2021-01-02"
---

Happy new year! 🎉

To kick things off, I wanted to share a small side project I've been working on. This was listed as a challenge in my Python Udemy course so I thought I'd share my solution.

The challenge was to build an application that monitors your bandwidth, with the option of displaying a graph at the end.

If you want to see the code for this, click [here](https://gitlab.com/JoshBl_/python-bandwidth-monitor) for the code.

There's several areas that I need to improve (such as error handling) but if you want to take a look at how the process of recording works, then read on!

## Modules used

For this challenege I used several modules:

* psutil

So this is the key module that will provide us with the information we need for monitoring the bytes we receive and send. This module can also provide information on the CPU, Memory, Disks and other system info. It's pretty amazing of how much it can do!

You can view more information for psutil [here](https://pypi.org/project/psutil/)

* matplotlib

Necessary for making a graph so we can plot the bytes received and sent onto the graph. A really powerful module with so many types of graphs and options to customise the graph (such as the line style and markers).

You can view more information for matplotlib [here](https://matplotlib.org/index.html)

* datetime

This is needed for getting the time from the user for when the program needs to stop recording network usage.

This module is already available in Python.

## Getting started

Let's understand first on how we actually capture network information with psutil.

So let's look at the documentation on the psutil website (see [here](https://psutil.readthedocs.io/en/latest/#network))

```
Return network I/O statistics as a namedtuple including the following fields:

bytes_sent: number of bytes sent
bytes_recv: number of bytes received
```

Interesting!