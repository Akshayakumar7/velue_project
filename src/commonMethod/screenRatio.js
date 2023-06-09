import { Dimensions, PixelRatio, Platform } from 'react-native';

// let scaleFactor =
//     Dimensions.get('screen').scale / Dimensions.get('window').scale;
let screenWidth = Dimensions.get('window').width;

let screenHeight = Dimensions.get('window').height;

const isIOS = Platform.OS === 'ios';
const isANDROID = Platform.OS === 'android';
const isiPAD = screenHeight / screenWidth < 1.6;

const widthPercentageToDP = (widthPercent) => {
    const elemWidth =
        typeof widthPercent === 'number'
            ? widthPercent
            : parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const heightPercentageToDP = (heightPercent) => {
    const elemHeight =
        typeof heightPercent === 'number'
            ? heightPercent
            : parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const listenOrientationChange = (that) => {
    Dimensions.addEventListener('change', (newDimensions) => {
        // Retrieve and save new dimensions
        screenWidth = newDimensions.window.width;
        screenHeight = newDimensions.window.height;
        that(screenWidth < screenHeight ? 'portrait' : 'landscape');
    });
};

const removeOrientationListener = () => {
    Dimensions.removeEventListener('change', () => {});
};
const scale = screenWidth / 375;
const normalize = (size) => {
    const newSize = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    normalize,
    listenOrientationChange,
    removeOrientationListener,
    isANDROID,
    isIOS,
    isiPAD,
    screenWidth,
    screenHeight,
};