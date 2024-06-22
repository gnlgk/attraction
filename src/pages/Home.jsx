import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';
import VideoView from '../components/video/VideoView';

const Home = () => {
    const [selectedCoffee, setSelectedCoffee] = useState('');
    const [selectedVid, setSelectedVid] = useState('');
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            if (!selectedVid) return;
            try {
                const response = await fetch(
                    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&type=video&q=${selectedVid}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
                );
                const data = await response.json();
                setVideos(data.items);
            } catch (error) {
                console.log(error);
            }
        };
        fetchVideos();
    }, [selectedVid]);

    const changeCoffeeType = (coffeeType) => {
        const coffee = coffeeTypes.find((coffee) => coffee.id === coffeeType);
        setSelectedCoffee(coffeeType);
        setSelectedVid(coffee.vid);
    };

    const coffeeTypes = [
        { id: 'americano', name: 'Americano', vid: '커피 아메리카노' },
        { id: 'au_lait', name: 'Au lait', vid: '커피' },
        { id: 'capuccino', name: 'Capuccino', vid: '커피 카푸치노' },
        { id: 'corretto', name: 'Corretto', vid: '커피' },
        { id: 'espresso', name: 'Espresso', vid: '커피 에스프레소' },
        { id: 'latte', name: 'Latte', vid: '커피라떼' },
        { id: 'lungo', name: 'Lungo', vid: '커피 룽고' },
        { id: 'macchiato', name: 'Macchiato', vid: '커피 마끼아또' },
        { id: 'mocha', name: 'Mocha', vid: '커피 모카라떼' },
        { id: 'ristretto', name: 'Ristretto', vid: '커피 리스트레토' },
    ];

    return (
        <Main>
            <div className="coffee__main">
                <div className="options">
                    {coffeeTypes.map((coffee) => (
                        <button
                            key={coffee.id}
                            id={coffee.id}
                            className={selectedCoffee === coffee.id ? 'selected' : ''}
                            onClick={() => changeCoffeeType(coffee.id)}
                        >
                            {coffee.name}
                        </button>
                    ))}
                </div>
                <div className="container">
                    <h1 className="coffee_name">
                        {selectedCoffee ? coffeeTypes.find((coffee) => coffee.id === selectedCoffee).name : 'Find Coffee Youtube'}
                    </h1>
                    <div className="cup">
                        <div className={`filling reset ${selectedCoffee}`}>
                            <div className="coffee">Coffee</div>
                            <div className="water">Water</div>
                            <div className="liquor">Liquor</div>
                            <div className="milk">Milk</div>
                            <div className="whipped_cream">Whipped cream</div>
                            <div className="milk_foam">Milk foam</div>
                            <div className="steamed_milk">Steamed milk</div>
                            <div className="chocolate">Chocolate</div>
                        </div>
                        <div className="plate"></div>
                    </div>
                </div>
            </div>
            <div className="Home__view">
                <div className="video__inner">
                    <VideoView videos={videos} />
                </div>
            </div>
        </Main>
    );
};

export default Home;
