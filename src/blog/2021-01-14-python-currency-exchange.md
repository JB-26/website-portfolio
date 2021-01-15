---
title: "Using data from the European Central Bank to make DataFrames with Pandas and graphs with Plotly! 💶"
date: "2021-01-14"
---

In this post, I'll be walking through another project I've been working on recently. This project has been fun to work on as I've been able to practice using several data science libraries that I've been learning about recently.

As always, [here](https://gitlab.com/JoshBl_/python-currency-exchange-rate) is a link to where you can find the repo. Feel free to clone it and try it out!

So, what are we doing?

This program calls the [Exchange Rates API](https://exchangeratesapi.io), which uses the European Central Bank as it's data set. I like this API a lot - it's free to use and doesn't require an account to use it. Plus, it can retrieve exchange rates in the past and between two dates.

In a nutshell, we'll be calling that API and using the data we get to make some nice graphs.

So how are we going to do that? Let's take a look at the modules we will be using.

### Modules used

* [requests](https://pypi.org/project/requests/)
    * Used to make GET requests to the API
* json
    * Used to deserialise data from the response
* datetime
    * Used to get the current date
* os
    * Used to get the current working directory
* [pandas](https://pandas.pydata.org/)
    * Used for data analysis
* [plotly](https://plotly.com/)
    * Used for making interactive graphs
* [cufflinks](https://github.com/santosjorge/cufflinks)
    * Used to connect pandas and cufflinks

I've been meaning to find a way to practice Pandas and Plotly (and cufflinks), so I thought this project would be something fun to do.

Alright, now we understand what we're trying to do, let me walk you through what I've done.

### Imports and cufflinks

```
#import modules
import requests as req
from json import loads
import datetime
import os
#Data Science modules
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
import cufflinks as cf

#allows cufflinks to be used offline
cf.go_offline()
```

Standard stuff, but what's important is the last line - making cufflinks available offline. That's needed as we need need to connect pandas and plotly together.

