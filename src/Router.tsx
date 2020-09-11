import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import UserLocation from './containers/user/UserLocation';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="UserLocation" component={UserLocation} hideNavBar={true} initial={true} />
            </Scene>
        </Router>
    )
}

export default RouterComponent;