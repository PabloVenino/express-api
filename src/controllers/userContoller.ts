import { Request, Response } from "express";

const users = [
    { id: 1, name: "Jhon Doe", age: 26, email: "jhon.doe@google.com" },
    { id: 2, name: "John Doe", age: 22, email: "john.doe@google.com" },
    { id: 3, name: "Jhon Deo", age: 62, email: "jhon.deo@google.com" }
];

const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    let intId = parseInt(id)
    try {
        const user = users.find((user) => { user.id === intId })
        if (!user) res.status(404).json({ message: "User not found." });
        else res.status(200).json(user)

        return;
    } catch (error) {
        res.status(500).json({ error, "message": "Unknown server errror." })
    }
}

const createUser = async (req: Request, res: Response) => {
    const { name, email, age } = req.body

    try {
        let lastUser = [...users].sort((a, b) => a.id - b.id)[0]
        users.push({
            id: lastUser.id++,
            name,
            email,
            age
        });

        res.status(201).json({ message: "User added successfully." })
    }
    catch (error) {
        res.status(500).json({ message: `An unexpected error occured: ${error}` })
    }
}

const updateUser = async (req: Request, res: Response) => {
    const { name, age, email } = req.body;
    const { id } = req.params;

    try {
        const userIndex = users.findIndex(user => user.id === parseInt(id))

        if (userIndex === -1) {
            res.status(404).json({ message: "User not found." })
            return;
        }

        users[userIndex] = { ...users[userIndex], name, age, email };

        res.status(200).json({message: "User updated succesfully.", user: users[userIndex]});
    } catch(error) {
        res.status(500).json({message: `An unexpected error occured: ${error}`});
    }
}

const getUsers = async (req: Request, res: Response) => {
    res.status(200).json({users})
}

const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params

    try {

        const userIndex = users.findIndex(user => user.id === parseInt(id));
        if (userIndex === -1) {
            res.status(404).json({message: "User to delete not found."})
            return;
        }
        
        const updatedUsers = users.filter(user => user.id === users[userIndex].id)
        
        res.status(200).json({message: "User deleted successfully."})
    } catch (error) {
        res.status(500).json({message: "An unexpected error occured." })
    }
}

const deleteUsers = async (req: Request, res: Response) => {
    const { ids } = req.body

    try {
        const updatedUsers = users.filter(user => !ids.includes(user.id));
        res.status(200).json({message: "Users deleted successfully.", users: updatedUsers })
    } catch (error) {
        res.status(500).json({message: "An unexpected error occured." })
    }
}

export const UserController = {
    getUser,
    createUser,
    updateUser,
    getUsers,
    deleteUser,
    deleteUsers
};