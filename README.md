![gold-silver-and-bronze-medals-small](https://user-images.githubusercontent.com/91292960/153244286-9d3d860b-9218-4454-90ad-a9915d471ea5.jpg)
# Blades of Glory Team Final Project  

The Blades of Glory Team Final Project is the capstone project for the Univeristy of Minnesota's Data Analysis and Data Visualization Bootcamp for the 2021-2022 period.
The capstone project is intended to let individuals practice the skills they learned in a collaborative work environment on a real world topic determined by the group. The
groups are challenged not only in their technical skills but also in their analysis and group dynamic skills.

## Objective
The purpose of this project is, as selected by the members of the team, to determine if the variables of a country's GDP per capita, population, and number of competitors sent either individually or in aggregated has any predictive value on the total medal count that a country has in the Olympic Games.  In order to do that, we have planned a series of linear regressions to test the three single variable hypotheses, namely that the three variables noted above individually have predictive value on the total medal count of a country.  As we expect that those hypotheses will fail or only have week predictive value, we want to test the hypothesis that the three variables in aggregate have predictive value on the medal count using both multi-linear regression and machine learning strategies.

### Authors

(in alphabetical order by last name)
* Eric Anthony
* Ben Bratrud
* Cher Hinton
* Ben Thome

### Methods Used
* Single-variable linear regression:  to determine single-variable predictability
* Multi-variable linear regression:  to determine multi-variable predictability
* Unsupervised machine learning
  * K-Means
* Supervised machine learning
  * Linear Regression ML model 
  * Balanced Random Forest classifier
  * Easy Ensemble classifier

### Technologies
* MS Excel
* Python
  * Pandas
  * Jupyter
  * SQLAlchemy
  * NumPy
  * MatPlotLib
  * SKLearn
  * hvplot
  * path
  * Plotly
* PostGres / SQL
* HTML
* JavaScript

## Project Description

### Data Sources
* [Wikipedia](http://www.wikipedia.com):  total medal count per country for each of the games
* [Kaggle](https://www.kaggle.com/heesoo37/120-years-of-olympic-history-athletes-and-results/discussion/264987): Competitor information and medals won per competitor 
* [Our World In Data](https://ourworldindata.org/grapher/maddison-data-gdp-per-capita-in-2011us-single-benchmark):  Historical GDP per capita data per country
* [The World Bank](https://data.worldbank.org/indicator/SP.POP.TOTL):  Historical population data per country
* [Kaggle](https://www.kaggle.com/paultimothymooney/latitude-and-longitude-for-every-country-and-state):  Latitude and longitude data for each country

### Data Processing Strategy
A number of challeges presented decisions the group needed to make regarding the scope of the analysis.  With regard to the two seasons of the Olympic Games, we chose to
analyze both seasons separately believing that the patterns of strong countries vs. weaker countries would be significantly different to potential skew the results if they
were analyzed together.  Due to the limitations of the data on population and GDP, the group decided to limit the date range for the both seasons' games from 1960 to 2018,
reserving the 2020 summer games in Tokyo (played in 2021) and the 2022 winter games to be used as proof of concept.  Additionally, the group decided that in team events,
only one medal will count (each individual player gets a medal) and only one player will count in the competitor count.

The data collected will be organized in the following graphical DBD map (this and the text script varients can be found [here](/DataBaseMap))

![DBD_Map](https://user-images.githubusercontent.com/91292960/153470074-23bac4ff-39b2-4736-8f55-4a30de3c2467.png)

A basic overview of the summary data for all tables in the database follows:

![image](https://user-images.githubusercontent.com/91292960/155405636-b84a64c1-94d0-4611-9170-d0438739d954.png)

### Methodology

#### MS Excel

While some of our data was downloaded directly as CSV files, the medal count information was not in CSV format so in order to collect the that data we needed to first
scrape the Wikipedia sites via MS Excel *Get Data* command.  We also used Excel's VLOOKUP to add information, specifically NOC codes to all the tables for eventual use
as foreign keys in the database, in addition to some other basic preprocessing to ensure proper formating.

#### PostGres / SQL

Once the Excel-processed CSV files were completed, using SQL, a database was set up within PostGres to hold all the data.  Additionally, we made use of SQL to preprocess
and merge all the files into the final table from which all analyses would be based from: x_medal_share.

#### Python

We were able to import the x_medal_share into a pandas dataframe within python.  From there we separated Winter from Summer to run the the data separately in as it was
determined that the dynamics would be sufficiently different to warrant treating them independent of each other.  Python was used to run the linear regressions (single-
variable and multi-variable) as well as the machine modelling.  

#### Modelling

We decided to first determine if any of the three variables (GDP per capita, population, and number of competitors) individually had any correlation to number of medals
won by a given country.  In addition, we wanted to look at a multi-variable linear regression with those three variables in addition to the boolean variable of being the
host country of the given Olympic games.  Furthermore, we fed the four variables into a linear regression supervised machine learning model to see if that could produce
a better fit.

In looking at the four variables above we wanted to group the data into clusters that may show similarities other than simply the individual variables themselves so we
performed a K-Means unsupervised model and subsequently took those groups and ran them through two supervised machine-learning models: Balanced Random Forest classifier and
Easy Ensemble classifier models.


## Results

The results of the linear regression models are shown below:

[Summer Linear Regression Plots]

[Winter Linear Regression Plots]

The results of the multi-linear regression model is shown below:

[Summer Multi-linear Regression Plot]

[Winter Multi-linear Regression Plot]

The clustering results from the K-Means unsupervised learning model:

[Summer K-Means Clustering Plot]

[Winter K-Means Clustering Plot]

The Training/Testing Score of the Balanced Random Forest classifier and Easy Emsemble classifier models:

[Summer Scores for both models]

[Winter Scores for both models]

## Summary

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis nunc non imperdiet auctor. Suspendisse vitae massa nulla. Cras lacinia placerat urna, pretium tempor diam. Vivamus quis sem id quam consequat luctus. Donec aliquam odio massa, id feugiat mauris gravida non. Sed vel pharetra mauris, in semper ante. Nunc dictum aliquam finibus. Curabitur porta, lacus nec efficitur auctor, magna ligula pharetra eros, sed mollis nisl urna at enim. Nam posuere sem quis nisl mollis tempor. Ut mollis consectetur lectus ut ornare. Quisque aliquam lacus odio, eu lobortis ipsum condimentum ut. Curabitur a felis elementum, accumsan nulla non, placerat libero. Sed porta bibendum sapien. Etiam iaculis arcu nec commodo placerat. Sed metus magna, posuere vitae sapien vitae, pretium accumsan dolor.


## Getting Started
1.  Clone this repo (for help see this [tutorial](https://help.github.com/articles/cloning-a-repository/)).
2.  Raw data is being kept --[here](https://github.com/olympics2022/olympic_medal_analysis/tree/main/Resources)--
3.  SQL Scripts for database set-up and mergers are being kept --[here](https://github.com/olympics2022/olympic_medal_analysis/tree/main/SQL)--
4.  Data processing/transformation scripts are being kept --[here](https://github.com/olympics2022/olympic_medal_analysis/tree/main/ETL)--
5.  Required libraries
    * Pandas
    * Jupyter
    * SQLAlchemy
    * NumPy
    * MatPlotLib
    * SKLearn
    * hvplot
    * path
    * Plotly
6.  Analysis processing scripts are held here --[here](https://github.com/olympics2022/olympic_medal_analysis/tree/main/Analysis)--  
