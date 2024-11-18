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
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Appointments</h2>
        <div className="bg-blue-100 px-4 py-2 rounded-full">
          <span className="text-blue-800 font-medium">{appointments.length} Total Appointments</span>
        </div>
      </div>

      <div className="grid gap-6">
        {appointments.map((appointment) => (
          <div 
            key={appointment._id} 
            className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-700 font-semibold text-lg">
                      {appointment.firstName[0]}{appointment.lastName[0]}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {appointment.firstName} {appointment.lastName}
                    </h3>
                    <p className="text-gray-600">{appointment.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Created</p>
                  <p className="text-gray-900">{new Date(appointment.createdAt).toLocaleString()}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4 bg-gray-50 p-4 rounded-lg">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Service</p>
                  <p className="font-medium text-gray-900">{appointment.service}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Date</p>
                  <p className="font-medium text-gray-900">
                    {new Date(appointment.date).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Time Slot</p>
                  <p className="font-medium text-gray-900">{appointment.slot}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsPage;