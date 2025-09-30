import { View ,Text } from "react-native";
import Button from "../button/button.jsx"
import { styles } from "./service.style.js";

function Service(props){
       return<View style={styles.service}>
       <View style={styles.containerText}>
           <Text style={styles.description}>{props.description}</Text>
           <Text style={styles.price}>
               {
                   new Intl.NumberFormat("pt-BR", {
                       style: "currency", currency: "BRL"
                   }).format(props.price)
               }

           </Text>
       </View>

       <View style={styles.containerButton} >
           <Button texto="Agendar" onPress={() => props.onPress(props.id_service)} />
       </View>
   </View>
}

export default Service;