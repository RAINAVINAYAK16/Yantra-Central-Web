import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Lock, Mail } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ onSignUpClick, setIsAuthenticated }) => {
  SignIn.propTypes = {
    onSignUpClick: PropTypes.func.isRequired,
    setIsAuthenticated: PropTypes.func.isRequired,
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock authentication (Replace with actual API call)
    if (email === "vraina03@gmail.com" && password === "OmSaiNath!123") {
      setIsAuthenticated(true); // Update authentication state
      navigate("/afterlogin"); // Redirect to AfterLogin page
    } else {
      alert("Invalid credentials. Try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 relative"
      style={{
        background:
          "radial-gradient(circle, #d3eafd 0%,rgb(140, 210, 245) 40%, #e7e9f3 100%)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 p-4">
        {/* Header */}
        <div className="flex justify-between items-start w-full">
          <h1
            className="text-2xl font-bold text-gray-900"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Aqua Twin
          </h1>
          <div className="flex items-center gap-2">
            <span
              className="text-sm text-gray-600"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Do not have an account?
            </span>
            <button
              onClick={onSignUpClick}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-md space-y-8">
        {/* Main Content */}
        <div className="mt-16 space-y-6">
          <h2
            className="text-center text-2xl font-semibold text-gray-900"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Log in to your account
          </h2>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 text-white py-3 px-4 rounded-full bg-[#EE4B2B] hover:bg-[#D8432A] transition-colors">
              <FontAwesomeIcon icon={faGoogle} className="w-5 h-5" />
              Log in with GOOGLE
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-blue-900 text-white py-3 px-4 rounded-full hover:bg-blue-950">
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              Log in with LINKEDIN
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span
                className="px-2 bg-gray-50 text-gray-500"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(134, 250, 238, 0.6) 0%, rgba(135, 206, 250, 0.8) 100%)",
                }}
              >
                or
              </span>
            </div>
          </div>

          {/* Login Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="text-sm flex justify-center">
              <p className="text-black-500">Forgot password?</p>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
