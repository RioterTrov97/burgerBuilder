import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-my-burger-e4d0e-default-rtdb.firebaseio.com/',
});

export default instance;
