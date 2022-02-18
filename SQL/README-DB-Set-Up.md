 # Setting Up the Olympic Medal Analysis Database in PostGres/pgAdmin
 
 In order to set up a local database server, please follow the instructions below.  These instructions are for PostGres/pgAdmin.
 
 ## Setting Up the Table Structures
 1.  In pgAdmin create a new database and name it appropriately.  I named it ***olympia*** and will refer to the database as such going forward.
 2.  Right click on ***olympia*** and select *Query Tool*
 3.  Click on the *Open File* icon in the Query Tool.
 4.  Change the directory to the SQL folder and click on *db_start_code.sql*.
 5.  This should bring up the starter code SQL script.
 6.  Highlight everything down to the comment *-- Run script to here*
 7.  Click on the *Execute/Refresh* icon in the Query Tool (looks like a Play Button) or press F5.
 8.  Once the script completes you will need to import the data into the DB 

## Importing the Data
1. Click on the > next to *Schemas* in the **olympia** database tree on the left.
2. Verify that there are 5 tables in the schema (the number in parentheses next to *Tables* underneath *Schemas*
3. Click on the > next to "Tables"
4. Right click on the *countries* table
5. Click *Import/Export*
6. Change the process to import by clicking on *Export* this should change that button to say Import (and turn it green)
7. In the Filename section, click on the **...** button and select the [most up-to-date file for countries] in the Resources folder.  (Please note that until the main branch is cleaned and order, these files will be in many different locations)
8. Click on the *No* button next to *Header* so that it changes to *Yes* and turns green.
9. Click the drop-down menu next to *Delimiter* and select **,**
10. Your dialog box should look like this:

![image](https://user-images.githubusercontent.com/91292960/154732740-2508802f-fe24-4172-ba99-6be47efe6d27.png)

11. Click on *OK*
12. Once this is run successfully, repeat steps 4-11 for the following tables:  gdp, olympic_project, & population
13. For the medalcount table, repeat steps 4-10 **(do NOT press OK)** and then perform the following steps
    * Click on the drop-down menu next to *Encoding* and select *WIN1252*.  Your dialog box should look like this:
      
      ![image](https://user-images.githubusercontent.com/91292960/154733530-7da2b7f6-87d7-4a66-a65c-9de092ef3cd4.png)
      
    * Click on *OK*

## Test Your Imports
1. On the Query Tool you should still have the *db_starter_code.sql* file open.
2. Run each of the lines below the comment *-- Run the following testing scripts one line at a time* separately.
3. The comments on each line indicate how many rows the command should have found.
