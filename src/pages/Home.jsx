import React, { useState } from 'react';
import Main from '../components/section/Main';

const Home = () => {
    const [selectedCoffee, setSelectedCoffee] = useState('');

    const changeCoffeeType = (coffeeType) => {
        setSelectedCoffee(coffeeType);
    };

    const coffeeTypes = [
        { id: 'americano', name: 'Americano' },
        { id: 'au_lait', name: 'Au lait' },
        { id: 'capuccino', name: 'Capuccino' },
        { id: 'corretto', name: 'Corretto' },
        { id: 'espresso', name: 'Espresso' },
        { id: 'latte', name: 'Latte' },
        { id: 'lungo', name: 'Lungo' },
        { id: 'macchiato', name: 'Macchiato' },
        { id: 'mocha', name: 'Mocha' },
        { id: 'ristretto', name: 'Ristretto' },
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
        </Main>
    );
};

export default Home;
