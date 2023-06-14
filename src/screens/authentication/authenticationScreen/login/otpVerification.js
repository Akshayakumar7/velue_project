import React, { useState } from 'react';
import { Text, View, ImageBackground, StyleSheet,ScrollView } from 'react-native';
import { hp, wp } from '../../../../commonMethod/screenRatio';
import { color } from '../../../../assets/colors/color';
import { COMPLETE_SOLUTION_TEXT, ENTER_YOUR_OTP_SENT_TO_YOUR_REGISTERED_MOBILE, ENTER_YOUR_REGISTERED_MOBILE_NUMBER_TEXT, FORGOT_PASSWORD_TEXT, HEADING_TEXT, INVALID_EMAIL_ADDRESS_ERROR_TEXT, LOGIN_TEXT, OTP_VERIFICATION_TEXT, REGISTER_HERE_TEXT, RESEND_OPT_TEXT, SENT_OTP_TEXT, VERIFY_TEXT } from './loginUtility';
import AppButton from '../../../../component/common/appButton';
import { BATH_TUB_IMAGE } from '../../../../imagePath/imagePath';
import { CLOSED_EYE_ICON, LOCK_ICON, LOGO, OPENED_EYE_ICON, PERSON_ICON } from '../../../../assets/imagepath/imagepath';
import styles from '../../../../general/generalStyleSheet';
import CustomTextInput from '../../../../component/common/customTextInput';
import { KEYBOARD_TYPE } from '../../../../general/generalConst';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';


const OtpVerfication = ({navigation}) => {
    const CELL_COUNT = 4
    const [phoneNumber, setPhoneNumber] = useState('');
    const onChanePhoneNumber = (e) => {
        setPhoneNumber(e)
    }
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const onPressVerifyButton = () =>{
        navigation.navigate('PasswordReset')
    }
    return (
        <View>
            <ImageBackground source={BATH_TUB_IMAGE} style={style.bathTubImageStyle}>
                <View style={style.mainView}>
                    <View style={style.doubleContentDivider} />
                    <LOGO style={style.logoStyle} height={hp(22)} width={wp(37)} />
                    <View style={style.smallView} />
                    <Text style={style.headingText}>{HEADING_TEXT}</Text>
                    <View style={style.contentDivider} />
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={style.whiteContent}>
                            <View style={style.verticalDivider}>
                                <View style={style.itemDivider} />
                                <View style={styles.thirpleHeight} />
                                <Text style={[style.forgotpasswordText, styles.alignText]}>
                                    {OTP_VERIFICATION_TEXT}
                                </Text>
                                <View style={style.itemDivider} />
                                <View style={style.textWidth}>
                                    <Text style={[style.mobileNumberText, styles.alignText]}>
                                        {ENTER_YOUR_OTP_SENT_TO_YOUR_REGISTERED_MOBILE}
                                    </Text>
                                </View>
                                <View style={styles.doubleContentDivider} />
                                <View style={style.otpView}>
                                    <CodeField
                                        ref={ref}
                                        {...props}
                                        value={value}
                                        onChangeText={setValue}
                                        cellCount={CELL_COUNT}
                                        rootStyle={style.codeFieldRoot}
                                        keyboardType="number-pad"
                                        textContentType="oneTimeCode"
                                        renderCell={({ index, symbol, isFocused }) => (
                                            <Text
                                                key={index}
                                                style={[style.cell, isFocused && styles.focusCell]}
                                                onLayout={getCellOnLayoutHandler(index)}>
                                                {symbol || (isFocused ? <Cursor /> : null)}
                                            </Text>
                                        )}
                                    />
                                </View>
                                <View style={styles.doubleHeight} />
                                <Text style={[style.resetOtpTextStyle, styles.alignText]}>{RESEND_OPT_TEXT}</Text>
                                <View style={styles.contentDivider} />
                                <View style={styles.doubleHeight} />
                                <AppButton title={VERIFY_TEXT} onPress={()=>onPressVerifyButton()} customButtonTextStyle={style.buttonTextStyle}/>
                                <View style={styles.doubleHeight} />
                                <View style={{height:hp(0.3)}}/>
                                {/* <View style={styles.smallHeight} /> */}
                                {/* <View style={styles.doubleContentDivider} /> */}

                            </View>
                        </View>

                    </ScrollView>
                </View>
            </ImageBackground >

        </View >
    );
};

