const express=require("express")
const pool=require("../pool.js")
const router=express.Router()
module.exports=router
//插入数据
router.post("/add",(req,res)=>{
	//res.send("插入数据成功")
	const m=req.body
	console.log(m)
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
	const m="select * from consumeInfo order by consumeId desc"
	pool.query(m,(err,result)=>{
		if(err){
			throw err
			res.send({code:201,msg:"查询数据失败"})
			return
		}
		res.send(result)	
	})	
})
//删除数据
router.delete("/del",(req,res)=>{
	var m=req.query.consumeId
	m=parseInt(m)
	const n="delete from consumeInfo where consumeId=?"
	pool.query(n,[m],(err,result)=>{
		if(err){
			throw err
			return
		}
		if(result.affectedRows>0){
			res.send({code:200,msg:"删除数据成功"})
		}else{
			res.send({code:201,msg:"删除失败"})
		}
	})
})