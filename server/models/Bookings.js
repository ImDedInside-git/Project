import mongoose from "mongoose";

const BookingsSchema = new mongoose.Schema(
    {
        bookingID: {
            type: String,
            required: true,
        },
        userID: {
            type: String,
            ref: 'User',
            required: true,
        },
        flightID: {
            type: String,
            ref: 'Flights',
            required: true,
        },
        bookingDateTime: {
            type: Date,
            default: Date.now,
        },
        numPassengers: {
            type: Number,
            required: true,
        },
        totalPrice: {
            type: Number,
            required: true,
        },
        /* Add more as needed */
    }
);

const Bookings = mongoose.model("Bookings", BookingsSchema);
export default Bookings;
