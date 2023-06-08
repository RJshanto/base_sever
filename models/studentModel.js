const mongoose =require('mongoose');

const dataSchema= mongoose.Schema({
    name:String,
    roll:String,
    class:String,
    remarks:String
},
{ timestamps: true, versionKey:false }
)

const studata= mongoose.model('list',dataSchema);
module.exports=studata;