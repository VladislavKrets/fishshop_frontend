import * as React from "react";
import View from "../../Components/View/View";

export default class Contacts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View current={'contacts'} title={'Контакты'}>
            </View>
        )
    }
}