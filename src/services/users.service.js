import usersdata from "../data/usersdata.json" with {type: "json"};

import saveToJSON from "../data/data.js";

const getUsers = () => usersdata;

//const getUsers = () =>{return {"data":"Todos los usuarios"}}

const getUsersById = (id) => {
    const user = usersdata.find(user => user.id === parseInt(id));
    return user;
}

const createUser = (newuser) =>{
    usersdata.unshift(newuser);
    saveToJSON(usersdata);
    return usersdata.find((user) => user.id === newuser.id);
}

const updateUser = (id, user) =>{
    const userIndex = usersdata.findIndex((u) => u.id.toString() === id);
    if(userIndex !== -1){
        usersdata[userIndex] = user;
        saveToJSON(usersdata, "user");
        return usersdata[userIndex];
    }
    return null;
}



const deleteUser = (id) =>{
    const userdata1 = userdata1.filter(user => user.id === id)
    saveToJSON(userdata1, "userdata.json");
    return id;
}


export default {
    getUsers,
    getUsersById,
    createUser,
    deleteUser
}