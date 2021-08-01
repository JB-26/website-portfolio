---
title: "Practicing data analysis on COVID-19 data from the UK 🔍"
date: "2021-08-01"
---

In my search to find data sets where I can practice my data analysis skills is turning out to be more difficult than I thought. But then I discovered that the UK Government have created an [API](https://coronavirus.data.gov.uk/details/developers-guide) so you can access data regarding COVID-19 in the UK. In fact, it's available as a [Python library](https://github.com/publichealthengland/coronavirus-dashboard-api-python-sdk)!

So this time on my blog, I'll be exploring the API and seeing how we can visualise the data I find.

# An introduction to the library

Using the library requires the following in order to make a request:
- Filters
- Structures

## Filters

The filter is a required parameter to filter data from the API. This breaks down what data we want from an area. We can use the following filters for the area type:
- Overview for the UK
- Specific nation
- Specific region
- NHS Region
- Upper-tier local authority
- Lower-tier local authority

So in this case, I'm looking at Milton Keynes:

```
area_filter = [
    'areaType=ltla',
    'areaName=Milton Keynes'
]
```

