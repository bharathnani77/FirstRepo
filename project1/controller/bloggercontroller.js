const jwt = require("jsonwebtoken");
const authorModel = require("../models/authorModel");
const blogModel = require("../models/blogModel")
const moment = require('moment')
//============================================================ Phase I ================================================================//
//========================================================= Creating Blogs ===========================================================// 

// ### POST /blogs
// - Create a blog document from request body. Get authorId in request body only.
// - Make sure the authorId is a valid authorId by checking the author exist in the authors collection.
// - Return HTTP status 201 on a succesful blog creation. Also return the blog document. The response should be a JSON object like [this](#successful-response-structure) 
// - Create atleast 5 blogs for each author

// - Return HTTP status 400 for an invalid request with a response body like [this](#error-response-structure)


const createBlog = async function (req, res) {
    try {
        let blogData = req.body;
        let {authorId,title,body,category} = req.body
        if(!title){
            return res.status(401).send({status:false,msg:"title is mandatory"})
        }
        if(!authorId){
            return res.status(401).send({status:false,msg:"AuthorId is mandatory"})
        }
        if(!body){
            return res.status(401).send({status:false,msg:"Body is mandatory"})
        } 
        if(!category){
            return res.status(401).send({status:false,msg:"category os requried"})
        }       
        let authorDetails = await authorModel.findById(authorId)
        if (!authorDetails)
            return res.status(401).send({ status: false, msg: "No such author exists" });

        let savedData = await blogModel.create(blogData);
        res.status(201).send({ status: true, data: savedData });
    }
    catch (error) {
        res.status(500).send({ msg: "Error", error: error.message })
    }
}

//==================================================== get Blogs with conditions ======================================================//
// ### GET /blogs
// - Returns all blogs in the collection that aren't deleted and are published
// - Return the HTTP status 200 if any documents are found. The response structure should be like [this](#successful-response-structure) 
// - If no documents are found then return an HTTP status 404 with a response like [this](#error-response-structure) 
// - Filter blogs list by applying filters. Query param can have any combination of below filters.
//   - By author Id
//   - By category
//   - List of blogs that have a specific tag
//   - List of blogs that have a specific subcategory
// example of a query url: blogs?filtername=filtervalue&f2=fv2

const getBlogs = async function (req, res) {
    try {
        let data = req.query

        console.log(data)
        let blog = await blogModel.find({$and: [{isDeleted: false}, {isPublished: true},data ]});
        if (!blog){
            return res.status(404).send({ status: false, msg: "Blog does not exist" })
        } 
       return res.status(200).send({ status: true, data: blog })
    }
    catch (error) {
        return res.status(500).send({ status: false, error: error.message })
    }
}

//===================================================== get Blogs By filter =============================================================//

// let getByFilter = async function (req, res) {
//     try {
//         let authorid = req.query.authorId
//         let category = req.query.category
//         let tag = req.query.tags
//         let subcategory = req.query.subcategory
//         let allblogs = await blogModel.find({
//             $or: [{ authorId: authorid }, { category: category }, { tags: tag }, { subcategory: subcategory }]
//         })
//         if (allblogs!=0) return res.status(404).send({ status: false, msg: "Blog not found" })
//         res.status(200).send({ status: true, data: allblogs })
//     }
//     catch (error) {
//         res.status(500).send({ msg: "Error", error: error.message })
//     }
// }

//======================================================== Updating Blogs =========================================================//

// ### PUT /blogs/:blogId
// - Updates a blog by changing the its title, body, adding tags, adding a subcategory. (Assuming tag and subcategory received in body is need to be added)
// - Updates a blog by changing its publish status i.e. adds publishedAt date and set published to true
// - Check if the blogId exists (must have isDeleted false). If it doesn't, return an HTTP status 404 with a response body like [this](#error-response-structure)
// - Return an HTTP status 200 if updated successfully with a body like [this](#successful-response-structure) 
// - Also make sure in the response you return the updated blog document. 

