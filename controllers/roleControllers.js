import Role from "../models/Role.js";

async function create(req, res) {
  try {
    const newRole = await Role.create({
      name: req.body.name,
    });
    res.json(newRole);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function find(req, res) {
  try {
    const roleId = req.params.id;
    const role = await Role.findById(roleId);
    res.status(200).json(role);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function list(req, res) {
  try {
    const userlist = await Role.find();
    res.status(200).json(userlist);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function update(req, res) {
  try {
    const roleFound = await Role.findById(req.params.id);

    roleFound.name = req.roleFound.name || roleFound.name;

    await roleFound.save();
    res.status(200).json(roleFound);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function destroy(req, res) {
  try {
    await Role.findByIdAndDelete(req.param.id);
    res.status(200).json("Rol eliminado");
  } catch (err) {
    res.status(500).json("Error del servidor :(");
  }
}

export default {
  create,
  find,
  list,
  update,
  destroy,
};