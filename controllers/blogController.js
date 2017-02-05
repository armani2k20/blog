const Blogs = require("../models/blog");
const Comments = require("../models/comment")

class BlogController {

    /**
     * This method shows all blog posts
     * @param req and res
     */
    static showBlog(req, res) {
        res.render("index", {
            blogs: req.session.blogs
        });
    }

    /**
     * This method shows one blog posts
     * It loops through the req.session.blogs array and prints the blog title and content for each item 
     * @param req and res
     */
    static showOneBlog(req, res) {
        let blogs = req.session.blogs;
        let blog;
        for (let i in blogs) {
            if (blogs[i].blogTitle === req.params.title) {
                blog = blogs[i];
                break;
            }
        }
        res.render("singleblog", {
            blog: blog
        });
    }

    /**
     * This method adds a comment to a blog post
     * @param req and res
     */
    static addComment(req, res) {
        let blogs = req.session.blogs
        for (let i in blogs) {
            blogs[i].comments = blogs[i].comments || [];
            if (blogs[i].blogTitle === req.body.title) {
                const blogComment = new Comments(req.body);
                blogs[i].comments.push(blogComment);
            }
        }
        res.redirect("/");
    }
}

//Exporting the BlogController class
module.exports = BlogController;