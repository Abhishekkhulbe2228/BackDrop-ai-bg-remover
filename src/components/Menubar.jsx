import {useState} from "react";
import { assets } from "../assets/assets";
import { Menu, X} from "lucide-react";
import {Link} from "react-router-dom"
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";

const Menubar = () => { 
    const [menuOpen, setMenuOpen] = useState(false);
    
    const {openSignIn, openSignUp} = useClerk();

    const openRegister = () => {
        setMenuOpen(false)
        openSignUp({})
    }

    const openLogin = () =>  { 
        setMenuOpen(false)
        openSignIn({})
    }



    return ( 
        <nav className="bg-white px-8 py-4 flex justify-between items-center">
            {/* left side : logo + text */}
            <Link className="flex items-center space-x-3 group " to ="/">
                {/* Your logo image with hover effect */}
                <img 
                    src={assets.logo} 
                    alt="SnapClear Logo" 
                    className="h-10 w-10 object-contain cursor-pointer group-hover:scale-105 transition-transform duration-200 rounded-lg shadow-md"
                />
                
                {/* Brand name with styling */}
                <span className="text-2xl font-bold cursor-pointer">
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Back
                    </span>
                    <span className="text-gray-800">
                        Drop
                    </span>
                </span>
            </Link>
            {/* right side : Actions buttons */}
            <div className="hidden md:flex items-center space-x-4">
                <SignedOut>
                    <button className="text-gray-700 hover:text-blue-500 font medium" onClick={openLogin}>
                        Login
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 pd-2 rounded-full transition-all" onClick={openRegister}>
                        Sign up
                    </button>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} /> : <Menu size = {28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
        <div className="absolute top-16 right-8 bg-white shadow-md rounded-md flex flex-col space-y-4 p-4 w-40">

          <SignedOut>
            <button
              className="text-gray-700 hover:text-blue-500 font-medium"
              onClick={openLogin}
            >
              Login
            </button>

            <button
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full transition-all"
              onClick={openRegister}
            >
              Sign up
            </button>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>

        </div>
      )}
        </nav>
    )
}

export default Menubar;