import axios from 'axios';
import { TIME_OUT, BASE_URL } from '@/Consts';
import { useRouter } from 'vue-router';
import { useStorage } from '@/hooks/useStorage';

const router = useRouter();

const request = axios.create({
	baseURL: BASE_URL,
	timeout: TIME_OUT // 请求超时时间
})

// axios.defaults.headers['token'] = localStorage.getItem("token")

/**
 * 请求拦截器，记录请求发送之前的基本信息
 */
request.interceptors.request.use(config => {
	// https://forum.vuejs.org/t/adding-x-frame-options-response-header-to-every-page-route-in-my-vue-app/31271/6
	// config.headers['X-Frame-Options'] = '*'
	const token = localStorage.getItem('token');
	if (token)
		// config.headers["Authorization"] = token;
	// 在发送请求之前做些什么
	return config;
}, function (error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
	// 对响应数据做点什么
	if (response.data.code === 50005)

	return response;
}, error => {
	// 对响应错误做点什么
	if (error && error.response) {
		// 1.公共错误处理
		// 2.根据响应码具体处理
		switch (error.response.status) {
			case 400:
				error.message = '错误请求'
				break;
			case 401:
				error.message = '未授权，请重新登录'
				break;
			case 403:
				error.message = '拒绝访问'
				break;
			case 404:
				error.message = '请求错误,未找到该资源';
				router.push("/404");
				break;
			case 405:
				error.message = '请求方法未允许'
				break;
			case 408:
				error.message = '请求超时'
				break;
			case 500:
				error.message = '服务器端出错'
				break;
			case 501:
				error.message = '网络未实现'
				break;
			case 502:
				error.message = '网络错误'
				break;
			case 503:
				error.message = '服务不可用'
				break;
			case 504:
				error.message = '网络超时'
				break;
			case 505:
				error.message = 'http版本不支持该请求'
				break;
			default:
				error.message = `连接错误${error.response.status}`
		}
	} else {
		// 超时处理
		if (JSON.stringify(error).includes('timeout')) {
			// this.$message.error('服务器响应超时，请刷新当前页')
		}
		error.message = '连接服务器失败'
	}
	return Promise.reject(error.response);
});

export default request;
