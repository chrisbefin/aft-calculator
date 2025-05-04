import { timeToScore } from "@/lib/utils"
import { armyFitnessTestDataSDC } from "@/lib/data"

/**
 * Calculate the score for the Sprint-Drag-Carry event
 * @param seconds Time in seconds
 * @param ageGroupIndex Index of the age group
 * @param gender 'male' or 'female'
 * @returns Score from 0-100
 */
export function calculateSprintDragCarryScore(seconds: number, ageGroupIndex: number, gender: string): number {
    let sex: number = 0
    if (gender === "female") {
      sex = 1
    }
    const floors: number[] = armyFitnessTestDataSDC[sex][ageGroupIndex][1]
    const points: number[] = armyFitnessTestDataSDC[sex][ageGroupIndex][0]
    return timeToScore(floors, points, seconds)
  }
  