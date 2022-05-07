const express=require("express")
const app=express()
const port=3000
app.listen(port,()=>{
	console.log("创建服务器成功")
})
app.use(express.static("./public"))
app.use(express.urlencoded({
	extended:false
}))
const proRouter=require("./routes/product.js")
app.use("/v2/product",proRouter)