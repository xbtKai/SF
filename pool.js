const mysql = require('mysql')

var pool = mysql.createPool({
  host:'148.72.211.171',
  port:'3306',
  user:'xbt',
  password:'524524123',
  database:'sf',
  connectionLimit:15
})

//到处连接池对象
module.exports=pool
