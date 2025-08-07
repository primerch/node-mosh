const debug = require("debug")("app:debug");
const { z } = require("zod");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const { Customer } = require("./customer");

const customersZodSchema = z.object({
  isGold: z.boolean(),
  name: z.string().min(5).max(50),
  phone: z.string().min(5).max(50),
});

// GET
router.get("/", async (req, res) => {
  const customers = await Customer.find();
  res.status(200).send(customers);
});

// GET BY ID
router.get("/:id", async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer) return res.status(404).send("Cannot find the customer");
  res.status(200).send(customer);
});

// POST:
router.post("/", async (req, res) => {
  try {
    // ZOD VALIDATION
    const validatedData = customersZodSchema.parse(req.body);

    // MONGOOSE VALIDATION
    const newCustomer = new Customer(validatedData);
    const result = await newCustomer.save();

    res.status(200).send(result);
  } catch (e) {
    if (e instanceof z.ZodError) {
      return res.status(400).send(e.issues.map((i) => i.message).join(", "));
    } else if (e.name === "ValidationError") {
      return res.status(400).send(e.message);
    } else {
      return res.status(500).send("⚠️Server Errors...");
    }
  }
});

// PUT
router.put("/:id", async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer)
    return res
      .status(404)
      .send("Cannot find the customer you are trying to update");

  try {
    const validatedData = customersZodSchema.parse(req.body);
  } catch (e) {
    if (e instanceof z.ZodError) {
      return res.status(400).send(e.issues.map((i) => i.message).join(","));
    } else if (e.name === "ValidationError") {
      return res.status(400).send(e.message);
    } else {
      return res.status(500).send("Server Error...");
    }
  }
});

module.exports.customersRouter = router;
