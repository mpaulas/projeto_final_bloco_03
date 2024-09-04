function Navbar() {
  return (
    <div className='bg-pink-200 text-red-900 flex justify-between px-20 py-4'>
        {/* padding */}
        <div className='font-bold text-2xl cursor-pointer'> 
            DrogaFarma
        </div>

        <div className='flex items-center'>
            <ul className='flex gap-8'>
                {/* <li className='cursor-pointer'>Produtos</li>
                <li className='cursor-pointer'>Cadastrar Produto</li>
                <li className='cursor-pointer'>Categorias</li>
                <li className='cursor-pointer'>Cadastrar Categoria</li> */}
            </ul>
        </div>
    </div>
  )
}

export default Navbar