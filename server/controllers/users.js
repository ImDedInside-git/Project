import User from "../models/User.js";

/* READ */
export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.stats(200).json(user);
    
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const getUserBookings = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        const bookings = await Promise.all(
            user.bookings.map((id) => User.findById(id))
        );
        const formattedBookings = bookings.map(
            ({userID, flightID, bookingDateTime, numPassengers, totalPrice}) => {
                return {userID, flightID, bookingDateTime, numPassengers, totalPrice}
            }
        );
        res.stats(200).json(formattedBookings);
        
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

/* UPDATE */
export const addRemoveBooking = async (req, res) => {
    try {
      const { id, flightID } = req.params;
      const user = await User.findById(id);
      const flight = await User.findById(flightID);
  
      if (user.bookings.includes(flightID)) {
        user.bookings = user.bookings.filter((id) => id !== flightID);
        flight.bookings = flight.bookings.filter((id) => id !== id);
      } else {
        user.bookings.push(flightID);
        flight.bookings.push(id);
      }
      await user.save();
      await flight.save();
  
      const bookings = await Promise.all(
        user.bookings.map((id) => User.findById(id))
      );
      const formattedbookings = bookings.map(
        ({ userID, flightID, bookingDateTime, numPassengers, totalPrice}) => {
            return {userID, flightID, bookingDateTime, numPassengers, totalPrice };
        }
      );
  
      res.status(200).json(formattedbookings);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };