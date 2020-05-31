import * as React from "react";
import NavBar from "../NavBar/NavBar";
import EpicBar from "../EpicBar/EpicBar";
import './View.css'
import Header from "../Header/Header";

export default class View extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'view'}>
                <NavBar current={this.props.current}/>
                <Header title={this.props.title}/>
                {this.props.children}
                <EpicBar current={this.props.current}/>
            </div>
        )
    }
}