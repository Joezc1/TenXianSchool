import request from '../utils/request'

export function list(data) {
  return request({
    url: '/schoolhistory/list',
    method: 'post',
    data
  })
}

export function detail(id) {
  return request({
    url: `/schoolhistory/${id}`,
    method: 'post',
    data:{}
  })
}

export function newschoolhistory(data) {
  return request({
    url: '/save/schoolhistory',
    method: 'post',
    data
  })
}

export function updateschoolhistory(data,id) {
    return request({
      url: `/update/schoolhistory/${id}`,
      method: 'post',
      data
    })
}
  
export function deleteschoolhistory(id) {
    return request({
      url: `/delete/schoolhistory/${id}`,
      method: 'post',
      data:{}
    })
}
export function typeschoolhistory(type,data){
  return request({
    url: `/schoolhistory/type/${type}`,
    method: "post",
    data
  })
}