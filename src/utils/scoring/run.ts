import { timeToScore } from "@/lib/utils"
import { armyFitnessTestDataRun } from "@/lib/data"
/**
 * Calculate the score for the 2-Mile Run event
 * @param seconds Time in seconds
 * @param ageGroupIndex Index of the age group
 * @param gender 'male' or 'female'
 * @returns Score from 0-100
 */
export function calculateRunScore(seconds: number, ageGroupIndex: number, gender: string): number {
    let sex: number = 0
    if (gender === "female") {
      sex = 1
    }
    const floors: number[] = armyFitnessTestDataRun[sex][ageGroupIndex]
    const points: number[] = [100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60]
    return timeToScore(floors, points, seconds)
  }
  