import React, { useState , useEffect } from 'react';
import { Link } from "react-router-dom";
import LRbar from "../bar/Bar";
import './Package.css';
import food from './food';
import hotel2 from './hotel2';
import { FormControl } from 'react-bootstrap';

function Package2999() {

    const [price,setPrice] = useState(2999);
    const [person,setPerson] = useState(null);

    const [foodState, setFoodState] = useState();

    const onChangeComboBox = (e) => {
        const selectedId = e.target.value;
        const selectedFoodState = food.filter((d) => d.id == selectedId)[0];
        setFoodState(selectedFoodState);
    };

    useEffect(() => {
        setFoodState(food[1]);
    }, []);

    const [hotelState, setHotelState] = useState();

    const onChangeComboBox1= (e) => {
        const selectedId = e.target.value;
        const selectedHoteltate = hotel2.filter((d) => d.id == selectedId)[0];
        setHotelState(selectedHoteltate);
    };

    useEffect(() => {
        setHotelState(hotel2[1]);
    }, []);

    return (
        <>
            <LRbar />
            <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@500&display=swap" rel="stylesheet" />
            <div className='backgrand-status2'>
                <br />
                <div className="pics">
                    <img src='https://www.chillpainai.com/src/wewakeup/scoop/images/2653e8c3228b8245308f00ad1cffe403c0ce5ea1.jpg' />
                </div><br/>
                <h2 className='packname'>Package 2999</h2>
                <p className='description'>
                In this 2999฿ Package is including with 6 island tours, 3 outdoor activities and free 2 meals at your place feel free to choose what you like with to following Hotel/Motel and Meal.
                </p>

                    <form className='hotel-form'>

                        <h2>Hotel</h2>
                        <div className="container">
                            <select
                                className="custom-select"
                                value={hotelState?.id}
                                onChange={(e) => {
                                    onChangeComboBox1(e);
                                }}
                            >
                                {hotel2.map((d) => (
                                    <option key={d.id} value={d.id}>
                                        {d.hotel}
                                    </option>
                                ))}
                            </select><br/><br/>
                            {hotelState ? (
                                <img src={hotelState?.image} width="100%" height="500px" />
                            ) : (
                                ""
                            )}
                        </div>

                    </form>

                    <br />

                    <form className='meal-form'>

                        <h2>Meal</h2>
                        <div className="container">
                            <select
                                className="custom-select"
                                value={foodState?.id}
                                onChange={(e) => {
                                    onChangeComboBox(e);
                                }}
                            >
                                {food.map((d) => (
                                    <option key={d.id} value={d.id}>
                                        {d.restaurant}
                                    </option>
                                ))}
                            </select><br/><br/>
                            {foodState ? (
                                <img src={foodState?.image} />
                            ) : (
                                ""
                            )}
                        </div>
                    </form>
                    
                    <div className='info-form'>
                    <h1 className='topic'>
                        Date
                        <br/>
                        <FormControl type="date" required style={{color:'rgb(68, 68, 68)'}}  class="form-control-lg" fontFamily='Mitr'></FormControl>
                    </h1>


                    <h1 className='topic'>
                        Additional :
                    </h1>


                    <input type="text" className='additional' rows="2" required />

                    <h1 className='topic'>
                        Person
                    </h1>
                    
                    <input min="1" max="10" className='person' type="number" value={person} onChange={(e) => setPerson(e.target.value)} required/>
                    <div className='price-booking' >Total : {price*person} Baht</div>
                    </div>

                <Link to="/payment" className="btn-booking">Booking</Link>
                <a href='/package' className='btn-back'>Back</a>


                <br />


            </div>
        </>
    )
}

export default Package2999;