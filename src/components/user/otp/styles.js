import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 24,
        backgroundColor: '#FFFFF',
    },
    navhd: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: 'row'
    },
    thd: {
        color: '#000',
        fontFamily: "Inter",
        fontSize: 30,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 31,
        letterSpacing: 0.16,
    },
    iconhd: {
        fontSize: 30,
        color: 'black',
    }, 
    tem: {
        width: 118,
        height: 27,
        flexShrink: 0,
        color: '#000',
        fontFamily: "Inter",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: 20,
        marginTop: 47,
        alignSelf: "center",
    },
    containernum:{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: 'row',
        width: "80%",
        alignSelf: "center",
    },
    numOtp: {
        display: "flex",
        width: 50,
        height: 50,
        padding: 0,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 33,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor:'#000',
        color: '#000',
        fontFamily: "Inter",
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: "600",
        textAlign: "center",

    },
    t: {
        fontFamily: "Inter",
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: 15,
        marginTop: 20,
        display: "flex",
        justifyContent: "space-around",
        flexDirection: 'row',
        alignSelf: "center",
        color:'#000'
    },
    task:{
        color: 'rgba(0, 0, 0, 0.50)',
    },
    tre:{
        color: "#D20707",
    },
    btn1: {
        backgroundColor: "#D97700",
        display: "flex",
        width: "100%",
        height: 48,
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 10,
    },
    txtbtn1: {
        color: "#FFFF",
        textAlign: "center",
        fontFamily: "Inter",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 21,
        letterSpacing: 0.16,
    },
    tor: {
        marginTop: 21,
        marginBottom: 10,
        color: '#000',
        textAlign: "center",
        fontFamily: "Inter",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 21,
        letterSpacing: 0.16,
    },
    vic: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: 'row',
        width: "70%",
        alignSelf: "center",
    },
    icongg: {
        fontSize: 35,
        flexShrink: 0,
        color: "red"
    },
    iconap: {
        fontSize: 35,
        flexShrink: 0,
        color: '#000'
    },
    iconfb: {
        fontSize: 35,
        flexShrink: 0,
        color: "#1877F2"
    },
})