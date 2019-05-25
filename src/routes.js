import { createStackNavigator ,createAppContainer }  from 'react-navigation'

import Main from './pages/main'
import Product from './pages/product'


const Routes = createStackNavigator({
    Main,
    Product
})

export default createAppContainer(Routes)