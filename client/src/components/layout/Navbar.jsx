import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[88px] flex items-center justify-center z-[50] bg-[#f2f2f2] py-4">
        <div className="container flex items-center justify-between gap-4">
          <Link to="/">
            <h1 className="text-xl font-bold">Workout todo</h1>
          </Link>

          <div className="flex items-center justify-between gap-3 ">
            <NavLink to="/">
              <p className="text-sm px-4 py-2 hover:bg-[#ffffff]">Home</p>
            </NavLink>

            <NavLink to="/about">
              <p className="text-sm px-4 py-2 hover:bg-[#ffffff]">About</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
