import mongoose from 'mongoose'
import paperinfo from './paperinfo.js'
import user from './user.js'

const paperschema = new mongoose.Schema({


Branch:{
    type:String,
    enum:["Computer Science","Mechanical Engineering","Civil Engineering","Information Technology"],
},


year:{
    type:String,
    min:1,
    max:4
},

subject:{
    type:String,
},

semester:{
type:Number,
min:1,
max:8
},

paperinfo:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"paperinfo",
}],


owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
},

});


const paper = mongoose.model("paper",paperschema);
export default paper;