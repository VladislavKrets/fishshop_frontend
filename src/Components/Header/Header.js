import * as React from "react";
import './Header.css'

export default class Header extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'view-header'}>
                {this.props.title}
            </div>
        )
    }
}