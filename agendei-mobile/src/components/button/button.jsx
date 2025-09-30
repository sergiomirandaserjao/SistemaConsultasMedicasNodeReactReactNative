import { TouchableOpacity,Text } from "react-native";
import { styles } from "./button.style.js";

function Button(props){

 
    return <TouchableOpacity style={[styles.btn, props.theme == "danger" ? styles.danger : styles.primary]}
    onPress={props.onPress} >

         <Text style={styles.text}>{props.texto}</Text>

    </TouchableOpacity>
    
    
}

export default Button;