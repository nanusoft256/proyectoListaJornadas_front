import axios from 'axios';

export default () => {
    const options = {};
    options.baseURL = 'http://localhost:4000/';
    const instance = axios.create(options);
    return instance;
};