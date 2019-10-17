# SQL and ORMs

## SWBATs

*  [ ] Explain persistence and the need for using SQL
*  [ ] Define SQL
*  [ ] Explain the difference between SQLite3 and SQL
*  [ ] Explore provided data through SQLite Browser
*  [ ] Define CRUD
*  [ ] Perform CRUD actions on a single table
*  [ ] Perform CRUD actions across related tables

## What can I do with data?
* create it
* updating it
* deleting it


## CRUD

#### Create
* save it

#### Read
* share it
* analyze/visualize it
* query it
* connect it
* mine it
* sell it

#### Update
* save it
* change it

#### Delete
* destroy it

#### Instagram
* Create
  * making a post
  * making a comment
  * liking a post
  * create a story

* Read
  * scrollin' through your feedz

* Update
  * changing your user info
  * tagging someone after the fact
  * editing a caption

* Delete
  * deleting a post


### Database
* information
* servers
* big machines
* giant excel sheets
* crashing
* tables

* Different types of Database
  - Relational (RDBMS) - SQLite3, MySQL, Postgres, Oracle
  - NoSQL - graph (Nee04j), document store (Mongo), key-value store (Redis)

### SQL
* SQL is the language used to manipulate databases
  * Structured Query Language
  
* SQLite3 is a database platform

* Primary Key
  * uniqe within a table
  * it automatically increments

## Set Up 

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges

1. Write the SQL to return all of the rows in the artists table?
* READ
```sql
SELECT *
FROM artists;
```

2. Write the SQL to select the artist with the name "Black Sabbath"
* READ
```sql
SELECT *
FROM artists
WHERE name = "Black Sabbath";
```

```sql
SELECT *
FROM artists
WHERE name LIKE "%black%";
```

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text
* CREATE
```sql
CREATE TABLE fans (
  id INTEGER PRIMARY KEY,
  name VARCHAR
);

```

4. Write the SQL to alter the fans table to have an artist_id column type integer?



5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**



6. _skip_ How would you update your name in the fans table to be your new name?



7. Write the SQL to return fans that are not fans of the black eyed peas.



8. Write the SQL to change a fan's artist.



9. Write the SQL to display an artist's name next to their album title

```sql
SELECT artists.name, albums.title
FROM artists
JOIN albums
ON albums.artist_id = artists.id;
```


10. _skip_ Write the SQL to display artist name, album name and number of tracks on that album


11. _skip_ Write the SQL to return the name of all of the artists in the 'Pop' Genre



## BONUS (very hard)

12. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

