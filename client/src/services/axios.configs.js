//Core
import axios from 'axios';

// const proxyurl = 'https://cors-anywhere.herokuapp.com/';

//Axios defaults config
axios.defaults.baseURL = `http://localhost:3001`;

const token = {
	set(token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	},

	unset() {
		axios.defaults.headers.common.Authorization = '';
	},
};

export default token;
