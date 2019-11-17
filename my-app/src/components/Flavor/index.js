import React from "react";
import "./style.css";
import crepe from '../Flavor/crepe.jpg';

function Flavor() {
    return (
        <div class="flavorComponentBackground">
            <div id="flavorImage"><img src={crepe} class="center flavorImage" alt="crepe" width="250px" height="250px" /></div>
            <div id="flavorName">
                <h1 class="flavorName">
                    Strawberry Crepe
                <span>
                        Price:$1
                </span>
                </h1>
            </div>
        </div >
    );
}

export default Flavor;