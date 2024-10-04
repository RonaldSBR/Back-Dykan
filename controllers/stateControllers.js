import State from "../models/State.js";

async function create(req, res) {
  try {
    const newState = await State.create({
      name: req.body.name,
    });
    res.json(newState);
  } catch (err) {
    res.status(500).json("Server error");
  }
}

async function find(req, res) {
  try {
    const stateId = req.params.id;
    const state = await State.findById(stateId);
    res.status(200).json(state);
  } catch (err) {
    res.status(500).json("Server error");
  }
}

async function list(req, res) {
  try {
    const stateList = await State.find();
    res.status(200).json(stateList);
  } catch (err) {
    res.status(500).json("Server error");
  }
}

async function update(req, res) {
  try {
    const stateFound = await State.findById(req.params.id);

    stateFound.name = req.body.name || stateFound.name;

    await stateFound.save();
    res.status(200).json(stateFound);
  } catch (err) {
    res.status(500).json("Server error");
  }
}

async function destroy(req, res) {
  try {
    await State.findByIdAndDelete(req.params.id);
    res.status(200).json("State Removed");
  } catch (err) {
    res.status(500).json("Server error");
  }
}

export default {
  create,
  find,
  list,
  update,
  destroy,
};