---
title: "Visualising COVID-19 data from the UK with Tableau 🔍"
date: "2021-08-20"
---

So [last time](https://joshblewitt.dev/blog/2021-08-01-covid19-uk-data/) I looked at using the API from the UK government to look at COVID-19 data in my hometown of Milton Keynes. Although this was good practice for my data analysis skills, visualising the data could be better.

So in this post, I'm visualising COVID-19 data for the UK as a whole.

As always, if you want to take a look at the GitHub repo of where you can find the data, you can find it [here](https://github.com/JB-26/covid_19-uk-data-analysis).

So let's grab all the UK data, clean it, and export it to a CSV file.

```
# nation data
area_filter = [
    'areaType=nation',
]

structure_dict = {
    "date": "date",
    "areaName": "areaName",
    "areaCode": "areaCode",
    "newCasesByPublishDate": "newCasesByPublishDate",
    "cumCasesByPublishDate": "cumCasesByPublishDate",
    "newDeaths28DaysByDeathDate": "newDeaths28DaysByDeathDate",
    "cumDeaths28DaysByDeathDate": "cumDeaths28DaysByDeathDate",
    "hospitalCases":"hospitalCases",
    "cumAdmissions":"cumAdmissions"
}

api = Cov19API(filters=area_filter, structure=structure_dict)
df = api.get_dataframe()

# reverse the order, so the graph starts with the earliest date
df = df.iloc[::-1]

# clean up! Replace nan with 0
df.replace(np.nan, 0, inplace=True)

df.to_csv('nation_results.csv')
```

The CSV file looks like this


![CSV file](https://i.imgur.com/9cdjNMJ.jpg)

Now with a CSV file, we can bring this to tableau!

_Since this was made in Tableau public - you can view it and interact with it! A link is further down the page!_

