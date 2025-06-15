import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { userContext } from '../Context/UserContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => setIsMenuOpen(false);

  const navigate = useNavigate();
  const { userToken, setUserToken } = useContext(userContext);

  function logOut() {
    navigate('/login');
    localStorage.removeItem('userToken');
    setUserToken(null);
  }

  const linkBaseClass = 'block py-2 px-3 text-white relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-px after:bg-yellow-500 after:transition-all after:duration-300';
  const activeLinkClass = 'after:w-full';
  const inactiveLinkClass = 'after:w-0 hover:after:w-full hover:after:left-0';

  return (
    <nav className="backdrop-blur-md bg-black/30 fixed top-0 left-0 w-full z-50 border-b border-white/10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">GearGrid</span>
        </div>

        <button
          onClick={() => setIsMenuOpen(prev => !prev)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0">
            {userToken && <>
              <li>
                <NavLink
                  to="/"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `${linkBaseClass} ${isActive ? activeLinkClass : inactiveLinkClass}`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/listing"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `${linkBaseClass} ${isActive ? activeLinkClass : inactiveLinkClass}`
                  }
                >
                  Listings
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/brands"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `${linkBaseClass} ${isActive ? activeLinkClass : inactiveLinkClass}`
                  }
                >
                  Brands
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `${linkBaseClass} ${isActive ? activeLinkClass : inactiveLinkClass}`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `${linkBaseClass} ${isActive ? activeLinkClass : inactiveLinkClass}`
                  }
                >
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/save"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `block py-2 px-3 text-white bg-black/15 rounded-md hover:bg-black/30 transition-all duration-300 ${isActive ? 'bg-black/30' : ''}`
                  }
                >
                  <span className="flex items-center">
                    <i className="fa-regular fa-bookmark text-sm me-2"></i>
                    Saved
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/login"
                  onClick={() => {
                    logOut();
                    closeMobileMenu();
                  }}
                  className={({ isActive }) =>
                    `block py-2 px-3 text-white hover:text-red-300 relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-px after:bg-red-300 after:transition-all after:duration-300 ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full hover:after:left-0'}`
                  }
                >
                  Log out
                </NavLink>
              </li>
            </>}

            {!userToken && <>
              <li>
                <NavLink
                  to="/login"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `${linkBaseClass} ${isActive ? activeLinkClass : inactiveLinkClass}`
                  }
                >
                  Sign in
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/register"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `${linkBaseClass} ${isActive ? activeLinkClass : inactiveLinkClass}`
                  }
                >
                  Sign up
                </NavLink>
              </li>
            </>}
          </ul>
        </div>
      </div>
    </nav>
  );
}
