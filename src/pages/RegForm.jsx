import Navbar from "../navbars/Navbar.jsx";

export const RegForm = () => {
    return (
        <>
            <Navbar/>
            <div className='justify-center w-full h-[618px] bg-red-300 flex flex-row justify-center'>
                <div className='w-full h-[530px] bg-green-300 text-center'>
                    <form action="#" className='bg-blue-400 mt-[45px]'>
                        <h1>Hello World!</h1>
                    </form>
                </div>
            </div>
        </>
    )
}
