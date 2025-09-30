import { COLORS,FONTSIZE } from "../../constants/theme"


const styles = {
    container:{
        flex:1,
        backgroundColor: COLORS.white,
        paddingLeft:20,
        paddingRight: 20,
        justifyContent: "space-between",
        marginBottom: 20
    },
    theme:{
        backgroundColor: COLORS.white,
        calendarBackground: COLORS.white,
        textSectionTitleColor: COLORS.dark_gray,
        selectedDayBackgroundColor: COLORS.blue,
        selectedDayTextColor: COLORS.white,
        todayTextColor: COLORS.red,
        dayTextColor: COLORS.dark_gray,
        textDisabledColor: COLORS.white3,

    },
    textHour:{
        fontSize: FONTSIZE.lg,
        marginTop: 10,
        fontWeight: "bold",
        color:COLORS.dark_gray,
        
    },
    picker:{
        height: 40,
        marginTop:5,
        borderColor: COLORS.white3,
        color:COLORS.light_gray,
        fontSize:FONTSIZE.md
        
    },


}
    
export default styles;
