import { Link } from "react-router-dom"
import { Character } from "../types"
import { useCharacterStore } from "../store/useCharacterStore"

type CharacterCardProps = {
    character: Character
}

export default function Characters({ character }: CharacterCardProps) {

    const axiosCharacterbyId = useCharacterStore(state => state.axiosCharacterbyId)

    const handleSubmit = () => {
        console.log('entre')
        axiosCharacterbyId(character.id)
    }

    return (
        <div key={character.id} className=" bg-white rounded-lg border-solid border-gray-300 border-[1px] flex flex-col items-center md:flex-row md:justify-around shadow-2xl p-5 w-3/4 lg:w-3/5 m-auto mt-5">
            <Link to={`/character`} onClick={handleSubmit}>
                <button className=" p-4">
                    <img src={character.images[0]} alt="Imagen personaje" className="rounded-lg"  />
                </button>
            </Link>
            <div className=" lg:w-2/3"> {/* Informacion */}
                <Link to={`/character`} onClick={handleSubmit}>
                    <h2 className='text-center text-2xl font-bold underline underline-offset-8 hover:text-orange-400  duration-500'>{character ? character.name : "Cargando..."}</h2>
                </Link>
                <div className="flex flex-col  lg:flex-row justify-around items-center p-4 space-y-8 lg:space-x-16">
                    <div>
                        <h2 className="text-xl font-bold text-center mb-2">Datos personales</h2>
                        <p><span className="font-semibold">Clan perteneciente:</span> {character.personal?.clan ? character.personal.clan : 'Desconocido'}</p>
                        <p><span className="font-semibold">Tipo de sangre:</span> {character.personal?.bloodType ? character.personal.bloodType : 'Desconocido'}</p>
                        <p><span className="font-semibold">Genero:</span> {character.personal?.sex ? character.personal.sex : 'Desconocido'}</p>
                        <p><span className="font-semibold">Edad Parte 1: </span> {character.personal?.age?.["Part I"] ? character.personal.age?.["Part I"] : 'Desconocido'}</p>
                        <p><span className="font-semibold">Edad Parte 2: </span> {character.personal?.age?.["Part II"] ? character.personal.age?.["Part II"] : 'Desconocido'}</p>
                        <p><span className="font-semibold">Fecha de cumpleaños: </span>{character.personal?.birthdate ? character.personal.birthdate : 'Desconocido'}</p>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-center mb-2">Herramientas</p>
                        {character.tools?.length ? (
                            character.tools.map((herramienta) => (
                                <li
                                    className="leading-tight list-image-[url(../public/marca-de-verificacion.png)]"
                                    key={herramienta}
                                >
                                    {herramienta || 'No contiene'}
                                </li>
                            ))
                        ) : (
                            <li className="leading-tight list-image-[url(../public/marca-de-verificacion.png)] ">No contiene herramientas</li>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}
