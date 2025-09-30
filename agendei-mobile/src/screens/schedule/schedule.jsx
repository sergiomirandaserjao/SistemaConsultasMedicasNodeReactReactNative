import { View , Text,Alert} from "react-native";
import styles from "./schedule.style.js"
import { Calendar , LocaleConfig} from "react-native-calendars";
import {ptBR} from "../../constants/calendar.js"
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/button/button.jsx"
import api from "../../constants/api.js";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br"

function Schedule(props){

    const id_doctor = props.route.params.id_doctor;
    const id_service = props.route.params.id_service;


    const [selectedDate,setSelectedDate] = useState(new Date().toISOString().slice(0,10))
    const [selectedHour, setSelectedHour] = useState("")

    async function ClickBooking(){
        try {
            const response = await api.post("/appointments", {
                id_doctor,
                id_service,
                booking_date: selectedDate,
                booking_hour: selectedHour
            })

            if (response.data?.id_appointment){
                props.navigation.popToTop();

            }
        } catch (error) {
            if (error.response?.data.error)
                Alert.alert(error.response.data.error)
            else
                Alert.alert("Ocorreu um erro no login")


        }
    }

    return <View style={styles.container}>
        <View>
        <Calendar theme={styles.theme} onDayPress={(day)=>{
            setSelectedDate(day.dateString)
        }} markedDates={{[selectedDate]:{selected:true}}}
        minDate={new Date().toDateString()} //pegando a data de hoje pra ser minima
        />

        <View>
            <Text style={styles.textHour}>Horários</Text>
        </View>

        <View>
            <Picker style={styles.picker} selectedValue={selectedHour} onValueChange={(itemValue,itemIndex)=>{
                    setSelectedHour(itemValue)
            }}>
                <Picker.Item  label="09:00" value="09:00"/>
                <Picker.Item  label="10:00" value="10:00"/>
                <Picker.Item  label="11:20" value="11:20"/>
            </Picker>
        </View>
        </View>
        <View>
            <Button texto="Confirmar Reserva" onPress={ClickBooking}/>
        </View>

    </View>

}

export default Schedule;