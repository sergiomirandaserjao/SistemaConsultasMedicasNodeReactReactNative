import { COLORS,FONTSIZE } from "../../constants/theme"

export const styles = {
    doctor:{
        backgroundColor:COLORS.white,
        flex:1, //pra ocupar a tela toda
        padding:8,
        flexDirection:"row",
        borderWidth:1,
        borderColor:COLORS.white3,
        marginTop:3,
        marginBottom:3,
        borderRadius:4
    },
    name:{
        fontSize:FONTSIZE.md,
        color:COLORS.black,
        marginTop:5
        
    },
    specialty:{
        fontSize:FONTSIZE.sm,
        color:COLORS.dark_gray,
    },
    icon:{
        width:50,
        height:50,
        marginRight:10
    }


}
