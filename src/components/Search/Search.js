import React, {useEffect, useState} from 'react';
import './Search.css';
import axiosMovies from "../../axios-movies";
const Search = () => {
    const [searchVal, setSearchVal] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const getResults = async (name) => {
        try{
            let response = await axiosMovies.get('shows?q=' + name);
            setSearchResults(response.data);
        } catch (e) {
            console.error('error happened while getting movie names', e);
        }
    };
    useEffect(() => {
        getResults(searchVal).catch(e => {
            console.error(e);
        });
    }, [searchVal]);
    return (
        <div className='Search'>
            <label htmlFor="search" className='Search__label'>Search for TV shows: </label>
            <div className='Search__input'>
                <input id='search' value={searchVal} onChange={(e) => setSearchVal(e.target.value)} type="text"/>
            </div>
            <div className='Search__result'>
                {searchResults.map(movie => (
                    <div key={movie.show.id} className='Search__result_item'>
                        {movie.show.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
