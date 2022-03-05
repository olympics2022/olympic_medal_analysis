-- Creates the competitor table
DROP TABLE IF EXISTS Olympic_Project;

CREATE TABLE Olympic_Project (
	KeyID INTEGER PRIMARY KEY, 
	CompetitorID INTEGER,
	NOC VARCHAR NOT NULL,
	Year INTEGER,
	Season VARCHAR,
	Host VARCHAR
);

-- Creates athlete count table
DROP TABLE IF EXISTS athlete_count;

CREATE TABLE athlete_count (
	keyid INTEGER PRIMARY KEY,
	noc VARCHAR,
	year INTEGER,
	season VARCHAR,
	host INTEGER,
	competitor_count REAL
);

-- Creates country identification table
DROP TABLE IF EXISTS Countries;

CREATE TABLE Countries (
	Country VARCHAR,
	Latitude REAL,
	Longitude REAL,
	NOC VARCHAR PRIMARY KEY
);

-- Creates the population data table
DROP TABLE IF EXISTS Population;

CREATE TABLE Population (
	PopKey INTEGER PRIMARY KEY,
	CountryCode VARCHAR,
	Country VARCHAR,
	Year INTEGER NOT NULL,
	Population REAL
);

-- Creates the GDP data table
DROP TABLE IF EXISTS GDP;

CREATE TABLE GDP (
	GDPKey INTEGER PRIMARY KEY,
	Code VARCHAR,
	Entity VARCHAR,
	Year INTEGER NOT NULL,
	GDPperC REAL NOT NULL
);

-- Creates the medal count data per country
DROP TABLE IF EXISTS MedalCount;

CREATE TABLE MedalCount (
	MedalKey INTEGER PRIMARY KEY,
	Year INTEGER NOT NULL,
	Season VARCHAR NOT NULL,
	Country VARCHAR NOT NULL,
	CountryCode VARCHAR,
	Gold INTEGER,
	Silver INTEGER,
	Bronze INTEGER,
	Total INTEGER
);

-- Run script to here

-- Run the following testing scripts one line at a time
SELECT * FROM countries;  -- 180 rows
SELECT * FROM gdp;  -- 19496 rows
SELECT * FROM medalcount; -- 1329 rows
SELECT * FROM olympic_project; -- 205127 rows
SELECT * FROM population; -- 12139
SELECT * FROM athlete_count; --3837
