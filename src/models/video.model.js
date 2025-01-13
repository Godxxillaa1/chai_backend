import mongoose, {Schema} from "mongoose";
import mongooseaggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = Schema(
    {
        videoFile: {
            type: String, // Cloudnary
            required: true,
        },
        thumbnail: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        discription: {
            type: String, 
            required: true
        },
        duration: {
            type: Number, // Duration  
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    }, 

    {timestamps: true}
)



videoSchema.plugin(mongooseaggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)