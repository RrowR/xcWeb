import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre;

//页面查询
//定义服务端页面查询接口
export const page_list = (page,size,params) => {
  //将params这个json对象转换成keyvalue字符串，并且自带&，只需要拼接一个?就可以了
  let queryString = querystring.stringify(params);    //这个方法不是调用不出来，只是检测不到，还是调用的
  return http.requestQuickGet(apiUrl+"/cms/page/list/" + page + "/" + size + "?" + queryString);
}

export const page_add = params => {
  return http.requestPost(apiUrl+"/cms/page/add",params);   //这里只需要使用逗号，填写参数就行了，具体需要看这个post需要的参数是啥
}

export const page_get = id => {
  return http.requestQuickGet(apiUrl+"/cms/page/get/"+id);
}

export const page_edit = (id,params) => {
  return null;
}

