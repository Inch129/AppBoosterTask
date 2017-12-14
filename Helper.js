export default class Helper {

    /**
     * Склоняем
     * @param number
     * @returns {String}
     *
     */

     pluralize = (number) => {
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

}