import { NavLink } from "react-router-dom";
import { useCharacterStore } from "../store/useCharacterStore";
import { Character } from "../types";

type CharacterCardProps = {
    character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {

    const addfavoriteCharacter = useCharacterStore(state => state.addfavoriteCharacter)
    const favoriteExist = useCharacterStore(state => state.favoriteExist)

    return (
        <div key={character.id} className=" bg-white rounded-lg flex flex-col items-center shadow-2xl p-5 w-3/4 lg:w-3/5 m-auto">
            <div className="flex justify-center items-center space-x-3">
            {character.images && character.images.length > 0 ? (
                character.images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={character.name} style={{ width: '100%', height: '100%', margin: 'auto' }} />
                    </div>
                ))
            ) : (
                <div>
                    <p>No hay imágenes disponibles</p>
                </div>
            )}
            </div>
            <div className=" lg:w-2/3"> {/* Informacion */}
                <div className="flex flex-col  lg:flex-row justify-around items-center p-4 space-y-8 lg:space-x-16">
                    <div>
                        <h2 className="text-xl font-bold text-center mb-2">Datos personales</h2>
                        <p><span className="font-semibold">Clan perteneciente:</span> {character.personal?.clan ? character.personal.clan : 'Desconocido'}</p>
                        <p><span className="font-semibold">Tipo de sangre:</span> {character.personal?.bloodType ? character.personal.bloodType : 'Desconocido'}</p>
                        <p><span className="font-semibold">Genero:</span> {character.personal?.sex ? character.personal.sex : 'Desconocido'}</p>
                        <p><span className="font-semibold">Edad Parte I: </span> {character.personal?.age?.["Part I"] ? character.personal.age?.["Part I"] : 'Desconocido'}</p>
                        <p><span className="font-semibold">Edad Parte II: </span> {character.personal?.age?.["Part II"] ? character.personal.age?.["Part II"] : 'Desconocido'}</p>
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
                <div className="flex flex-col  lg:flex-row justify-around items-center p-4 space-y-8 lg:space-x-16">
                    <div>
                        <h2 className="text-xl font-bold text-center mb-2">Familia</h2>
                        <p><span className="font-semibold">Padre:</span> {character.family?.father ? character.family?.father : 'Desconocido'}</p>
                        <p><span className="font-semibold">Madre:</span> {character.family?.mother ? character.family?.mother : 'Desconocido'}</p>
                        <p><span className="font-semibold">Esposa: </span> {character.family?.wife ? character.family?.wife : 'Desconocida'}</p>
                        <p><span className="font-semibold">Hermano: </span>{character.family?.brother ? character.family?.brother : 'Desconocido'}</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-center mb-2">Rango</h2>
                        <p><span className="font-semibold">Período en blanco:</span> {character.rank?.ninjaRank["Blank Period"] ? character.rank?.ninjaRank["Blank Period"] : 'Desconocido'}</p>
                        <p><span className="font-semibold">Parte I:</span> {character.rank?.ninjaRank["Part I"] ? character.rank?.ninjaRank["Part I"] : 'Desconocido'}</p>
                        <p><span className="font-semibold">Parte II:</span> {character.rank?.ninjaRank["Part II"] ? character.rank?.ninjaRank["Part II"] : 'Desconocido'}</p>
                    </div>
                </div>

                <div className="flex justify-center m-10">
                    <NavLink 
                        to={'/'} 
                        className="w-4/5 lg:w-2/4 lg:h-10 text-center pt-1 rounded-md text-lg 
                            bg-gradient-to-r from-yellow-300 to-orange-600
                            hover:bg-gradient-to-t hover:from-orange-400 hover:to-yellow-600
                            hover:opacity-70 transition-all duration-500 hover:text-white" 
                        onClick={() => addfavoriteCharacter(character)}>
                        {!favoriteExist(character.id) ? 'Agregar a Favoritos' : 'Eliminar de Favoritos'}
                    </NavLink>
                </div>

            </div>

        </div>
    )
}