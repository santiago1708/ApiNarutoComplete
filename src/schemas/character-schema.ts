import { z } from 'zod'

const FamilyInfoSchema = z.object({
    father: z.string().optional(),
    mother: z.string().optional(),
    wife: z.string().optional(),
    brother: z.string().optional(),
})

const AgeInfoSchema = z.object({
    'Part I': z.string().optional(),
    'Part II': z.string().optional()
})

const HeightInfoSchema = z.object({
    'Blank Period': z.string().optional(),
    'Part I': z.string().optional()
})

const NinjaRankInfoSchema = z.object({
    "Blank Period": z.string().optional(),
    Gaiden: z.string().optional(),
    "Part I": z.string().optional(),
    "Part II": z.string().optional()
})

const PersonalInfoSchema = z.object({
    age: AgeInfoSchema.optional(),
    birthdate: z.string().optional(),
    bloodType: z.string().optional(),
    clan: z.string().or(z.array(z.string())).optional(),
    height: HeightInfoSchema.optional(),
    sex: z.string()
})

const RankInfoSchema = z.object({
    ninjaRank: NinjaRankInfoSchema
})

export const CharacterSchema = z.object({
    images: z.array(z.string()),
    id: z.number(),
    name: z.string(),
    family: FamilyInfoSchema.optional(),
    personal: PersonalInfoSchema.optional(),
    tools: z.array(z.string()).optional(),
    rank: RankInfoSchema.optional()
})

export const CharactersSchema = z.array(CharacterSchema)