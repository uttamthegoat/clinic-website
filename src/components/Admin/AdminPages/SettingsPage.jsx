import React from 'react'

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
      
      <div className="space-y-4">
        <div className="p-4 bg-white rounded-lg shadow border border-gray-100">
          <h3 className="font-semibold mb-2">Profile Settings</h3>
          <div className="space-y-2">
            <button className="px-4 py-2 bg-[#FFB5B5] text-white rounded hover:bg-[#ff9b9b]">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow border border-gray-100">
          <h3 className="font-semibold mb-2">Notification Preferences</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Email Notifications</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>SMS Notifications</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage