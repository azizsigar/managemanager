const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postSchema = new Schema({

    title:{
        type: String,
        required: true
    },
    comments:[{
        type: mongoose.Types.ObjectId,
        ref:"Comment"
    }],
    desc:{
        type: String,
        required: true
    },
    created_at:{
        type:Date,
        default: Date.now()
    }
})

module.exports=mongoose.model("post",postSchema)