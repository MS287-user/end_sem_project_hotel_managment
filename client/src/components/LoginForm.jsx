import React from "react";

const LoginForm = () => {
  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h1 className="text-2xl font-semibold text-gray-800">
              Login Form
            </h1>
          </div>
          <div className="px-6 py-6">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  
                  
                  className="w-full border px-3 py-2 rounded text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  
                  
                  className="w-full border px-3 py-2 rounded text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  
                  
                  className="w-full border px-3 py-2 rounded text-black"
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
