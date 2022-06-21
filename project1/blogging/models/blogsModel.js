const mongoose = require ('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    authorId:{
        type: ObjectId,
        ref: "Author",
        required: true
    },
    tags:{
        type: [String]
    },
    category:{
        type: String,
        required: true
    },
    subcategory:{
        type: [String]
    },
    isCreated:{
        type: Boolean,
        default: false
    },
    isUpdated:{
        type: Boolean,
        default: false
    },
    isDeleted:{
        type: Boolean,
        default: false
    },
    isPublished:{
        type: Boolean,
        default: false
    },

},{timestamps:true});

module.exports = mongoose.model('Blogs',blogSchema)