# RYDE Challange
## Start-up
+ Clone this repo
```git clone https://github.com/Edel-weiB/RYDE-challange-Joey```
+ Install dependencies (skip if you already have react.js and node)
 + install node https://nodejs.org/en/download/
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
+ Table hover for easier reading
+ Page have min and max bounds depending on the pagination

### Known Bugs / Error
+ Data not sorted on page refresh

### Future TODO
+ Filter Doesn't work for marriage
+ CSS on the pagination, sorting, filter and page selection
