const mongoose = require ('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: 'Blog title is required',
        trim: true
    },
    body:{
        type: String,
        required: 'Blog body is required',
        trim: true
    },
    authorId:{
        type: mongoose.Types.ObjectId,
        refs: "Author",
        required: 'Blog Author is required'
    },
    tags: [{type: String,trim: true}],
    category:{
        type: String,
        required: 'Blog category is required',
        trim: true
    },
    subcategory:[ {type: String,trim: true} ],
    isPublished:{
        type: Boolean,
        default: false
    },
    publishedAt:{
        type: Date,
        default: null
    },
    isDeleted:{
        type: Boolean,
        default: false
    },
    deletedAt:{
        type: Date,
        default: null
    },
},{timestamps:true});

module.exports = mongoose.model('blog',blogSchema)