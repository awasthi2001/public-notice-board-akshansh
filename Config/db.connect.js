import mongoose from "mongoose"

export const connectDB = () => {
    try {
        return new Promise((resolve, reject) =>{
            mongoose.connect('mongodb://127.0.0.1:27017/PublicNotice',(err)=>{
                if(err){
                    reject("Something went wrong");
                } else {      
                    resolve("Connected to MongoDB")
                }
            })
        })
       
    } catch (error) {
        console.log(error)
    }
}
