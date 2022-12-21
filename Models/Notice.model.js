import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema(
    {
        notice : {type : String ,required:true,minLength:100}
    }
    , { timestamps: true });

export const Notice = mongoose.model('Notice', noticeSchema);
