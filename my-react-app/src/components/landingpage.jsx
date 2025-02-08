import Navbar from "../components/navbar";

export default function LandingPage() {
  return (
    <div className="font-['Open_Sans']">
      <Navbar />
      <main className="flex flex-col items-center justify-center h-screen bg-[#A6F1E0] text-center p-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Product</h1>
        <p className="text-lg max-w-2xl">
          Experience the best solution for your needs with our product. Sign up now to get started!
        </p>
      </main>
    </div>
  );
}



/*import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="bg-[#A6F1E0] p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-10 mr-2" />
        <span className="text-lg font-semibold">Product Name</span>
      </div>
      <div className="flex space-x-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/operations" className="hover:underline">Operations</Link>
        <Link to="/contact" className="hover:underline">Contact Us</Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/signin">
          <Button variant="outline">Sign In</Button>
        </Link>
        <Link to="/signup">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </nav>
  );
}
*/