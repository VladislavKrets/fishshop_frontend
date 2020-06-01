import * as React from "react";
import axios from '../../api'
import Spinner from "../../Components/Spinner/Spinner";
import notFound from '../../icons/not-found.png'
import './CurrentProduct.css'

export default class CurrentProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
            loading: true,
        }
    }

    componentWillUnmount() {
        window.onpopstate = () => {
        }
    }

    componentDidMount() {
        window.onpopstate = () => this.props.setCurrentId(null);
        const id = this.props.id
        axios.get(`/items/${id}/`).then(data => {
            this.setState({
                product: data.data,
                loading: false
            })
            console.log(data.data)
        })
    }

    render() {
        return (
            this.state.loading ? <Spinner/> :
                <div style={{paddingTop: '10px'}} className={'current-product-view-item'}>
                    <div style={{
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        textAlign: 'center',
                        fontSize: '1.4em',
                        fontWeight: 'bold',
                        color: 'cornflowerblue'
                    }}>{this.state.product.name}
                    </div>
                    <div className={'prod-description'}>
                        <div className={'product-photo current-product'}>
                            <img className={'photo'}
                                 style={{width: '300px', height: '300px', borderRadius: '50%'}}
                                 src={this.state.product.photo ? this.state.product.photo : notFound}/>
                        </div>
                        <div style={{flexGrow: '1', padding: '10px 12px', textAlign: 'center'}}>
                            КАКОЕ-ТО ОПИСАНИЕ ЫЫЫЫЫЫЫЫЫ АААААААААААААА
                        </div>
                    </div>
                </div>
        )
    }
}