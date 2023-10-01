import axios from 'axios';

export const getJoke = async () => {
  const res = await axios({
    method: 'GET',
    url: 'https://official-joke-api.appspot.com/random_joke',
  });
  return res;
};

export const addNewUserData = data => {
  console.log('sfjkghasdfj');
  try {
    const url = 'http://localhost:8080/customer/saveCustomers';
    axios.post(url, data).then(response => {
      console.log('response', response);
    });
    // return res;
  } catch (error) {
    console.log('error', error);
  }
};

export const apiTest = data => {
  console.log('sfjkghasdfj', data);
  const url = 'http://192.168.31.72:8080/';
  return axios
    .post(url, data)
    .then(response => response)
    .catch(err => err);
};

// https://jsonplaceholder.typicode.com/posts?
