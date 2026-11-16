import usersService from "../services/users.service.js";



const getUsers = (req, res) => {
    const users = usersService.getUsers();
    res.status(200).json( users );
}

const getUsersById = (req, res) => {
    const id  = req.params.id;
    const user = usersService.getUsersById(id);

    if(user)
        res.status(200).json({user})
    else
        res.status(404).json({message: `Usuario: ${id} no encontrado`})
}

const createUser = (req, res) => {
    const user = req.body;
    const newuser = usersService.createUser(user)
    res.status(200).json(newuser);
}

const updateUser = (req, res) => {
    const idupdate = req.params.id;
    const {id, name,email, role} = req.body;
    const user = {id, name, email, role};
    const updateUser = usersService.updateUser{idupdate, user}:
    if(!updateUser){
        
    }
}

const deleteUser = (req, res) => {
    const id = req.params.id;
    const userId = usersService.getUsersById(parseInt(id));
    if(user)
        res.status(200).json({"response":`El usuario ${userId} ha sido eliminado`})
    else
        res.status(404).json({message: `Usuario: ${id} no encontrado`})
}


export{
    getUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser
}