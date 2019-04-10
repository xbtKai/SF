const express = require("express")
var router = express.Router()

const pool = require("../pool.js")

// 第一页面显示编码
router.get("/showCode",(req,res)=>{
  console.log("这是/showCode的req.query:",req.query)
  res.send(req.query.wid+req.query.code)
})

// 第一页面显示图片
router.get("/showImage",(req,res)=>{
  console.log("这是showImage的req.query.wid:",req.query.wid)
  if(req.query.wid == "M2-02"){
    res.send("./image/M2-02.png")
  }
})


// login页面 登陆并绑定手表
router.post("/login",(req,res)=>{
  console.log(req.body)
  var uname = req.body.uname
  var upwd = req.body.upwd
  var wid = req.body.wid
  var code = req.body.code

  var sql = "select * from sf_user where uname=? and upwd=?"

  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err) throw err
    if(result.length>0){
      var sql1 = "update sf_user set wid=?,code=? where uname=?"
      pool.query(sql1,[wid,code,uname],(err,result)=>{
        if(err) throw err
        console.log(result)
      })
      res.send(`登陆成功,${uname}`)
    }else{
      res.send("登陆失败")
    }
  })
})

// showUserWatch 用户完成登陆界面后,展示用户内对应的手表产品
router.get("/showUserWatch",(req,res)=>{
  var uname = req.query.uname
  var sql = "select wid,code from sf_user where uname=?"
  pool.query(sql,[uname],(err,result)=>{
    if(err) throw err
    res.send(result)
    console.log(result)
  })
})

// 用户注册界面.reg.html转来
router.post("/reg",(req,res)=>{
  var uname = req.body.uname
  var upwd = req.body.upwd
  var wid = req.body.wid
  var code = req.body.code
  console.log(uname,upwd,wid,code)
  
  var sql = "select uname from sf_user where uname=?"
  pool.query(sql,[uname],(err,result)=>{
    if(err) throw err
    if(result.length > 0){
      res.send("0") // 返回0代表用户名已存在,注册失败
    }else{
      var sql1 = "insert into sf_user set uname=?,upwd=?,wid=?,code=?"
      pool.query(sql1,[uname,upwd,wid,code],(err,result)=>{
        if(err) throw err
        if(result.affectedRows>0){
          res.send("1")
        }
      })
    }
  })
})

module.exports=router