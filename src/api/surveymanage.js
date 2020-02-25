import request from '../utils/request'

export function list(data) {
  return request({
    url: '/surveylist',
    method: 'post',
    data
  })
}

export function detail(id) {
  return request({
    url: `/survey/${id}`,
    method: 'post',
    data:{}
  })
}

export function newsurvey(data) {
  return request({
    url: '/save/survey',
    method: 'post',
    data:data
  })
}

export function updatesurvey(data,id) {
    return request({
      url: `/update/survey/${id}`,
      method: 'post',
      data
    })
}
  
export function deletesurvey(id) {
    return request({
      url: `/delete/survey/${id}`,
      method: 'post',
      data:{}
    })
}
  