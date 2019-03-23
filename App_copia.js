



import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import registro from './registro';
import inicio from './inicio';



export default createAppContainer(createSwitchNavigator( {
  Main:registro,  
  
})
)

