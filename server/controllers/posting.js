const { User } = require('../models/user');
const { Posting } = require('../models/posting');

exports.CreatePosting = async (ctx, next) => {
    try {
        let obj = {};
        const { write,image} = req.body;
        const userID = ctx.request.userData._id;

        //checking data input
        if (write) obj.write = write;
        if (userID) obj.user = userID;
        if(ctx.request.file && ctx.request.file.fieldname && ctx.request.file.path) obj.image = ctx.request.file.path;



        let posting = await Posting.create(obj);
        await User.findByIdAndUpdate(userID, {
            $push: { write: write._id },
        });
        ctx.body = {
            data:posting,
            message: "Posting Created"
        };
        ctx.status = 201;
    } catch (err) {
        ctx.body = msg.err
        ctx.status = 400
    }
}


exports.DeletePosting = async (ctx, next) => {
    try {
        const id = req.params.posting_id;

        await Posting.findByIdAndRemove(id, (err, doc, result) => {
            if (err) throw "Failed to delete";
            if (!doc) return ctx.body = {message: "data not found"} 
            
            ctx.body = {
                data : doc,
                message: "Successfully deleted data"
            }
            ctx.status = 200;
        })
    }
    catch (err) {
        next(err);
    }
}

exports.EditPosting = async (ctx, next) => {
    try {
        const  id  = ctx.request.params.posting_id;
        const { write,image } = ctx.request.body;
        
        let obj = {};
        
           //checking data input
           if(write) obj.write = write;
           if(ctx.request.file && ctx.request.file.fieldname && ctx.request.file.path) obj.image = ctx.request.file.path;

  
           const updatePosting = await Posting.findByIdAndUpdate(
              id,
              { $set: obj },
              { new: true }
          );
          ctx.status = 200;
          ctx.body = {data : updatePosting, message: "Successfully edit posting"}
      } catch (err) {
          next(err)
      }
    };
exports.AllPosting = async (ctx, next) => {
    try {
       
        const all  = await Posting.find().populate('user').select('password');
        res.status(200).json({
            success: true,
            message: "All Data Discussion",
            data: all,
        });
    }
    catch (err) {
        next(err);
    }
}

exports.GetPosting = async (ctx, next) => {
    try {
        const id  = ctx.request.params.posting_id;
        const one  = await Posting.find({_id : id}).populate('user').select('password');
        res.status(200).json({
            success: true,
            message: "Get Posting",
            data: one,
        });
    }
    catch (err) {
        next(err);
    }
}

