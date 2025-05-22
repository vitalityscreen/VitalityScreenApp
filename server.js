const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const surveyRoutes = require("./routes/survey");
const uploadRoutes = require("./routes/upload");
const scoringEngine = require("./utils/scoringEngine");
const actionsEngine = require("./utils/actionsEngine");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/vitalityscreen", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/survey", surveyRoutes);
app.use("/api/upload", uploadRoutes);

// Risk scoring
app.post("/api/score", (req, res) => {
  const result = scoringEngine.calculateRisk(req.body);
  res.json(result);
});

// Daily actions
app.post("/api/actions", (req, res) => {
  const actions = actionsEngine.generateActions(req.body);
  res.json(actions);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
