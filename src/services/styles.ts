import {StyleSheet} from 'react-native'
import colors from './colors'

export default StyleSheet.create({
    container: {
        backgroundColor: colors.raisin_black,
        flex:1,
    },


    title: {
        fontSize:40,
        color: colors.blue,
        fontWeight:'200'
    },
    newbg: {
        backgroundColor: colors.blue
    },
    row: {
        flexDirection:'row',
        height:'20%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    greenbg: {backgroundColor: colors.green},
    bluebg: {backgroundColor: colors.blue},
    brownbg: {backgroundColor: colors.bone},

    box: {
        flexDirection:'row',
        height:'100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    box_100p: {width:'100%'},
    box_50p: {width:'50%'},
    box_25p: {width:'25%'},





    logo_container:{
        width:'100%',
        height:'30%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn_container:{
        width:'100%',
        height:'7%',
        backgroundColor:colors.isabelline,
        flexDirection:'row'
    },
    form_container: {
        width:'100%',
        height:'63%',
        backgroundColor: colors.onyx,
        padding:30,
        alignItems: 'center',
    },
    btn:{
        width:'50%',
        height:'100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn_txt: {
        fontSize:22,
        color: colors.raisin_black,
        fontWeight:'400'
    },
    input: {
        width:'100%',
        backgroundColor:colors.isabelline,
        borderRadius:12,
        marginBottom:12,
        padding:20,
        fontSize:20
    },
    sub_title:{
        fontSize:30,
        color: '#ffffff',
        fontWeight:'200',
        marginBottom:20
    },
    login_btn:{
        marginTop:20,
        width:'100%',
        padding:20,
        backgroundColor:colors.blue,
        alignItems:'center',
        borderRadius:12,
    }
})