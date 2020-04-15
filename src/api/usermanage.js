import request from '../utils/request'

export function upload(data) {
  return request({
    url: '/upload',
    method: 'post',
    data
  })
}

// 获取用户信息
export function finduser(data,id) {
    return request({
        url: `/user/${id}`,
        method: 'post',
        data
    })
}

export function login(data) {
  return request({
    url: '/web/user/login',
    method: 'post',
    data
  })
}

export function register(data) {
  return request({
    url: '/web/user/register',
    method: 'post',
    data
  })
}
export function updateUser(id,data){
  return request({
    url: `/update/user/${id}`,
    method: 'post',
    data
  })
}

export function findpass(data) {
  return request({
    url: '/find/pass',
    method: "post",
    data
  })
}