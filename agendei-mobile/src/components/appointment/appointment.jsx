import { View , Text, Image} from "react-native";
import styles from "./appointment.style.js"
import icon from "../../constants/icon.js"
import Button from "../button/button.jsx"

function Appointment(props){

        //2024-05-25T08:00
        const dt = new Date(props.bookingDate + "T" + props.bookingHour);  

        
        
    return <View style={styles.appointment}>
        <Text style={styles.name}> {props.service } - {props.doctor}</Text>
        <Text > { props.specialty }</Text>

        <View style={styles.container}>
            <View style={styles.containerBooking}>
                <View style={styles.booking}>
                    <Image style={styles.icon} source={icon.calendar}/>
                    <Text style={styles.bookingDate}>{dt.toLocaleDateString()}</Text>
                </View>
                <View style={styles.booking}>
                <Image style={styles.icon} source={icon.clock}/>
                <Text style={styles.bookingHour}>{props.bookingHour}h</Text>
                </View>
            </View>
            <View style={styles.containerButton}>
                <Button texto="Cancelar Reserva" onPress={()=>props.onPress(props.id_appointment)}/>
            </View>

        </View>

    </View>

}

export default Appointment;