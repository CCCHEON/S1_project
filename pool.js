const mysql=require("mysql")
const pool=mysql.createPool({
	"user":"root",
	"database":"consumeDB"
})
module.exports=pool