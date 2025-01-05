const express = require("express");
const jwt = require("jsonwebtoken");
const Document = require("../models/Document");

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access denied" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

// Get all documents
router.get("/", authenticateToken, async (req, res) => {
  const documents = await Document.find();
  res.json(documents);
});

// Create a new document
router.post("/create", authenticateToken, async (req, res) => {
  const newDoc = new Document();
  await newDoc.save();
  res.json(newDoc);
});

module.exports = router;