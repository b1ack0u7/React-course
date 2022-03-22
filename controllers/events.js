const { response } = require('express');
const Event = require('../models/EventMDL');

const getEvents = async(req, res = response) => {
  const events = await Event.find().populate('user', 'name');
  res.status(201).json({
    ok: true,
    events
  });
}

const createEvent = async(req, res = response) => {
  const event = new Event(req.body);
  event.user = req.uid;

  try {
    const eventSave = await event.save();

    res.status(201).json({
      ok: true,
      evento: eventSave,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Contacte al administrador',
    });
  }
}

const updateEvent = async(req, res = response) => {
  const eventID = req.params.id;

  try {
    const event = await Event.findById(eventID);
    if(!event) {
      res.status(404).json({
        ok: false,
        msg: 'No existe algun evento con ese ID',
      });
    }

    if(event.user.toString() !== req.uid) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegios sobre este evento',
      });
    }

    const newEvent = {...req.body, user:req.uid}

    const eventUpdated = await Event.findByIdAndUpdate(eventID, newEvent, {new: true});

    res.json({
      ok:true,
      msg: eventUpdated,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Contacte al administrador',
    });
  }
}

const deleteEvent = async(req, res = response) => {
  const eventID = req.params.id;

  try {
    const event = await Event.findById(eventID);
    if(!event) {
      res.status(404).json({
        ok: false,
        msg: 'No existe algun evento con ese ID',
      });
    }

    if(event.user.toString() !== req.uid) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegios sobre este evento',
      });
    }

    await Event.findByIdAndDelete(eventID);

    res.json({
      ok:true,
      msg: 'Elemento borrado',
    });

  } catch (error) {
    res.status(201).json({
      ok: false,
      msg: 'Contacte al administrador'
    });
  }
}

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
}