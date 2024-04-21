import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { register } from "./controllers/auth.js";
import authRoutes from "./routes/auth.js";
import forbiddenRoutes from "./routes/forbidden.js";
import userRoutes from "./routes/users.js";
import flightsRoutes from "./routes/flights.js";
import { verifyToken } from "./middleware/auth.js";
import { createFlight } from "./controllers/flights.js";
import User from "./models/User.js";
import Flights from "./models/Flights.js";
import { users, flights } from "./data/index.js";
import postRoutes from "./routes/posts.js";
import { createPost } from "./controllers/posts.js";

// * CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// * FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

/* ROUTES WITH FILES */
app.post("/auth/register", upload.single("picture"), register);
app.post("/flights", verifyToken, upload.single("picture"), createFlight);
app.post("/posts", verifyToken, upload.single("picture"), createPost);


// Define a route to fetch flights
app.get("/flights", async (req, res) => {
  const { from, to, arrivalDate } = req.query;

  try {
    const flights = await Flights.find({
      departureAirport: from,
      arrivalAirport: to,
      arrivalDateTime: { $lte: new Date(arrivalDate) },
    });
    res.json(flights);
  } catch (error) {
    console.error("Error fetching flights:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

// * ROUTES */
app.use("/auth", authRoutes);
app.use("/", forbiddenRoutes);
app.use("/users", userRoutes);
app.use("/flights", flightsRoutes);
app.use("/posts", postRoutes);


// * MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server running on Port ${PORT}: http://localhost:${PORT}`)
    );

    // ! ADD DATA **RUN ONCE ONLY**
    // User.insertMany(users);
    // Flights.insertMany(flights);
  })
  .catch((err) => console.log(`${err} did not connect`));
