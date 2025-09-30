import { View , Image, TextInput, Text, Alert} from "react-native";
import icon from "../../constants/icon.js";
import { styles } from "../login/login.style.js";
import Button from "../../components/button/button.jsx";
import { TouchableOpacity } from "react-native";
import { useContext, useState } from "react";
import api from "../../constants/api.js"
import { AuthContext } from "../../contexts/auth.js";


function Login(props){

    const {setUser} = useContext(AuthContext)
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    async function ExecuteLogin(){
        try {
            const response = await api.post("/users/login", {
                email,password
            })
            if (response.data){
                //injetando o token dentro do axios (api)
                api.defaults.headers.common['Authorization'] = "Bearer " + response.data.token
                setUser(response.data)
            }
        } catch (error) {
            if (error.response?.data.error)
                Alert.alert(error.response.data.error)
            else
                Alert.alert("Ocorreu um erro no login")


        }
    }

    return <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo}/>
        </View>

        <View>
            <View style={styles.containerInput}>
                <TextInput style={styles.input} placeholder="E-mail" 
                onChangeText={(texto)=>setEmail(texto)}  />        
            </View>
            <View style={styles.containerInput}>
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true}
            onChangeText={(texto)=>setPassword(texto)}/>
            </View>
           
            <Button texto="Acessar" onPress={ExecuteLogin}/>
        </View>

        <View style={styles.footer}>
            <Text> Não tenho conta. </Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate("acount")}> 
                <Text style={styles.footerLink}> Criar conta agora.</Text>
            </TouchableOpacity>
        </View>


    </View>
}

export default Login;