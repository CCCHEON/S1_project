const express=require("express")
const pool=require("../pool.js")
const router=express.Router()
module.exports=router
//插入数据
router.post("/add",(req,res)=>{
	const m=req.body
	console.log(m)
	const n="insert into consumeInfo set ?"
	pool.query(n,[m],(err,result)=>{
		if(err){
			throw err
			res.send("插入数据失败")
			return
		}
		result.affectedRows>0 ? res.send("插入数据成功") : res.send("插入数据失败")
	})
})
//查询数据
router.get("/select",(req,res)=>{
	const m="select * from consumeInfo order by consumeId desc"
	pool.query(m,(err,result)=>{
		if(err){
			throw err
			res.send("查询数据失败")
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
		result.affectedRows>0 ? res.send("删除数据成功") : res.send("删除失败")
	})
})
//修改数据
router.put("/update",(req,res)=>{
	var m=req.body
	console.log(m)
	const n="update consumeInfo set ? where consumeId=?"
	pool.query(n,[m,m.consumeId],(err,result)=>{
		if(err){
			throw err
			return
		}
		result.affectedRows>0 ? res.send("修改数据成功") : res.send("修改数据失败")
	})
})
//查询指定id的数据
router.get("/reselect",(req,res)=>{
	const n=req.query.consumeId
	const m="select * from consumeInfo where consumeId=?"
	pool.query(m,n,(err,result)=>{
		if(err){
			throw err
			res.send({code:201,msg:"查询数据失败"})
			return
		}
		res.send({code:200,msg:"查询成功",data:result})	
	})	
})