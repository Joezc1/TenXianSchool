import request from '../utils/request'

export function list(data) {
  return request({
    url: '/teacher/list',
    method: 'post',
    data
  })
}

export function detail(id) {
  return request({
    url: `/teacher/${id}`,
    method: 'post',
    data:{}
  })
}

export function newteacher(data) {
  return request({
    url: '/save/teacher',
    method: 'post',
    data
  })
}

export function updateteacher(data,id) {
    return request({
      url: `/update/teacher/${id}`,
      method: 'post',
      data
    })
}
  
export function deleteteacher(id) {
    return request({
      url: `/delete/teacher/${id}`,
      method: 'post',
      data:{}
    })
}
export function typeteacher(type,data){
  return request({
    url: `/teacher/type/${type}`,
    method: "post",
    data
  })
}
  