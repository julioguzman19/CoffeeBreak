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

                    <h3 class="navAddress">Adresse: <br></br>rue 445 lot3475 Hamdallaye ACI 2000 Bamako Mali</h3>
                    <h3 class="navAddress">Tel: <br></br>83 88 28 28</h3>
                    <h3 class="navAddress">
                        Horaires: <br />
                        Lundi-Vendredi: 7:00 - 21:00<br />
                        Samedi-Dimanche: 10:00 - 22:00 <br />
                    </h3>
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-instagram"></a>
                </div>
            </nav>

        </div >
    );
}

export default Nav;