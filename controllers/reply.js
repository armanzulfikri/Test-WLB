const { User } = require('../models/user');
const { Posting } = require('../models/posting');
const { Reply } = require('../models/reply');


exports.allReply = async (ctx, next) => {
    try {
        const all = await Reply.find().populate('user').select('password');
            ctx.status = 200;
            ctx.body = {data: all,message: " Successfully get all data"}
    }
    catch (err) {
        next(err);
    }
}
exports.ReplyUser = async (ctx, next) => {
    try {
        let obj = {};
        const { reply,image } = ctx.request.body;
        const userID = ctx.request.userData._id;
        const postingID = req.params.posting_id;

        //checking data input
        
        if (reply) obj.reply = reply;
        if(ctx.request.file && ctx.request.file.fieldname && ctx.request.file.path) obj.image = ctx.request.file.path;
        if (userID) obj.user = userID;
        if (postingID) obj.discussion = postingID;

     
        let replies = await Reply.create(obj);
        await User.findByIdAndUpdate(userID, {
            $push: { reply: reply._id },
        });
        await Discussion.findByIdAndUpdate(discussionID, {
            $push: { reply: reply._id },
        });

        ctx.status = 201;
        ctx.body = {data:replies,message: "Reply Created"}

    } catch (err) {
        next(err)
    }
}

exports.EditReplyUser = async (ctx, next) => {
    try {
        const id = req.params.reply_id;

        if (!id) return next({ message: "Missing ID Params" })

        const edit = await Reply.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );
        ctx.status = 200;
        ctx.body = {data : edit, message : " Successfully  updated  data" };
    }
    catch (err) {
        next(err);
    }
}

exports.GetReplyUser = async (ctx, next) => {
    try {
        const reply = req.params.reply_id;

        const foundDiscussion = await Reply.findOne({_id: reply}).populate('user');
        console.log(foundDiscussion);
        if (foundDiscussion) {
            ctx.status =200;
            ctx.body = {data: foundDiscussion, message: " Successfully retrieve the data"}

        } else {
            ctx.status =404;
            ctx.body = {message: "There is no reply"}
        }
    } catch (err) {
        next(err);
    }
}

exports.DeleteReplyUser = async (req, res, next) => {
    try {
        const id = req.params.reply_id;

        await Reply.findByIdAndRemove(id, (err, doc, result) => {
            if (err) throw "Failed to delete";
            if (!doc) return ctx.body = {success : false , message : "Data not found"}

            ctx.status = 200;
            ctx.body = {success : true, message : "Successfully deleted data", data : doc}
        })
    }
    catch (err) {
        next(err);
    }
}
