"use client";
import { useState } from "react";

export default function userdetail() {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        pinCode: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Submit form data to API or log it
        console.log('Form Data: ', formData);

        setError('');
    };

    return (
        <>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form>
                        <div className="mb-5">
                            <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                Full Name
                            </label>
                            <input type="text" name="name" id="name" placeholder="Full Name"
                                value={formData.name} onChange={handleChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="mb-5">
                            <label for="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                                Phone Number
                            </label>
                            <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                                value={formData.phone} onChange={handleChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>

                        <div className="mb-5">
                            <label for="email" className="mb-3 block text-base font-medium text-[#07074D]">
                                Email Address
                            </label>
                            <input type="email" name="email" id="email" placeholder="Enter your email"
                                value={formData.email} onChange={handleChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>

                        {/* <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label for="date" className="mb-3 block text-base font-medium text-[#07074D]">
                                        Date
                                    </label>
                                    <input type="date" name="date" id="date"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                                        Time
                                    </label>
                                    <input type="time" name="time" id="time"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                        </div> */}

                        <div className="mb-5">
                            <label for="password" className="mb-3 block text-base font-medium text-[#07074D]">
                                Password 
                            </label>
                            <input type="password" name="password" id="password" placeholder="Enter Password"
                                value={formData.password} onChange={handleChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        
                        <div className="mb-5">
                            <label for="password" className="mb-3 block text-base font-medium text-[#07074D]">
                                Conform Password 
                            </label>
                            <input type="confirmPassword" name="confirmPassword" id="" placeholder="Confrom Password"
                                value={formData.confirmPassword} onChange={handleChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>

                        <div className="mb-5 pt-3">
                            <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                                Address Details
                            </label>
                            <div className="-mx-3 flex flex-wrap">
                               
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange}  id="pinCode" placeholder="Pin-code"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    </div>
                                </div>
                                
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <input type="text" name="location" value={formData.location} onChange={handleChange} id="location" placeholder="Area(location)"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={handleSubmit}
                                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                Sign Up As User
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};