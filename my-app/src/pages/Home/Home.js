import React, { Component } from "react";
import "./style.css";
import Outside from "../../components/Outside";
import Flavor from "../../components/Flavor";
class Home extends Component {

    render() {
        return (
            <div>
                <Flavor />
                <Outside />
            </div>
        )
    }
}
export default Home;