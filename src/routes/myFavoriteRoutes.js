const express = require("express");
const {
  addToFavorites,
  getUserFavorites,
  removeFavorite,
  getUserTotalFavorites,
} = require("../controllers/favoriteController");

const checkAuthentication = require("../middlewares/checkAuthentication");

const favoriteRouter = express.Router();

favoriteRouter.post("/", checkAuthentication, addToFavorites);
favoriteRouter.get(
  "/my-total-favorites",
  checkAuthentication,
  getUserTotalFavorites
);
favoriteRouter.get("/:email", checkAuthentication, getUserFavorites);
favoriteRouter.delete("/:id", checkAuthentication, removeFavorite);

module.exports = favoriteRouter;
