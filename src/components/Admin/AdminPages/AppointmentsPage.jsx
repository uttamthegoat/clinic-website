import { useState, useEffect } from 'react';
import axiosInstance from '../../../utils/axiosConfig';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AppointmentsPage = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get('/admin/appointments')
      .then(res => {
        setAppointments(res.data.appointments);
        setLoading(false);
      })
      .catch(err => {
        if(err.response.data.success === 'logout') {
          toast.error(err.response.data.message)
          navigate('/auth')
        }
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading appointments...</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Appointments</h2>
      <div className="grid gap-4">
        {appointments.map((appointment) => (
          <div 
            key={appointment._id} 
            className="p-4 bg-white rounded-lg shadow border border-gray-100"
          >
            <h3 className="font-semibold">{appointment.patientName}</h3>
            <p className="text-gray-600">{new Date(appointment.date).toLocaleDateString()}</p>
            <p className="text-gray-600">{appointment.service}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsPage;