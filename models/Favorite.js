import mongoose from "../config/mongoose.config.js";

const FavoriteSchema = mongoose.Schema({
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

const Favorite = mongoose.model("Favorite", FavoriteSchema);

export default Favorite;