const style = StyleSheet.create({
    bathTubImageStyle: {
        height: '100%',
        width: '100%',
        color: color.primaryBlue,
    },
    mainView: {
        backgroundColor: color.primaryBlue,
        flex: 1
    },
    contentDivider: {
        height: hp(7)
    },
    doubleContentDivider: {
        height: hp(7)
    },
    logoStyle: {
        alignSelf: 'center'
    },
    smallView: {
        height: hp(0.5)
    },
    headingText: {
        fontSize: hp(2.4),
        color: color.white,
        textAlign: 'center'
    },
    whiteContent: {
        backgroundColor: color.white,
        borderTopLeftRadius: hp(4),
        borderTopRightRadius: hp(4),
        opacity:0.8

    },
    itemDivider: {
        height: hp(3)
    },
    verticalDivider: {
        paddingHorizontal: '5%'
    },
    forgotpasswordText: {
        fontSize: hp(3.3),
        color: color.darkblue
    },
    mobileNumberText: {
        fontSize: hp(2.5),
        color: color.darkblue
    },
    textWidth: {
        width: '70%',
        alignSelf: 'center'
    },
    cell: {
        width: wp(13),
        height: hp(6),
        lineHeight: hp(6),
        fontSize: hp(3.5),
        borderColor: 'white',
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: hp(1)
    },
    focusCell: {
        borderColor: '#000',
    },
    otpView: { paddingHorizontal: '17%' },
    resetOtpTextStyle: {
        fontSize: hp(2.2),
        color: color.darkblue,
    },
    buttonTextStyle: { fontSize: hp(2.5), color: color.white, textAlign: 'center', }

})
export default OtpVerfication;



// import React, { useState } from 'react';
// import { SafeAreaView, Text, StyleSheet } from 'react-native';

// import {
//     CodeField,
//     Cursor,
//     useBlurOnFulfill,
//     useClearByFocusCell,
// } from 'react-native-confirmation-code-field';

// const styles = StyleSheet.create({
//     root: { flex: 1, padding: 20 },
//     title: { textAlign: 'center', fontSize: 30 },
//     codeFieldRoot: { marginTop: 20 },
//     cell: {
//         width: 40,
//         height: 40,
//         lineHeight: 38,
//         fontSize: 24,
//         borderWidth: 2,
//         borderColor: 'white',
//         textAlign: 'center',
//         backgroundColor: 'white'
//     },
//     focusCell: {
//         borderColor: '#000',
//     },
// });

// const CELL_COUNT = 6;

// const OtpVerfication = () => {
//     const [value, setValue] = useState('');
//     const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
//     const [props, getCellOnLayoutHandler] = useClearByFocusCell({
//         value,
//         setValue,
//     });

//     return (
//         <SafeAreaView style={styles.root}>

//             <CodeField
//                 ref={ref}
//                 {...props}
//                 // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
//                 value={value}
//                 onChangeText={setValue}
//                 cellCount={CELL_COUNT}
//                 rootStyle={styles.codeFieldRoot}
//                 keyboardType="number-pad"
//                 textContentType="oneTimeCode"
//                 renderCell={({ index, symbol, isFocused }) => (
//                     <Text
//                         key={index}
//                         style={[styles.cell, isFocused && styles.focusCell]}
//                         onLayout={getCellOnLayoutHandler(index)}>
//                         {symbol || (isFocused ? <Cursor /> : null)}
//                     </Text>
//                 )}
//             />
//         </SafeAreaView>
//     );
// };

// export default OtpVerfication;
