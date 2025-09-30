import { COLORS,FONTSIZE } from "../../constants/theme"

export const styles = {

    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    banner: {
        backgroundColor: COLORS.blue,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 25
    },
    name: {
        fontSize: FONTSIZE.md,
        color: COLORS.white,
        fontWeight: "bold",
        marginTop: 5
    },
    specialty: {
        fontSize: FONTSIZE.sm,
        color: COLORS.white,
        marginTop: 3
    }
}
