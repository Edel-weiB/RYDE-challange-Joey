# RYDE Challange
Written in native React JS.

## Start-up
+ Clone this repo
```git clone https://github.com/Edel-weiB/RYDE-challange-Joey```
+ install node https://nodejs.org/en/download/ (skip if already have)
+ start the server
```npm start```
or
```yarn start```

## Requirement
### Main Requirement
+ [x] Create a flexible column table base on the data in file `data.json`
+ [x] Table should be sortable based on column

### Optional
+ [x] Make a search bar which can filter the data based on user input
+ [ ] Make the sort feature are linked to each other (priority decreases from left to right)
+ [x] Table pagination based on user select (10, 20, 30, 50)

### Notes
+ [x] No third party library is allowed to use in the challenge

## Notes / Feature
+ Filter works for Name, Age or Job
+ Can sort ascending and descending
+ Table hover for easier reading
+ Page have min and max bounds depending on the pagination

### Known Bugs / Error
+ Data not sorted on page refresh

### Future TODO
+ Filter Doesn't work for marriage
+ CSS on the pagination, sorting, filter and page selection
+ Do the last requirement, lots of reading here or just use huge nested IF statments

### Some Explainations
It's been a while since I coded JS, may look messy.  
I didn't use class as I want to try the new react hook method.  
Looking at the requirements, a website is a good platform. This gives us a few options:  
+ Python+Flask+HTML = API calls is a pain, all the downsides of JS+HTML
+ JS+HTML = Synchronous is a pain, and no state
+ Ionic/Agular = Mainly for mobile, a bit slow, Documentation is a pain
+ Native React = Ideal

I choose native react due to the need of data (collection) manipulations. And the fact the the variable can be binded to state which reduces a lot of redundancy.
