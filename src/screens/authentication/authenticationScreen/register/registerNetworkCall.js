import axios from 'axios';

export const getJoke = async () => {
  const res = await axios({
    method: 'GET',
    url: 'https://official-joke-api.appspot.com/random_joke',
  });
  return res;
};

export const addNewUserData = data => {
  try {
    const url = 'https://0b10-202-21-32-168.in.ngrok.io/customer/saveCustomers';
    const res = axios.post(url, data).then(response => {
      console.log('response', response.data);
    });
    return res;
  } catch (error) {
    console.log('error', error);
  }
};

// https://jsonplaceholder.typicode.com/posts?
