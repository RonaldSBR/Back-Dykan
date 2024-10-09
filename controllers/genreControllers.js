import Genre from "../models/Genre.js";

async function create(req, res) {
  try {
    const newGenre = await Genre.create({
      name: req.body.name,
    });
    res.json(newGenre);
  } catch (err) {
    res.status(500).json("Server error");
  }
}

async function find(req, res) {
  try {
    const genreId = req.params.id;
    const genre = await Genre.findById(genreId);
    res.status(200).json(genre);
  } catch (err) {
    res.status(500).json("Server error");
  }
}

async function list(req, res) {
  try {
    const genreList = await Genre.find();
    res.status(200).json(genreList);
  } catch (err) {
    res.status(500).json("Server error");
  }
}

async function update(req, res) {
  try {
    const genreFound = await Genre.findById(req.params.id);

    genreFound.name = req.body.name || genreFound.name;

    await genreFound.save();
    res.status(200).json(genreFound);
  } catch (err) {
    res.status(500).json("Server error");
  }
}

async function destroy(req, res) {
  try {
    await Genre.findByIdAndDelete(req.params.id);
    res.status(200).json("Genre Removed");
  } catch (err) {
    res.status(500).json("Server errors");
  }
}

export default {
  create,
  find,
  list,
  update,
  destroy,
};