const updateBlog = async function (req, res) {
    try {
        let blogData = req.body
        let blogId = req.params.blogId
        let tags = req.body.tags
        let subcategory = req.body.subcategory
        let blog = await blogModel.findById(blogId);

        let updatedTags = user.tags
        if (tags) {
          updatedTags.push(tags)
        }
        let updatedSubCategory = user.subcategory
        if (subcategory) {
          updatedSubCategory.push(subcategory)
        }
        let updatedBlog = await blogModel.findOneAndUpdate(
            { _id: blogId, isDeleted: false },
            { title: blogData.title,
            tags:updatedTags,
            subcategory:updatedSubCategory,
            body:blogData.body,
            isPublished:blogData.isPublished
            },)
            
            if(!updatedBlog){
                return res.status(404).send({status:false,msg:"Blog doesnt exist"})
            }
        return res.status(200).send({ status: true, data: updatedBlog });
    } catch (error) {
        return res.status(500).send({status:false, msg: error.message })
    }
}

//========================================================== Updating publisher blogs with certain date and  =====================================//

// const updatingpublisherwithdate = async function (req, res) {
//     try {
//         let blogData = req.body;
//         let updatedblog = await blogModel.findOneAndUpdate(
//             { publishedAt: "Jun 23 2022" },
//             { $set: blogData },
//             { new: true, });
//         res.status(200).send({ status: 'updated', data: updatedblog });
//     } catch (error) {
//         res.status(500).send({ msg: error.message })
//     }
// }

//============================================================ delete Blogger by Id ==========================================================//

// ### DELETE /blogs/:blogId
// - Check if the blogId exists( and is not deleted). If it does, mark it deleted and return an HTTP status 200 without any response body.
// - If the blog document doesn't exist then return an HTTP status of 404 with a body like [this](#error-response-structure) 

const deleteBlogsById = async function (req, res) {
    try {
        let blogId = req.params.blogId;
        let result = await blogModel.findOne({ _id: blogId, isDeleted: false });
        if (!result) return res.status(404).send({ status: false, msg: "Blog doesnot exist" });
        let deletedBlog = await blogModel.findOneAndUpdate(
            { _id: blogId ,isDeleted: false},
            { $set: {isDeleted: true, deletedAt: Date.now() }}, { new: true, upsert: true }); //updatemany
       console.log(deletedBlog)
       if(!deletedBlog){
        return res.status(404).send({status:false,msg:"blog doesnt exit, already deleted"})
       }
         return res.status(200).send({ status: true, data: "Blog deleted successfully" });
    } catch (err) {
        res.status(500).send({ status: false, msg: err.message });
    }
};

//========================================================== Delete by query ============================================================ // 

// ### DELETE /blogs?queryParams
// - Delete blog documents by category, authorid, tag name, subcategory name, unpublished
// - If the blog document doesn't exist then return an HTTP status of 404 with a body like [this](#error-response-structure)

const deleteBlogByQuerCondition= async function (req, res) {
    try {
        let blogData = req.query
        console.log(blogData)
        let allBlog = await blogModel.findOneAndUpdate(
            {
                $and: [blogData, { isDeleted: false },],
              },
              { isDeleted: true, deletedAt: Date.now() }
            );

            return res.status(200).send({ status: true, data: `${allBlog.modifiedCount}-DELETED` })
  }
  catch (error) {
    return res.status(500).send({ status: false, msg: error.message })
  }
}

//========================================================== Exported Module ===================================================================//
module.exports.createBlog = createBlog
module.exports.getBlogs = getBlogs
//module.exports.getByFilter = getByFilter
module.exports.updateBlog = updateBlog
//module.exports.updatingpublisherwithdate = updatingpublisherwithdate
module.exports.deleteBlogsById = deleteBlogsById
module.exports.deleteBlogByQuerCondition = deleteBlogByQuerCondition

