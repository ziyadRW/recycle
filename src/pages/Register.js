import React from "react";

const Register = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/resources/Forest.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-white mb-6">Registration</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white text-left">Username</label>
            <input
              type="text"
              className="w-full p-2 border border-white text-white bg-transparent rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-left">Enter your email</label>
            <input
              type="email"
              className="w-full p-2 border border-white text-white bg-transparent rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-left">Enter your password</label>
            <input
              type="password"
              className="w-full p-2 border border-white text-white bg-transparent rounded-lg"
              required
            />
          </div>
          <div className="flex items-center mb-4 text-white">
            <input type="checkbox" className="mr-2" />
            <label>I agree to the terms</label>
          </div>
          <button className="w-full bg-white text-black font-semibold p-2 rounded-lg hover:bg-gray-300 transition">
            Register
          </button>
          <div className="mt-4">
            <p className="text-white">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
