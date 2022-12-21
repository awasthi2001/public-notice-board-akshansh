import mongoose from "mongoose"
import * as dotenv from 'dotenv'
dotenv.config();
let URL = process.env.MONGO_URL
export const connectDB = () => {
    try {
        return new Promise((resolve, reject) =>{
            mongoose.connect(URL,(err)=>{ 
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
