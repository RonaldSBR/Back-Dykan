import mongoose from "../config/mongoose.config.js";

const typeSchema = mongoose.Schema({
  name: String,
});

const Type = mongoose.model("Type", typeSchema);

export default Type;