
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import abaHome from "../aba-home/abahome.jsx"
import abaCalendar from "../aba-calendar/abacalendar.jsx"
import abaProfile from "../aba-profile/abaProfile.jsx"
import icon from "../../constants/icon.js";
import { Image } from "react-native";
import { COLORS } from "../../constants/theme";


const Tab = createBottomTabNavigator();

function Main(){
    return <Tab.Navigator>

            <Tab.Screen name="Home" component={abaHome} options={{
                headerTitleAlign:"center",
                headerTitle:()=> {
                    return <Image source={icon.logo} style={
                        {width:125,height:29} } />
                },
                tabBarIcon: ({focused})=>{
                    return <Image source={icon.home} style={
                        {width:30,height:30, opacity: focused ? 1 : 0.3 } }/>
                },
                tabBarShowLabel:false
            }}/>

            <Tab.Screen name="Calendar" component={abaCalendar} options={{
                headerTitleAlign:"center",
                headerTitle:"Minhas Reservas" ,
                headerTintColor:COLORS.blue,
                unmountOnBlur:true,
                tabBarIcon: ({focused})=>{
                    return <Image source={icon.calendar} style={
                        {width:30,height:30,opacity: focused ? 1 : 0.3} }/>
                },
                tabBarShowLabel:false,
                
            }}/>

            <Tab.Screen name="Profile" component={abaProfile} options={{
                headerTitleAlign:"center",
                headerTitle:"Meu Perfil",
                unmountOnBlur:true,
                headerTintColor:COLORS.blue,
                tabBarIcon: ({focused})=>{
                    return <Image source={icon.profile} style={
                        {width:30,height:30,opacity: focused ? 1 : 0.3} }/>
                },
                tabBarShowLabel:false
            }}/>
            

        </Tab.Navigator>
}

export default Main;
