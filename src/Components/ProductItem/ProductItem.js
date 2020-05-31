import * as React from "react";
import './ProductItem.css'

export default class ProductItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{paddingRight: '10px', cursor: 'pointer'}}>
                <div className={'product-item'}>
                    <div className={'product-photo'}>
                        <img className={'photo'} src={this.props.imageUrl}/>
                    </div>
                    <div style={{wordBreak: 'break-word'}}>{this.props.children}</div>
                </div>
            </div>
        )
    }
}