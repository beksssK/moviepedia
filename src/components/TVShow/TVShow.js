import React, {useEffect, useState} from 'react';
import './TVShow.css';
import axiosMovies from "../../axios-movies";

const TvShow = props => {
    const [tvShow, setTvShow] = useState({});
    const getTVShow = async () => {
        try{
            let response = await axiosMovies.get('/shows/' + props.match.params.id);
            setTvShow(response.data);
        } catch (e) {
            console.error('Error while making a request', e);
        }
    };
    useEffect(() => {
        getTVShow().catch(e => console.error(e));
    }, [props.match.params.id]);
    if(tvShow.name){
        console.log('kk', tvShow)
    }
    const stars = [];
    if(tvShow.name){
        for(let i = 0; i < Math.round(tvShow.rating.average); i++){
            stars.push(<i key={i} className="fas fa-star"/>)
        }
        for(let j = 0; j < 10 - Math.round(tvShow.rating.average); j++){
            stars.push(<i key={j + 10} className="far fa-star"/>)
        }
    }
    return (
        <div className='TVShow'>
            {tvShow.name && (
                <div className='Show-wrapper'>
                    <div className="Show__image-wrapper">
                        {tvShow.image && <img src={tvShow.image.medium} alt=""/>}
                    </div>
                    <div className="Show__info">
                        <h2>{tvShow.name}</h2>
                        {tvShow.rating.average ? (
                            <div className='Show__item'>
                                {stars}
                                <span> {tvShow.rating.average}</span>
                            </div>
                        ): null}
                        {tvShow.genres.length ? (
                            <div className='Show__item'>
                                <span className='Show__mini-title'>Genres: </span>
                                {tvShow.genres.map(g => (<span key={g}> {g} </span> ))}
                            </div>
                        ) : null}
                        <div className='Show__item'>
                            <span className='Show__mini-title'>Language: </span>
                            <span>{tvShow.language}</span>
                        </div>
                        {tvShow.network ? (
                            <div className='Show__item'>
                                <span className='Show__mini-title'>Country: </span>
                                <span>{tvShow.network.country.name}</span>
                            </div>
                        ) : null}
                        <div className='Show__item'>
                            <span className='Show__mini-title'>Status: </span>
                            <span>{tvShow.status}</span>
                        </div>
                    </div>
                    <div className='Show__summary'>
                        <p dangerouslySetInnerHTML={{__html: tvShow.summary}}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TvShow;
