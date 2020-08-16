//默认配置项
axios.defaults.baseURL = 'http://39.105.45.6:3232';


// 请求拦截器，拦截向服务器发出的所有的请求
axios.interceptors.request.use(function(config) { //拦截到了执行
		// console.log(config);
		var token = "";
		for (var key in config.data) {
			token += config.data[key];
		}
		config.data['token'] = md5(token); //可以修改
		return config; //必须返回，放行
	}),
	function(err) { //拦截出错执行
		console.log(err)
	}


//响应拦截器，将后台返回的数据从对象中取出后返回给请求处
axios.interceptors.response.use(function(res) { //在进入处理之前先拦截下来进行操作
	// console.log(res);
	return res.data;
}, function(err) {
	console.log(err);
})
