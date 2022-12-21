import { Notice } from "../Models/Notice.model.js"

export const handleCreateNotice =async (req, res) => {
    try {
       let createdNotice = await Notice.create(req.body)
       return res.status(201).send({
        message : 'successfully created',
        createdNotice : createdNotice
    })
    } catch (error) {
        return res.status(500).send({
            message : 'Something went wrong'
        })
    }
}

export const getAllNotices = async (req, res) => {
    try {
        const AllNotices = await Notice.find().sort({createdAt:-1})
        return res.status(200).send({
            notices : AllNotices
        })
    } catch (error) {
        return res.status(500).send({
            message : 'Something went wrong'
        })
    }
}