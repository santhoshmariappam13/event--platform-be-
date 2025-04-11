
const Event = require('../models/Event.js');

const createEvent = async (req, res) => {
  const { title, description, date, location, ticketTypes } = req.body;

  const newEvent = new Event({ title, description, date, location, ticketTypes, createdBy: req.userId });
  await newEvent.save();
  
  res.status(201).json({ event: newEvent });
};

const getEvents = async (req, res) => {
  const events = await Event.find();
  res.status(200).json(events);
};

const getEventById = async (req, res) => {
  const { id } = req.params;  

  try {
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    return res.status(200).json(event);
  } catch (error) {
    console.error('Error fetching event by ID:', error.message);

    return res.status(500).json({
      message: 'An error occurred while fetching the event. Please try again later.',
      error: error.message,  
    });
  }
};

module.exports = { createEvent, getEventById, getEvents };
