import React from "react";
import "./style.css";
import coffee from '../Coffee/coffee.jpg';

function Coffee() {
    return (
        <div class="coffeeBackground">
            <div><img src={coffee} alt="crepe" width="250px" height="250px" /></div>
        </div >
    );
}

export default Coffee;