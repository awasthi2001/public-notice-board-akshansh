import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema(
    {
        notice : {type : String ,required:true,maxLength:100},
        username : {type : String,required:true}
    }
    , { timestamps: true });

export const Notice = mongoose.model('Notice', noticeSchema);
