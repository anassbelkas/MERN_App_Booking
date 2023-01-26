import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

//CRUD
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedhotel = await newHotel.save();
    res.status(200).json(savedhotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
