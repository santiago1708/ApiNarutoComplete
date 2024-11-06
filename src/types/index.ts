
import { z } from 'zod'
import { CharacterSchema } from '../schemas/character-schema'

/* type FamilyInfo = z.infer<typeof FamilyInfoSchema>

type AgeInfo = z.infer<typeof AgeInfoSchema>

type HeightInfo = z.infer<typeof HeightInfoSchema>

type NinjaRankInfo = z.infer<typeof NinjaRankInfoSchema>

type PersonalInfo = z.infer<typeof PersonalInfoSchema>

type RankInfo = z.infer<typeof RankInfoSchema> */

export type Character = z.infer<typeof CharacterSchema>
