import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='bg-pink-200 text-red-900 flex justify-between px-20 py-4'>
      <div className='font-bold text-2xl cursor-pointer'>
        <Link to='/'>DrogaFarma</Link>
      </div>

      <div className='flex items-center'>
        <ul className='flex gap-8'>
          <li>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
          </li>
          <li>
            <Link to='/cadcategoria' className='hover:underline'>Cadastrar Categoria</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
