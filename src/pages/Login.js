import React from "react";

const Login = () => {
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
        <h2 className="text-3xl font-bold text-white mb-6">Login</h2>
        <form>
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
          <div className="flex justify-between items-center mb-4 text-white">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="/forget" className="text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
          <button className="w-full bg-white text-black font-semibold p-2 rounded-lg hover:bg-gray-300 transition">
            Log In
          </button>
          <div className="mt-4">
            <p className="text-white">
              Don't have an account?{" "}
              <a href="/register" className="text-blue-500 hover:underline">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
