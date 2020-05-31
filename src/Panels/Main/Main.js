import * as React from "react";
import View from "../../Components/View/View";
import InfoSection from "../../Components/InfoSection/InfoSection";
import HorizontalScroll from "../../Components/HorizontalScroll/HorizontalScroll";
import ProductItem from "../../Components/ProductItem/ProductItem";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        const array = []
        for (let i = 0; i < 12; i++){
            array.push(i)
        }
        this.state = {
            array: array
        }
    }

    render() {
        return (
            <View current={'main'} title={'Главная'}>
                <InfoSection>
                    <div>
                        Основная информация
                    </div>
                </InfoSection>
                <InfoSection>
                    <div>
                        Основная информация
                    </div>
                </InfoSection>
                <InfoSection>
                    <div>
                        Основная информация
                    </div>
                </InfoSection>
                <HorizontalScroll title={'Товары недели'} id={'container1'}>
                    {
                        this.state.array.map((elem, index) => {
                            return <ProductItem imageUrl={'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'}>
                                <div>Продукт {index + 1}</div>
                            </ProductItem>
                        })
                    }
                </HorizontalScroll>
                <InfoSection>
                    <div>
                        Основная информация
                    </div>
                </InfoSection>
                <HorizontalScroll title={'Акции'} id={'container2'}>
                    {
                        this.state.array.map((elem, index) => {
                            return <ProductItem imageUrl={'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'}>
                                Продукт {index + 1} fefefeferfefdddwd
                            </ProductItem>
                        })
                    }
                </HorizontalScroll>
                <InfoSection>
                    <div>
                        Основная информация
                    </div>
                </InfoSection>
                <InfoSection>
                    <div>
                        Основная информация
                    </div>
                </InfoSection>

            </View>
        )
    }
}