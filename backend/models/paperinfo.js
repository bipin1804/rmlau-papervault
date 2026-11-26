import mongoose from 'mongoose';

const paperinfoschema = new mongoose.Schema({
    
        paperyear:{
        required:true,
        type:Number,
    },


    pdf:{
        type:String,
        required:true
    },

    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const paperinfo = mongoose.model("paperinfo",paperinfoschema);
export default paperinfo;