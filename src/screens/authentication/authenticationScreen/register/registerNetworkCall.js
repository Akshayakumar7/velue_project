import axios from 'axios';

export const getJoke = async () => {
  const res = await axios({
    method: 'GET',
    url: 'https://official-joke-api.appspot.com/random_joke',
  });
  return res;
};

export const storeUserDataToDB = async userData => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://202,21,32.168:8080/customer/saveCustomers',
      data: userData,
    });
  } catch (e) {
    console.log('Error>>>', e);
  }
  return res;
};
