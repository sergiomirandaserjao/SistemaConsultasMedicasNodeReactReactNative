import { COLORS,FONTSIZE } from "../../constants/theme.js"

export const styles = {
    appointment:{
        flex:1,
        backgroundColor:COLORS.white,
        padding:12,
        borderWidth:1,
        borderColor:COLORS.white3,
        
    },
    name:{
        fontSize:FONTSIZE.md,
        color:COLORS.black,
        marginBottom:2,
        

    },
    specialty:{
        fontSize:FONTSIZE.sm,
        color:COLORS.light_gray,
        marginBottom:4,
    },
    icon:{
        width: 25,
        height: 25,
        marginRight: 5
    },
    bookingDate:{
        fontSize:FONTSIZE.sm,
        color: COLORS.light_gray,
        marginTop: 3,

    },
    bookingHour:{
        fontSize:FONTSIZE.sm,
        color: COLORS.light_gray,
        marginTop: 3,
    },
    booking:{
        flexDirection: "row",

    },
    container:{
        flexDirection:"row",
    
    },

    containerBooking:{
        flex:1
    },
    containerButton:{
        marginTop:5
    },
  
}

export default styles;
