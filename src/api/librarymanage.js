import request from '../utils/request'

export function list(data) {
  return request({
    url: '/librarylist',
    method: 'post',
    data
  })
}

export function detail(id) {
  return request({
    url: `/library/${id}`,
    method: 'post',
    data:{}
  })
}

export function newlibrary(data) {
  return request({
    url: '/save/library',
    method: 'post',
    data
  })
}

export function updatelibrary(data,id) {
    return request({
      url: `/update/library/${id}`,
      method: 'post',
      data
    })
}
  
export function deletelibrary(id) {
    return request({
      url: `/delete/library/${id}`,
      method: 'post',
      data:{}
    })
}
export function typelibrary(type,data){
  return request({
    url: `/library/type/${type}`,
    method: "post",
    data
  })
}