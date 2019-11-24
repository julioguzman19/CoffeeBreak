import React from "react";
import "./style.css";
import tea from '../Tea/tea.jpg';

function Tea() {
    return (
        <div class="teaBackground">
            <div><img src={tea} alt="crepe" width="250px" height="250px" /></div>
        </div >
    );
}

export default Tea;