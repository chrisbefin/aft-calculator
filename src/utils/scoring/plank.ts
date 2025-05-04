import { plankTimeToScore } from "@/lib/utils"
import { armyFitnessTestDataPlank } from "@/lib/data"

/**
 * Calculate the score for the Plank event
 * @param seconds Time in seconds
 * @param ageGroupIndex Index of the age group
 * @param gender 'male' or 'female'
 * @returns Score from 0-100
 */
export function calculatePlankScore(seconds: number, ageGroupIndex: number, gender: string): number {
  let sex: number = 0
  if (gender === "female") {
    sex = 1
  }
  const floors: number[] = armyFitnessTestDataPlank[sex][ageGroupIndex]
  const points: number[] = [100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60]
  const result: number =  plankTimeToScore(floors, points, seconds)
  return result
}