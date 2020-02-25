import request from '../utils/request'

export function list(data) {
  return request({
    url: '/student/list',
    method: 'post',
    data
  })
}

export function detail(id) {
  return request({
    url: `/student/${id}`,
    method: 'post',
    data:{}
  })
}

export function newstudent(data) {
  return request({
    url: '/save/student',
    method: 'post',
    data
  })
}

export function updatestudent(data,id) {
    return request({
      url: `/update/student/${id}`,
      method: 'post',
      data
    })
}
  
export function deletestudent(id) {
    return request({
      url: `/delete/student/${id}`,
      method: 'post',
      data:{}
    })
}
  