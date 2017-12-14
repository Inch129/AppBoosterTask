import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import * as css from './Styles';

export default class ListItem extends Component {
    static navigationOptions = ({navigation}) => ({
        title: ` ${navigation.state.params.item.title}`,
    });

    _details = () => {
        this.props.eventComponentMain();
    };


    /**
     * Для отсеивания "некрасивых" чисел, вроде [5.0, 2.0, -1.0, etc...]
     * Предполагается, что цены
     * @param number
     * @returns {int, double}
     * @private
     */

    _filterFormat = (number) => {
        let pattern = /\d*\.0/;

        if (pattern.test(number)) {
            return parseInt(number);
        }
        return number;
    };



    /**
     * Склоняем 
     * @param number
     * @returns {String}
     * @private
     */

    _pluralize = (number) => {
        if (isNaN(number)) {
            return warn("Не число");
        }

        let check = this._filterFormat(number);
        switch (check) {
            case 1:
                return check + " рубль";
            case 2:
            case 3:
            case 4:
                return check + " рубля";
            default:
                break;
        }
        return check + " рублей";

    };



    /**
     * Возвращает конкретный элемент списка
     * Предварительно валидируя (хоть и топорно), склоняя денежную единицу в рублях
     * Тем самым приводя в более читабельный (человеческий) вид
     * @returns {View}
     */

    render() {
        const {item} = this.props;
        let reward = this._pluralize(item.reward);

        return actualRowComponent =
            <TouchableOpacity style={css.listItem.row} onPress={this._details}>
                <View onClick={this._details} style={css.listItem.card}>
                    <Image source={{uri: item.icon}} style={css.listItem.img}/>
                    <View style={css.listItem.cardTextContainer}>
                        <Text style={css.listItem.cardText}>Коснись, и заработаешь {reward}</Text>
                        <Text style={css.listItem.cardText}>{item.title}</Text>
                    </View>
                </View>

            </TouchableOpacity>;

    }
}