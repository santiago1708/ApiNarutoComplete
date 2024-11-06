import { useMemo } from "react"
import { useCharacterStore } from "../store/useCharacterStore"
import Characters from "../components/Characters"

export default function Favorite() {

    const favorites = useCharacterStore(state => state.favorites)
    const hasFavorites = useMemo(() => favorites.length, [favorites])

    return (
        <>
            <h1 className="text-6xl font-extrabold text-center my-10">Favoritos</h1>
            {hasFavorites ? (
                <div className="p-5">
                    {favorites.map((charac) => (
                        <Characters
                            key={charac.id}
                            character={charac}
                        />
                    ))}
                </div>
            ) : (
                <p className="my-10 text-center text-2xl">
                    No hay personajes favoritas. Vuelve a la página Home para agregar algunas.
                </p>
            )}
        </>
    )
}
