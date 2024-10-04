import mongoose from "../config/mongoose.config.js";

const staffSchema = mongoose.Schema({
  name: String,
});

const Staff = mongoose.model("Staff", staffSchema);

export default Staff;