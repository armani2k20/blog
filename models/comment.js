//Constructing a comment class. In this constructor it checks for the correct object type  and
//whether the field actually exists. If anything of these fail in the constructor it throws a custom error.
class Comments {

    constructor(obj) {

        if (!obj.comment) {
            throw new Error("You must include a comment");
        } else if (typeof obj.comment != "string") {
            throw new Error("comment must be a string");
        } else {
            this.comment = obj.comment;
        }
    }
}

//Exporting the Comments class
module.exports = Comments;