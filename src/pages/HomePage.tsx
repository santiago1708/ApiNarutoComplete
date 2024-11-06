import CharacterCard from "../components/Characters"
import { useCharacterStore } from "../store/useCharacterStore"



export default function HomePage() {

    const characters = useCharacterStore(state => state.characters)
    const filteredCharacters = useCharacterStore(state => state.filteredCharacters)
    const loading = useCharacterStore(state => state.loading)

    return (
        <>
            <div className="bg-gradient-to-t from-slate-400 p-5 min-h-screen">
                <h1 className="text-center p-10 font-black text-3xl uppercase">Todos nuestros personajes!</h1>
                {loading ? (
                    <div className="flex justify-center items-center">
                        <div className="spinner-border animate-spin inline-block w-24 h-24 border-8 rounded-full border-t-orange-500"></div>
                    </div>
                ) : (
                    filteredCharacters.length > 0 ? (
                        filteredCharacters.map(character => (
                            <CharacterCard
                            key={character.id}
                            character={character}
                        />
                        ))
                    ) : (
                        characters.map(character => (
                            <CharacterCard
                            key={character.id}
                            character={character}
                        />
                        ))
                    )
                )}
            </div>
        </>
    )
}
