import mongoose from "mongoose";

const FlightsSchema = new mongoose.Schema(
    {
        airlineID: {
            type: String,
            required: true,
        },
        flightID: {
            type: String,
            required: true,
        },
        departureAirport: {
            type: String,
            required: true,
        },
        arrivalAirport: {
            type: String,
            required: true,
        },
        departureDateTime: {
            type: Date,
            required: true,
        },
        arrivalDateTime: {
            type: Date,
            required: true,
        },
        availableSeats: {
            type: Number,
            required: true,
        },
        ticketPrice: {
            type: Number,
            required: true,
        },
        flightStatus: {
            type: String,
            required: true,
        },
        /* Add more as needed */
    }
);

const Flights = mongoose.model("Flights", FlightsSchema);
export default Flights;
