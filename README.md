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
reserving the 2020 summer games in Tokyo (played in 2021) and the 2022 winter games to be used as proof of concept.  

Additionally, the group decided that in team events, only one medal will count (each individual competitor gets a medal) and only one competitor will count in the competitor count. The decision was made to only count one compeititor from each team as the dataset we used to get an athlete count for each country in each of the olympics listed each member of a team. By including each of those members, the data would have been skewed as each member would have won a medal but only one medal for a team counts in the final medal count for each olympics. The goal was to filter the dataset to only count medal opportunities. This required using Jupyter Notebook to filter the athlete dataset for each team participating in a traditional team sport (basketball, hockey, volleyball, etc...) and dropping all team members but one from each team event in the olympics. Additionally, the competitors that competed in events that are not traditional team sports also had to be filtered out. Examples of non-traditional team sports include doubles tennis, track and field relays, team rowing, etc... To filter duplicates from these events, the dataset was filtered by events that contained words such as doubles, team, two-man, etc... After the traditional team sports and non-traditional team sports were filtered, we were able to get an accurate count of medal opportunities for each country in each of the olympics in the dataset.

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

#### Summer Linear Regression Analysis
 
 - Summer Athlete Share
![Summer_athlete_share_LR](https://github.com/olympics2022/olympic_medal_analysis/blob/main/Images/Summer_athlete_share_LR.png)
This analysis tested the impact of the percentage of athletes participating in the olympics from each country on the percent of the total medals awarded that were won by that country. The results of this Linear Regression analysis is an R-squared value of 0.660, meaning that 66 percent of the variance in share of medals won is explained by the share of athletes by country. With a p-value less than 0.05, athlete share has a statistically significant impact on medal share.

 - Summer GDP per Capita
![Summer_GDP_LR](https://github.com/olympics2022/olympic_medal_analysis/blob/main/Images/Summer_GDP_LR.png)
This analysis tested the impact of GDP per Capita of participating countries on the percent of the total medals awarded that were won by that country. The results of this Linear Regression analysis is an R-squared value of 0.048, meaning that 4.8 percent of the variance in share of medals won is explained by GDP per Capita of a given country. With a p-value less than 0.05, GDP per capita has a statistically significant impact on medal share.

 - Summer Population
![Summer_Population_LR](https://github.com/olympics2022/olympic_medal_analysis/blob/main/Images/Summer_Population_LR.png)
This analysis tested the impact of population of participaing countries on the percent of the total medals awarded that were won by that country. We found that by taking the natural log of population, we achieved better results from the linear regression analysis. The results of this analysis is an R-squared value of 0.121, meaning that 12.1 percent of the variance in share of medals won is explained by the natural log of population of a participating country. With a p-value less than 0.05, the natural log of population has a statistcally significant impact on medal share.

 #### Winter Linear Regression Analysis
 
 - Winter Athlete Share
![Winter_athlete_share_LR](https://user-images.githubusercontent.com/90737940/156901398-79f79bdf-81e1-42c8-badb-11d22c031238.png)
This analysis tested the impact of the percentage of athletes participating in the olympics from each country on the percent of the total medals awarded that were won by that country. The results of this Linear Regression analysis is an R-squared value of 0.550, meaning that 55 percent of the variance in share of medals won is explained by the share of athletes by country. With a p-value less than 0.05, athlete share has a statistically significant impact on medal share.

 - Winter GDP per Capita
![Winter_GDP_LR](https://user-images.githubusercontent.com/90737940/156901693-76144d9e-897d-4e4b-a1a6-fcf93c3cdb03.png)
This analysis tested the impact of GDP per Capita of participating countries on the percent of the total medals awarded that were won by that country. The results of this Linear Regression analysis is an R-squared value of 0.130, meaning that 13 percent of the variance in share of medals won is explained by GDP per Capita of a given country. With a p-value less than 0.05, GDP per capita has a statistically significant impact on medal share.

 - Winter Population
![Winter_Population_LR](https://user-images.githubusercontent.com/90737940/156901770-357fee0e-19a2-4d60-99d8-6a8b6ad0438f.png)
This analysis tested the impact of population of participating countries on the percent of the total medals awarded that were won by that country. We found that by taking the natural log of population, we achieved better results from the linear regression analysis. The results of this analysis is an R-squared value of 0.028, meaning that 2.8 percent of the variance in share of medals won is explained by the natural log of population of a participating country. With a p-value less than 0.05, the natural log of population has a statistcally significant impact on medal share.


#### Summer Multiple Linear Regression

This analysis tested the impact of the natural log of population, percentage of athletes participating from each country, host country, and gdp per capita on the percent of the total medals awarded that were won by each country. The results of this analysis is an R-squared value of 0.662, meaning that 66.2 percent of the variance in the share of medals won by each country is explained by those four variables. Each variable has a p-value less than 0.05, meaning each has a statistically significant impact on medal share. The summary of the analysis can be seen below.

![Summer_MLR_Summary](https://user-images.githubusercontent.com/88675415/156944573-e3279264-2c7f-44c0-bf15-047f9d0e5632.png)

#### Winter Multiple Linear Regression

This analysis tested the impact of the natural log of population, percentage of athletes participating from each country, host country, and gdp per capita on the percent of the total medals awarded that were won by each country. The results of this analysis is an R-squared value of 0.573, meaning that 57.3 percent of the variance in the share of medals won by each country is explained by those four variables. Each variable has a p-value less than 0.05, meaning each has a statistically significant impact on medal share. The summary of the analysis can be seen below.

<img width="533" alt="Winter_MLR_Summary" src="https://user-images.githubusercontent.com/90737940/156902110-39e67ecc-4c95-45e6-a83c-9d0428b0ea96.png">

#### The clustering results from the K-Means unsupervised learning model:


-Summer K-Means

![Summer_K_Means](https://user-images.githubusercontent.com/88675415/156945611-19fccbc6-2045-4c5a-b0ee-61276b524ed6.png)


-Winter K-Means

![Winter_K_Means](https://user-images.githubusercontent.com/88675415/156945688-ffba6c4c-5d7c-4fd4-b8dc-5676dea87fd6.png)

#### The Training/Testing Score of the Balanced Random Forest Classifier and Easy Ensemble Classifier models:


-Summer Scores Balanced Random Forest classifier

![Summer_Scores_BRFC](https://user-images.githubusercontent.com/88675415/156945784-c3a204fb-8445-444a-9f8e-35102b274537.PNG)

-Summer Scores Easy Emsemble classifier

![Summer_Scores_EEC](https://user-images.githubusercontent.com/88675415/156945867-05a35f0e-4d59-4969-8a2f-230cad740b57.png)


-Winter Scores Balanced Random Forest classifier

![Winter_Scores_BRFC](https://user-images.githubusercontent.com/88675415/156945956-e96cf821-c8cb-4166-926e-20cf16f40c9d.png)

-Winter Scores Easy Emsemble classifier

![Winter_Scores_EEC](https://user-images.githubusercontent.com/88675415/157065653-ab9d05fb-8236-4d0a-a72e-0d761ebc987d.png)

Multiple Linear Regression Machine Learning Model:

#### Winter Multiple Linear Regression Machine Learning Model

A Multiple Linear Regression Machine Learning analysis was also tested. natural log of population, percentage of athletes participating from each country, host country, and gdp per capita on the percent of the total medals awarded that were won by each country using the SKlearn train_test_split model. The results of this analysis was an R-squared value of 0.563 on the test data, meaning the model was able to explain 56.3 percent of the variance of in the share of medals won by each country. This aligns with the standard Multiple Linear Regression tested (discussed above). Five countries were selected from the 2022 Winter Olympics in China to test this data on. Those countries are the United States, Norway, Italy, China, and Japan. The chart below shows the actual medal count and the predicted medal count using the machine learning model developed for the five selected countries.

![2022_Prediced_vs_actual](https://user-images.githubusercontent.com/90737940/156902700-d92b678c-e775-46d3-9ad6-c2cf9dd7b3ef.png)

## Summary

In looking at the single-variable, linear regressions we can see that while all the variables tested (athlete share, population, and GDP per capita) had a significant impact on medal share for both the Winter and Summer Olympics, the range for the R^2 valuse (combining both sets) was from 2.8% - 66%.  It is interesting to note that by far the most salient factor in the medal share was the number of competitors sent to the games (Summer: 66%, Winter: 55%).  In addition, it's worth noting that the summer games it was population that had the next most impact on the count whereas GDP was the second most impact on the winter games.  This may indicate that wealth has a greater significance for the winter games rather than the summer games.  In any case, even if we take the best R^2 result of 66%, this doesn't give us enough statistical power to claim that one variable alone can predict the medal count in a given Olympic year.

It was postulated then that maybe all variables combined may have better predictive power than any one variable alone.  Added to the three variables above, we added a boolean variable, whether the country was hosting that year or not, which didn't lend itself well to a single-variable, linear regression.  The multiple linear regression gave us an R^2 of 66.2% for summer and an R^2 of 57.3% for winter.  These numbers represent only a slight improvement on population alone.

In an effort to increase the value of the predictability for our models we opted to try a machine learning module for a multiple linear regression on the four variables.  This gave a result not much different than the standard multiple linear regression module.  Seeing as this did not improve our numbers we tried on last approach.

The final thought was to use a K-means unsupervised machine learning module and funnel those clusters into the Random Forest Classifier and Easy Ensemble Classifier machine learning models to see if these variables can still be used for predictability, albeit not in a simple regression.  The Random Forest Classifier module resulted in a accuracy of 97% and a precision of 98% for summer and an accuracy of 98% and a precision of 99%.  This shows a robust prediction model out-performing the Easy Ensemble classifier module.  That module resulted in an accuracy of [ACC] and a precision of [PRE] for summer and an accuracy of [ACC] and a precision of [PRE] for winter.  The Random Forest Classifier approach improved the results of our prediction significantly to something that potentially could be used in the real world.

Our approach however does open up some potential inadequacies.  Particularly glaring is that this approach does not take into account the athletes and their relative skill.  Can we really make a predicition on sports results without that?  In addition our choices in limiting counts to potential medals won and therefore removing all team members but one from all team sports could create artifacts that challenge the results.    


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
