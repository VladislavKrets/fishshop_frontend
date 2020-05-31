import * as React from "react";
import './NavBar.css'
import {Link} from "react-router-dom";

export default class NavBar extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {current} = this.props
        return (
            <div className={'view-navbar'}>
                <ul>
                    <li><Link to={'/'} className={current === 'main' && 'current'}>Главная</Link></li>
                    <li><Link to={'/products/'} className={current === 'products' && 'current'}>Продукты</Link></li>
                    <li><Link to={'/basket/'} className={current === 'basket' && 'current'}>Корзина</Link></li>
                    <li><Link to={'/contacts/'} className={current === 'contacts' && 'current'}>Контакты</Link></li>
                </ul>
            </div>
        )
    }
}