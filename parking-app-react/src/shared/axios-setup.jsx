import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://parking-app-react.firebaseio.com/'
});

export default instance;