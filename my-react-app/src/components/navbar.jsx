export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#F8F9FA] shadow-md" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      <div className="flex items-center">
        <div className="w-6 h-4 bg-black mr-2"></div>
        <div className="flex space-x-6">
          <span className="font-bold text-3x1">JALRUDRA</span>
          <button className="nav-link text-sm sm:text-base text-white hover:text-orange-400 transition-colors duration-200">Home</button>
          <button className="nav-link text-sm sm:text-base text-white hover:text-orange-400 transition-colors duration-200">About</button>
          <button className="nav-link text-sm sm:text-base text-white hover:text-orange-400 transition-colors duration-200">Operations</button>
          <button className="nav-link text-sm sm:text-base text-white hover:text-orange-400 transition-colors duration-200">Contact Us</button>
          <button className="bg-black text-white px-4 py-2 rounded">
            Sign in
          </button>
          <button className="bg-black text-white px-4 py-2 rounded">
            Sign up free
          </button>
        </div>
      </div>
    </nav>
  );
}