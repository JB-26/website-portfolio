---
title: "Looking at the cost of living with Python (and getting depressed along the way) 📈"
date: "2021-05-03"
---

Since I started work, I had a vision of what I wanted to achieve in life. Much like the Marvel Cinematic Universe, my plan has phases.

- __Phase 1__ - Learn to drive
- __Phase 2__ - Buy a car
- __Phase 3__ - Buy a house

I've done the first two phases of my plan, but phase 3 is proving to be more challenging than I previously thought. You've probably seen on the news recently from outlets such as the [BBC](https://www.bbc.co.uk/news/business-56941162) and [The Guardian](https://www.theguardian.com/business/2021/apr/30/uk-house-prices-increase-at-fastest-rate-since-2004) that house prices are increasing at a terrifyingly fast rate, which is leaving first time buyers like myself in a difficult situation.

In fact, the Land Registry which operates the [UK House Price Index](https://landregistry.data.gov.uk/app/ukhpi) found that the average house price (at the time of writing is) __£250,341__, where property prices have increased by __8.6%__ over the previous year.

Which is crazy, I (and many others) can't afford those house prices! This has lead me to living with my parents, even at the age of 28.

What got me thinking to do this post was if there was a percentage or a number of people who are in the same position as myself.

As it turns out, there is. The Office for National Statistics tracks the number of [Young Adults living with their parents](https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/families/datasets/youngadultslivingwiththeirparents/current). And there is also the [UK House Price Index](https://www.gov.uk/government/statistical-data-sets/uk-house-price-index-data-downloads-february-2021?utm_medium=GOV.UK&utm_source=summary&utm_campaign=UK_HPI_Summary&utm_term=9.30_21_04_21&utm_content=download_data), which has some great data available.

With all this data, it's time to break out Python and Pandas to look at this data.

If you want to take a look at the Excel files I used for this, you can view them on my repo on [GitHub](https://github.com/JB-26/house-price-python).

First things first, let's put some data together. We'll need to create two CSV files:
- One for the percentage of young adults living with their parents
- One for the average UK House Price for each year.

For the percentage of young adults, this data set is split into two categories of age:
- Total of 15 to 34
- Total of 20 to 34

I'll be looking at total of 20 to 34 (as it's very likely that those who are 15 - 19 years old will be living with their parents).

Next, we need to look at the average cost a home throughout the years. Thankfully, the [UK House Price Index](https://landregistry.data.gov.uk/app/ukhpi/browse?from=1996-01-01&location=http%3A%2F%2Flandregistry.data.gov.uk%2Fid%2Fregion%2Funited-kingdom&to=2021-02-01&lang=en) has a handy application so we can get that information. It lets you download the data as a CSV, we'll use that and get the data we need.

Since the percentage of young people data is reported yearly, we will use the average price for a house in December per year. This will represent the average house price growth per year.



