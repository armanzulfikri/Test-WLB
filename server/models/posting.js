const mongoose = require('mongoose');
const { Schema } = mongoose;

const postingSchema = new Schema(
    {
        write: {
            type: String,
            required: true,
            max : 500,
        },
        image : {
            type: String,
            required: false
        },
        like : {
            type : Number,
            require : false
        },
        user: { type: Schema.Types.ObjectId, ref: "User", default: null },
    },
    {
        timestamps: true
    }
)

const posting = mongoose.model("Posting", postingSchema);

exports.Posting = posting;
