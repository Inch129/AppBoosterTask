import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text, PixelRatio} from 'react-native';
import * as css from './Styles';

export default class ListItem extends Component {
    /**
     * Вызываем родительское событие для срабатывания по кнопке в дочернем элементе
     * Переход на Details Activity
     * @private
     */
    _details = () => {
        this.props.eventComponentMain();
    };

    /**
     * Возвращает конкретный элемент списка
     * Предварительно валидируя (хоть и топорно), склоняя денежную единицу в рублях
     * Тем самым приводя в более читабельный (человеческий) вид
     ** @returns {View}
     */

    render() {
        const {item} = this.props;
        let reward = this.props.pluralize(item.reward);

        return actualRowComponent =
            <TouchableOpacity style={css.listItem.row} onPress={this._details}>
                <View onClick={this._details} style={css.listItem.card}>
                    <Image source={{uri: item.icon}} style={css.listItem.img}/>
                    <View style={css.listItem.cardTextContainer}>
                        <Text style={css.listItem.cardText}>Коснись, и заработаешь {reward}</Text>
                        <Text style={css.listItem.cardText}>устанавливая {item.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>;

    }
}