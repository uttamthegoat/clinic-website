import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

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
    // Here you would typically send the form data to a server
  }

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">N168W20060 Main Street, Jackson, WI 53037</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-600 mr-3" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">(262) 677-3003</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-600 mr-3" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">info@jacksonfamilydentistrywi.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Office Hours</h3>
                  <ul className="text-gray-600">
                    <li>Monday: 8:00 AM - 5:00 PM</li>
                    <li>Tuesday: 8:00 AM - 7:00 PM</li>
                    <li>Wednesday: 8:00 AM - 5:00 PM</li>
                    <li>Thursday: 8:00 AM - 5:00 PM</li>
                    <li>Friday: 8:00 AM - 12:00 PM</li>
                    <li>Saturday & Sunday: Closed</li>
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