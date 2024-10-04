import Review from "../models/Review.js";

async function create(req, res) {
  try {
    const newReview = await Review.create({
      user: req.body.user,
      manga: req.body.manga,
    });
    res.json(
        await newReview.populate("user manga")
      );
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function find(req, res) {
  try {
    const reviewId = req.params.id;
    const review = await Review.findById(reviewId);
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function list(req, res) {
  try {
    const userlist = await Review.find();
    res.status(200).json(userlist);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function update(req, res) {
  try {
    const reviewFound = await Review.findById(req.params.id);

    reviewFound.user = req.reviewFound.user || reviewFound.user;
    reviewFound.manga = req.reviewFound.manga || reviewFound.manga;

    await reviewFound.save();
    res.status(200).json(reviewFound);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function destroy(req, res) {
  try {
    await Review.findByIdAndDelete(req.param.id);
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