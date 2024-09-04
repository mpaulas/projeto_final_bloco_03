function Home() {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className="flex flex-col text-center w-full md:w-3/5 p-4 items-center justify-center">
                <h1 className="text-4xl mt-20 font-bold text-red-900">DrogaFarma</h1>
                <p className="text-2xl mt-10 text-red-900">
                    Navegue por nossos produtos disponíveis!
                </p>
            </div>

            <div 
                className="flex justify-center items-center w-full md:w-2/5 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://images.pexels.com/photos/3683046/pexels-photo-3683046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", height: '999px' }}>
                {/* Conteúdo adicional, se necessário */}
            </div>
        </div>
    );
}

export default Home;
