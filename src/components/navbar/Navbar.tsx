import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='bg-pink-200 text-red-900 flex justify-between px-20 py-4'>
      <div className='font-bold text-2xl cursor-pointer'>
        <Link to='/'>DrogaFarma</Link>
      </div>
    </div>
  );
}

export default Navbar;
