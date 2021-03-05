import data from './data.json';
import React, { useState, useEffect } from 'react';
import style from './Tables.module.css';

function Tables() {

    const size = data.length;
    const [pagination, setPagination] = useState(50);
    const [page, setPage] = useState(1);
    const [sortBy, setSortBy] = useState("Name");
    const [dataState, setDataState] = useState(data);
    const [filteredDataState, setFilteredDataState] = useState(data);


    // "Constructor"
    useEffect(() => {
        sortData("Name");
    })

    function sortData(column) {
        switch (column) {
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
            case "Name":
                filteredDataState.sort((a, b) => {
                    var nameA = a.name.toUpperCase();
                    var nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
                break;

            case "NameDesc":
                filteredDataState.sort((a, b) => {
                    var nameA = a.name.toUpperCase();
                    var nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                        return 1;
                    }
                    if (nameA > nameB) {
                        return -1;
                    }
                    return 0;
                });
                break;

            case "Job":
                filteredDataState.sort((a, b) => {
                    var nameA = a.job.toUpperCase();
                    var nameB = b.job.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
                break;

            case "JobDesc":
                filteredDataState.sort((a, b) => {
                    var nameA = a.job.toUpperCase();
                    var nameB = b.job.toUpperCase();
                    if (nameA < nameB) {
                        return 1;
                    }
                    if (nameA > nameB) {
                        return -1;
                    }
                    return 0;
                });
                break;

            case "Age":
                filteredDataState.sort((a, b) => {
                    var numA = parseInt(a.age);
                    var numB = parseInt(b.age);

                    if (isNaN(numB)) return -1;
                    else if (isNaN(numA)) return 1;
                    else return numA - numB;
                });
                break;

            case "AgeDesc":
                filteredDataState.sort((a, b) => {
                    var numA = parseInt(a.age);
                    var numB = parseInt(b.age);

                    if (isNaN(numB)) return -1;
                    else if (isNaN(numA)) return 1;
                    else return numB - numA;
                });
                break;

            case "Married":
                filteredDataState.sort((a, b) => {
                    if (b.married == null) return -1;
                    else if (a.married == null) return 1;
                    else if (a.married) return -1;
                    else return 1;
                });
                break;

            case "MarriedDesc":
                filteredDataState.sort((a, b) => {
                    if (b.married == null) return -1;
                    else if (a.married == null) return 1;
                    else if (a.married) return 1;
                    else return -1;
                });
                break;
    
            default:
                break;
        }
    }

    // https://stackoverflow.com/questions/175739/built-in-way-in-javascript-to-check-if-a-string-is-a-valid-number
    // I can technically use isNaN, but I want to be safe
    function isNumeric(str) {
        if (typeof str != "string") return false // we only process strings!  
        return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
               !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
      }

    function changeFilter(event) {
        let text = event.target.value;

        setPage(1);

        if (isNumeric(text)) {
            // Age
            setFilteredDataState(
                dataState.filter(
                    dataState => (
                        parseInt(dataState.age) === parseInt(text)
                    )
                )
            );
        } else {
            // Job and Name
            setFilteredDataState(
                dataState.filter(
                    dataState => (
                        dataState.name.toLowerCase().includes(text.toLowerCase()) ||
                        dataState.job.toLowerCase().includes(text.toLowerCase())
                    )
                )
            );
        }
        
    }

    function changePage(NextPage) {
        if (NextPage) {
            if (pagination*page < size) setPage(page + 1);;
        } else {
            if (page > 1) setPage(page - 1);
        }
    }

    function changePagination(n) {
        setPagination(n);
        setPage(1);
    }

    function changeSortBy(val) {
        if (val === sortBy) {
            setSortBy(val+"Desc");
            sortData(val+"Desc");
        } else {
            sortData(val);
            setSortBy(val);
        }
        
    }

    return (
        <div className={style.main}>



            {/* Search Filter */}
            <div className={style.fill}>
                Filter: &emsp;<input type="text" onInput={event => changeFilter(event)} />
            </div>

            {/* Sort Button */}
            <div>
                Sort by: &emsp;
                <button onClick={() => changeSortBy("Name")}>
                    {(sortBy === "Name") ?
                        <span className={style.selected}>Name △</span>
                        : ((sortBy === "NameDesc") ? <span className={style.selected}>Name ▽</span>  : "Name")
                    }
                </button>
                <button onClick={() => changeSortBy("Age")}>
                    {(sortBy === "Age") ?
                        <span className={style.selected}>Age △</span>
                        : ((sortBy === "AgeDesc") ? <span className={style.selected}>Age ▽</span>  : "Age")
                    }
                </button>
                <button onClick={() => changeSortBy("Job")}>
                    {(sortBy === "Job") ?
                        <span className={style.selected}>Job △</span>
                        : ((sortBy === "JobDesc") ? <span className={style.selected}>Job ▽</span>  : "Job")
                    }
                </button>
                <button onClick={() => changeSortBy("Married")}>
                    {(sortBy === "Married") ?
                        <span className={style.selected}>Married △</span>
                        : ((sortBy === "MarriedDesc") ? <span className={style.selected}>Married ▽</span>  : "Married")
                    }
                </button>
            </div>

            {/* Pagination Button */}
            <div>
                Pagination: &emsp;
                <button onClick={() => changePagination(10)}>{(pagination === 10) ? <span className={style.selected}>10</span> : 10}</button>
                <button onClick={() => changePagination(20)}>{(pagination === 20) ? <span className={style.selected}>20</span> : 20}</button>
                <button onClick={() => changePagination(30)}>{(pagination === 30) ? <span className={style.selected}>30</span> : 30}</button>
                <button onClick={() => changePagination(50)}>{(pagination === 50) ? <span className={style.selected}>50</span> : 50}</button>
            </div>

            {/* Page select */}
            <div>
                <button onClick={() => changePage(false)}>Prev</button>
                &emsp;{page}&emsp;
                <button onClick={() => changePage(true)}>Next</button>
            </div>

            {/* Table */}
            <table className={style.table}>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Job</th>
                    <th>Married</th>
                </tr>

                { filteredDataState.slice(pagination*(page-1), pagination*page).map(
                    function(val, key)
                        {
                            return (
                                <tr key={key}>
                                    <td>{val.name}</td>
                                    <td>{val.age}</td>
                                    <td>{val.job}</td>
                                    <td>{(val.married == null) ? "" : ((val.married) ? "Married" : "Single")}</td>
                                </tr>
                            )
                        }
                    )
                }
                </tbody>
            </table>
            
            {/* Page select */}
            <div>
                <button onClick={() => changePage(false)}>Prev</button>
                &emsp;{page}&emsp;
                <button onClick={() => changePage(true)}>Next</button>
            </div>
        </div>
    );

}

export default Tables;