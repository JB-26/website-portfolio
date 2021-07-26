---
title: "Building the Postgres Toolbox, part one 🐘"
date: "2021-07-26"
---

So recently, I've been diving more into Data Analysis (which I've been really enjoying!) and I recently wanted to see if I could combine both my interest of hobbyist development and data analysis into a project! 🧐 And today I'm sharing the recent progress I've made on it. I'm calling this application the 'Postgres Toolbox' 🔮

This is going to be a fairly big project. I honestly think this will take several months to complete, as there is a lot to do! But also, this is my first 'real' project that uses the PyCharm IDE - something that's used by professionals!

If you want to take a look at the repo, you can find it [here](https://github.com/JB-26/postgres_toolbox) on GitHub (If you like it, give it a star!)

__Please remember that this is a work in progress!__

# What __is__ Postgres Toolbox?

Postgres Toolbox is a CLI application that allows you to:
- Connect to a Postgres database
- Save your login info to a JSON for faster login
- Run queries against your database
- Export your results to a CSV file
- Perform Data Analysis by using Seaborn to visualise your data

Currently, you can perform data visualisation on statistical data. Support for distributions of data and plotting categorical data is planned! 👨‍💻

The project will grow over time so who knows what new features will be added!

This post will look at connecting to a DB, running a query and then taking the results of the query and exporting them to a CSV file.

So let's jump in with connecting to a 

# Connecting to a Postgres database

Before we can do anything, we need to connect to our Postgres database.