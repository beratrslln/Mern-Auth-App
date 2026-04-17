//post.js

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
    image: { type: String },
    title: { type: String },
    description: { type: String },   
},{ timestamps: true });


const Post = mongoose.model("Post", postSchema)

module.exports = Post;
