const users = require("../models/schema");
const express = require("express");
const router = new express.Router();

router.post("/users", async (req, res) => {
  try {
    const userSchema = new users(req.body);
    await userSchema.save();
    res.status(200).send(req.body);
    console.log("Data send sucssefully");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
router.get("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getUsers = await users.findById(_id);
    res.send(getUsers);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
router.patch("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateUser = await users.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateUser);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const deleteUsers = await users.findByIdAndDelete(req.params.id);
    res.send(deleteUsers);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
