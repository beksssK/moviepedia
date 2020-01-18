import React, {useState} from 'react';
import './Home.css';
const Home = props => {
    const initialShows = [
        {name: 'Mr. Robot', image: 'http://static.tvmaze.com/uploads/images/medium_portrait/211/528026.jpg', id: '1871'},
        {name: 'Silicon Valley', image: 'http://static.tvmaze.com/uploads/images/medium_portrait/215/538434.jpg', id: '143'},
        {name: 'The Walking Dead', image: 'http://static.tvmaze.com/uploads/images/medium_portrait/208/521870.jpg', id: '73'},
    ];
    const [recommendedShows] = useState(initialShows);
    const goToTVShow = id => {
        props.history.push('/shows/' + id);
    };
    return (
        <div className='Home'>
            <h3 className='Home__title'>You can find any TV Show you have been looking for</h3>
            <div className='Cards'>
                {recommendedShows.map(show => (
                    <div className='Card' key={show.id} onClick={() => goToTVShow(show.id)}>
                        <img src={show.image} alt=""/>
                        <h4>{show.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
