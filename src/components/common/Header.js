import React from 'react';
import { Text,View } from 'react-native';

//Making a component
const Header = (props) => {
    const { textStyle,viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle} >{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle:{
        backgroundColor:'#F8F8F8',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        paddingTop:0,
        shadowColor:'#000',
        shadowOffset:{height:2 , width:0 },
        shadowOpacity:0.2,
        elevation: 3,
        position:'relative'  
    },
    textStyle:{
        fontSize:20
    }
};

//Making the component available to other parts of the app
export { Header };