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
    return (
        <div className='TVShow'>
            {tvShow.name && (
                <div className='Show-wrapper'>
                    <div className="Show__image-wrapper">
                        <img src={tvShow.image.medium} alt=""/>
                    </div>
                    <div className="Show__info">
                        <h2>{tvShow.name}</h2>

                    </div>
                </div>
            )}
        </div>
    );
};

export default TvShow;
