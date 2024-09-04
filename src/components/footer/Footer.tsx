
function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-pink-200 text-red-900">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>Fármacia | Copyright: {data} </p>
                </div>
            </div>

        </>
    )
}

export default Footer