import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import {
    getAllFlights,
    getFlightById,
    createFlight,
    updateFlight,
    deleteFlight,
} from '../controllers/flights.js';
const router = express.Router();

// Routes
router.get('/', getAllFlights);
router.get('/:id', getFlightById);
router.post('/', verifyToken, createFlight);
router.put('/:id', verifyToken, updateFlight);
router.delete('/:id', verifyToken, deleteFlight);

export default router;


// import express from "express";
// import {
//     getFlights,
//     getUserFlights,
// } from "../controllers/flights.js";
// import { verifyToken } from "../middleware/auth.js"

// const router = express.Router();

// /* READ */
// router.get("/", verifyToken, getFlights);
// router.get("/:userId/flights", verifyToken, getUserFlights);
// // router.get("/:id", verifyToken, getUser);
// // router.get(":/id/bookings", verifyToken, getUserBookings);

// /* UPDATE */
// router.patch("/:id/:bookingId", verifyToken, addBooking);
// // router.patch("/:id/:bookingId", verifyToken, addRemoveBooking);

// export default router;