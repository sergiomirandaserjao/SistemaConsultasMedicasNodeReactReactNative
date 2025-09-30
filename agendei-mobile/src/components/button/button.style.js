import { COLORS,FONTSIZE } from "../../constants/theme"

export const styles = {
    btn:{
        width:"100%",   
        borderRadius:6,
        padding:12
       
    },
    primary:{
        backgroundColor: COLORS.blue
    },
    danger:{
        backgroundColor: COLORS.red
    },

    text:{
        fontSize:FONTSIZE.md,
        color:COLORS.white,
        textAlign:"center"
    }
}