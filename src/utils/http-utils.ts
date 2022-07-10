import axios from 'axios'

const request = axios.create({
	// API 请求的默认前缀
	baseURL: 'http://localhost:9999',
	timeout: 6000 // 请求超时时间
})

axios.interceptors.request.use(function(config) {
	const token = localStorage.getItem('token')
	if (token) {
		// config.headers['token'] = token
    }
	// 在发送请求之前做些什么
	return config;
}, function(error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
	// 对响应数据做点什么
	return response;
}, function(error) {
	// 对响应错误做点什么
	return Promise.reject(error);
});

	
export default request

export {
	request as axios
}
