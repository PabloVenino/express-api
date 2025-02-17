import { Request, Response } from "express";

const users = [
    {
        "id": "1",
        "name": "Jhon Doe",
        "age": 26,
        "email": "jhon.doe@google.com"
    },
    {
        "id": "2",
        "name": "John Doe",
        "age": 22,
        "email": "john.doe@google.com"
    },
    {
        "id": "3",
        "name": "Jhon Deo",
        "age": 62,
        "email": "jhon.deo@google.com"
    }
]

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    try {
        const user = users.find((user)=>{user.id === id})
        if (!user) res.status(404).json({"message": "User not found."});
        else res.status(200).json(user)
        
        return;
    } catch (error) {
        res.status(500).json({error, "message": "Unknown server errror."})
    }
}