import { View, FlatList,Alert} from "react-native";
import { styles } from "./abacalendar.style.js";
import Appointment from "../../components/appointment/appointment.jsx";
import { useEffect, useState } from "react";
import api from "../../constants/api.js";



function AbaCalendar(){

    const [appointments,setAppointments] = useState([]);    

    async function LoadAppointments(){
        try {
            const response = await api.get("/appointments")

            if (response.data){
                setAppointments(response.data)

            }
        } catch (error) {
            if (error.response?.data.error)
                Alert.alert(error.response.data.error)
            else
                Alert.alert("Ocorreu um erro no login")


        }
    }
    async function DeleteAppointments(id_appointment){
        try {
            const response = await api.delete("/appointments/"+ id_appointment)

            if (response.data?.id_appointment){
                LoadAppointments()

            }
        } catch (error) {
            if (error.response?.data.error)
                Alert.alert(error.response.data.error)
            else
                Alert.alert("Ocorreu um erro no login")


        }
    }
useEffect(()=>{
    LoadAppointments();
},[])

return <View style={styles.container}>
   

    <FlatList data={appointments} keyExtractor={(index)=>{index.id_appointment}}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>{
            return <Appointment
            id_appointment={item.id_appointment}
            service={item.service}
            doctor={item.doctor}
            specialty={item.specialty}
            bookingDate={item.booking_date}
            bookingHour={item.booking_hour}
            onPress={DeleteAppointments}
            />

        }}
        
        />

</View>

}

export default AbaCalendar;