import { View , Image, TextInput, Text,Alert} from "react-native";
import icon from "../../constants/icon.js";
import { styles } from "../acount/acount.style.js";
import Button from "../../components/button/button.jsx";
import { TouchableOpacity } from "react-native";
import {useState} from "react"
import api from "../../constants/api.js";




function Acount(props){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");

    async function ExecuteAcount(){
        try {
            const response = await api.post("/users/register", {
                email,password,name
            })
            if (response.data){
                console.log(response.data)
            }
        } catch (error) {
            if (error.response?.data.error)
                Alert.alert(error.response.data.error)
            else
                Alert.alert("Ocorreu um erro.Tente novamente mais tarde")


        }
    }

    return <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo}/>
        </View>

        <View>
            <View style={styles.containerInput}>
                <TextInput style={styles.input} placeholder="Nome"
                onChangeText={(texto)=>setName(texto)} />    
            </View>
            <View style={styles.containerInput}>
                <TextInput style={styles.input} placeholder="E-mail" 
                onChangeText={(texto)=>setEmail(texto)} />   
            </View>
            <View style={styles.containerInput}>
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true}
            onChangeText={(texto)=>setPassword(texto)} />
            </View>
           
            <Button texto="Criar Conta" onPress={ExecuteAcount}/>
        </View>

        <View style={styles.footer}>
            <Text>Já tenho conta. </Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate("login")}> 
                <Text style={styles.footerLink}>Fazer login.</Text>
            </TouchableOpacity>
        </View>


    </View>
}

export default Acount;