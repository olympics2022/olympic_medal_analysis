/* This SQL script sets up the preprocessed tables to be imported into Python/Pandas
for the Blades of Glory group project.

Output Tables:  x_medal_share, x_mlr */

-- Create temporary table aggregating athlete counts per NOC per year with host information
DROP TABLE IF EXISTS t_athlete_counts;
CREATE TABLE t_athlete_counts AS

	SELECT 
		noc,
		year,
		season,
		COUNT(DISTINCT competitorid) AS athlete_count,
		host
	
	FROM olympic_project

	WHERE year > 1959

	GROUP BY year, season, noc, host

	ORDER BY year, season, noc;

-- Create temporary table of Olympic game years and their associated season
DROP TABLE IF EXISTS t_olympic_years;
CREATE TABLE t_olympic_years AS
	SELECT DISTINCT
		year,
		season
	
	FROM t_athlete_counts
	
	ORDER BY year, season;

-- Create temporary population table w/o extraneous columns
DROP TABLE IF EXISTS t_population;
CREATE TABLE t_population AS
	SELECT
		countrycode,
		year,
		population
	
	FROM population;

-- Create temporary GDP table w/o extraneous columns
DROP TABLE IF EXISTS t_gdp;
CREATE TABLE t_gdp AS
	SELECT
		entity,
		year,
		gdpperc
		
	FROM gdp;

-- Create temporary medal count table without extraneous columns
DROP TABLE IF EXISTS t_medal_count;
CREATE TABLE t_medal_count AS
	SELECT 
		year,
		season,
		countrycode,
		gold,
		silver,
		bronze,
		total

	FROM medalcount;
	
-- Merge athlete counts and population into new temp table
DROP TABLE IF EXISTS t_count_and_pop;
CREATE TABLE t_count_and_pop AS
	SELECT
		ath.noc,
		ath.year,
		ath.season,
		ath.athlete_count,
		ath.host,
		pop.population
	
	FROM t_athlete_counts AS ath
	
	LEFT JOIN t_population AS pop ON ath.noc = pop.countrycode AND ath.year = pop.year;
	
-- Merge the athlete count and population table with GDP information
DROP TABLE IF EXISTS t_count_and_gdp;
CREATE TABLE t_count_and_gdp AS
	SELECT
		cp.noc,
		cp.year,
		cp.season,
		cp.athlete_count,
		cp.host,
		cp.population,
		t_gdp.gdpperc
	
	FROM t_count_and_pop AS cp
	
	LEFT JOIN t_gdp ON cp.noc = t_gdp.entity AND cp.year = t_gdp.year;
	
-- Clean out null values from t_count_and_gdp table
DELETE FROM t_count_and_gdp

WHERE population IS NULL OR gdpperc IS NULL;

-- Join t_count_and_gdp with medal counts
DROP TABLE IF EXISTS t_count_and_medal;
CREATE TABLE t_count_and_medal AS
	SELECT
		cg.noc,
		cg.year,
		cg.season,
		cg.athlete_count,
		cg.host,
		cg.population,
		cg.gdpperc,
		mc.gold,
		mc.silver,
		mc.bronze,
		mc.total
		
	FROM t_count_and_gdp AS cg
	
	LEFT JOIN t_medal_count AS mc ON cg.noc = mc.countrycode AND cg.year = mc.year AND cg.season = mc.season;

-- Replace Nulls with 0 in t_count_and_medal
DROP TABLE IF EXISTS x_MLR;
CREATE TABLE x_MLR AS
	SELECT
		noc,
		year,
		season,
		athlete_count,
		host,
		population,
		gdpperc,
		COALESCE(gold, 0) AS gold,
		COALESCE(silver, 0) AS silver,
		COALESCE(bronze, 0) AS bronze,
		COALESCE(total, 0) AS total
	
	FROM t_count_and_medal;
	
-- Create the total medal count per Olympic season per year
DROP TABLE IF EXISTS t_annual_total1;
CREATE TABLE t_annual_total1 AS
	SELECT
		mlr.year,
		mlr.season,
		SUM(mlr.athlete_count) AS athlete_count
		
	FROM x_mlr as mlr
	
	GROUP BY mlr.year, mlr.season
	
	ORDER BY mlr.year, mlr.season;

DROP TABLE IF EXISTS t_annual_total2;
CREATE TABLE t_annual_total2 AS
	SELECT
		mlr.year,
		mlr.season,
		SUM(mlr.total) AS total
		
	FROM x_mlr as mlr
	
	GROUP BY mlr.year, mlr.season
	
	ORDER BY mlr.year, mlr.season;

DROP TABLE IF EXISTS t_annual_total;
CREATE TABLE t_annual_total AS
	SELECT
		ann1.year,
		ann1.season,
		ann1.athlete_count,
		ann2.total
	
	FROM t_annual_total1 AS ann1
	
	LEFT JOIN t_annual_total2 AS ann2 ON ann1.year = ann2.year AND ann1.season = ann2.season;

select * from t_annual_total;

-- Merge x_MLR and t_annual_total tables
DROP TABLE IF EXISTS t_medal_share;
CREATE TABLE t_medal_share AS
	SELECT
		mlr.noc,
		mlr.year,
		mlr.season,
		mlr.host,
		mlr.athlete_count AS athlete_count_x,
		mlr.population,
		mlr.gdpperc,
		mlr.gold,
		mlr.silver,
		mlr.bronze,
		mlr.total AS country_medal_total,
		ann.athlete_count AS athlete_count_y,
		ann.total AS olympic_total
	
	FROM x_mlr AS mlr
	
	INNER JOIN t_annual_total as ann ON mlr.year = ann.year AND mlr.season = ann.season;

-- Changes the medal count columns to data type REAL in order to compute percentages in next step
ALTER TABLE t_medal_share 
	ALTER COLUMN country_medal_total TYPE REAL,
	ALTER COLUMN olympic_total TYPE REAL;

-- Add computed columns to t_medal_share for percentage of medals and athletes.
DROP TABLE IF EXISTS x_medal_share;
CREATE TABLE x_medal_share AS (
	SELECT 
		noc,
		year,
		season,
		host,
		athlete_count_x,
		population,
		gdpperc,
		gold,
		silver,
		bronze,
		country_medal_total,
		athlete_count_y,
		olympic_total,
		(country_medal_total / olympic_total) AS medal_share,
		(athlete_count_x / athlete_count_y) AS athlete_share
	FROM t_medal_share);

-- Drops all temporary tables
DROP TABLE IF EXISTS t_annual_total;
DROP TABLE IF EXISTS t_annual_total1;
DROP TABLE IF EXISTS t_annual_total2;
DROP TABLE IF EXISTS t_athlete_counts;
DROP TABLE IF EXISTS t_count_and_gdp;
DROP TABLE IF EXISTS t_count_and_medal;
DROP TABLE IF EXISTS t_count_and_pop;
DROP TABLE IF EXISTS t_gdp;
DROP TABLE IF EXISTS t_medal_count;
DROP TABLE IF EXISTS t_medal_share;
DROP TABLE IF EXISTS t_olympic_years;
DROP TABLE IF EXISTS t_population;

-- End of script