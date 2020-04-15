export const dealtext = details => {
  var texts = '';//待拼接的内容
  while (details.indexOf('<img') != -1) {//寻找img 循环
    texts += details.substring('0', details.indexOf('<img') + 4);//截取到<img前面的内容
    details = details.substring(details.indexOf('<img') + 4);//<img 后面的内容
    if (details.indexOf('style=') != -1 && details.indexOf('style=') < details.indexOf('>')) {
      texts += details.substring(0, details.indexOf('style="') + 7) + "max-width:80%;height:auto;margin:0 auto;";//从 <img 后面的内容 截取到style= 加上自己要加的内容
      details = details.substring(details.indexOf('style="') + 7); //style后面的内容拼接
    } else {
      texts += ' style="max-width:80%;height:auto;margin:0 auto;" ';
    }
  }
  texts += details;//最后拼接的内容
  return texts
}

export function parseTime(time, cFormat) {
    if (arguments.length === 0) {
      return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
      date = time
    } else {
      if (('' + time).length === 10) time = parseInt(time) * 1000
      date = new Date(time)
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
      let value = formatObj[key]
      if (key === 'a') {.0. return ['一', '二', '三', '四', '五', '六', '日'][value - 1] }
      if (result.length > 0 && value < 10) {
        value = '0' + value
      }
      return value || 0
    })
    return time_str
  }