import mongoose from "mongoose";
import { z } from "zod";

const customersMongooseSchema = new mongoose.Schema({
  isGold: { type: Boolean, default: false },
  name: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
  },
  phone: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
  },
});

const Customer = mongoose.model("Customer", customersMongooseSchema);

module.exports.Customer = Customer;
