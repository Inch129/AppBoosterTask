import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import * as css from './Styles';

export default class DetailsActivity extends Component {

    render() {
        let {state} = this.props.navigation;
//{ state.params.item.download_link }
        return (
            <View style={css.details.container}>

                <Button
                    title={"Кнопочка"}
                    styles={css.details.button}
                />


            </View>
        )
    }
}