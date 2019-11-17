import React, { Component } from "react";
import "./style.css";
import Outside from "../../components/Outside";
import Flavor from "../../components/Flavor";
import FlavorTitle from "../../components/FlavorTitle";
class Home extends Component {

    render() {
        return (
            <div>
                <FlavorTitle />
                <Flavor />
                <Outside />
            </div>
        )
    }
}
export default Home;