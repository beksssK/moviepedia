import React, {useEffect, useState} from 'react';
import './Search.css';
import axiosMovies from "../../axios-movies";
import {withRouter} from "react-router-dom";
const Search = props => {
    const [searchVal, setSearchVal] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const getResults = async (name) => {
        try{
            let response = await axiosMovies.get('search/shows?q=' + name);
            setSearchResults(response.data);
        } catch (e) {
            console.error('error happened while getting movie names', e);
        }
    };
    const showTVShow = showId => {
        setSearchVal('');
        props.history.push('/shows/' + showId);
    };
    const clearResults = () => {
        setTimeout(() => {
            setSearchResults([]);
        }, 200);
    };
    useEffect(() => {
        getResults(searchVal).catch(e => {
            console.error(e);
        });
    }, [searchVal]);
    return (
        <div className='Search'>
            <label htmlFor="search" className='Search__label'> Search for TV shows: </label>
            <div className='Search__input'>
                <input id='search' value={searchVal} onBlur={clearResults} onChange={(e) => setSearchVal(e.target.value)} type="text"/>
            </div>
            <div className='Search__result'>
                {searchResults.map(movie => (
                    <div key={movie.show.id} className='Search__result_item' onClick={() => showTVShow(movie.show.id)}>
                        {movie.show.image ? (<img height='50' width='auto'  src={movie.show.image.medium} alt=""/>) :
                            <img height='50' width='auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFbz2hHONNEYQMdw5aF2DOh54V5UbQ09RsXwC6lirZPzQZk4NjwQ&s" alt=""/>}
                        <span>{movie.show.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default withRouter(Search);
