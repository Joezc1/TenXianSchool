import request from '../utils/request'

export function list(data) {
  return request({
    url: '/examinationlist',
    method: 'post',
    data
  })
}

export function detail(id) {
  return request({
    url: `/examination/${id}`,
    method: 'post',
    data:{}
  })
}

export function newexamination(data) {
  return request({
    url: '/save/examination',
    method: 'post',
    data
  })
}

export function updateexamination(data,id) {
    return request({
      url: `/update/examination/${id}`,
      method: 'post',
      data
    })
}
  
export function deleteexamination(id) {
    return request({
      url: `/delete/examination/${id}`,
      method: 'post',
      data:{}
    })
}
  