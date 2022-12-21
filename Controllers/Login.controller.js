import { User } from "../Models/User.model.js";


export const handleLogin = async(req,res)=>{
    try {
        let {username} = req.body;
        let isexists = await User.findOne({username:username});
        if(isexists){
             return res.status(201).send({
                message : 'successfully logged in',
                username : username
             })
        }else{
           let createduser = await User.create(req.body);
           res.status(201).send({
            message : 'successfully registered',
            username : username
           })
        }
    } catch (error){
        res.status(500).send({
            message : 'Something went wrong'
        })
    }
}