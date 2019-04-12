const express = require("express")
var router = express.Router()

const pool = require("../pool.js")

// 第一页面显示手表型号以及编码 wid,code
router.get("/showCode",(req,res)=>{
  console.log("这是/showCode的req.query:",req.query)
  var widcode = req.query.widcode
  if(widcode!=undefined 
    && widcode.indexOf('CHENYUEHAN')!=-1
    && (widcode.length-10)%3==0){

    // 获取wid的最后一个下标,以便截取
    // var widLastIndex = widcode.indexOf('CHENYUEHAN')
    // 获取code的第一个下标,以便截取
    var codeFirstIndex = widcode.indexOf('CHENYUEHAN')+10

    // var wid = widcode.slice(0,widLastIndex)
    var code = widcode.slice(codeFirstIndex)
    // console.log(wid,code)
    // 手表code解码
    function deCodeCode(code){
      var code2=""
      for(var i=0;i<code.length;i+=3){
        if(code.substr(i,3)=="SDF"){
          code2 += code.substr(i,3).replace("SDF","A")
        }
        if(code.substr(i,3)=="NMZ"){
          code2 += code.substr(i,3).replace("NMZ","B")
        }
        if(code.substr(i,3)=="VBN"){
          code2 += code.substr(i,3).replace("VBN","C")
        }
        if(code.substr(i,3)=="FGH"){
          code2 += code.substr(i,3).replace("FGH","D")
        }
        if(code.substr(i,3)=="RTY"){
          code2 += code.substr(i,3).replace("RTY","E")
        }
        if(code.substr(i,3)=="GHJ"){
          code2 += code.substr(i,3).replace("GHJ","F")
        }
        if(code.substr(i,3)=="HJK"){
          code2 += code.substr(i,3).replace("HJK","G")
        }
        if(code.substr(i,3)=="JKL"){
          code2 += code.substr(i,3).replace("JKL","H")
        }
        if(code.substr(i,3)=="OPQ"){
          code2 += code.substr(i,3).replace("OPQ","I")
        }
        if(code.substr(i,3)=="KLA"){
          code2 += code.substr(i,3).replace("KLA","J")
        }
        if(code.substr(i,3)=="LAS"){
          code2 += code.substr(i,3).replace("LAS","K")
        }
        if(code.substr(i,3)=="ASD"){
          code2 += code.substr(i,3).replace("ASD","L")
        }
        if(code.substr(i,3)=="ZXC"){
          code2 += code.substr(i,3).replace("ZXC","M")
        }
        if(code.substr(i,3)=="MZX"){
          code2 += code.substr(i,3).replace("MZX","N")
        }
        if(code.substr(i,3)=="PQW"){
          code2 += code.substr(i,3).replace("PQW","O")
        }
        if(code.substr(i,3)=="QWE"){
          code2 += code.substr(i,3).replace("QWE","P")
        }
        if(code.substr(i,3)=="WER"){
          code2 += code.substr(i,3).replace("WER","Q")
        }
        if(code.substr(i,3)=="TYU"){
          code2 += code.substr(i,3).replace("TYU","R")
        }
        if(code.substr(i,3)=="DFG"){
          code2 += code.substr(i,3).replace("DFG","S")
        }
        if(code.substr(i,3)=="YUI"){
          code2 += code.substr(i,3).replace("YUI","T")
        }
        if(code.substr(i,3)=="IOP"){
          code2 += code.substr(i,3).replace("IOP","U")
        }
        if(code.substr(i,3)=="BNM"){
          code2 += code.substr(i,3).replace("BNM","V")
        }
        if(code.substr(i,3)=="ERT"){
          code2 += code.substr(i,3).replace("ERT","W")
        }
        if(code.substr(i,3)=="CVB"){
          code2 += code.substr(i,3).replace("CVB","X")
        }
        if(code.substr(i,3)=="UIO"){
          code2 += code.substr(i,3).replace("UIO","Y")
        }
        if(code.substr(i,3)=="XCV"){
          code2 += code.substr(i,3).replace("XCV","Z")
        }
        if(code.substr(i,3)=="123"){
          code2 += code.substr(i,3).replace("123","0")
        }
        if(code.substr(i,3)=="234"){
          code2 += code.substr(i,3).replace("234","1")
        }
        if(code.substr(i,3)=="345"){
          code2 += code.substr(i,3).replace("345","2")
        }
        if(code.substr(i,3)=="456"){
          code2 += code.substr(i,3).replace("456","3")
        }
        if(code.substr(i,3)=="567"){
          code2 += code.substr(i,3).replace("567","4")
        }
        if(code.substr(i,3)=="678"){
          code2 += code.substr(i,3).replace("678","5")
        }
        if(code.substr(i,3)=="789"){
          code2 += code.substr(i,3).replace("789","6")
        }
        if(code.substr(i,3)=="890"){
          code2 += code.substr(i,3).replace("890","7")
        }
        if(code.substr(i,3)=="901"){
          code2 += code.substr(i,3).replace("901","8")
        }
        if(code.substr(i,3)=="012"){
          code2 += code.substr(i,3).replace("012","9")
        }
        if(code.substr(i,3)=="XHX"){
          code2 += code.substr(i,3).replace("XHX","_")
        }
      }
      console.log("解码后手表的型号为:"+code2)
      return code2
    }
    res.send(deCodeCode(code))
  }else{
    res.send("0")
  }
})

