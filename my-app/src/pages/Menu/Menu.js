import React, { Component } from "react";
import "./style.css";
import MenuTitle from "../../components/MenuTitle";
import Coffee from "../../components/Coffee";
import Tea from "../../components/Tea";

class Menu extends Component {

    render() {
        return (
            <div>
                <MenuTitle />
                <Coffee />
                <Tea />
            </div>
        )
    }
}
export default Menu;