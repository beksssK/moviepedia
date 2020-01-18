import React, {useEffect, useState} from 'react';
import './Search.css';
const Search = () => {
    const [searchVal, setSearchVal] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const getResults = async () => {

    };
    useEffect(() => {

    }, []);
    console.log(searchVal);
    return (
        <div className='Search'>
            <label htmlFor="search" className='Search__label'>Search for movie: </label>
            <div className='Search__input'>
                <input id='search' value={searchVal} onChange={(e) => setSearchVal(e.target.value)} type="text"/>
            </div>
        </div>
    );
};

export default Search;
