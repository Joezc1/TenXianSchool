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


export function list(data) {
  return request({
    url: '/user/list',
    method: 'post',
    data
  })
}

export function detail(id) {
  return request({
    url: `/user/${id}`,
    method: 'post',
    data:{}
  })
}

export function newruser(data) {
  return request({
    url: '/save/user',
    method: 'post',
    data
  })
}

export function updateuser(data,id) {
    return request({
      url: `/update/user/${id}`,
      method: 'post',
      data
    })
}
  
export function deleteuser(id) {
    return request({
      url: `/delete/user/${id}`,
      method: 'post',
      data:{}
    })
}
  