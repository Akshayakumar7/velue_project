import axios from 'axios';
import {TOAST_MESSAGE_TYPE} from '../../../../../general/generalConst';
import {ShowToastMessage} from '../../../../../commonMethod/toastMessage';

const BASE_URL = 'http://172.20.10.3:8080';

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
  setCategoryLoader(true);
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
