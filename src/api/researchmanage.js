import request from '../utils/request'

export function list(data) {
  return request({
    url: '/researchlist',
    method: 'post',
    data
  })
}

export function detail(id) {
  return request({
    url: `/research/${id}`,
    method: 'post',
    data:{}
  })
}

export function newresearch(data) {
  return request({
    url: '/save/research',
    method: 'post',
    data
  })
}

export function updateresearch(data,id) {
    return request({
      url: `/update/research/${id}`,
      method: 'post',
      data
    })
}
  
export function deleteresearch(id) {
    return request({
      url: `/delete/research/${id}`,
      method: 'post',
      data:{}
    })
}
export function typeresearch(type,data){
  return request({
    url: `/research/type/${type}`,
    method: "post",
    data
  })
}