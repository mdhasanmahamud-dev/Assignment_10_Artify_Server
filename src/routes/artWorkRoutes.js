const express = require("express");
const {
  addNewArtwork,
  getAllArtworks,
  getLatestArtworks,
  getPublicArtWorks,
  fetchArtworkDetails,
  increaseLikeCount,
  getUserTotalArtworks,
} = require("../controllers/artWorkControllers");

const checkAuthentication = require("../middlewares/checkAuthentication");

const artRouter = express.Router();

// Route setup
artRouter.post("/", checkAuthentication, addNewArtwork);
artRouter.get("/", checkAuthentication, getAllArtworks);
artRouter.get("/latest", getLatestArtworks);
artRouter.get("/public", getPublicArtWorks);
artRouter.get("/my-total-artworks",checkAuthentication,  getUserTotalArtworks);
artRouter.get("/:id", checkAuthentication, fetchArtworkDetails);
artRouter.patch("/like/:id", checkAuthentication, increaseLikeCount);



module.exports = artRouter;
