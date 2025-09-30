import { COLORS,FONTSIZE } from "../../constants/theme"

export const styles = {
  container:{
      backgroundColor: COLORS.white,
      flex: 1,
      paddingTop: 12
    },
    item:{
        borderWidth: 1,
        borderColor:COLORS.white3,
        paddingLeft: 8,
        paddingTop:15,
        paddingBottom: 15,
    },
    tittle:{
        fontSize: FONTSIZE.sm,
        color:COLORS.light_gray,
        marginBottom: 5
    },
    text:{
        fontSize: FONTSIZE.md,
        color:COLORS.dark,
        marginLeft: 8
    },

};

export default styles;
