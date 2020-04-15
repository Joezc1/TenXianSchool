// [
//     {
//         value:'1223838@qq.com',
//         type:'email',
//     }
// ]
export function validata(list) {
    let obj = {
        success : true
    }
    let data = ''
    list.forEach(element => {
        console.log(element.type)
        if(element.type == 'username'){
            data = /^[a-zA-Z0-9]\w{4,10}$/
            if (!data.test(element.value)) {
                obj.success = false
                obj.msg = "请输入正确的用户名,长度在5~11之间，只能包含字母、数字和下划线"
            }
        }else if(element.type == "password"){
            data = /^[a-zA-Z0-9]\w{5,17}$/
            if (!data.test(element.value)) {
                obj.success = false
                obj.msg = "请输入正确的密码格式,长度在6~18之间，只能包含字母、数字和下划线"
            }
        }else if(element.type == "tel"){
            data = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
            if (!data.test(element.value)) {
                obj.success = false
                obj.msg = "请输入正确的手机号码格式"
            }
        }else if(element.type == "email"){
            data = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
            if (!data.test(element.value)) {
                obj.success = false
                obj.msg = "请输入正确的邮箱格式"
            }
        }
    });
    // obj.success = true
    return obj
} 