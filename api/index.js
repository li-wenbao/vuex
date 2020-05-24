/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
// import ajax from './ajax'
import bRequest from './minRequest'
const BASE_URL = '../json'
// const BASE_URL = '/api'
console.log("sdhfdhfdhfdhgjgf")
console.log("sdhfdhfdhfdhgjgf",bRequest)
// 测试一波
export const cs = () => bRequest(BASE_URL+'/storelist')
// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => bRequest(`${BASE_URL}/position/${geohash}`)
// 2、获取食品分类列表
export const reqFoodCategorys = () => bRequest(BASE_URL+'/index_category')
// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => bRequest(BASE_URL+'/shops', {longitude, latitude})

// export const reqPwdLogin = ({name, pwd, captcha}) => bRequest(BASE_URL+'/login_pwd', {name, pwd, captcha}, 'POST')

