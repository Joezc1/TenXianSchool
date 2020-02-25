import request from '../utils/request'

export function list(data) {
  return request({
    url: '/albumlist',
    method: 'post',
    data
  })
}

export function detail(id) {
  return request({
    url: `/album/${id}`,
    method: 'post',
    data:{}
  })
}

export function newalbum(data) {
  return request({
    url: '/save/album',
    method: 'post',
    data
  })
}

export function updatealbum(data,id) {
    return request({
      url: `/update/album/${id}`,
      method: 'post',
      data
    })
}

export function deletealbum(id){
    return request({
        url:`/delete/album/${id}`,
        method:"post",
        data:{}
    })
}
  
export function typealbum(type,data){
  return request({
    url: `/album/type/${type}`,
    method: "post",
    data
  })
}