module.exports = app => {
    // 引入生成token插件
    // const jwt = require('jsonwebtoken')
    const jwtUtil = require("../../utils/jwt")

    const express = require("express")
    const router = express.Router()

    // 数据库db.js
    const albumdb = require("../../plugins/albumdb")
    const cyldb = require("../../plugins/cyldb")
    const examinationdb = require("../../plugins/examinationdb")
    const librarydb = require("../../plugins/librarydb")
    const newsdb = require("../../plugins/newsdb")
    const noticesdb = require("../../plugins/noticesdb")
    const researchdb = require("../../plugins/researchdb")
    const schoolhistorydb = require("../../plugins/schoolhistorydb")
    const studentdb = require("../../plugins/studentdb")
    const surveydb = require("../../plugins/surveydb")
    const teacherdb = require("../../plugins/teacherdb")
    const userdb = require("../../plugins/usersdb")


    // 引入express-ws实现websocket
    var expressWs = require('express-ws');
    expressWs(app)
    // 引入moment库
    const moment = require('moment')

    // 概况管理
    // 概况列表

    router.post('/surveylist', (req, res) => {
        let x = (req.body.pageNo - 1) * req.body.pageSize
        let y = req.body.pageSize
        console.log("打印概况")
        console.log(req.body)
        surveydb.find(req.body, x, y, [], (dbresult, fields) => {
            surveydb.findCount('id', [], (result, fields) => {
                let data = {}
                let list = []
                for (let index in result[0]) {
                    list.push(result[0][index])
                }
                data.pageCount = list[0]
                data.success = true
                data.code = 0
                data.msg = '查询成功'
                data.list = dbresult
                data.pageNo = req.body.pageNo
                data.pageSize = req.body.pageSize
                res.send({ 'data': data })
            })
        })
    })

    //概况详情
    router.post('/survey/:id', [], (req, res) => {
        surveydb.findById(req.params.id, [], (dbresult, fields) => {
            let data = {}
            data.success = true
            data.msg = '查询成功',
                data.code = 0
            data.data = dbresult[0]
            res.send({ 'data': data })
        })
    })

    //新建概况
    router.post('/save/survey', (req, res) => {
        let notice = req.body
        notice.createtime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        notice.updatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        console.log(notice)
        console.log("打印notice")
        surveydb.insert(notice, [], (dbresult, fields) => {
            console.log("打印插入结果")
            console.log(dbresult)
            if (dbresult.affectedRows != 0) {
                let data = {}
                data.code = 0
                data.success = true
                data.msg = "新建成功"
                res.send({ 'data': data })
            }
        })
    })
    //删除概况
    router.post('/delete/survey/:id', [], (req, res) => {
        surveydb.deleteById(req.params.id, [], (dbresult, fields) => {

            if (dbresult.affectedRows != 0) {
                let data = {}
                data.code = 0
                data.success = true
                data.msg = "删除成功"
                res.send({ 'data': data })
            }
        })
    })
    //修改概况
    router.post('/update/survey/:id', [], (req, res) => {
        req.body.updatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        surveydb.updateById(req.body, req.params.id, [], (dbresult, fields) => {
            if (dbresult.affectedRows != 0) {
                console.log(dbresult)
                let data = {}
                data.success = true
                data.code = 0
                data.msg = "修改成功"
                res.send({ 'data': data })
            }

        })
    })
    // 根据类型查询
    router.post('/album/type/:type', [], (req, res) => {
        let x = (req.body.pageNo - 1) * req.body.pageSize
        let y = req.body.pageSize
        if(req.params.type == 'null'){
            req.params.type = ''
        }
        console.log("打印根据类型")
        console.log(req.params.type)
        console.log(req.body.title)
        albumdb.findByType(req.params.type,req.body.title, x, y, [], (dbresult, field) => {
            albumdb.findCount('id', [], (result, fields) => {
                let data = {}
                let list = []
                for (let index in result[0]) {
                    list.push(result[0][index])
                }
                data.pageCount = list[0]
                data.success = true
                data.code = 0
                data.msg = '查询成功'
                data.list = dbresult
                data.pageNo = req.body.pageNo
                data.pageSize = req.body.pageSize
                res.send({ 'data': data })
            })
        })
    })
    // 根据类型查询
    router.post('/cyl/type/:type', [], (req, res) => {
        let x = (req.body.pageNo - 1) * req.body.pageSize
        let y = req.body.pageSize
        if(req.params.type == 'null'){
            req.params.type = ''
        }
        cyldb.findByType(req.params.type,req.body.title, x, y, [], (dbresult, field) => {
            cyldb.findCount('id', [], (result, fields) => {
                let data = {}
                let list = []
                for (let index in result[0]) {
                    list.push(result[0][index])
                }
                data.pageCount = list[0]
                data.success = true
                data.code = 0
                data.msg = '查询成功'
                data.list = dbresult
                data.pageNo = req.body.pageNo
                data.pageSize = req.body.pageSize
                res.send({ 'data': data })
            })
        })
    })
    // 根据类型查询
    router.post('/examination/type/:type', [], (req, res) => {
        let x = (req.body.pageNo - 1) * req.body.pageSize
        let y = req.body.pageSize
        if(req.params.type == 'null'){
            req.params.type = ''
        }
        examinationdb.findByType(req.params.type,req.body.title, x, y, [], (dbresult, field) => {
            examinationdb.findCount('id', [], (result, fields) => {
                let data = {}
                let list = []
                for (let index in result[0]) {
                    list.push(result[0][index])
                }
                data.pageCount = list[0]
                data.success = true
                data.code = 0
                data.msg = '查询成功'
                data.list = dbresult
                data.pageNo = req.body.pageNo
                data.pageSize = req.body.pageSize
                res.send({ 'data': data })
            })
        })
    })
    // 根据类型查询
    router.post('/library/type/:type', [], (req, res) => {
        let x = (req.body.pageNo - 1) * req.body.pageSize
        let y = req.body.pageSize
        if(req.params.type == 'null'){
            req.params.type = ''
        }
        librarydb.findByType(req.params.type,req.body.title, x, y, [], (dbresult, field) => {
            librarydb.findCount('id', [], (result, fields) => {
                let data = {}
                let list = []
                for (let index in result[0]) {
                    list.push(result[0][index])
                }
                data.pageCount = list[0]
                data.success = true
                data.code = 0
                data.msg = '查询成功'
                data.list = dbresult
                data.pageNo = req.body.pageNo
                data.pageSize = req.body.pageSize
                res.send({ 'data': data })
            })
        })
    })
    // 根据类型查询
    router.post('/news/type/:type', [], (req, res) => {
        let x = (req.body.pageNo - 1) * req.body.pageSize
        let y = req.body.pageSize
        if(req.params.type == 'null'){
            req.params.type = ''
        }
        newsdb.findByType(req.params.type,req.body.title, x, y, [], (dbresult, field) => {
            newsdb.findCount('id', [], (result, fields) => {
                let data = {}
                let list = []
                for (let index in result[0]) {
                    list.push(result[0][index])
                }
                data.pageCount = list[0]
                data.success = true
                data.code = 0
                data.msg = '查询成功'
                data.list = dbresult
                data.pageNo = req.body.pageNo
                data.pageSize = req.body.pageSize
                res.send({ 'data': data })
            })
        })
    })
    // 根据类型查询
    router.post('/research/type/:type', [], (req, res) => {
        let x = (req.body.pageNo - 1) * req.body.pageSize
        let y = req.body.pageSize
        if(req.params.type == 'null'){
            req.params.type = ''
        }
        researchdb.findByType(req.params.type,req.body.title, x, y, [], (dbresult, field) => {
            researchdb.findCount('id', [], (result, fields) => {
                let data = {}
                let list = []
                for (let index in result[0]) {
                    list.push(result[0][index])
                }
                data.pageCount = list[0]
                data.success = true
                data.code = 0
                data.msg = '查询成功'
                data.list = dbresult
                data.pageNo = req.body.pageNo
                data.pageSize = req.body.pageSize
                res.send({ 'data': data })
            })
        })
    })
    // 根据类型查询
    router.post('/schoolhistory/type/:type', [], (req, res) => {
        let x = (req.body.pageNo - 1) * req.body.pageSize
        let y = req.body.pageSize
        if(req.params.type == 'null'){
            req.params.type = ''
        }
        schoolhistorydb.findByType(req.params.type,req.body.title, x, y, [], (dbresult, field) => {
            schoolhistorydb.findCount('id', [], (result, fields) => {
                let data = {}
                let list = []
                for (let index in result[0]) {
                    list.push(result[0][index])
                }
                data.pageCount = list[0]
                data.success = true
                data.code = 0
                data.msg = '查询成功'
                data.list = dbresult
                data.pageNo = req.body.pageNo
                data.pageSize = req.body.pageSize
                res.send({ 'data': data })
            })
        })
    })
    // 根据类型查询
    router.post('/student/type/:type', [], (req, res) => {
        let x = (req.body.pageNo - 1) * req.body.pageSize
        let y = req.body.pageSize
        if(req.params.type == 'null'){
            req.params.type = ''
        }
        studentdb.findByType(req.params.type,req.body.title, x, y, [], (dbresult, field) => {
            studentdb.findCount('id', [], (result, fields) => {
                let data = {}
                let list = []
                for (let index in result[0]) {
                    list.push(result[0][index])
                }
                data.pageCount = list[0]
                data.success = true
                data.code = 0
                data.msg = '查询成功'
                data.list = dbresult
                data.pageNo = req.body.pageNo
                data.pageSize = req.body.pageSize
                res.send({ 'data': data })
            })
        })
    })
    // 根据类型查询
    router.post('/survey/type/:type', [], (req, res) => {
        let x = (req.body.pageNo - 1) * req.body.pageSize
        let y = req.body.pageSize
        if(req.params.type == 'null'){
            req.params.type = ''
        }
        surveydb.findByType(req.params.type,req.body.title, x, y, [], (dbresult, field) => {
            surveydb.findCount('id', [], (result, fields) => {
                let data = {}
                let list = []
                for (let index in result[0]) {
                    list.push(result[0][index])
                }
                data.pageCount = list[0]
                data.success = true
                data.code = 0
                data.msg = '查询成功'
                data.list = dbresult
                data.pageNo = req.body.pageNo
                data.pageSize = req.body.pageSize
                res.send({ 'data': data })
            })
        })
    })
    // 根据类型查询
    router.post('/teacher/type/:type', [], (req, res) => {
        let x = (req.body.pageNo - 1) * req.body.pageSize
        let y = req.body.pageSize
        if(req.params.type == 'null'){
            req.params.type = ''
        }
        teacherdb.findByType(req.params.type,req.body.title, x, y, [], (dbresult, field) => {
            teacherdb.findCount('id', [], (result, fields) => {
                let data = {}
                let list = []
                for (let index in result[0]) {
                    list.push(result[0][index])
                }
                data.pageCount = list[0]
                data.success = true
                data.code = 0
                data.msg = '查询成功'
                data.list = dbresult
                data.pageNo = req.body.pageNo
                data.pageSize = req.body.pageSize
                res.send({ 'data': data })
            })
        })
    })



    // 相册管理
    // 相册列表

    router.post('/albumlist', (req, res) => {
        let x = (req.body.pageNo - 1) * req.body.pageSize
        let y = req.body.pageSize
        albumdb.find(req.body, x, y, [], (dbresult, fields) => {
            albumdb.findCount('id', [], (result, fields) => {
                let data = {}
                let list = []
                for (let index in result[0]) {
                    list.push(result[0][index])
                }
                data.pageCount = list[0]
                data.success = true
                data.code = 0
                data.msg = '查询成功'
                data.list = dbresult
                data.pageNo = req.body.pageNo
                data.pageSize = req.body.pageSize
                res.send({ 'data': data })
            })
        })
    })

    //相册详情
    router.post('/album/:id', [], (req, res) => {
        albumdb.findById(req.params.id, [], (dbresult, fields) => {
            let data = {}
            data.success = true
            data.msg = '查询成功',
                data.code = 0
            data.data = dbresult[0]
            res.send({ 'data': data })
        })
    })

    //新建相册
    router.post('/save/album', (req, res) => {
        let notice = req.body
        notice.createtime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        notice.updatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        console.log(notice)
        console.log("打印notice")
        albumdb.insert(notice, [], (dbresult, fields) => {
            console.log("打印插入结果")
            console.log(dbresult)
            if (dbresult.affectedRows != 0) {
                let data = {}
                data.code = 0
                data.success = true
                data.msg = "新建成功"
                res.send({ 'data': data })
            }
        })
    })
    //删除相册
    router.post('/delete/album/:id', [], (req, res) => {
        albumdb.deleteById(req.params.id, [], (dbresult, fields) => {

            if (dbresult.affectedRows != 0) {
                let data = {}
                data.code = 0
                data.success = true
                data.msg = "删除成功"
                res.send({ 'data': data })
            }
        })
    })
    //修改相册
    router.post('/update/album/:id', [], (req, res) => {
        req.body.updatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        albumdb.updateById(req.body, req.params.id, [], (dbresult, fields) => {
            if (dbresult.affectedRows != 0) {
                console.log(dbresult)
                let data = {}
                data.success = true
                data.code = 0
                data.msg = "修改成功"
                res.send({ 'data': data })
            }

        })
    })
    // 团委管理
    // 团委列表

    router.post('/cyllist', (req, res) => {
        let x = (req.body.pageNo - 1) * req.body.pageSize
        let y = req.body.pageSize
        cyldb.find(req.body, x, y, [], (dbresult, fields) => {
            cyldb.findCount('id', [], (result, fields) => {
                let data = {}
                let list = []
                for (let index in result[0]) {
                    list.push(result[0][index])
                }
                data.pageCount = list[0]
                data.success = true
                data.code = 0
                data.msg = '查询成功'
                data.list = dbresult
                data.pageNo = req.body.pageNo
                data.pageSize = req.body.pageSize
                res.send({ 'data': data })
            })
        })
    })

    //团委详情
    router.post('/cyl/:id', [], (req, res) => {
        cyldb.findById(req.params.id, [], (dbresult, fields) => {
            let data = {}
            data.success = true
            data.msg = '查询成功',
                data.code = 0
            data.data = dbresult[0]
            res.send({ 'data': data })
        })
    })

    //新建团委
    router.post('/save/cyl', (req, res) => {
        let notice = req.body
        notice.createtime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        notice.updatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        console.log(notice)
        console.log("打印notice")
        cyldb.insert(notice, [], (dbresult, fields) => {
            console.log("打印插入结果")
            console.log(dbresult)
            if (dbresult.affectedRows != 0) {
                let data = {}
                data.code = 0
                data.success = true
                data.msg = "新建成功"
                res.send({ 'data': data })
            }
        })
    })
    //删除团委
    router.post('/delete/cyl/:id', [], (req, res) => {
        cyldb.deleteById(req.params.id, [], (dbresult, fields) => {

            if (dbresult.affectedRows != 0) {
                let data = {}
                data.code = 0
                data.success = true
                data.msg = "删除成功"
                res.send({ 'data': data })
            }
        })
    })
    //修改团委
    router.post('/update/cyl/:id', [], (req, res) => {
        req.body.updatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        cyldb.updateById(req.body, req.params.id, [], (dbresult, fields) => {
            if (dbresult.affectedRows != 0) {
                console.log(dbresult)
                let data = {}
                data.code = 0
                data.success = true
                data.msg = "修改成功"
                res.send({ 'data': data })
            }

        })
    })
    // 高考管理
    // 高考列表

    router.post('/examinationlist', (req, res) => {
        let x = (req.body.pageNo - 1) * req.body.pageSize
        let y = req.body.pageSize
        examinationdb.find(req.body, x, y, [], (dbresult, fields) => {
            examinationdb.findCount('id', [], (result, fields) => {
                let data = {}
                let list = []
                for (let index in result[0]) {
                    list.push(result[0][index])
                }
                data.pageCount = list[0]
                data.success = true
                data.msg = '查询成功'
                data.list = dbresult
                data.pageNo = req.body.pageNo
                data.pageSize = req.body.pageSize
                res.send({ 'data': data })
            })
        })
    })

    //高考详情
    router.post('/examination/:id', [], (req, res) => {
        examinationdb.findById(req.params.id, [], (dbresult, fields) => {
            let data = {}
            data.success = true
            data.msg = '查询成功',
                data.data = dbresult[0]
            res.send({ 'data': data })
        })
    })

    //新建高考
    router.post('/save/examination', (req, res) => {
        let notice = req.body
        notice.createtime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        notice.updatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        console.log(notice)
        console.log("打印notice")
        examinationdb.insert(notice, [], (dbresult, fields) => {
            console.log("打印插入结果")
            console.log(dbresult)
            if (dbresult.affectedRows != 0) {
                let data = {}
                data.success = true
                data.msg = "新建成功"
                res.send({ 'data': data })
            }
        })
    })
    //删除高考
    router.post('/delete/examination/:id', [], (req, res) => {
        examinationdb.deleteById(req.params.id, [], (dbresult, fields) => {

            if (dbresult.affectedRows != 0) {
                let data = {}
                data.success = true
                data.msg = "删除成功"
                res.send({ 'data': data })
            }
        })
    })
    //修改高考
    router.post('/update/examination/:id', [], (req, res) => {
        req.body.updatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        examinationdb.updateById(req.body, req.params.id, [], (dbresult, fields) => {
            if (dbresult.affectedRows != 0) {
                console.log(dbresult)
                let data = {}
                data.success = true
                data.msg = "修改成功"
                res.send({ 'data': data })
            }

        })
    })
    // 图书馆管理
    // 图书馆列表

    router.post('/librarylist', (req, res) => {
        let x = (req.body.pageNo - 1) * req.body.pageSize
        let y = req.body.pageSize
        librarydb.find(req.body, x, y, [], (dbresult, fields) => {
            librarydb.findCount('id', [], (result, fields) => {
                let data = {}
                let list = []
                for (let index in result[0]) {
                    list.push(result[0][index])
                }
                data.pageCount = list[0]
                data.success = true
                data.msg = '查询成功'
                data.list = dbresult
                data.pageNo = req.body.pageNo
                data.pageSize = req.body.pageSize
                res.send({ 'data': data })
            })
        })
    })

    //图书馆详情
    router.post('/library/:id', [], (req, res) => {
        librarydb.findById(req.params.id, [], (dbresult, fields) => {
            let data = {}
            data.success = true
            data.msg = '查询成功',
                data.data = dbresult[0]
            res.send({ 'data': data })
        })
    })

    //新建图书馆
    router.post('/save/library', (req, res) => {
        let notice = req.body
        notice.createtime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        notice.updatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        console.log(notice)
        console.log("打印notice")
        librarydb.insert(notice, [], (dbresult, fields) => {
            console.log("打印插入结果")
            console.log(dbresult)
            if (dbresult.affectedRows != 0) {
                let data = {}
                data.success = true
                data.msg = "新建成功"
                res.send({ 'data': data })
            }
        })
    })
    //删除图书馆信息
    router.post('/delete/library/:id', [], (req, res) => {
        librarydb.deleteById(req.params.id, [], (dbresult, fields) => {
            if (dbresult.affectedRows != 0) {
                let data = {}
                data.success = true
                data.msg = "删除成功"
                res.send({ 'data': data })
            }
        })
    })
    //修改图书馆信息
    router.post('/update/library/:id', [], (req, res) => {
        req.body.updatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        librarydb.updateById(req.body, req.params.id, [], (dbresult, fields) => {
            if (dbresult.affectedRows != 0) {
                console.log(dbresult)
                let data = {}
                data.success = true
                data.msg = "修改成功"
                res.send({ 'data': data })
            }

        })
    })
    // 新闻管理
    // 新闻列表

    router.post('/newslist', (req, res) => {
        let x = (req.body.pageNo - 1) * req.body.pageSize
        let y = req.body.pageSize
        newsdb.find(req.body, x, y, [], (dbresult, fields) => {
            newsdb.findCount('id', [], (result, fields) => {
                let data = {}
                let list = []
                for (let index in result[0]) {
                    list.push(result[0][index])
                }
                data.pageCount = list[0]
                data.success = true
                data.msg = '查询成功'
                data.list = dbresult
                data.pageNo = req.body.pageNo
                data.pageSize = req.body.pageSize
                res.send({ 'data': data })
            })
        })
    })

    //新闻详情
    router.post('/news/:id', [], (req, res) => {
        newsdb.findById(req.params.id, [], (dbresult, fields) => {
            let data = {}
            data.success = true
            data.msg = '查询成功',
                data.data = dbresult[0]
            res.send({ 'data': data })
        })
    })

    //新建新闻
    router.post('/save/news', (req, res) => {
        let notice = req.body
        notice.createtime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        notice.updatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        console.log(notice)
        console.log("打印notice")
        newsdb.insert(notice, [], (dbresult, fields) => {
            console.log("打印插入结果")
            console.log(dbresult)
            if (dbresult.affectedRows != 0) {
                let data = {}
                data.success = true
                data.msg = "新建成功"
                res.send({ 'data': data })
            }
        })
    })
    //删除新闻
    router.post('/delete/news/:id', [], (req, res) => {
        newsdb.deleteById(req.params.id, [], (dbresult, fields) => {
            if (dbresult.affectedRows != 0) {
                let data = {}
                data.success = true
                data.msg = "删除成功"
                res.send({ 'data': data })
            }
        })
    })
    //修改新闻
    router.post('/update/news/:id', [], (req, res) => {
        req.body.updatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        newsdb.updateById(req.body, req.params.id, [], (dbresult, fields) => {
            if (dbresult.affectedRows != 0) {
                console.log(dbresult)
                let data = {}
                data.success = true
                data.msg = "修改成功"
                res.send({ 'data': data })
            }

        })
    })
    // 教研管理
    // 教研列表

    router.post('/researchlist', (req, res) => {
        let x = (req.body.pageNo - 1) * req.body.pageSize
        let y = req.body.pageSize
        researchdb.find(req.body, x, y, [], (dbresult, fields) => {
            researchdb.findCount('id', [], (result, fields) => {
                let data = {}
                let list = []
                for (let index in result[0]) {
                    list.push(result[0][index])
                }
                data.pageCount = list[0]
                data.success = true
                data.msg = '查询成功'
                data.list = dbresult
                data.pageNo = req.body.pageNo
                data.pageSize = req.body.pageSize
                res.send({ 'data': data })
            })
        })
    })

    //相册教研
    router.post('/research/:id', [], (req, res) => {
        researchdb.findById(req.params.id, [], (dbresult, fields) => {
            let data = {}
            data.success = true
            data.msg = '查询成功',
                data.data = dbresult[0]
            res.send({ 'data': data })
        })
    })

    //新建教研
    router.post('/save/research', (req, res) => {
        let notice = req.body
        notice.createtime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        notice.updatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        console.log(notice)
        console.log("打印notice")
        researchdb.insert(notice, [], (dbresult, fields) => {
            console.log("打印插入结果")
            console.log(dbresult)
            if (dbresult.affectedRows != 0) {
                let data = {}
                data.success = true
                data.msg = "新建成功"
                res.send({ 'data': data })
            }
        })
    })
    //删除教研
    router.post('/delete/research/:id', [], (req, res) => {
        researchdb.deleteById(req.params.id, [], (dbresult, fields) => {
            if (dbresult.affectedRows != 0) {
                let data = {}
                data.success = true
                data.msg = "删除成功"
                res.send({ 'data': data })
            }
        })
    })
    //修改教研
    router.post('/update/research/:id', [], (req, res) => {
        req.body.updatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        researchdb.updateById(req.body, req.params.id, [], (dbresult, fields) => {
            if (dbresult.affectedRows != 0) {
                console.log(dbresult)
                let data = {}
                data.success = true
                data.msg = "修改成功"
                res.send({ 'data': data })
            }

        })
    })
    // 校史管理
    // 校史列表

    router.post('/schoolhistory/list', (req, res) => {
        let x = (req.body.pageNo - 1) * req.body.pageSize
        let y = req.body.pageSize
        schoolhistorydb.find(req.body, x, y, [], (dbresult, fields) => {
            schoolhistorydb.findCount('id', [], (result, fields) => {
                let data = {}
                let list = []
                for (let index in result[0]) {
                    list.push(result[0][index])
                }
                data.pageCount = list[0]
                data.success = true
                data.msg = '查询成功'
                data.list = dbresult
                data.pageNo = req.body.pageNo
                data.pageSize = req.body.pageSize
                res.send({ 'data': data })
            })
        })
    })

    //校史详情
    router.post('/schoolhistory/:id', [], (req, res) => {
        schoolhistorydb.findById(req.params.id, [], (dbresult, fields) => {
            let data = {}
            data.success = true
            data.msg = '查询成功',
                data.data = dbresult[0]
            res.send({ 'data': data })
        })
    })

    //新建校史
    router.post('/save/schoolhistory', (req, res) => {
        let notice = req.body
        notice.createtime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        notice.updatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        console.log(notice)
        console.log("打印notice")
        schoolhistorydb.insert(notice, [], (dbresult, fields) => {
            console.log("打印插入结果")
            console.log(dbresult)
            if (dbresult.affectedRows != 0) {
                let data = {}
                data.success = true
                data.msg = "新建成功"
                res.send({ 'data': data })
            }
        })
    })
    //删除校史
    router.post('/delete/schoolhistory/:id', [], (req, res) => {
        schoolhistorydb.deleteById(req.params.id, [], (dbresult, fields) => {
            if (dbresult.affectedRows != 0) {
                let data = {}
                data.success = true
                data.msg = "删除成功"
                res.send({ 'data': data })
            }
        })
    })
    //修改校史
    router.post('/update/schoolhistory/:id', [], (req, res) => {
        req.body.updatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        schoolhistorydb.updateById(req.body, req.params.id, [], (dbresult, fields) => {
            if (dbresult.affectedRows != 0) {
                console.log(dbresult)
                let data = {}
                data.success = true
                data.msg = "修改成功"
                res.send({ 'data': data })
            }

        })
    })
    // 学子管理
    // 学子列表

    router.post('/student/list', (req, res) => {
        let x = (req.body.pageNo - 1) * req.body.pageSize
        let y = req.body.pageSize
        studentdb.find(req.body, x, y, [], (dbresult, fields) => {
            studentdb.findCount('id', [], (result, fields) => {
                let data = {}
                let list = []
                for (let index in result[0]) {
                    list.push(result[0][index])
                }
                data.pageCount = list[0]
                data.success = true
                data.msg = '查询成功'
                data.list = dbresult
                data.pageNo = req.body.pageNo
                data.pageSize = req.body.pageSize
                res.send({ 'data': data })
            })
        })
    })

    //学子详情
    router.post('/student/:id', [], (req, res) => {
        studentdb.findById(req.params.id, [], (dbresult, fields) => {
            let data = {}
            data.success = true
            data.msg = '查询成功',
                data.data = dbresult[0]
            res.send({ 'data': data })
        })
    })

    //新建学子
    router.post('/save/student', (req, res) => {
        let notice = req.body
        notice.createtime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        notice.updatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        console.log(notice)
        console.log("打印notice")
        studentdb.insert(notice, [], (dbresult, fields) => {
            console.log("打印插入结果")
            console.log(dbresult)
            if (dbresult.affectedRows != 0) {
                let data = {}
                data.success = true
                data.msg = "新建成功"
                res.send({ 'data': data })
            }
        })
    })
    //删除学子
    router.post('/delete/student/:id', [], (req, res) => {
        studentdb.deleteById(req.params.id, [], (dbresult, fields) => {

            if (dbresult.affectedRows != 0) {
                let data = {}
                data.success = true
                data.msg = "删除成功"
                res.send({ 'data': data })
            }
        })
    })
    //修改学子
    router.post('/update/student/:id', [], (req, res) => {
        req.body.updatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        studentdb.updateById(req.body, req.params.id, [], (dbresult, fields) => {
            if (dbresult.affectedRows != 0) {
                console.log(dbresult)
                let data = {}
                data.success = true
                data.msg = "修改成功"
                res.send({ 'data': data })
            }

        })
    })
    // 师资管理
    // 师资列表

    router.post('/teacher/list', (req, res) => {
        let x = (req.body.pageNo - 1) * req.body.pageSize
        let y = req.body.pageSize
        teacherdb.find(req.body, x, y, [], (dbresult, fields) => {
            teacherdb.findCount('id', [], (result, fields) => {
                let data = {}
                let list = []
                for (let index in result[0]) {
                    list.push(result[0][index])
                }
                data.pageCount = list[0]
                data.success = true
                data.msg = '查询成功'
                data.list = dbresult
                data.pageNo = req.body.pageNo
                data.pageSize = req.body.pageSize
                res.send({ 'data': data })
            })
        })
    })

    //师资详情
    router.post('/teacher/:id', [], (req, res) => {
        teacherdb.findById(req.params.id, [], (dbresult, fields) => {
            let data = {}
            data.success = true
            data.msg = '查询成功',
                data.data = dbresult[0]
            res.send({ 'data': data })
        })
    })

    //新建师资
    router.post('/save/teacher', (req, res) => {
        let notice = req.body
        notice.createtime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        notice.updatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        console.log(notice)
        console.log("打印notice")
        teacherdb.insert(notice, [], (dbresult, fields) => {
            console.log("打印插入结果")
            console.log(dbresult)
            if (dbresult.affectedRows != 0) {
                let data = {}
                data.success = true
                data.msg = "新建成功"
                res.send({ 'data': data })
            }
        })
    })
    //删除师资
    router.post('/delete/teacher/:id', [], (req, res) => {
        teacherdb.deleteById(req.params.id, [], (dbresult, fields) => {
            if (dbresult.affectedRows != 0) {
                let data = {}
                data.success = true
                data.msg = "删除成功"
                res.send({ 'data': data })
            }
        })
    })
    //修改师资
    router.post('/update/teacher/:id', [], (req, res) => {
        req.body.updatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        teacherdb.updateById(req.body, req.params.id, [], (dbresult, fields) => {
            if (dbresult.affectedRows != 0) {
                console.log(dbresult)
                let data = {}
                data.success = true
                data.msg = "修改成功"
                res.send({ 'data': data })
            }

        })
    })
    // 用户管路
    // 用户列表

    router.post('/user/list', (req, res) => {
        let x = (req.body.pageNo - 1) * req.body.pageSize
        let y = req.body.pageSize
        userdb.find(req.body, x, y, [], (dbresult, fields) => {
            userdb.findCount('id', [], (result, fields) => {
                let data = {}
                let list = []
                for (let index in result[0]) {
                    list.push(result[0][index])
                }
                data.pageCount = list[0]
                data.success = true
                data.msg = '查询成功'
                data.list = dbresult
                data.pageNo = req.body.pageNo
                data.pageSize = req.body.pageSize
                res.send({ 'data': data })
            })
        })
    })

    //用户详情
    router.post('/user/:id', [], (req, res) => {
        userdb.findById(req.params.id, [], (dbresult, fields) => {
            let data = {}
            data.success = true
            data.msg = '查询成功',
                data.data = dbresult[0]
            res.send({ 'data': data })
        })
    })

    //新建用户
    router.post('/save/user', (req, res) => {
        let notice = req.body
        notice.createtime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        notice.updatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        console.log(notice)
        console.log("打印notice")
        userdb.insert(notice, [], (dbresult, fields) => {
            console.log("打印插入结果")
            console.log(dbresult)
            if (dbresult.affectedRows != 0) {
                let data = {}
                data.success = true
                data.msg = "新建成功"
                res.send({ 'data': data })
            }
        })
    })
    //删除用户
    router.post('/delete/user/:id', [], (req, res) => {
        userdb.deleteById(req.params.id, [], (dbresult, fields) => {
            if (dbresult.affectedRows != 0) {
                let data = {}
                data.success = true
                data.msg = "删除成功"
                res.send({ 'data': data })
            }
        })
    })
    //修改用户
    router.post('/update/user/:id', [], (req, res) => {
        req.body.updatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        userdb.updateById(req.body, req.params.id, [], (dbresult, fields) => {
            if (dbresult.affectedRows != 0) {
                console.log(dbresult)
                let data = {}
                data.success = true
                data.msg = "修改成功"
                res.send({ 'data': data })
            }

        })
    })

    //内容管理
    //公告管理，公告列表
    router.post('/noticelist', (req, res) => {
        let x = (req.body.pageNo - 1) * req.body.pageSize
        let y = req.body.pageSize
        noticesdb.find(req.body, x, y, [], (dbresult, fields) => {
            noticesdb.findCount('id', [], (result, fields) => {
                let data = {}
                let list = []
                for (let index in result[0]) {
                    list.push(result[0][index])
                }
                data.pageCount = list[0]
                data.success = true
                data.msg = '查询成功'
                data.list = dbresult
                data.pageNo = req.body.pageNo
                data.pageSize = req.body.pageSize
                res.send({ 'data': data })
            })
        })
    })

    //公告详情
    router.post('/notice/:id', [], (req, res) => {
        noticesdb.findById(req.params.id, [], (dbresult, fields) => {
            let data = {}
            data.success = true
            data.msg = '查询成功',
                data.data = dbresult[0]
            res.send({ 'data': data })
        })
    })

    //新建公告
    router.post('/save/notice', (req, res) => {
        let notice = req.body
        notice.createtime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        notice.updatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        console.log(notice)
        console.log("打印notice")
        noticesdb.insert(notice, [], (dbresult, fields) => {
            console.log("打印插入结果")
            console.log(dbresult)
            if (dbresult.affectedRows != 0) {
                let data = {}
                data.success = true
                data.msg = "新建成功"
                res.send({ 'data': data })
            }
        })
    })
    //删除公告
    router.post('/delete/notice/:id', [], (req, res) => {
        noticesdb.deleteById(req.params.id, [], (dbresult, fields) => {

            if (dbresult.affectedRows != 0) {
                let data = {}
                data.success = true
                data.msg = "删除成功"
                res.send({ 'data': data })
            }
        })
    })
    //修改公告
    router.post('/update/notice/:id', [], (req, res) => {
        req.body.updatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        noticesdb.updateById(req.body, req.params.id, [], (dbresult, fields) => {
            if (dbresult.affectedRows != 0) {
                console.log(dbresult)
                let data = {}
                data.success = true
                data.msg = "修改成功"
                res.send({ 'data': data })
            }

        })
    })

    //数据分析

    // 验证token的请求

    //router.post('/categories/token',(req,res,next)=>{
    //const token = String(req.headers.authorization || '').split(' ').pop()
    // const { id } = jwt.verify(token,app.get('secret'))
    //  next()
    //},(req,res)=>{
    //console.log("打印")
    //console.log(req.body)
    //})

    app.use('/admin/api', (req, res, next) => {
        if (req.url.indexOf(upload) == 1 || req.url != '/user/login' || req.url != '/user/register') { }
        next()
    }, router)




    // 文件上传模块
    const multer = require("multer")
    const upload = multer({ dest: __dirname + '/../../uploads' })
    app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
        console.log("监听图片上传")
        const file = req.file
        file.url = `http://localhost:8080/uploads/${file.filename}`
        // file.url = `http://39.106.159.120:8080/uploads/${file.filename}`
        res.send({ 'data': file })
    })

    // 用户登录token模块
    // app.post('/admin/api/login',jsonParser,(req,res)=>{
    //   const jwt = require('jsonwebtoken')
    //   const token = jwt.sign({ id: userid},app.get('secret'))
    //   res.send({token})
    // })



}
