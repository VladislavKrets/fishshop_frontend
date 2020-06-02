import * as React from "react";
import View from "../../Components/View/View";
import InfoSection from "../../Components/InfoSection/InfoSection";

export default class Contacts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View current={'contacts'} title={'Контакты'}>
                <InfoSection>
                    Тут какие-то контакты
                </InfoSection>
            </View>
        )
    }
}