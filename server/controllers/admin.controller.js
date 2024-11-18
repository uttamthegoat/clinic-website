import Appointment from "../models/appointment.model.js"

export const getAllAppointments = async (req, res) => {
    const appointments = await Appointment.find()
    res.json({
        success: true,
        message: 'Appointments fetched successfully',
        appointments
    })
}