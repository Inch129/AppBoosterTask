import React, {Component} from 'react';
import {View, Text, Image, Button, Linking} from 'react-native';
import * as css from './Styles';

export default class DetailsActivity extends Component {

    static navigationOptions = {
        title: 'Задания',
        headerStyle: {backgroundColor: '#1160AA'},
        headerTitleStyle: {color: '#D1F386'},
    };

    _filterFormat = (number) => {
        let pattern = /\d*\.0/;

        if (pattern.test(number)) {
            return parseInt(number);
        }
        return number;
    };

    /**
     * Я пытался передать их через пропсы в навигатор
     * Создал отдельный хелпер, со статическими и не статическими методами
     * Не знаю по какой причине - но эти меры не помогли избежать данного повтора кода
     *
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
     *
     * @returns {*}
     */
    render() {
        let {state} = this.props.navigation;
        let reward = this._pluralize(state.params.item.reward);
        return (
            <View style={css.details.detailsContainer}>
                <View><Text style={css.details.infoText}>Вы хотите скачать и установить приложение</Text></View>
                <View style={css.details.detailsHeadContainer}>
                    <Image style={css.details.detailsHeadImg} source={{uri: state.params.item.icon}}/>
                    <View style={css.details.detailsHeadTextContainer}>
                        <Text style={css.details.detailsHeadTitleText}>{state.params.item.title}</Text>
                        <Text style={css.details.detailsHeadBonus}>Бонусом Вам будет зачислено - <Text style={{color:"#F54D42"}}>{reward}</Text></Text>
                    </View>
                </View>

                <View><Text style={css.details.paragraphsTitle}>Для этого нужно выполнить несколько простых шагов:</Text></View>
                <View><Text style={css.details.regularParagraph}>1)Необходимо перейти по ссылке. По ней Вы попадётё в PlayMarket.</Text></View>
                <View><Text style={css.details.regularParagraph}>2)Прокрутить вниз и найти приложение с данной иконкой и названием.</Text></View>
                <View><Text style={css.details.regularParagraph}>3)Скачать, запустить и <Text style={{color: "red"}}>обязательно</Text> перейти в приложение AppBonus.</Text></View>
                <View><Text style={css.details.lastParagraph}>4)Примите Ваш честно заработанный бонус. Сделать эти шаги куда проще, даже чем читать, не так ли?</Text></View>

                <Button
                    onPress={() => Linking.openURL(state.params.item.download_link)}
                    title={"Скачать для получения бонуса"}
                />

                <View><Text style={css.details.editWarnings}>- Скачать и запустить, не стоит делать лишних движений</Text></View>
                <View><Text style={css.details.editWarnings}>- Если сеть капризничает, возможно приложение присоединится к веселью. Убедитесь в твердости намерений WiFi\3G помочь Вам в заработке</Text></View>
                <View><Text style={css.details.editWarnings}>- Мы с удовольствием зачислим Вам бонус в диапазоне от 5 минут до нескольких часов</Text></View>
            </View>
        )
    }
}
