import * as React from "react";
import View from "../../Components/View/View";

export default class Basket extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View current={'basket'} title={'Корзина'}>
            </View>
        )
    }
}