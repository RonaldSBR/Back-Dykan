import mongoose from "../config/mongoose.config.js";

const stateSchema = mongoose.Schema({
  name: String,
});

const State = mongoose.model("State", stateSchema);

export default State;