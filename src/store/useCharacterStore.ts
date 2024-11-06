import { create } from "zustand";
import { Character } from "../types";
import { devtools } from 'zustand/middleware'
import { getCharacterbyIDFunction, getCharactersFuntion } from "../services/narutoServices";

type CharacterState = {
    characters: Character[]
    favorites: Character[]
    filteredCharacters: Character[]
    result: Character
    loading: boolean
    axiosCharacter: () => Promise<void>
    axiosCharacterbyId: (id: Character['id']) => Promise<void>
    searchCharacterbyName: (name: Character['name']) => void
    addfavoriteCharacter: (character: Character) => void
    favoriteExist: (id: Character['id']) => boolean
    loadFromStorage: () => void
}


export const useCharacterStore = create<CharacterState>()(devtools(((set, get) => ({
    characters: [],
    favorites: [],
    filteredCharacters: [],
    result: {} as Character,
    loading: false,
    axiosCharacter: async () => {
        set(() => ({ loading: true }))
        const response = await getCharactersFuntion()
        set(() => ({
            characters: response,
            loading: false
        }))
    },
    axiosCharacterbyId: async (id: number) => {
        set(() => ({ loading: true }))
        const response = await getCharacterbyIDFunction(id)
        set(() => ({
            result: response,
            loading: false
        }))
        if (typeof window !== "undefined") {
            localStorage.setItem('result', JSON.stringify(response));
        }
    },
    searchCharacterbyName: (name) => {
        set((state) => ({
            filteredCharacters: state.characters.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
        }))
    },
    addfavoriteCharacter: (character) => {
        if (get().favoriteExist(character.id)) {
            set((state) => ({
                favorites: state.favorites.filter(e => e.id !== character.id)
            }))
        } else {
            set((state) => ({
                favorites: [...state.favorites, character]
            }))
        }
        if (typeof window !== "undefined") {
            localStorage.setItem('favorites', JSON.stringify(get().favorites));
        }
    },
    favoriteExist: (id) => {
        return get().favorites.some(favorite => favorite.id === id)
    },
    loadFromStorage: () => {
        if (typeof window !== "undefined") {

            const storadFavorites = localStorage.getItem('favorites')
            const storadResult = localStorage.getItem('result')
            if (storadFavorites) {
                set({
                    favorites: JSON.parse(storadFavorites)
                })
            }
            if (storadResult) {
                set({
                    result: JSON.parse(storadResult)
                })
            }
        }
    }
}))))