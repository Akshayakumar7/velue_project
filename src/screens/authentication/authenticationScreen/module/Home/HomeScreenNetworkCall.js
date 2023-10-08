import axios from 'axios';
import {BASE_URL, TOAST_MESSAGE_TYPE} from '../../../../../general/generalConst';
import {ShowToastMessage} from '../../../../../commonMethod/toastMessage';


export const fetchDataFromApi = async () => {
  try {
    const response = await axios.get(BASE_URL + '/dashboard/restockProducts');
    return response?.data;
  } catch (error) {
    ShowToastMessage(
      TOAST_MESSAGE_TYPE.error,
      '',
      error?.response?.data?.message == 'No message available'
        ? 'Something went wrong'
        : error?.response?.data?.message,
    );
  }
};

export const getCategoryData = async () => {
  try {
    const response = await axios.get(BASE_URL + '/product/getAllCategory');
    return response?.data;
  } catch (error) {
    ShowToastMessage(
      TOAST_MESSAGE_TYPE.error,
      '',
      error?.response?.data?.message == 'No message available'
        ? 'Something went wrong'
        : error?.response?.data?.message,
    );
  }
};
