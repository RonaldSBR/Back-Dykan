import mongoose from "../config/mongoose.config.js";

const ReviewSchema = mongoose.Schema({
    user: [
        {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "User",
        },
    ],
    manga: [
        {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "Manga",
        },
    ],
});

const Review = mongoose.model("Review", ReviewSchema);

export default Review;