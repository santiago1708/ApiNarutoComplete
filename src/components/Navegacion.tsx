import { Link } from "react-router-dom";

export default function Navegacion() {
    return (
        <nav className="flex justify-evenly items-center gap-5">
            <Link to={'/'}>
            <button className='w-28 h-10 rounded-md text-lg 
                bg-gradient-to-r from-yellow-300 to-orange-600
                hover:bg-gradient-to-t hover:from-orange-400 hover:to-yellow-600
                hover:opacity-70 transition-all duration-500 hover:text-white
                '>Home</button>
            </Link>
            <Link to={'/favorite'}>
            <button className='w-28 h-10 rounded-md text-lg 
                bg-gradient-to-r from-yellow-300 to-orange-600
                hover:bg-gradient-to-t hover:from-orange-400 hover:to-yellow-600
                hover:opacity-70 transition-all duration-500 hover:text-white
                '>Favoritos</button>
            </Link>
        </nav>
    )
}
