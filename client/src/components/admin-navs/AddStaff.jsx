import React, { useState } from 'react'

const AddStaff = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        role: "receptionist",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Backend call ya validation yahan hogi
        console.log("Adding new staff:", form);
        // Clear form ya redirect
    };

    return (
        <>
            <div className="p-6 bg-gray-100 min-h-screen">
                <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="px-6 py-4 border-b">
                        <h1 className="text-2xl font-semibold text-gray-800">
                            Add New Staff
                        </h1>
                    </div>
                    <div className="px-6 py-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full border px-3 py-2 rounded text-black"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full border px-3 py-2 rounded text-black"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    className="w-full border px-3 py-2 rounded text-black"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">Role</label>
                                <select
                                    name="role"
                                    value={form.role}
                                    onChange={handleChange}
                                    className="w-full border px-3 py-2 rounded text-black"
                                >
                                    <option value="manager">Manager</option>
                                    <option value="receptionist">Receptionist</option>
                                    <option value="housekeeping">Housekeeping</option>
                                    <option value="maintenance">Maintenance</option>
                                    {/* Aur roles agar chaho add karo */}
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded"
                            >
                                Create Staff
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddStaff
