import express from "express";
import {
    getUser,
    getUserBookings,
    addRemoveBooking
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js"

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser);
router.get(":/id/bookings", verifyToken, getUserBookings);

/* UPDATE */
router.patch("/:id/:bookingId", verifyToken, addRemoveBooking);

export default router;