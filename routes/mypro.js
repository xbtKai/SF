const express = require("express")
var router = express.Router()

// 首页接收芯片地址栏参数
// http://127.0.0.1:9000/index.html?wid=M2/02&code=-A007
// 返回wid,code的值
router.get("/showCode",(req,res)=>{
  console.log("这是/showCode的req.query:",req.query)
  res.send(req.query.wid+req.query.code)
})

router.get("/showImage",(req,res)=>{
  console.log("这是showImage的req.query.wid:",req.query.wid)
  if(req.query.wid == "M2/02"){
    res.send("./image/M2-02.png")
  }

})
module.exports=router