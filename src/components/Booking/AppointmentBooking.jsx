import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DatePicker from 'react-datepicker'
import { Calendar } from 'lucide-react'
import 'react-datepicker/dist/react-datepicker.css'
import { useForm } from 'react-hook-form'
import { orgData } from '../../assets/data'


export default function AppointmentBooking() {
  const { services, timeSlots } = orgData;
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    setValue, 
    watch 
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      service: '',
      date: null,
      slot: ''
    }
  })
  const [focusedField, setFocusedField] = useState(null)
  const onSubmit = (data) => {
    console.log("Form submitted:", data)
    alert("Appointment booked successfully!")
  }
  const handleDateChange = (date) => {
    setValue('date', date)
  }

  const inputVariants = {
    focused: { scale: 1.02, boxShadow: "0 0 0 2px #FFB5B5" },
    unfocused: { scale: 1, boxShadow: "0 0 0 0px #FFB5B5" }
  }

  return (
    <div className="py-28 bg-[#fff9f9] px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div className="md:flex">
          <motion.div 
            className="md:flex-shrink-0 md:w-1/2 relative h-64 md:h-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              className="w-full h-full object-cover md:absolute md:inset-0" 
              src="https://www.interioracebd.com/images/soft-natural-light-filled-wellness-studios.jpg" 
              alt="Dental clinic" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent md:hidden"></div>
          </motion.div>
          <div className="p-8 md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="uppercase tracking-wide text-sm text-[#FFB5B5] font-semibold mb-1"
            >
              Book Your Appointment
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="block mt-1 text-2xl leading-tight font-medium text-black mb-6"
            >
              Schedule Your Visit to Our Dental Clinic
            </motion.h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {['firstName', 'lastName', 'email'].map((field) => (
                <motion.div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1">
                    {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                  </label>
                  <motion.input
                    {...register(field, { 
                      required: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
                      pattern: field === 'email' ? {
                        value: /\S+@\S+\.\S+/,
                        message: "Email is invalid"
                      } : undefined
                    })}
                    type={field === 'email' ? 'email' : 'text'}
                    onFocus={() => setFocusedField(field)}
                    onBlur={() => setFocusedField(null)}
                    variants={inputVariants}
                    animate={focusedField === field ? "focused" : "unfocused"}
                    transition={{ duration: 0.2 }}
                    placeholder={`Enter your ${field}`}
                    className={`mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 shadow-sm focus:border-[#FFB5B5] focus:ring focus:ring-[#FFB5B5] focus:ring-opacity-50 px-4 py-3 text-base transition-colors duration-200 ease-in-out ${errors[field] ? 'border-red-500' : ''}`}
                  />
                  <AnimatePresence>
                    {errors[field] && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-1 text-xs text-red-500"
                      >
                        {errors[field]?.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              <motion.div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                <motion.select
                  {...register('service', { required: "Please select a service" })}
                  onFocus={() => setFocusedField('service')}
                  onBlur={() => setFocusedField(null)}
                  variants={inputVariants}
                  animate={focusedField === 'service' ? "focused" : "unfocused"}
                  transition={{ duration: 0.2 }}
                  className={`mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 shadow-sm focus:border-[#FFB5B5] focus:ring focus:ring-[#FFB5B5] focus:ring-opacity-50 px-4 py-3 text-base transition-colors duration-200 ease-in-out ${errors.service ? 'border-red-500' : ''}`}
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.title}>{service.title}</option>
                  ))}
                </motion.select>
                <AnimatePresence>
                  {errors.service && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-1 text-xs text-red-500"
                    >
                      {errors.service.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <div className="mt-1 relative">
                  <DatePicker
                    selected={watch('date')}
                    onChange={handleDateChange}
                    dateFormat="MMMM d, yyyy"
                    minDate={new Date()}
                    className={`block w-full rounded-md border border-gray-300 bg-gray-50 shadow-sm focus:border-[#FFB5B5] focus:ring focus:ring-[#FFB5B5] focus:ring-opacity-50 px-4 py-3 text-base transition-colors duration-200 ease-in-out ${errors.date ? 'border-red-500' : ''}`}
                  />
                  <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                </div>
                <AnimatePresence>
                  {errors.date && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-1 text-xs text-red-500"
                    >
                      {errors.date.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div>
                <label htmlFor="slot" className="block text-sm font-medium text-gray-700 mb-1">Time Slot</label>
                <motion.select
                  {...register('slot', { required: "Please select a time slot" })}
                  onFocus={() => setFocusedField('slot')}
                  onBlur={() => setFocusedField(null)}
                  variants={inputVariants}
                  animate={focusedField === 'slot' ? "focused" : "unfocused"}
                  transition={{ duration: 0.2 }}
                  className={`mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 shadow-sm focus:border-[#FFB5B5] focus:ring focus:ring-[#FFB5B5] focus:ring-opacity-50 px-4 py-3 text-base transition-colors duration-200 ease-in-out ${errors.slot ? 'border-red-500' : ''}`}
                >
                  <option value="">Select a time slot</option>
                  {timeSlots.map((slot, index) => (
                    <option key={index} value={slot}>{slot}</option>
                  ))}
                </motion.select>
                <AnimatePresence>
                  {errors.slot && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-1 text-xs text-red-500"
                    >
                      {errors.slot.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#FFB5B5] hover:bg-[#ff9b9b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFB5B5]"
              >
                Book Appointment
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}