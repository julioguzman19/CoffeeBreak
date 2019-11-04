import React from "react";
import "./style.css";

function Nav() {
    return (
        <div class="verticalArea">

            <nav>
                <h1 class="title">Coffee Break</h1>
                <div class="navSubHeaders">
                    <h3>Home</h3>
                    <h3>Menu</h3>
                    <h3>Catering</h3>
                    <h3>Media</h3>
                    <h3>About</h3>
                    <h3>Contact</h3>

                </div>
                <div class="navSubHeaders">
                    <h3>Address: </h3>
                    <h3 class="navAddress">rue 445 lot3475 Hamdallaye ACI 2000 Bamako Mali</h3>
                    <h3>Phone: </h3>
                    <h3>
                        Opening Hours: <br />
                        Mon: 6am - 10pm<br />
                        Tues:<br />
                        Wed: <br />
                        Thurs: <br />
                        Fri:<br />
                        Sat: <br />
                        Sun: <br />
                    </h3>
                    <h3>Social Media Icons: </h3>
                </div>
            </nav>

        </div >
    );
}

export default Nav;