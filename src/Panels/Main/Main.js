import * as React from "react";
import View from "../../Components/View/View";
import InfoSection from "../../Components/InfoSection/InfoSection";
import HorizontalScroll from "../../Components/HorizontalScroll/HorizontalScroll";
import ProductItem from "../../Components/ProductItem/ProductItem";
import background from '../../images/fish-background.jpeg'
import NavBar from "../../Components/NavBar/NavBar";
import {Link} from "react-router-dom";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        const array = []
        for (let i = 0; i < 12; i++) {
            array.push(i)
        }
        this.state = {
            array: array,
            isNavMouseOver: false
        }
    }

    render() {
        return (
            <View current={'main'} title={'Главная'}>
                <div style={{
                    backgroundImage: `url(${background})`,
                    boxSizing: 'border-box',
                    backgroundClip: 'border-box',
                    paddingBottom: '40px',
                    backgroundSize: 'cover'
                }}>
                    <div className={'mobile'} style={{height: '53px'}}></div>
                    <NavBar current={'main'} style={{opacity: this.state.isNavMouseOver ? null : 0.7,
                        transition: 'background-color 0.5s',
                        backgroundColor: this.state.isNavMouseOver ? null : 'transparent'}}
                            onMouseOut={() => this.setState({isNavMouseOver: false})}
                            onMouseOver={() => this.setState({isNavMouseOver: true})}/>
                    <InfoSection style={{
                        opacity: 0.7,
                        color: 'blue',
                        fontWeight: 800,
                        borderRadius: '12px'
                    }}>
                        <div>
                            <p>
                                Говорить о нашем сайте, как о просто "Магазине рыболовных снастей",
                                было бы неправильно. В нашем магазине "Все для рыбалки"
                                рыболовные снасти у нас представлены в широчайшем
                                ассортименте. Однако, мы не останавливаемся только на продаже
                                снастей, рыболовный интернет магазин и розничная сеть постоянно
                                развиваются, ищут новые рыболовные товары, которые смогут занять
                                почетное место среди Ваших снастей для рыбалки.
                            </p>
                        </div>
                    </InfoSection>
                    <InfoSection style={{
                        opacity: 0.7,
                        color: 'blue',
                        fontWeight: 800,
                        borderRadius: '12px'
                    }}>
                        <div>
                            <p>
                                Наш рыболовный интернет магазин готов стать для Вас прекрасным
                                помощником во всех Ваших рыболовных начинаниях. Рыболовные и
                                туристические товары из нашего каталога смогут удовлетворить и
                                начинающего любителя спиннинга и бывалого специалиста нахлыста.
                            </p>
                        </div>
                    </InfoSection>
                    <HorizontalScroll title={'Товары недели'} id={'container1'}
                                      style={{opacity: 0.8, borderRadius: '12px'}}>
                        {
                            this.state.array.map((elem, index) => {
                                return <ProductItem
                                    currentId={1}
                                    selectedItems={this.props.selectedItems}
                                    changeSelectedItems={this.props.changeSelectedItems}
                                    imageUrl={'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'}>
                                    <div>Продукт {index + 1}</div>
                                </ProductItem>
                            })
                        }
                    </HorizontalScroll>
                    <InfoSection style={{
                        opacity: 0.7,
                        color: 'blue',
                        fontWeight: 800,
                        borderRadius: '12px'
                    }}>
                        <div>
                            <p>
                                Снасти для рыбалки в нашем каталоге только высочайшего качества:
                                удилища, спиннинги, катушки, воблеры, блесны, лески, шнуры,
                                экипировка, а также множество товаров для нахлыста.
                            </p>
                        </div>
                    </InfoSection>
                    <InfoSection style={{
                        opacity: 0.7,
                        color: 'blue',
                        fontWeight: 800,
                        borderRadius: '12px'
                    }}>
                        <div>
                            <p>
                                Мы представляем товары для рыбалки только проверенных временем
                                компаний, таких как: Shimano, Daiwa, Abu Garcia, Ryobi, Rapala,
                                Jackall, Smith, Owner, Zipbaits и многих других, чьё потрясающее
                                качество угодит даже самым дотошным любителям рыбалки.
                            </p>
                        </div>
                    </InfoSection>
                    <HorizontalScroll title={'Акции'} id={'container2'}
                                      style={{opacity: 0.8, borderRadius: '12px'}}>
                        {
                            this.state.array.map((elem, index) => {
                                return <ProductItem
                                    currentId={2}
                                    selectedItems={this.props.selectedItems}
                                    changeSelectedItems={this.props.changeSelectedItems}
                                    imageUrl={'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'}>
                                    Продукт {index + 1} fefefeferfefdddwd
                                </ProductItem>
                            })
                        }
                    </HorizontalScroll>
                    <InfoSection style={{
                        opacity: 0.7,
                        color: 'blue',
                        fontWeight: 800,
                        borderRadius: '12px'
                    }}>
                        <div style={{textAlign: 'center'}}>
                            <p style={{paddingBottom: '20px'}}>Как с нами связаться и где нас найти?</p>
                            <p>
                                <Link to={'/contacts/'} style={{
                                    textDecoration: 'none',
                                    borderRadius: '6px',
                                    padding: '15px',
                                    background: 'blue',
                                    color: 'white',
                                    cursor: 'pointer'
                                }}>Контакты</Link>
                            </p>
                        </div>
                    </InfoSection>
                </div>
            </View>
        )
    }
}