// 第一页面显示图片
router.get("/showImage",(req,res)=>{
  console.log("这是/showImage的req.query:",req.query)
  var widcode = req.query.widcode
  if(widcode!=undefined 
    && widcode.indexOf('CHENYUEHAN')!=-1
    && (widcode.length-10)%3==0){

    // 获取wid的最后一个下标,以便截取
    var widLastIndex = widcode.indexOf('CHENYUEHAN')

    var wid = widcode.slice(0,widLastIndex)
    console.log(wid)

    // 手表型号解码
    function deCodeWid(wid){
      var wid2=""
      for(var i=0;i<wid.length;i+=3){
        if(wid.substr(i,3)=="SDF"){
          wid2 += wid.substr(i,3).replace("SDF","A")
        }
        if(wid.substr(i,3)=="NMZ"){
          wid2 += wid.substr(i,3).replace("NMZ","B")
        }
        if(wid.substr(i,3)=="VBN"){
          wid2 += wid.substr(i,3).replace("VBN","C")
        }
        if(wid.substr(i,3)=="FGH"){
          wid2 += wid.substr(i,3).replace("FGH","D")
        }
        if(wid.substr(i,3)=="RTY"){
          wid2 += wid.substr(i,3).replace("RTY","E")
        }
        if(wid.substr(i,3)=="GHJ"){
          wid2 += wid.substr(i,3).replace("GHJ","F")
        }
        if(wid.substr(i,3)=="HJK"){
          wid2 += wid.substr(i,3).replace("HJK","G")
        }
        if(wid.substr(i,3)=="JKL"){
          wid2 += wid.substr(i,3).replace("JKL","H")
        }
        if(wid.substr(i,3)=="OPQ"){
          wid2 += wid.substr(i,3).replace("OPQ","I")
        }
        if(wid.substr(i,3)=="KLA"){
          wid2 += wid.substr(i,3).replace("KLA","J")
        }
        if(wid.substr(i,3)=="LAS"){
          wid2 += wid.substr(i,3).replace("LAS","K")
        }
        if(wid.substr(i,3)=="ASD"){
          wid2 += wid.substr(i,3).replace("ASD","L")
        }
        if(wid.substr(i,3)=="ZXC"){
          wid2 += wid.substr(i,3).replace("ZXC","M")
        }
        if(wid.substr(i,3)=="MZX"){
          wid2 += wid.substr(i,3).replace("MZX","N")
        }
        if(wid.substr(i,3)=="PQW"){
          wid2 += wid.substr(i,3).replace("PQW","O")
        }
        if(wid.substr(i,3)=="QWE"){
          wid2 += wid.substr(i,3).replace("QWE","P")
        }
        if(wid.substr(i,3)=="WER"){
          wid2 += wid.substr(i,3).replace("WER","Q")
        }
        if(wid.substr(i,3)=="TYU"){
          wid2 += wid.substr(i,3).replace("TYU","R")
        }
        if(wid.substr(i,3)=="DFG"){
          wid2 += wid.substr(i,3).replace("DFG","S")
        }
        if(wid.substr(i,3)=="YUI"){
          wid2 += wid.substr(i,3).replace("YUI","T")
        }
        if(wid.substr(i,3)=="IOP"){
          wid2 += wid.substr(i,3).replace("IOP","U")
        }
        if(wid.substr(i,3)=="BNM"){
          wid2 += wid.substr(i,3).replace("BNM","V")
        }
        if(wid.substr(i,3)=="ERT"){
          wid2 += wid.substr(i,3).replace("ERT","W")
        }
        if(wid.substr(i,3)=="CVB"){
          wid2 += wid.substr(i,3).replace("CVB","X")
        }
        if(wid.substr(i,3)=="UIO"){
          wid2 += wid.substr(i,3).replace("UIO","Y")
        }
        if(wid.substr(i,3)=="XCV"){
          wid2 += wid.substr(i,3).replace("XCV","Z")
        }
        if(wid.substr(i,3)=="123"){
          wid2 += wid.substr(i,3).replace("123","0")
        }
        if(wid.substr(i,3)=="234"){
          wid2 += wid.substr(i,3).replace("234","1")
        }
        if(wid.substr(i,3)=="345"){
          wid2 += wid.substr(i,3).replace("345","2")
        }
        if(wid.substr(i,3)=="456"){
          wid2 += wid.substr(i,3).replace("456","3")
        }
        if(wid.substr(i,3)=="567"){
          wid2 += wid.substr(i,3).replace("567","4")
        }
        if(wid.substr(i,3)=="678"){
          wid2 += wid.substr(i,3).replace("678","5")
        }
        if(wid.substr(i,3)=="789"){
          wid2 += wid.substr(i,3).replace("789","6")
        }
        if(wid.substr(i,3)=="890"){
          wid2 += wid.substr(i,3).replace("890","7")
        }
        if(wid.substr(i,3)=="901"){
          wid2 += wid.substr(i,3).replace("901","8")
        }
        if(wid.substr(i,3)=="012"){
          wid2 += wid.substr(i,3).replace("012","9")
        }
        if(wid.substr(i,3)=="XHX"){
          wid2 += wid.substr(i,3).replace("XHX","_")
        }

      }
      console.log("解码后手表的型号为:"+wid2)
      return wid2
    }
    res.send(deCodeWid(wid))

  }else{
    res.send("0")
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
          res.send(`注册成功,${uname}`)
        }
      })
    }
  })
})

module.exports=router