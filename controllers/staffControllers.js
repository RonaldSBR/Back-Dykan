import Staff from "../models/Staff.js";

async function create(req, res) {
  try {
    const newStaff = await Staff.create({
      name: req.body.name,
    });
    res.json(newStaff);
  } catch (err) {
    res.status(500).json("Server error");
  }
}

async function find(req, res) {
  try {
    const staffId = req.params.id;
    const staff = await Staff.findById(staffId);
    res.status(200).json(staff);
  } catch (err) {
    res.status(500).json("Server error");
  }
}

async function list(req, res) {
  try {
    const staffList = await Staff.find();
    res.status(200).json(staffList);
  } catch (err) {
    res.status(500).json("Server error");
  }
}

async function update(req, res) {
  try {
    const staffFound = await Staff.findById(req.params.id);

    staffFound.name = req.body.name || staffFound.name;

    await staffFound.save();
    res.status(200).json(staffFound);
  } catch (err) {
    res.status(500).json("Server error");
  }
}

async function destroy(req, res) {
  try {
    await Staff.findByIdAndDelete(req.params.id);
    res.status(200).json("Staff Removed");
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
