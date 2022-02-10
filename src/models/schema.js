const express = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: Number,
  date: {
    type: Date,
    default: Date.now(),
  },
});
const Schema = new mongoose.model("user", userSchema);
module.exports = Schema;
