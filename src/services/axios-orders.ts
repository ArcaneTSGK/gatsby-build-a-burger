import axios from 'axios';

export default axios.create({
  baseURL: 'https://react-my-burger-9f1f4.firebaseio.com/'
});