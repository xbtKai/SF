// 导入express模块,创建服务,监听窗口
const express = require("express")
var server = express()
server.listen(9000)

// 导入mypro路由
const myproRouter = require("./routes/mypro.js")

// 使用中间间托管public文件夹
server.use( express.static("public") )

// 使用中间件挂在路由
server.use("/mypro",myproRouter)