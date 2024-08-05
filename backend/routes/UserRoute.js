import mongoose from "mongoose";
import User from "../models/userModel.js";
import { Router } from "express";
import express from "express";
const router = Router();
// Get method
router.get("/", async (req, res) => {
  try {
    const userData = await User.find();
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});
// Post Method
router.post("/", async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const userData = await User.create({
      name: name,
      email: email,
      age: age,
    });
    res.status(201).json(userData);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
});

//Get single user
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: err.message });
  }
});

// Delete Method
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findByIdAndDelete({ _id: id });
    res.status(200).json(singleUser);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Update Method
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
