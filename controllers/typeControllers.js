import Type from "../models/Type.js";

async function create(req, res) {
  try {
    const newType = await Type.create({
      name: req.body.name,
    });
    res.json(newType);
  } catch (err) {
    res.status(500).json("Server error");
  }
}

async function find(req, res) {
  try {
    const typeId = req.params.id;
    const type = await Type.findById(typeId);
    res.status(200).json(type);
  } catch (err) {
    res.status(500).json("Server error");
  }
}

async function list(req, res) {
  try {
    const typeList = await Type.find();
    res.status(200).json(typeList);
  } catch (err) {
    res.status(500).json("Server error");
  }
}

async function update(req, res) {
  try {
    const typeFound = await Type.findById(req.params.id);

    typeFound.name = req.body.name || typeFound.name;

    await typeFound.save();
    res.status(200).json(typeFound);
  } catch (err) {
    res.status(500).json("Server error");
  }
}

async function destroy(req, res) {
  try {
    await Type.findByIdAndDelete(req.params.id);
    res.status(200).json("Type Removed");
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