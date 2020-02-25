import request from '../utils/request'

export function list(data) {
  return request({
    url: '/newslist',
    method: 'post',
    data
  })
}

export function detail(id) {
  return request({
    url: `/news/${id}`,
    method: 'post',
    data:{}
  })
}

export function newnews(data) {
  return request({
    url: '/save/news',
    method: 'post',
    data
  })
}

export function updatenews(data,id) {
    return request({
      url: `/update/news/${id}`,
      method: 'post',
      data
    })
}
  
export function deletenews(id) {
    return request({
      url: `/delete/news/${id}`,
      method: 'post',
      data:{}
    })
}
export function typenews(type,data){
  return request({
    url: `/news/type/${type}`,
    method: "post",
    data
  })
}