const express=require("express")
const pool=require("../pool.js")
const router=express.Router()
module.exports=router
//插入数据
router.post("/add",(req,res)=>{
	//res.send("插入数据成功")
	const m=req.body
	//console.log(m)
	const n="insert into consumeInfo set ?"
	pool.query(n,[m],(err,result)=>{
		if(err){
			throw err
			res.send({code:201,msg:"插入数据失败"})
			return
		}else{res.send({code:200,msg:"插入数据成功"})}
	})
})
//查询数据
router.get("/select",(req,res)=>{
	const m="select * from consumeInfo"
	pool.query(m,(err,result)=>{
		if(err){
			throw err
			res.send({code:201,msg:"查询数据失败"})
			return
		}else{
			res.send(result)
		}
	})
})