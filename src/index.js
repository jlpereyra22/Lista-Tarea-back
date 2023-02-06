import express from "express";

const app = express();
app.set("port",process.env.PORT || 4000);
app.listen(app.get("port"),()=>{
    console.log("Estoy en en puerto "+ app.get("port"))
})

console.log("a verrrr!!!!!");
