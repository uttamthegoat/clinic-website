import { useState } from 'react'
import { orgData } from '../assets/data'

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState(null)

  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using the services provided by Jay Smiles Dentistry, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services."
    },
    {
      title: "Use of Services",
      content: "Our dental services are provided for personal, non-commercial use only. You agree not to misuse any services or content provided on our website or in our office."
    },
    {
      title: "Privacy Policy",
      content: "Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding your personal information."
    },
    {
      title: "Appointment Cancellation",
      content: "We require at least 24 hours notice for cancellation of appointments. Failure to provide adequate notice may result in a cancellation fee."
    },
    {
      title: "Payment Terms",
      content: "Payment is due at the time services are rendered unless prior arrangements have been made. We accept various forms of payment including cash, credit cards, and approved insurance plans."
    },
    {
      title: "Limitation of Liability",
      content: "Jay Smiles Dentistry shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages resulting from your use of our services or any content on our website."
    },
    {
      title: "Changes to Terms",
      content: "We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes indicates your acceptance of the new terms."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light-bkgrnd to-secondary-light-bkgrnd py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-primary-dark-text mb-8 text-center">Terms and Conditions</h1>
        <p className="text-secondary-dark-text mb-8 text-center">
          Welcome to {orgData.name}. Please read these terms and conditions carefully before using our services.
        </p>
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="bg-tertiary-light-bkgrnd rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setActiveSection(activeSection === index ? null : index)}
                className="w-full text-left px-6 py-4 focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-primary-dark-text">{section.title}</h2>
                  <svg
                    className={`w-6 h-6 text-buttons-blue transform transition-transform duration-200 ${
                      activeSection === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {activeSection === index && (
                <div className="px-6 pb-4">
                  <p className="text-secondary-dark-text">{section.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}