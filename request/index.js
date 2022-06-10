import axios from 'axios';
import QS from 'qs';
import { message } from 'antd';

// 区分测试环境和生产环境
const isPrd = process.env.NODE_ENV == 'production';
export const basicUrl = isPrd ? 'https://www.production.com' : 'http://www.development.com'

class API {
  constructor () {
    // 设置axios基础路径
    const service = axios.create({
      baseURL: basicUrl
    })
    // 请求拦截器
    service.interceptors.request.use((config) => {
      // 每次发送请求之前本地存储中是否存在token，也可以通过Redux这里只演示通过本地拿到token
      // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
      // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
      const token = window.localStorage.getItem('userToken') || window.sessionStorage.getItem('userToken');
      // 在每次的请求中添加token
      config.data = Object.assign({}, config.data, {
        token: token,
      })
      // 设置请求头
      config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      }
      config.data = QS.stringify(config.data)
      return config
    }, (error) => error)

    // 响应拦截器
    service.interceptors.response.use((response) => {
      // 根据返回不同的状态码处理不同的逻辑
      // 要和后台开发人员协商好统一的错误状态码
      if (response.code) {
        switch (response.code) {
        case 200:
          return response.data;
        case 401:
          // 未登录处理方法
          break;
        case 403:
          // token过期处理方法
          break;
        default:
          message.error(response.data.msg)
        }
      } else {
        return response;
      }
    })
  }
  get (url, config) {
    return this.get(url, config);
  }
  post (url, data, config) {
    return this.post(url, data, config);
  }
  put (url, data, config) {
    return this.post(url, data, config);
  }
  delete (url, data, config) {
    return this.post(url, data, config);
  }
}
const api = new API();
export default api;

