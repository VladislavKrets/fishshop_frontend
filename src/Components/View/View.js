import * as React from "react";
import NavBar from "../NavBar/NavBar";
import EpicBar from "../EpicBar/EpicBar";
import './View.css'
import Header from "../Header/Header";

export default class View extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const showEpicBar = this.props.showEpicBar !== undefined && this.props.showEpicBar !== null ? this.props.showEpicBar : true;
        return (
            <div className={'view'}>
                <NavBar current={this.props.current}/>
                <div className={'mobile'} style={{height: '53px'}}></div>
                <Header style={this.props.headerAnimation ? {
                    transformOrigin: 'top left',
                    animation: 'panel 500ms ease-in-out',
                    animationFillMode:'forwards',
                } : {}} title={this.props.title}/>
                {this.props.children}
                {showEpicBar ?
                    <>
                        <div className={'mobile'} style={{height: '52px'}}></div>
                        <EpicBar current={this.props.current}/>
                    </> : null
                }
            </div>
        )
    }
}