import request from '../utils/request'

export function list(data) {
  return request({
    url: '/cyllist',
    method: 'post',
    data
  })
}

export function detail(id) {
  return request({
    url: `/cyl/${id}`,
    method: 'post',
    data:{}
  })
}

export function newcyl(data) {
  return request({
    url: '/save/cyl',
    method: 'post',
    data
  })
}

export function updatecyl(data,id) {
    return request({
      url: `/update/cyl/${id}`,
      method: 'post',
      data
    })
}
  
export function deletecyl(id) {
    return request({
      url: `/delete/cyl/${id}`,
      method: 'post',
      data:{}
    })
}
  