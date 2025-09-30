//criar e validar o token

import jwt from "jsonwebtoken"

const secretToken = "Maria2024"

function CreateToken(id_user){

    const token = jwt.sign({id_user}, secretToken, {
        expiresIn:999999999
    })

    return token
}

function ValidateToken(req,res,next){

    const authToken = req.headers.authorization //Bearer 000000000

    if (!authToken)
        return res.status(401).json({error: "Token não informado"})

    const [bearer,token] = authToken.split(" ")

    jwt.verify(token,secretToken,(err,tokenDecoded)=>{
        if(err)
            return res.status(401).json({error: "Token inválido"})
        
        req.id_user = tokenDecoded.id_user;

        next(); // pode seguir adiante tudo certo

    })

}

export default {CreateToken,ValidateToken}