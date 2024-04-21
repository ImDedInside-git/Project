import Flight from '../models/Flights.js';

// Get all flights
const getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single flight by ID
const getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (flight) {
      res.status(200).json(flight);
    } else {
      res.status(404).json({ message: 'Flight not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new flight
const createFlight = async (req, res) => {
  const flight = new Flight(req.body);
  try {
    const newFlight = await flight.save();
    res.status(201).json(newFlight);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a flight by ID
const updateFlight = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (flight) {
      flight.name = req.body.name || flight.name;
      flight.destination = req.body.destination || flight.destination;
      // Update other flight properties as needed
      const updatedFlight = await flight.save();
      res.status(200).json(updatedFlight);
    } else {
      res.status(404).json({ message: 'Flight not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a flight by ID
const deleteFlight = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (flight) {
      await flight.remove();
      res.status(200).json({ message: 'Flight deleted' });
    } else {
      res.status(404).json({ message: 'Flight not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export controller functions
export {
  getAllFlights,
  getFlightById,
  createFlight,
  updateFlight,
  deleteFlight,
};
