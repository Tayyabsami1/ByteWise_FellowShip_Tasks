import { v4 as uuidv4 } from 'uuid';

const Users = [
    {
        firstName: "John",
        lastName: "Joe",
        age: 20,
    },
    {
        firstName: "tayyab",
        lastName: "sami",
        age: 20,
    },
]

export const GetUsers = (req, res) => {
    return res.status(200).json(Users);
}

export const PostUser = (req, res) => {
    const newUser = req.body;
    Users.push({ id: uuidv4(), ...newUser });

    return res.status(200).send(`User with Username ${newUser.firstName} added to the Database`);
}

export const GetUser=(req,res)=>{
    const userId = req.params.id;
    const Requesteduser = Users.find(user => user.id === userId);

    if(!Requesteduser)
        return res.status(400).send(`User with id ${userId} not found in the Database`)

    return res.status(200).json(Requesteduser);
}

export const DeleteUser=(req,res)=>{
    const userId=req.params.id;

    const Requesteduser = Users.find(user => user.id === userId);
    if(!Requesteduser)
        return res.status(400).json(`User with id ${userId} not found in the Database`)

    Users=Users.filter(user=>user.id!==userId);

    return res.status(200).json(`User with id ${userId} deleted from the Database`);
}

export const UpdateUser=(req,res)=>{
    const userId=req.params.id;
    const {firstName,lastName,age}=req.body;

    const Requesteduser = Users.find(user => user.id === userId);
    if(!Requesteduser)
        return res.status(400).json(`User with id ${userId} not found in the Database`);

    if(firstName)
        Requesteduser.firstName=firstName;

    if(lastName)
        Requesteduser.lastName=lastName;

    if(age)
        Requesteduser.age=age;

    return res.status(200).send(`User with id ${userId} updated in the Database`);
}