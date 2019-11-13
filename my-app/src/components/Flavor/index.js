import React from "react";
import "./style.css";
import crepe from '../Flavor/crepe.jpg';

function Flavor() {
    return (
        <div class="flavorComponentBackground">
            <div id="flavorImage"><img src={crepe} class="center" alt="crepe" width="200px" height="200px" /><h1>Flavor of the Day!</h1></div>
            <div id="flavorName">
                Strawberry Crepe
                <br></br>Price:$1
            </div>
        </div >
    );
}

export default Flavor;