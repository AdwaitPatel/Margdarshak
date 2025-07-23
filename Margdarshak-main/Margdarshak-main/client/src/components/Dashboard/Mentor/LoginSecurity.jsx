import React from "react";

function LoginSecurity() {
  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold text-[#64b5f6] mb-4">🔐 Login & Security</h1>
      <p className="text-gray-400 mb-6">
        Manage your account credentials, password settings and secure access controls.
      </p>

      <div className="bg-[#1e293b] p-6 rounded-xl shadow-md border border-gray-700 space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">Email Address</h2>
          <p className="text-gray-400">hardik.mentor@margdarshak.com</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Change Password</h2>
          <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 text-sm">
            Update Password
          </button>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">2-Factor Authentication</h2>
          <p className="text-gray-400 mb-2">Currently: <span className="text-green-400">Enabled</span></p>
          <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 text-sm">
            Manage 2FA
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginSecurity;
