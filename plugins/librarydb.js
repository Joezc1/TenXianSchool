
//b)db.js代码：
//定义数据库query函数，向外暴露
var mysql = require('mysql');
var data = {
    host: 'localhost',
    port: 3306,
    database: 'tenxianschool',
    user: 'root',
    password: '123456'
};

//向外暴露方法
// 分页查询全部公告信息
module.exports = {
    find: function (library, x, y, params, callback) {
        //每次使用的时候需要创建链接，数据操作完成之后要关闭连接
        let sql = ""
        console.log(library)
        sql = 'select id,title,detail,isshelves,createtime,updatetime,author,type,cover from library where id like "%' + library.id + '%" and title like "%' + library.title + '%" ' + 'limit ' + x + ',' + y;
        console.log('打印查询语句')
        console.log(sql)
        var connection = mysql.createConnection(data);
        connection.connect(function (err) {
            if (err) {
                console.log('数据库链接失败');
                throw err;
            }
            //开始数据操作
            connection.query(sql, params, function (err, results, fields) {
                if (err) {
                    console.log('数据操作失败');
                    throw err;
                }
                //将查询出来的数据返回给回调函数，这个时候就没有必要使用错误前置的思想了，因为我们在这个文件中已经对错误进行了处理，如果数据检索报错，直接就会阻塞到这个文件中
                callback && callback(results, fields);
                //results作为数据操作后的结果，fields作为数据库连接的一些字段，大家可以打印到控制台观察一下
                //停止链接数据库，必须再查询语句后，要不然一调用这个方法，就直接停止链接，数据操作就会失败
                connection.end(function (err) {
                    if (err) {
                        console.log('关闭数据库连接失败！');
                        throw err;
                    }
                });
            });
        });
    },
     //根据id查询公告信息
     findByType: function (type,title,x,y, params, callback) {
        //每次使用的时候需要创建链接，数据操作完成之后要关闭连接
        let sql = "select id,title,detail,isshelves,createtime,updatetime,author,type,cover from library where type like '%"+type+"%' and title like '%"+title+"%' order by createtime limit "+`${x},${y}`
        var connection = mysql.createConnection(data);
        connection.connect(function (err) {
            if (err) {
                console.log('数据库链接失败');
                throw err;
            }
            //开始数据操作
            connection.query(sql, params, function (err, results, fields) {
                if (err) {
                    console.log('数据操作失败');
                    throw err;
                }
                //将查询出来的数据返回给回调函数，这个时候就没有必要使用错误前置的思想了，因为我们在这个文件中已经对错误进行了处理，如果数据检索报错，直接就会阻塞到这个文件中
                callback && callback(results, fields);
                //results作为数据操作后的结果，fields作为数据库连接的一些字段，大家可以打印到控制台观察一下
                //停止链接数据库，必须再查询语句后，要不然一调用这个方法，就直接停止链接，数据操作就会失败
                connection.end(function (err) {
                    if (err) {
                        console.log('关闭数据库连接失败！');
                        throw err;
                    }
                });
            });
        });
    },
    findlibrary: function (library, x, y, params, callback) {
        //每次使用的时候需要创建链接，数据操作完成之后要关闭连接
        let sql = ""
        console.log(library)
        if (library.createtime == "") {
            console.log("进来1")
            sql = 'select id,title,detail,createtime,updatetime,author,video,type,cover from library where id like "%' + library.id + '%" and title like "%' + library.title + '%" and author like "%' + library.author + '%"' + " and type=1 " + 'limit ' + x + ',' + y;
        } else {
            console.log("进来2")
            sql = 'select id,title,detail,createtime,updatetime,author,video,type,cover from library where id like "%' + library.id + '%" and title like "%' + library.title + '%" and author like "%' + library.author + '%" and createtime>' + '"' + library.createtime + '" ' + 'limit ' + x + ',' + y;
        }
        console.log('打印查询语句')
        console.log(sql)
        var connection = mysql.createConnection(data);
        connection.connect(function (err) {
            if (err) {
                console.log('数据库链接失败');
                throw err;
            }
            //开始数据操作
            connection.query(sql, params, function (err, results, fields) {
                if (err) {
                    console.log('数据操作失败');
                    throw err;
                }
                //将查询出来的数据返回给回调函数，这个时候就没有必要使用错误前置的思想了，因为我们在这个文件中已经对错误进行了处理，如果数据检索报错，直接就会阻塞到这个文件中
                callback && callback(results, fields);
                //results作为数据操作后的结果，fields作为数据库连接的一些字段，大家可以打印到控制台观察一下
                //停止链接数据库，必须再查询语句后，要不然一调用这个方法，就直接停止链接，数据操作就会失败
                connection.end(function (err) {
                    if (err) {
                        console.log('关闭数据库连接失败！');
                        throw err;
                    }
                });
            });
        });
    },
    // 查询记录总数
    findCount: function (id, params, callback) {
        let sql = `select count(${id}) from library`
        console.log('打印查询语句')
        console.log(sql)
        var connection = mysql.createConnection(data);
        connection.connect(function (err) {
            if (err) {
                console.log('数据库链接失败');
                throw err;
            }
            //开始数据操作
            connection.query(sql, params, function (err, results, fields) {
                if (err) {
                    console.log('数据操作失败');
                    throw err;
                }
                //将查询出来的数据返回给回调函数，这个时候就没有必要使用错误前置的思想了，因为我们在这个文件中已经对错误进行了处理，如果数据检索报错，直接就会阻塞到这个文件中
                callback && callback(results, fields);
                //results作为数据操作后的结果，fields作为数据库连接的一些字段，大家可以打印到控制台观察一下
                //停止链接数据库，必须再查询语句后，要不然一调用这个方法，就直接停止链接，数据操作就会失败
                connection.end(function (err) {
                    if (err) {
                        console.log('关闭数据库连接失败！');
                        throw err;
                    }
                });
            });
        });
    },
    //根据id查询公告信息
    findById: function (id, params, callback) {
        //每次使用的时候需要创建链接，数据操作完成之后要关闭连接
        let sql = `select id,title,isshelves,detail,createtime,updatetime,author,type,cover from library where id=${id}`
        var connection = mysql.createConnection(data);
        connection.connect(function (err) {
            if (err) {
                console.log('数据库链接失败');
                throw err;
            }
            //开始数据操作
            connection.query(sql, params, function (err, results, fields) {
                if (err) {
                    console.log('数据操作失败');
                    throw err;
                }
                //将查询出来的数据返回给回调函数，这个时候就没有必要使用错误前置的思想了，因为我们在这个文件中已经对错误进行了处理，如果数据检索报错，直接就会阻塞到这个文件中
                callback && callback(results, fields);
                //results作为数据操作后的结果，fields作为数据库连接的一些字段，大家可以打印到控制台观察一下
                //停止链接数据库，必须再查询语句后，要不然一调用这个方法，就直接停止链接，数据操作就会失败
                connection.end(function (err) {
                    if (err) {
                        console.log('关闭数据库连接失败！');
                        throw err;
                    }
                });
            });
        });
    },
    //新增公告信息
    insert: function (library, params, callback) {
        //每次使用的时候需要创建链接，数据操作完成之后要关闭连接
        // let sql = `insert into library(title,detail,createtime,author) values`isshelves
        let sql = "insert into library(title,isshelves,detail,createtime,updatetime,author,type,cover) values('" + library.title + "','" + library.detail +"','" + library.isshelves+ "','" + library.createtime + "','" + library.updatetime + "','" + library.author +  "','" + library.type + "','" + library.cover + "')"
        console.log("打印操作结果")
        console.log(sql)
        var connection = mysql.createConnection(data);
        connection.connect(function (err) {
            if (err) {
                console.log('数据库链接失败');
                throw err;
            }
            //开始数据操作
            connection.query(sql, params, function (err, results, fields) {
                if (err) {
                    console.log('数据操作失败');
                    throw err;
                }
                //将查询出来的数据返回给回调函数，这个时候就没有必要使用错误前置的思想了，因为我们在这个文件中已经对错误进行了处理，如果数据检索报错，直接就会阻塞到这个文件中
                callback && callback(results, fields);
                //results作为数据操作后的结果，fields作为数据库连接的一些字段，大家可以打印到控制台观察一下
                //停止链接数据库，必须再查询语句后，要不然一调用这个方法，就直接停止链接，数据操作就会失败
                connection.end(function (err) {
                    if (err) {
                        console.log('关闭数据库连接失败！');
                        throw err;
                    }
                });
            });
        });
    },
    // 删除公告信息
    deleteById: function (id, params, callback) {
        //每次使用的时候需要创建链接，数据操作完成之后要关闭连接
        let sql = `delete from library where id=${id}`
        var connection = mysql.createConnection(data);
        connection.connect(function (err) {
            if (err) {
                console.log('数据库链接失败');
                throw err;
            }
            //开始数据操作
            connection.query(sql, params, function (err, results, fields) {
                if (err) {
                    console.log('数据操作失败');
                    throw err;
                }
                //将查询出来的数据返回给回调函数，这个时候就没有必要使用错误前置的思想了，因为我们在这个文件中已经对错误进行了处理，如果数据检索报错，直接就会阻塞到这个文件中
                callback && callback(results, fields);
                //results作为数据操作后的结果，fields作为数据库连接的一些字段，大家可以打印到控制台观察一下
                //停止链接数据库，必须再查询语句后，要不然一调用这个方法，就直接停止链接，数据操作就会失败
                connection.end(function (err) {
                    if (err) {
                        console.log('关闭数据库连接失败！');
                        throw err;
                    }
                });
            });
        });
    },
    // 修改公告信息
    updateById: function (library, id, params, callback) {
        //每次使用的时候需要创建链接，数据操作完成之后要关闭连接isshelves
        let sql = "update library set title='" + library.title + "',detail=" + "'" + library.detail +"',isshelves=" + "'" + library.isshelves + "',createtime=" + "'" + library.createtime + "',updatetime=" + "'" + library.updatetime + "',author=" + "'" + library.author  + "',type=" + "'" + library.type + "',cover=" + "'" + library.cover + "' where id =" + id
        console.log("修改公告")
        console.log(sql)
        var connection = mysql.createConnection(data);
        connection.connect(function (err) {
            if (err) {
                console.log('数据库链接失败');
                throw err;
            }
            //开始数据操作
            connection.query(sql, params, function (err, results, fields) {
                if (err) {
                    console.log('数据操作失败');
                    throw err;
                }
                //将查询出来的数据返回给回调函数，这个时候就没有必要使用错误前置的思想了，因为我们在这个文件中已经对错误进行了处理，如果数据检索报错，直接就会阻塞到这个文件中
                callback && callback(results, fields);
                //results作为数据操作后的结果，fields作为数据库连接的一些字段，大家可以打印到控制台观察一下
                //停止链接数据库，必须再查询语句后，要不然一调用这个方法，就直接停止链接，数据操作就会失败
                connection.end(function (err) {
                    if (err) {
                        console.log('关闭数据库连接失败！');
                        throw err;
                    }
                });
            });
        });
    }
};