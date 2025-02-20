import Login from "./Login.jsx";

function Navbar() {
  return (
    <>
      <div>
        <div className="navbar bg-base-100 flex-wrap md:flex-nowrap max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50">
          <div className="navbar bg-base-100 flex-wrap md:flex-nowrap">
            <div className="navbar-start flex-1">
              {/* Hamburger Menu - Visible when width < 1150px */}
              <div className="dropdown lg:hidden">
                <div tabIndex={0} role="button" className="btn btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li><a href="/" className="text-xl">Home</a></li>
                  <li><a href="/course" className="text-xl">Course</a></li>
                  <li><a className="text-xl">Contact</a></li>
                  <li><a className="text-xl">About</a></li>
                </ul>
              </div>

              {/* Logo */}
              <a className="btn btn-ghost text-xl sm:text-lg">
                &lt;CodeWithPushkar&gt;
              </a>
            </div>

            {/* Center Links - Hidden when width < 1150px */}
            <div className="navbar-center hidden xl:flex">
              <ul className="menu menu-horizontal px-1">
                <li ><a href="/" className="text-xl">Home</a></li>
                <li><a href="/course" className="text-xl">Course</a></li>
                <li><a className="text-xl">Contact</a></li>
                <li><a className="text-xl">About</a></li>
              </ul>
            </div>

            {/* Right Side */}
            <div className="navbar-end space-x-2 sm:space-x-1">
              {/* Search Bar - Now Visible on Laptops (Hidden only below 900px) */}
              <div className="hidden md:block">
                <label className="input input-bordered flex items-center gap-2">
                  <input type="text" className="grow" placeholder="Search" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>

              {/* Login Button - Adjusted for Small Screens */}
              <div>
                <a className="btn sm:btn-sm md:btn-md" onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</a>
                < Login/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
