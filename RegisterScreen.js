import React from 'react';
import { Text, View, Button, TouchableOpacity, Pressable } from 'react-native';

const RegisterScreen = ({ navigation }) => {

    const onPressLoginScreen = () => {
        navigation.navigate('LoginScreen')
    }
    return (
        <View>
            <Text>Hello, RegisterScreen</Text>
            <Text></Text>
        </View>
    );
};
export default RegisterScreen;