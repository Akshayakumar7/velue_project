import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
  Platform,
  Alert,
  Modal,
  SafeAreaView,
} from 'react-native';
import Header from '../../../../component/common/appHeader';
import {
  AADHAR_CARD_TEXT,
  ACCOUNT_NUMBER_TEXT,
  BANK_NAME_TEXT,
  BANK_TEXT,
  BUSINESS_TEXT,
  BUSINESS_TYPE_TEXT,
  BUSSINESS_EMAIL_TEXT,
  BUSSINESS_NAME_TEXT,
  CANCEL_TEXT,
  CONTACT_TEXT,
  FINISH_TEXT,
  FIRST_NAME_TEXT,
  GST_CERTIFICATE_TEXT,
  GST_NUMBER_TEXT,
  IFSC_CODE_TEXT,
  NEXT_TEXT,
  OPT_SENT_TEXT,
  PAN_NUMBER_TEXT,
  PASSWORD_TEXT,
  PRIMARY_CONTACT_TEXT,
  REGISTERED_BUSSINESS_ADDRESS,
  REGISTER_SCREEN_INDEX,
  REGISTRATION_TEXT,
  UPLOAD_AADHAR_TEXT,
  UPLOAD_GST_CERTIFICATE_TEXT,
  UPLOAD_PAN_CARD_TEXT,
  WHATSAPP_UPDATES_TEXT,
} from './registerUtility';
import {color} from '../../../../assets/colors/color';
import SvgImage from '../../../../component/common/svgImage';
import {
  BLUE_BUSSINESS_ICON,
  GREY_BANK_ICON,
  GREY_CONTACT_ICON,
  WHITE_BUSSINESS_ICON,
  WHITE_CONTACT_ICON,
  WHITE_BANK_ICON,
  RIGHT_MARK,
  OPENED_EYE_ICON,
  DOWN_ICON,
  CLOSED_EYE_ICON,
  PERSON_ICON,
} from '../../../../assets/imagepath/imagepath';
import {hp, wp} from '../../../../commonMethod/screenRatio';
import styles from '../../../../general/generalStyleSheet';
import MandatoryText from '../../../../component/common/mandatoryText';
import CustomTextInput from '../../../../component/common/customTextInput';
import AppButton from '../../../../component/common/appButton';
import {PLUS_91} from '../../../../component/common/componentUtility';
import {
  CONFORM_PASSWORD_TEXT,
  OTP_VERIFICATION_TEXT,
  PASSWORD_RESET_TEXT,
  VERIFY_TEXT,
} from '../login/loginUtility';
import CustomDropdown from '../../../../component/common/customDropdown';
import ImagePicker from 'react-native-image-crop-picker';
import {androidCameraPermission} from '../../../../commonMethod/permission';
import {galleryReadPermisson} from '../../../../commonMethod/permission';
import {galleryWritePermission} from '../../../../commonMethod/permission';
import {KEYBOARD_TYPE} from '../../../../general/generalConst';
import {SCREEN_NAME} from '../../../../general/screenName';
import ApplyCancelButton from '../../../../component/common/applyCancelButton';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {
  isInValidEmailAddress,
  validateName,
  validatePhoneNumber,
} from '../../../../commonMethod/fieldValidator';
import {ERROR_MESSAGE} from '../../../../general/validationMessage';
import {
  addData,
  addNewUserData,
  getJoke,
  storeUserDataToDB,
} from './registerNetworkCall';

