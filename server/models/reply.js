const mongoose = require('mongoose');
const { Schema } = mongoose;

const replySchema = new Schema(
    {
        reply: {
            type: String,
            default: null
        },
        image : {
            type : String,
            required: false,
        },
        like : {
            type: Number,
            required: false,
        },


        posting: { type: Schema.Types.ObjectId, ref: "Posting", default: null },
        user: { type: Schema.Types.ObjectId, ref: "User", default: null},
        

    },
    {
        timestamps: true
    }
)

const reply = mongoose.model("Reply", replySchema);

exports.Reply = reply;
