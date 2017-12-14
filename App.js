import {StackNavigator} from 'react-navigation';
import MasterActivity from "./MasterActivity";
import DetailsActivity from "./DetailsActivity";


const Navigation = StackNavigator({
    Master: {
        screen: MasterActivity,
    },
    Details: {
        screen: DetailsActivity,
    },
});

export default Navigation;