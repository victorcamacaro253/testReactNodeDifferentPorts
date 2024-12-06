import { query } from "../db/db.js";



class User{

static async getAllUsers(){

 const SQL = 'SELECT * FROM usuario'
 const users = await query(SQL)
 return users


}

}


export default User