import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../src/screens/login/login.jsx"
import Acount from "../screens/acount/acount.jsx"

const Stack = createNativeStackNavigator();

function RoutesOpen(){

return <Stack.Navigator>

   
    <Stack.Screen name= "login" component={Login} options={
        {
            headerShown:false
        }
    }/>

    <Stack.Screen name= "acount" component={Acount} options={
        {
            headerShown:false
        }
    }/>
    
</Stack.Navigator>

}

export default RoutesOpen;