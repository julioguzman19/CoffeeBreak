import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div class="verticalArea">

            <nav>
                <h1 class="title">Coffee break</h1>
                <div class="navSubHeaders">
                    <Link
                        className={window.location.pathname === "/"}
                        to="/"
                    >
                        <h3 id="HomeId"><a href="">Home</a></h3>
                    </Link>


                    <Link
                        className={window.location.pathname === "/menu"}
                        to="/menu"
                    >
                        <h3 id="MenuId"><a href="">Menu</a></h3>
                    </Link>

                    <h3 id="CateringId"><a href="">Catering</a></h3>
                    <h3 id="MediaId"><a href="">Media</a></h3>
                    <h3 id="AboutId"><a href="">About</a></h3>
                    <h3 id="ContactId"><a href="">Contact</a></h3>

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