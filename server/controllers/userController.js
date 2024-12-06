import User from '../models/userModel.js'


class userController{


static async getAllUsers(req,res){
 
try {
    const users = await User.getAllUsers()
    if (!users) {
        return res.status(400).json({message:'No se encontraron usuarios'})
    }

  res.json(users)


} catch (error) {
    console.log(error)
 return res.status(500).json({message:'Erro interno del servidor,Intente mas tarde'})
}

}


}



export default userController