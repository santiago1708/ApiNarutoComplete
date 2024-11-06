
import axios from "axios"
import { CharacterSchema, CharactersSchema } from "../schemas/character-schema"

const url = 'https://dattebayo-api.onrender.com/characters'


export async function getCharactersFuntion() {
    const {data: {characters}} = await axios(url)
    const result = CharactersSchema.safeParse(characters)
    if (result.success) {
        return result.data
    }else {
        console.error('Errores de validación:', result.error.errors); 
    }
}

export async function getCharacterbyIDFunction(id: number) {
    const {data} = await axios(`${url}/${id}`)
    console.log(data);
    const result = CharacterSchema.safeParse(data)
    if(result.success) {
        return result.data
    }
}
