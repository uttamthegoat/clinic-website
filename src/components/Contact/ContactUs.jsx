'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

// Assuming orgData is imported from a separate file
const orgData = {
  name: "Jay Smiles Dentistry",
  address: "123 Dental Street, City, State 12345",
  phone: "(123) 456-7890",
  email: "contact@jaysmiles.com",
  hours: [
    { day: "Monday-Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ]
}

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-black mb-4">Contact {orgData.name}</h1>
        <p className="text-center text-black mb-12 max-w-2xl mx-auto">
          We&apos;re here to help and answer any questions you might have. We look forward to hearing from you.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-[#FFF1F3] rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-[#FF4D6A] mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF4D6A] focus:border-transparent transition duration-200"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF4D6A] focus:border-transparent transition duration-200"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF4D6A] focus:border-transparent transition duration-200"
                  placeholder="(123) 456-7890"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF4D6A] focus:border-transparent transition duration-200 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF4D6A] text-white py-3 px-6 rounded-lg hover:bg-[#FF758A] focus:outline-none focus:ring-2 focus:ring-[#FF4D6A] focus:ring-offset-2 transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-[#FFF1F3] rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-[#FF4D6A] mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white transition-colors duration-200">
                <MapPin className="w-6 h-6 text-[#FF4D6A] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-black">Our Location</h3>
                  <p className="text-black mt-1">{orgData.address}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white transition-colors duration-200">
                <Phone className="w-6 h-6 text-[#FF4D6A] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-black">Phone Number</h3>
                  <p className="text-black mt-1">{orgData.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white transition-colors duration-200">
                <Mail className="w-6 h-6 text-[#FF4D6A] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-black">Email Address</h3>
                  <p className="text-black mt-1">{orgData.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white transition-colors duration-200">
                <Clock className="w-6 h-6 text-[#FF4D6A] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-black">Office Hours</h3>
                  <ul className="text-black mt-1 space-y-1">
                    {orgData.hours.map((hour) => (
                      <li key={hour.day} className="flex justify-between">
                        <span className="font-medium">{hour.day}:</span>
                        <span>{hour.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}