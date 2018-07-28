import axios from 'axios';
import Qs from 'qs';

axios.defaults.baseURL = 'http://joke.api.etab.top/v1';
axios.defaults.timeout = 5000;

axios.interceptors.response.use(function (response) {
    let data = response.data;
    // 对响应数据做点什么
    return data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default axios;