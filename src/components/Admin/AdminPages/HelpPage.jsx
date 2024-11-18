import React from 'react'

const HelpPage = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Help & Support</h2>
      
      <div className="grid gap-4">
        <div className="p-4 bg-white rounded-lg shadow border border-gray-100">
          <h3 className="font-semibold mb-2">Frequently Asked Questions</h3>
          <div className="space-y-3">
            <details className="cursor-pointer">
              <summary className="font-medium text-gray-700">How do I manage appointments?</summary>
              <p className="mt-2 text-gray-600 pl-4">
                You can manage appointments through the Appointments page. Click on any appointment to view details or make changes.
              </p>
            </details>
            <details className="cursor-pointer">
              <summary className="font-medium text-gray-700">How do I update my profile?</summary>
              <p className="mt-2 text-gray-600 pl-4">
                Navigate to the Settings page and click on "Edit Profile" to update your information.
              </p>
            </details>
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow border border-gray-100">
          <h3 className="font-semibold mb-2">Contact Support</h3>
          <p className="text-gray-600 mb-4">Need help? Contact our support team:</p>
          <a 
            href="mailto:support@dentalclinic.com" 
            className="inline-block px-4 py-2 bg-[#FFB5B5] text-white rounded hover:bg-[#ff9b9b]"
          >
            Email Support
          </a>
        </div>
      </div>
    </div>
  )
}

export default HelpPage