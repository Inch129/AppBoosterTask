import React from "react";
import {StyleSheet} from "react-native";

export const colors = {
    "card_background": "#DDDDDD",
    "row_background": "#E3F3F7",
    "card_text_color": "#1989AC",
    "tooltip_color": "#F6F6F6",
    "tooltip_container": "#598798",
    "warningText": "#F96D00"
};

/**
 * Стили основного экрана
 */
export const masterScreen = StyleSheet.create({
    containerTooltip: {
        backgroundColor: colors.tooltip_container
    },
    tooltip: {
        color: colors.tooltip_color,
        fontSize: 18,
        textAlign: "center",
        margin: 15
    }
});

/**
 * Стили окна с подробной информацией
 */

export const details = StyleSheet.create({
    container: {
        backgroundColor: colors.card_text_color
    },
    infoText: {
        fontSize: 18,
        marginBottom: 10,
        color: "#008080"
    },
    detailsContainer: {
        margin: 15
    },
    detailsHeadContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    detailsHeadImg: {
        width: 100,
        height: 100
    },
    detailsHeadTextContainer: {
        flexDirection: "column",
        alignItems: "stretch"
    },
    detailsHeadTitleText: {
        margin: 10,
        marginTop: 30,
        fontSize: 17
    },
    detailsHeadBonus: {
        margin: 10,
        marginBottom: 30,
        fontSize: 17
    },
    paragraphsTitle: {
        fontSize: 19
    },
    regularParagraph: {
        fontSize: 16,
        marginTop: 10
    },
    lastParagraph: {
        fontSize: 16,
        marginTop: 10,
        marginBottom: 20
    },
    editWarnings: {
        fontSize: 16,
        margin: 5,
        marginTop: 15,
        color: colors.warningText
    }
});

/**
 * Стили конкретного элемента
 */

export const listItem = StyleSheet.create({
    row: {
        flexDirection: "row", //основная
        flex: 1,
        backgroundColor: colors.row_background
    },
    card: {
        elevation: 2,
        borderRadius: 2,
        backgroundColor: colors.card_background,
        flex: 1,
        flexDirection: 'row',  // основная
        justifyContent: 'flex-start', // основная
        alignItems: 'center', // второстепенная
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 18,
        paddingRight: 16,
        marginLeft: 14,
        marginRight: 14,
        marginTop: 0,
        marginBottom: 4,
    },
    img: {
        width: 70,
        height: 70,
        margin: 5
    },
    cardTextContainer: {
        flex: 1,
        margin: 10,
        alignItems: "center",   //второстепенная
        flexDirection: "column" //основная
    },
    cardText: {
        fontSize: 16,
        color: colors.card_text_color,
        marginTop: 10
    }
});