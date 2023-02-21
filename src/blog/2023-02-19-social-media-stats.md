---
title: "Exploring Social Media stats in the United Kingdom with Python"
date: "2023-02-21"
description: "Is Facebook on it’s way out?"
image: https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=7200
---

![](https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=7200)

The social media landscape has seen some major shakeups over the past few years. From Twitter being bought out, Facebook at the centre of privacy scandals and how businesses use social media (I honestly only have a Twitter account because so many businesses use the platform for customer support - which I think is an awful idea)

So I decided to do a little data analysis with Pandas and a few other packages such as Mito to get a better picture of the data.

If you want to clone the repo, you can do so [here](https://github.com/JB-26/social-media-stats) on GitHub.

The data used in this analysis is from [StatCounter](https://gs.statcounter.com/social-media-stats/).

Let’s jump in!

First, we need to build the DataFrame with Pandas:

```
df = pd.read_csv("social_media-GB-monthly-201301-202301.csv")
```

And first, let's generate a graph with Plotly

```
import plotly.express as px
# Construct the graph and style it. Further customize your graph by editing this code.
# See Plotly Documentation for help: https://plotly.com/python/plotly-express/
fig = px.line(df, x='Date', y=['Facebook', 'Twitter', 'Tumblr', 'reddit', 'YouTube', 'LinkedIn', 'Pinterest'], line_shape='linear')
fig.update_layout(
    title='Social Media stats from 2013-2023', 
    xaxis = dict(
        title='Date', 
        showgrid=True, 
        rangeslider = dict(
            visible=True, 
            thickness=0.05
        )
    ), 
    yaxis = dict(
        title='Social Media Platform', 
        showgrid=True
    ), 
    legend = dict(
        orientation='v'
    ), 
    paper_bgcolor='#FFFFFF'
)
fig.show(renderer="iframe")
```

So let’s take a look at this graph first. I’ve selected the most recognisable social media platforms that I know of (the data set from StatCounter included some that I’ve never heard before. Seriously, what’s ‘Vkontakte’, ‘news.ycombinator’, and 'Fark'?):

![](https://i.imgur.com/fGJzxG5.png)

We can see some interesting points:

- Facebook enjoyed peak popularity in the mid 2010's, just above 80%(!)
- Tumblr seemed to have jumped in 2014, overtaking Twitter.
- Twitter very briefly caught up to Facebook in 2020.
- Pinterest did grow but it's popularity is falling.

So it's very clear that Facebook, Twitter and Pinterest are the 'big three' in the UK. So, let's drop them and recreate this graph to get a better picture on how the smaller platforms are doing (as well as the 'Other' column as that really doesn't tell us any specific platform).

Let's build a new DataFrame:

```
df_removed = df.drop(['Facebook', 'Twitter', 'Pinterest', 'Other'], axis=1)
```

And build the graph:

```
import plotly.express as px
# Construct the graph and style it. Further customize your graph by editing this code.
# See Plotly Documentation for help: https://plotly.com/python/plotly-express/
fig = px.line(df_removed, x='Date', y=['Tumblr', 'Instagram', 'reddit', 'StumbleUpon', 'YouTube', 'LinkedIn'], line_shape='linear')
fig.update_layout(
    title='Updated graph (removed columns)', 
    xaxis = dict(
        title='Date', 
        showgrid=True, 
        rangeslider = dict(
            visible=True, 
            thickness=0.05
        )
    ), 
    yaxis = dict(
        title='Platform', 
        showgrid=True
    ), 
    legend = dict(
        orientation='v'
    ), 
    paper_bgcolor='#FFFFFF'
)
fig.show(renderer="iframe")
```
And this is what we get:

![](https://i.imgur.com/OEo14LU.png)

The steady rise of Instagram is interesting to see. Spiking during the pandemic and then seeing a steady rise is something to take note. What I am surprised about is that Reddit isn't as popular as I thought it would be. I thought Reddit would be sitting comfortably above YouTube. I'm also suprirsed to see that LinkedIn is more popular than Tumblr (yes, LinkedIn is more popular than Tumblr in the UK. I'm not sure if that's a good thing, or a bad thing).

So we can tell that Facebook and Twitter are the main two platforms. Let's create a box plot quickly to compare the two:

![](https://i.imgur.com/o9K1nOk.png)

So, why don't we see if we can split and train the data and perform some linear regression?

For this, I'll be using [PyTorch](https://pytorch.org/) - an open source machine learning framework.