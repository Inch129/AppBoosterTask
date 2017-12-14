import React, {Component} from 'react';
import {FlatList, View, StatusBar, ToolbarAndroid, Text} from 'react-native';

import ListItem from './ListItem';
import * as css from './Styles';


export default class MasterActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        };

    }

    /**
     * Оставлю даже консоль.лог,
     * Сегодня я солдат удачи,
     * Поломал, однако, голову как мог,
     * Хотел бы сделать я иначе.
     * @param item
     */
    eventItem(item) {
        console.log(this.props);
        let {navigate} = this.props.navigation;
        return navigate('Details', {
            item: item
        });

    }

    /**
     * Рендер компонентов списка, проброс пропсов
     * @param item
     * @returns {ListItem}
     * @private
     */

    _renderItem = ({item}) => {
        return <ListItem eventComponentMain={this.eventItem.bind(this, item)} item={item}/>
    };

    /**
     * Получаем данные с JSON, попытка сделать endless scroll
     * Но честно говоря, заработай он с первого раза - я бы удивился.
     * @returns {Promise<any>}
     * @private
     */
    _makeRequest = () => {
        return fetch('https://gist.githubusercontent.com/KELiON/1e0a30bf603716875b5f717650113924/raw/7be9852a54ae29eda43d2691045586c0976ccdd5/offers.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data: responseJson.offers
                }, function () {
                    /**
                     * Получаем из апи текущую строку и закидываем в стейт
                     * Можно было просто прибавлять + 1 к текущему, но без апи все равно не то,
                     * Ибо нужно знать количество страниц, не могу сказать, что будет, если выйти за их максимум.
                     */
                    /* this.setState = {
                        page: responseJson.offers.meta.current_page
                    }*/

                });
            })
            .catch((error) => {
                console.error(error);
            });
    };


    /**
     * Не будем заставлять пользователя ждать, и подгрузим порцию сразу
     */
    componentDidMount() {
        this._makeRequest();
    }

    /**
     *Данная функция приблизительно отражает подгрузку данных
     * @private
     */
    _loadMore = () => {
        this.setState = {
            page: this.state.page + 1
        }, () => {
            this._makeRequest();
        };

    };

    render() {
        /**
         * Рендерим сам список
         * Закомментированные пропсы - событие, когда упёрлись в пол, дёргает loadMore
         */
        return (
            <View >
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}
                    /*onEndReached={this._loadMore}*/
                    /*onEndTreshold={0}*/
                    keyExtractor={(item, index) => index}


                />
                <View style={css.masterScreen.containerTooltip}>
                    <Text style={css.masterScreen.tooltip}>Не забывай: количество заданий ограничено. Больше активности - больше прибыли</Text>
                </View>
            </View>
        );
    }
}

