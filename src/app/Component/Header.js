import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* <!-- Left Side: Logo and Dropdown --> */}
          <div className="flex items-center space-x-4">
            {/* <!-- Logo --> */}
            <Link href="/" className="text-2xl font-bold text-gray-800">
              BArk
            </Link>

            {/* <!-- Dropdown --> */}
          </div>

          {/* <!-- Right Side: Login Link and Join Button --> */}
          <div className="flex items-center space-x-4">
            {/* <!-- Login Link --> */}
            <Link href="/signin" className="text-gray-700 hover:text-gray-900">
              Login
            </Link>

            {/* <!-- Join as Professional Button --> */}
            <Link
              href="/signup"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Join as a Professional
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
