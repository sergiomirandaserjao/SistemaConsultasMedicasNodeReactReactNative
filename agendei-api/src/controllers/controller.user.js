import serviceUser from "../services/service.user.js"


async function Inserir(req,res){


    const{name,email,password} = req.body


    const user = await serviceUser.Inserir(name,email,password);

    //criado com sucesso (201)
    res.status(201).json(user);

}

async function Login(req,res){


    const{email,password} = req.body


    const user = await serviceUser.Login(email,password);

    if (user.length == 0)
        res.status(401).json({error: "Email ou senha invalidas"});
    
    else
        res.status(200).json(user);
    
    

}

async function Profile(req,res){

    const id_user = req.id_user;
    const user = await serviceUser.Profile(id_user);

    res.status(200).json(user);

}


async function InserirAdmin(req,res){


    const{name,email,password} = req.body


    const user = await serviceUser.InserirAdmin(name,email,password);

    //criado com sucesso (201)
    res.status(201).json(user);

}

async function LoginAdmin(req,res){


    const{email,password} = req.body


    const user = await serviceUser.LoginAdmin(email,password);

    if (user.length == 0)
        res.status(401).json({error: "Email ou senha invalidas"});
    
    else
        res.status(200).json(user);
    
    

}
async function Listar(req,res){


    const user = await serviceUser.Listar();


        res.status(200).json(user);


}


export default {Inserir,Login,Profile,LoginAdmin,InserirAdmin,Listar}