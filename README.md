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
* Multi-variable linear regression:  to determine multi-variable perdictability
* Unsupervised machine learning
  * No specific models selected, but the intent is to use the unsupervised ML to find unseen groups in the three-dimensional data.
* Supervised machine learning
  * No specific models selecteed, but we plan to port the groups from the unsupervised ML into supervised ML models to determine predictability.

### Technologies
* MS Excel
* Python
  * Pandas
  * Jupyter
* PostGres
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

![image](https://user-images.githubusercontent.com/91292960/155405350-79363a3c-f1a6-49c3-8c61-1516f213fa32.png)

### Methodology

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis nunc non imperdiet auctor. Suspendisse vitae massa nulla. Cras lacinia placerat urna, pretium tempor diam. Vivamus quis sem id quam consequat luctus. Donec aliquam odio massa, id feugiat mauris gravida non. Sed vel pharetra mauris, in semper ante. Nunc dictum aliquam finibus. Curabitur porta, lacus nec efficitur auctor, magna ligula pharetra eros, sed mollis nisl urna at enim. Nam posuere sem quis nisl mollis tempor. Ut mollis consectetur lectus ut ornare. Quisque aliquam lacus odio, eu lobortis ipsum condimentum ut. Curabitur a felis elementum, accumsan nulla non, placerat libero. Sed porta bibendum sapien. Etiam iaculis arcu nec commodo placerat. Sed metus magna, posuere vitae sapien vitae, pretium accumsan dolor.

In ut aliquam est. Quisque neque nulla, dictum et tempor et, cursus at enim. Integer vulputate tincidunt diam, a hendrerit quam facilisis ut. Fusce nec magna vitae orci tempor aliquet. Etiam ac neque vel risus dictum porttitor nec ut libero. Pellentesque dui felis, volutpat non risus eget, viverra luctus lorem. Proin nec lobortis elit, elementum vulputate urna. Sed venenatis, diam cursus lobortis faucibus, eros arcu dignissim felis, ut aliquam quam quam quis nisi. Nunc porta leo at turpis facilisis placerat ac porta nibh. Sed sodales ligula felis, in egestas sem elementum a. Quisque blandit eros risus, vitae faucibus ipsum molestie eget. Donec non augue posuere, mollis nibh id, porta mauris. Duis nec ultricies purus. Integer facilisis elit in vulputate tincidunt.

## Results

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis nunc non imperdiet auctor. Suspendisse vitae massa nulla. Cras lacinia placerat urna, pretium tempor diam. Vivamus quis sem id quam consequat luctus. Donec aliquam odio massa, id feugiat mauris gravida non. Sed vel pharetra mauris, in semper ante. Nunc dictum aliquam finibus. Curabitur porta, lacus nec efficitur auctor, magna ligula pharetra eros, sed mollis nisl urna at enim. Nam posuere sem quis nisl mollis tempor. Ut mollis consectetur lectus ut ornare. Quisque aliquam lacus odio, eu lobortis ipsum condimentum ut. Curabitur a felis elementum, accumsan nulla non, placerat libero. Sed porta bibendum sapien. Etiam iaculis arcu nec commodo placerat. Sed metus magna, posuere vitae sapien vitae, pretium accumsan dolor.

## Summary

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis nunc non imperdiet auctor. Suspendisse vitae massa nulla. Cras lacinia placerat urna, pretium tempor diam. Vivamus quis sem id quam consequat luctus. Donec aliquam odio massa, id feugiat mauris gravida non. Sed vel pharetra mauris, in semper ante. Nunc dictum aliquam finibus. Curabitur porta, lacus nec efficitur auctor, magna ligula pharetra eros, sed mollis nisl urna at enim. Nam posuere sem quis nisl mollis tempor. Ut mollis consectetur lectus ut ornare. Quisque aliquam lacus odio, eu lobortis ipsum condimentum ut. Curabitur a felis elementum, accumsan nulla non, placerat libero. Sed porta bibendum sapien. Etiam iaculis arcu nec commodo placerat. Sed metus magna, posuere vitae sapien vitae, pretium accumsan dolor.


## Getting Started
1.  Clone this repo (for help see this [tutorial](https://help.github.com/articles/cloning-a-repository/)).
2.  Raw data is being kept --here--
3.  Data processing/transformation scripts ar being kept ---here--
4.  Required libraries
  * Pandas
  * etc.
5.  [Instructions for final presentation]  
