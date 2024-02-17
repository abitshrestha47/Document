import mongoose from "mongoose";

const DocumentSchema=mongoose.Schema({
    _id:{
        type:String,
        required:true,
    },
    data:{
        type:Object,
        required:true,
    }
});

const Document=mongoose.model('documents',DocumentSchema);

export default Document;