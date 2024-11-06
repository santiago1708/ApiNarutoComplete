import CharacterCard from "../components/CharacterCard"
import { useCharacterStore } from "../store/useCharacterStore"

export default function CharacterPage() {

    const result = useCharacterStore(state => state.result)
    const loading = useCharacterStore(state => state.loading)

    return (
        <div>
            <div className="bg-gradient-to-t from-slate-300 pb-5 lg:h-screen">
                <div className="container m-auto lg:w-2/4">
                    <h1 className="text-center p-10 font-black lg:text-3xl text-2xl uppercase hover:text-orange-400  duration-500 underline underline-offset-4 ">Te presento a {result.name}!</h1>
                </div>
                {loading ? (
                    <div className="flex justify-center items-center h-screen">
                        <div className="spinner-border animate-spin inline-block w-24 h-24 border-8 rounded-full border-t-orange-500"></div>
                    </div>
                ) : (
                    <CharacterCard
                        key={result.id}
                        character={result}
                    />
                )}
            </div>

        </div>
    )
}
