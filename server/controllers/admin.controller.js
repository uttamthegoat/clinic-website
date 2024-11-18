/* eslint-disable no-unused-vars */
import Appointment from "../models/appointment.model.js";
import ExpressError from "../utils/ExpressError.js";

export const getAllAppointments = async (req, res) => {
  const appointments = await Appointment.find();
  res.json({
    success: true,
    message: "Appointments fetched successfully",
    appointments,
  });
};

export const makeAppointment = async (req, res) => {
  const { firstName, lastName, email, date, slot, service } = req.body;

  // Check for existing appointment on the same date and time slot
  const existingAppointment = await Appointment.findOne({
    date: new Date(date),
    slot: slot,
  });

  if (existingAppointment) {
    throw new ExpressError(400, false, "Please choose a different time slot! This slot is already booked.");
  }

  // Create new appointment if slot is available
  const appointment = await Appointment.create({
    firstName,
    lastName,
    email,
    date,
    slot,
    service,
  });

  res.json({
    success: true,
    message: "Appointment created successfully",
  });
};
