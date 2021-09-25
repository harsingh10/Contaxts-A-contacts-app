import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
    wrapper:{
        height: 42,
        borderWidth: 1,
        borderRadius: 4,
        flexDirection: 'row',
        paddingHorizontal: 5,
        alignItems: 'center',
        marginTop:5,

    },
    textInput:{
        // backgroundColor: colors.danger,
        flex:1,
        width:'100%',

    },
    inputContainer:{
        paddingVertical: 1,

    },
    error:{
        color: colors.danger,
        paddingTop: 4,
        fontSize: 12,
    }
});
