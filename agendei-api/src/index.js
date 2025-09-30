//porta de entrada para a nossa aplicacao

import express from "express"
import cors from "cors"
import router from "./router.js";

const app = express(); //instanciando para poder usar 

app.use(express.json())
app.use(cors());
app.use(router)


app.listen(3001,() =>{
    console.log("Servidor rodando na porta 3001")
}) 

