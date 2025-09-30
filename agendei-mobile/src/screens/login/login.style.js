import { COLORS,FONTSIZE } from "../../constants/theme"

export const styles = {

    container:{
        backgroundColor:COLORS.white,
        flex:1, //vai ocupar todo o espaço da tela 
        justifyContent:"space-between",
        padding:40
    },

    containerLogo:{
        alignItems:"center",
        marginTop:20
    },

    logo:{
        width:150,
        height:30

 },
 input:{
    backgroundColor:COLORS.white2,
    padding:10,
    borderRadius:6,
    color: COLORS.light_gray


 },
 containerInput:{
    marginBottom:15
 },
 footer:{

    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    
 },
 footerLink:{
    color:COLORS.blue
 }

}
