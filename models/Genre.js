import mongoose from "../config/mongoose.config.js";

const genreSchema = mongoose.Schema({
  name: String,
});

const Genre = mongoose.model("Genre", genreSchema);

export default Genre;