const Register = ({navigation}) => {
  const CELL_COUNT = 4;
  const [currentButton, setCurrent] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [showResetPassword, setShowResetPassword] = useState(true);
  const [gstNumber, setShowGstNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [primaryContact, setPrimaryContact] = useState('');
  const [whatsAppNumer, setWhatsAppNumber] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [conformPassword, setConformPassword] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [isVerfied, setIsVerified] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [whatsAppNumberError, setWhatsAppNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [conformPasswordError, setConformPasswordError] = useState('');
  const [otpError, setOtpError] = useState('');
  const [accountNumberError, setAccountNumberError] = useState('');
  const [bankNameError, setBankNameError] = useState('');
  const [ifscCodeError, setIfscCodeError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const onPressBussiness = () => {
    setCurrent(0);
  };

  const onPressContact = () => {
    setCurrent(1);
  };

  const onPressBankIcon = () => {
    setCurrent(2);
  };

  const onChangeGSTNumber = e => {
    setShowGstNumber(e);
  };

  const onChaneFullName = e => {
    setFullName(e);
    setNameError('');
  };

  const onChangeEmail = e => {
    setEmail(e);
    setEmailError('');
  };

  const onChangePrimaryContact = e => {
    setPrimaryContact(e);
    setPhoneNumberError('');
  };

  const onChangeWhatsappNumber = e => {
    setWhatsAppNumber(e);
    setWhatsAppNumberError('');
  };

  const onChangePassword = e => {
    setPasswordText(e);
    setPasswordError('');
  };

  const onChangeConformPassword = e => {
    setConformPassword(e);
    setConformPasswordError('');
  };

  const onChangeAccountNumber = e => {
    setAccountNumber(e);
    setAccountNumberError('');
  };

  const onChangeIfscCode = e => {
    setIfscCode(e);
    setIfscCodeError('');
  };

  const onPressVerify = () => {
    setIsVerified(!isVerfied);
  };

  const onPressBankHandlear = () => {
    navigation.goBack();
  };

  const onPressFinishButton = async () => {
    console.log("CLICKED")
    const isVerfied = await verifyAllFields();
    if (true) {
      var payLoad = {
        customerName: 'HindHardware',
        contactName: fullName,
        primaryNumber: primaryContact,
        whatsAppNumber: whatsAppNumer,
        contactGmail: email,
        creditLimitAmount: 100000,
        creditLimitDays: 35,
        gstno: 'GST2023002',
        customerBank: {
          accountNumber: accountNumber,
          bankName: 'YES BANK',
          ifscCode: ifscCode,
          panCard: 'PAN00101101',
        },
      };
      var oneMorePayload = {
        customerName: 'HindHardware',
        contactName: 'Akshay',
        primaryNumber: '7022326895',
        whatsAppNumber: '',
        contactGmail: 'shravan@gmail.com',
        creditLimitAmount: 100000,
        creditLimitDays: 35,
        gstno: 'GST2023002',
        customerBank: {
          accountNumber: '20230809',
          bankName: 'YES BANK',
          ifscCode: 'IFSC00101',
          panCard: 'PAN00101101',
        },
      };
      const result = await addNewUserData(oneMorePayload);
      console.log("result",result);
    }
  };

  const onPressVerifyText = () => {
    setShowModal(!showModal);
  };

  const verifyAllFields = () => {
    if (!validateName(fullName)) {
      setNameError(ERROR_MESSAGE.name);
      return false;
    }
    if (!isInValidEmailAddress(email)) {
      setEmailError(ERROR_MESSAGE.email);
      return false;
    }
    if (!validatePhoneNumber(primaryContact)) {
      setPhoneNumberError(ERROR_MESSAGE.phoneNumber);
      return false;
    }
    if (!validatePhoneNumber(whatsAppNumer)) {
      setWhatsAppNumberError(ERROR_MESSAGE.phoneNumber);
      return false;
    }
    if (passwordText != conformPassword) {
      setPasswordError(ERROR_MESSAGE.passwordError);
      return false;
    }
    return true;
  };

  return (
    <View>
      <Header
        headerTitle={REGISTRATION_TEXT}
        onPressBackButton={() => onPressBankHandlear()}
      />
      <ScrollView style={style.mainView}>
        <View style={styles.doubleHeight} />
        <View style={style.flexView}>
          <TouchableOpacity
            style={
              REGISTER_SCREEN_INDEX.first == currentButton
                ? style.blueButton
                : style.inactiveBussinessButton
            }
            onPress={() => onPressBussiness()}>
            <SvgImage
              Source={
                REGISTER_SCREEN_INDEX.first == currentButton
                  ? WHITE_BUSSINESS_ICON
                  : BLUE_BUSSINESS_ICON
              }
              height={hp(5)}
              width={wp(6)}
              style={style.buttonIconStyle}
            />
            <View style={styles.singleHeight} />
            <Text
              style={
                REGISTER_SCREEN_INDEX.first == currentButton
                  ? style.buttonText
                  : style.inActiveText
              }>
              {BUSINESS_TEXT}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              REGISTER_SCREEN_INDEX.second == currentButton
                ? style.contactButton
                : style.inActiveContactButton
            }
            onPress={() => onPressContact()}>
            <SvgImage
              Source={
                REGISTER_SCREEN_INDEX.second == currentButton
                  ? WHITE_CONTACT_ICON
                  : GREY_CONTACT_ICON
              }
              height={hp(5)}
              width={wp(7)}
              style={style.buttonIconStyle}
            />
            <View style={styles.singleHeight} />
            <Text
              style={
                REGISTER_SCREEN_INDEX.second == currentButton
                  ? style.buttonText
                  : style.inActiveContactText
              }>
              {CONTACT_TEXT}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              REGISTER_SCREEN_INDEX.third == currentButton
                ? style.bankButton
                : style.inActiveBankButton
            }
            onPress={() => onPressBankIcon()}>
            <SvgImage
              Source={
                REGISTER_SCREEN_INDEX.third == currentButton
                  ? WHITE_BANK_ICON
                  : GREY_BANK_ICON
              }
              height={hp(5)}
              width={wp(9)}
              style={style.buttonIconStyle}
            />
            <View style={styles.singleHeight} />
            <Text
              style={
                REGISTER_SCREEN_INDEX.third == currentButton
                  ? style.buttonText
                  : style.inActiveContactText
              }>
              {BANK_TEXT}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.doubleHeight} />
        {REGISTER_SCREEN_INDEX.first == currentButton && (
          <ScrollView style={style.fieldView}>
            <View style={styles.doubleHeight} />
            <MandatoryText mandatoryText={GST_NUMBER_TEXT} />
            <View style={styles.singleHeight} />

            <View style={style.gstPlaceHolderFlex}>
              <View style={{width: '67%'}}>
                <CustomTextInput
                  // placeholder={'AAVVCC22DC'}
                  needIconDivider={false}
                  customStyle={style.gstTextInput}
                  multiLine={true}
                  onChangeText={e => onChangeGSTNumber(e)}
                />
              </View>
              <View style={styles.doubleVerticalDivider} />
              <View style={style.buttonWidth}>
                {isVerfied ? (
                  <View>
                    <AppButton
                      title={'Verify'}
                      customButtonStyle={style.blueVerifyButton}
                      rightIconHeight={hp(4)}
                      rightIconWidth={wp(5)}
                      onPress={() => onPressVerify()}
                    />
                  </View>
                ) : (
                  <View>
                    <AppButton
                      title={'Verified'}
                      customButtonStyle={style.verifyButton}
                      rightIcon={RIGHT_MARK}
                      rightIconHeight={hp(4)}
                      rightIconWidth={wp(5)}
                      onPress={() => onPressVerify()}
                    />
                  </View>
                )}
              </View>
            </View>
            <View style={styles.doubleHeight} />
            <View style={style.subContentView}>
              <View style={styles.doubleHeight} />
              <MandatoryText
                mandatoryText={BUSSINESS_NAME_TEXT}
                needMandatoryIcon={false}
                customTextStyle={style.headingText}
              />
              <View style={styles.singleHeight} />
              <Text style={style.detailsText}>Mittal Hardwares</Text>
              <View style={styles.midDivider} />
              <View style={style.verticalDivider} />
              <View style={styles.doubleHeight} />
              <MandatoryText
                mandatoryText={PAN_NUMBER_TEXT}
                needMandatoryIcon={false}
                customTextStyle={style.headingText}
              />
              <View style={styles.singleHeight} />
              <Text style={style.detailsText}>AAVCA2345</Text>
              <View style={styles.midDivider} />
              <View style={style.verticalDivider} />
              <View style={styles.doubleHeight} />
              <MandatoryText
                mandatoryText={BUSINESS_TYPE_TEXT}
                needMandatoryIcon={false}
                customTextStyle={style.headingText}
              />
              <View style={styles.singleHeight} />
              <Text style={style.detailsText}>Others</Text>
              <View style={styles.midDivider} />
              <View style={style.verticalDivider} />
              <View style={styles.doubleHeight} />
              <MandatoryText
                mandatoryText={REGISTERED_BUSSINESS_ADDRESS}
                needMandatoryIcon={false}
                customTextStyle={style.headingText}
              />
              <View style={styles.singleHeight} />
              <Text style={style.addressText}>
                Site No. 05 , Opposite to JVM Garden Apartment Building,
                Bangalore 560081
              </Text>
              <View style={styles.midDivider} />
              <View style={styles.doubleHeight} />
            </View>
            <View style={styles.doubleHeight} />

            <View>
              <MandatoryText mandatoryText={GST_CERTIFICATE_TEXT} />
              <View style={styles.singleHeight} />
              <TouchableOpacity>
                <View style={style.uploadGstBox}>
                  <Text style={style.uploadAadharText}>
                    {UPLOAD_GST_CERTIFICATE_TEXT}
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={styles.doubleHeight} />
              <MandatoryText mandatoryText={PAN_NUMBER_TEXT} />
              <View style={styles.singleHeight} />
              <TouchableOpacity>
                <View style={style.uploadGstBox}>
                  <Text style={style.uploadAadharText}>
                    {UPLOAD_PAN_CARD_TEXT}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.contentDivider} />
            <AppButton
              title={NEXT_TEXT}
              customButtonStyle={style.nextButtonStyle}
              onPress={() => onPressSecondNextButton()}
            />
            <View style={styles.doubleContentDivider} />
            <View style={styles.contentDivider} />
          </ScrollView>
        )}
        {REGISTER_SCREEN_INDEX.second == currentButton && (
          <View style={style.fieldView}>
            <View style={styles.doubleHeight} />
            <MandatoryText mandatoryText={FIRST_NAME_TEXT} />
            <View style={styles.singleHeight} />
            <View>
              <CustomTextInput
                // placeholder={'Mithunlal'}
                needIconDivider={false}
                customStyle={style.gstTextInput}
                multiLine={true}
                onChangeText={e => onChaneFullName(e)}
                value={fullName}
                errorText={nameError}
              />
            </View>

            <View style={styles.doubleHeight} />
            <MandatoryText mandatoryText={BUSSINESS_EMAIL_TEXT} />
            <View style={styles.singleHeight} />
            <View>
              <CustomTextInput
                // placeholder={'Mithunlal@business.com'}
                needIconDivider={false}
                customStyle={style.gstTextInput}
                multiLine={true}
                onChangeText={e => onChangeEmail(e)}
                value={email}
                errorText={emailError}
              />
            </View>
            <View style={styles.doubleHeight} />
            <MandatoryText mandatoryText={PRIMARY_CONTACT_TEXT} />
            <View style={styles.singleHeight} />
            <View style={style.simpleFlex}>
              <View style={style.plusBorder}>
                <Text style={style.plusText}>{PLUS_91}</Text>
              </View>
              <View style={styles.verticalDivider} />
              <View style={{width: '86%'}}>
                <CustomTextInput
                  // placeholder={'989898989898'}
                  needIconDivider={false}
                  customStyle={style.gstTextInput}
                  multiLine={true}
                  keyboardType={KEYBOARD_TYPE.numeric}
                  onChangeText={e => onChangePrimaryContact(e)}
                  value={primaryContact}
                  needVerifyText={true}
                  onPressVerify={() => onPressVerifyText()}
                  errorText={phoneNumberError}
                />
              </View>
            </View>
            <View style={styles.doubleHeight} />
            <View style={style.commonFlex}>
              <MandatoryText
                mandatoryText={WHATSAPP_UPDATES_TEXT}
                needMandatoryIcon={false}
              />
              <View>
                <Switch
                  trackColor={{false: color.grey, true: color.green}}
                  thumbColor={isEnabled ? color.white : color.white}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>
            <View style={styles.singleHeight} />
            <View style={style.simpleFlex}>
              <View style={style.plusBorder}>
                <Text style={style.plusText}>{PLUS_91}</Text>
              </View>
              <View style={styles.verticalDivider} />
              <View style={{width: '86%'}}>
                <CustomTextInput
                  // placeholder={'989898989898'}
                  needIconDivider={false}
                  customStyle={style.gstTextInput}
                  multiLine={true}
                  onChangeText={e => onChangeWhatsappNumber(e)}
                  value={whatsAppNumer}
                  errorText={whatsAppNumberError}
                />
              </View>
            </View>
            <View style={styles.doubleHeight} />
            <MandatoryText mandatoryText={PASSWORD_TEXT} />
            <View style={styles.singleHeight} />
            <View>
              <CustomTextInput
                // placeholder={'*********'}
                needIconDivider={false}
                needIndianCode={true}
                rightIcon={showPassword ? CLOSED_EYE_ICON : OPENED_EYE_ICON}
                rightIconHeight={hp(5)}
                rightIconWidth={wp(6)}
                onPressRightIcon={() => setShowPassword(!showPassword)}
                secureTextEntry={showPassword}
                onChangeText={e => onChangePassword(e)}
                value={passwordText}
                customStyle={style.passwordTextinput}
                errorText={passwordError}
              />
            </View>
            <View style={styles.doubleHeight} />
            <MandatoryText mandatoryText={CONFORM_PASSWORD_TEXT} />
            <View style={styles.singleHeight} />
            <View>
              <CustomTextInput
                // placeholder={'*********'}
                needIconDivider={false}
                multiLine={true}
                needIndianCode={true}
                onPressRightIcon={() =>
                  setShowResetPassword(!showResetPassword)
                }
                rightIcon={
                  showResetPassword ? CLOSED_EYE_ICON : OPENED_EYE_ICON
                }
                secureTextEntry={showResetPassword}
                rightIconHeight={hp(5)}
                rightIconWidth={wp(6)}
                onChangeText={e => onChangeConformPassword(e)}
                value={conformPassword}
                leftIcon={PERSON_ICON}
                leftIconHeight={hp(5)}
                leftIconWidth={wp(6)}
                errorText={conformPasswordError}
              />
            </View>
            <View style={styles.doubleHeight} />
            <MandatoryText
              mandatoryText={AADHAR_CARD_TEXT}
              needMandatoryIcon={false}
            />
            <View style={styles.singleHeight} />
            <TouchableOpacity>
              <View style={style.aadharCardBorder}>
                <Text style={style.uploadAadharText}>{UPLOAD_AADHAR_TEXT}</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.contentDivider} />
            <AppButton
              title={NEXT_TEXT}
              customButtonStyle={style.nextButtonStyle}
              onPress={() => onPressSecondNextButton()}
            />
            <View style={styles.doubleContentDivider} />
          </View>
        )}
      </ScrollView>
      {REGISTER_SCREEN_INDEX.third == currentButton && (
        <ScrollView>
          <View style={style.fieldView}>
            <View style={styles.doubleHeight} />
            <MandatoryText mandatoryText={ACCOUNT_NUMBER_TEXT} />
            <View style={styles.singleHeight} />
            <View>
              <CustomTextInput
                // placeholder={'Mithunlal'}
                needIconDivider={false}
                customStyle={style.gstTextInput}
                multiLine={true}
                changeEyeIcon={true}
                onChangeText={e => onChangeAccountNumber(e)}
                value={accountNumber}
                errorText={accountNumberError}
              />
            </View>
            <View style={styles.doubleHeight} />
            <MandatoryText mandatoryText={BANK_NAME_TEXT} />
            <View style={styles.singleHeight} />
            <CustomDropdown
              rightIcon={DOWN_ICON}
              rightIconHeight={hp(3)}
              rightIconWidth={wp(5)}
              customStyle={style.dropDownStyle}
            />
            <View style={styles.doubleHeight} />
            <MandatoryText mandatoryText={IFSC_CODE_TEXT} />
            <View style={styles.singleHeight} />
            <View>
              <CustomTextInput
                // placeholder={'Mithunlal'}
                needIconDivider={false}
                customStyle={style.gstTextInput}
                multiLine={true}
                changeEyeIcon={true}
                onChangeText={e => onChangeIfscCode(e)}
                value={ifscCode}
                errorText={ifscCodeError}
              />
            </View>
            <View style={styles.doubleHeight} />
            <View style={styles.doubleContentDivider} />
            <View style={styles.doubleContentDivider} />

            <AppButton
              title={FINISH_TEXT}
              customButtonStyle={style.nextButtonStyle}
              onPress={() => onPressFinishButton()}
            />
            <View style={styles.doubleContentDivider} />
            <View style={styles.doubleContentDivider} />
          </View>
        </ScrollView>
      )}
      <View>
        <Modal
          animationType={'slide'}
          transparent={showModal}
          visible={showModal}>
          <View style={styles.doubleContentDivider} />
          <View style={styles.doubleContentDivider} />
          <View style={styles.doubleContentDivider} />
          <View style={style.modalStyle}>
            <Text style={style.forgotpasswordText}>
              {OTP_VERIFICATION_TEXT}
            </Text>
            <View style={styles.doubleHeight} />
            <Text style={style.otpSentText}>{OPT_SENT_TEXT}</Text>
            <View style={style.doubleHeight} />
            <SafeAreaView>
              <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                  <Text
                    key={index}
                    style={[style.cell, isFocused && style.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
            </SafeAreaView>
            <View style={styles.contentDivider} />
            <ApplyCancelButton
              cancelButtonText={CANCEL_TEXT}
              applyButtonText={VERIFY_TEXT}
              cancelButtonStyle={style.cancelButtonStyle}
              cancelTextStyel={styles.alignText}
              customApplyButtonStyle={style.customApplyButtonStyle}
              onPressCancelButton={() => setShowModal(!showModal)}
              onPressApplyButton={() => setShowModal(!showModal)}
            />
          </View>
        </Modal>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    backgroundColor: color.white,
  },
  flexView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  buttonIconStyle: {tintColor: 'black'},
  blueButton: {
    backgroundColor: color.darkblue,
    alignItems: 'center',
    padding: hp(1.5),
    borderRadius: hp(2),
    paddingHorizontal: wp(4.3),
  },
  buttonText: {
    fontSize: hp(2.2),
    color: color.white,
  },
  contactButton: {
    backgroundColor: color.darkblue,
    alignItems: 'center',
    borderRadius: hp(2),
    paddingHorizontal: wp(6.4),
    padding: hp(1.5),
  },
  bankButton: {
    backgroundColor: color.darkblue,
    alignItems: 'center',
    borderRadius: hp(2),
    paddingHorizontal: wp(9.2),
    padding: hp(1.5),
  },
  inactiveBussinessButton: {
    backgroundColor: color.white,
    alignItems: 'center',
    padding: hp(1.5),
    borderRadius: hp(2),
    paddingHorizontal: wp(4.3),
  },
  inActiveText: {
    fontSize: hp(2.2),
    color: color.darkblue,
  },
  inActiveContactButton: {
    backgroundColor: color.white,
    alignItems: 'center',
    borderRadius: hp(2),
    paddingHorizontal: wp(6.4),
    padding: hp(1.5),
  },
  inActiveContactText: {
    fontSize: hp(2.2),
    color: color.textGrey,
  },
  inActiveBankButton: {
    backgroundColor: color.white,
    alignItems: 'center',
    borderRadius: hp(2),
    paddingHorizontal: wp(9.2),
    padding: hp(1.5),
  },
  fieldView: {
    backgroundColor: color.lightGreen,
    paddingHorizontal: '5%',
  },
  verifyButton: {
    backgroundColor: color.green,
    borderRadius: hp(1),
    height: hp(6),
  },
  gstPlaceHolderFlex: {flexDirection: 'row', alignItems: 'center'},
  gstTextInput: {
    borderRadius: hp(0.5),
    borderWidth: hp(0.1),
    borderColor: color.borderBlueColor,
    width: '100%',
  },
  buttonWidth: {width: '30%'},
  subContentView: {
    backgroundColor: color.white,
    paddingHorizontal: '5%',
  },
  plusText: {
    fontSize: hp(2.6),
    padding: hp(0.5),
    textAlign: 'center',
  },
  plusBorder: {
    borderWidth: hp(0.1),
    borderColor: color.borderBlueColor,
    borderRadius: hp(0.5),
    // paddingVertical: '0.5%',
    width: '13%',
  },
  aadharCardBorder: {
    borderWidth: hp(0.1),
    borderColor: color.borderBlueColor,
    borderRadius: hp(4.5),
    padding: hp(3),
  },
  uploadAadharText: {
    color: color.grey,
    fontSize: hp(2.2),
    textAlign: 'center',
  },
  nextButtonStyle: {
    borderRadius: hp(1),
  },
  commonFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  headingText: {
    color: color.mediumGreen,
  },
  detailsText: {fontSize: hp(2.8), color: color.darkblue},
  verticalDivider: {
    borderBottomWidth: hp(0.1),
    color: color.underLineColor,
  },
  addressText: {
    fontSize: hp(2.1),
    color: color.darkblue,
  },
  uploadGstBox: {
    borderWidth: hp(0.1),
    borderColor: color.borderBlueColor,
    borderRadius: hp(4.5),
    padding: hp(3),
    backgroundColor: color.white,
  },
  blueVerifyButton: {
    backgroundColor: color.darkblue,
    borderRadius: hp(1),
    height: hp(6),
  },
  passwordTextinput: {
    width: '88%',
  },
  dropDownStyle: {
    width: '88%',
  },
  modalStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.white,
    height: hp(40),
    width: '90%',
    alignSelf: 'center',
    borderColor: color.grey,
    borderWidth: hp(0.1),
    borderRadius: hp(2),
    padding: hp(1),
  },
  forgotpasswordText: {
    fontSize: hp(3.3),
    color: color.darkblue,
  },
  otpSentText: {
    fontSize: hp(2.5),
    color: color.darkblue,
    textAlign: 'center',
    width: '90%',
  },
  cancelButtonStyle: {
    borderColor: color.borderBlueColor,
    borderWidth: hp(0.2),
    padding: hp(1),
    width: '50%',
    borderRadius: hp(1),
  },
  customApplyButtonStyle: {
    borderRadius: hp(1),
    height: hp(6.2),
    width: '100%',
  },
  cell: {
    width: wp(13),
    height: hp(6),
    lineHeight: hp(6),
    fontSize: hp(3.5),
    borderColor: 'white',
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: hp(1),
    borderWidth: hp(0.1),
  },
  focusCell: {
    borderColor: '#000',
  },
  simpleFlex: {
    flexDirection: 'row',
  },
});
export default Register;
