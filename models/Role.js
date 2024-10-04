import mongoose from "../config/mongoose.config.js";

const roleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Role = mongoose.model("Role", roleSchema);

export default Role;