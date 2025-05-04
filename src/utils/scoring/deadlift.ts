import { range, findScore } from "@/lib/utils"


/**
 * Calculate the score for the 3 Repetition Deadlift event
 * @param weight Weight lifted in pounds
 * @param ageGroupIndex Index of the age group
 * @param gender 'male' or 'female'
 * @returns Score from 0-100
 */

export function calculateDeadliftScore(weight: number, ageGroupIndex: number, gender: string): number {
    let score: number = 0
    let ceilings: number[] = []
    let points_array: number[] = []

    if (gender === "male") {
      if (ageGroupIndex == 0) {
          // 17-21
          ceilings = range(80, 130, 10).concat(range(150,340,10))
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(63,65,67,69,70,73,75,77,79,81,83,85,87,89,92,94,96,98,100)
          score = findScore(ceilings, points_array, weight)
          } else if (ageGroupIndex == 1) {
          // 22-26
          ceilings = range(80, 130, 10).concat(range(150,350,10))
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(63,65,67,70,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99,100)
          score = findScore(ceilings, points_array, weight)
          } else if (ageGroupIndex == 2) {
          // 27-31
          ceilings = range(80, 130, 10).concat(range(150,350,10))
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(63,65,67,70,71,73,75,77,79,81,83,85,87,89,91,93,95,97,98,100)
          score = findScore(ceilings, points_array, weight)
          } else if (ageGroupIndex == 3) {
          // 32-36
          ceilings = range(80, 130, 10).concat(range(140,350,10))
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(61,63,65,67,70,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99,100)
          score = findScore(ceilings, points_array, weight)
  
          } else if (ageGroupIndex == 4) {
          // 37-41
          ceilings = range(80, 350, 10)
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(62,63,65,67,70,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99,100)
          score = findScore(ceilings, points_array, weight)
      
          } else if (ageGroupIndex == 5) {
          // 42-46
          ceilings = range(80, 350, 10)
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(62,64,66,68,70,72,74,76,78,79,82,84,86,88,90,92,93,95,97,99,100)
          score = findScore(ceilings, points_array, weight)
      
          } else if (ageGroupIndex == 6) {
          // 47-51
          ceilings = range(80, 340, 10)
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(62,64,66,68,70,72,74,76,78,80,82,84,86,89,91,93,95,97,99,100)
          score = findScore(ceilings, points_array, weight)
      
          } else if (ageGroupIndex == 7) {
          // 52-56
          ceilings = range(80, 330, 10)
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(63,65,67,70,72,74,76,78,80,82,84,86,89,91,93,95,97,99,100)
          score = findScore(ceilings, points_array, weight)
  
          } else if (ageGroupIndex == 8) {
          // 57-61
          ceilings = range(80, 250, 10)
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(71,79,89,91,93,94,96,97,98,99,100)
          score = findScore(ceilings, points_array, weight)
  
          } else if (ageGroupIndex == 9) {
          // 62+
          ceilings = range(80, 230, 10)
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(72,82,92,93,94,95,98,99,100)
          score = findScore(ceilings, points_array, weight)
  
          }
      } else {
        // female
        if (ageGroupIndex == 0) {
          // 17-21
          ceilings = range(60, 220, 10)
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(68,75,80,84,88,91,94,97,98,100)
          score = findScore(ceilings, points_array, weight)
  
        } else if (ageGroupIndex == 1) {
          // 22-26
          ceilings = range(60, 230, 10)
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(67,73,78,82,86,89,93,95,97,98,100)
          score = findScore(ceilings, points_array, weight)
  
        } else if (ageGroupIndex == 2) {
          // 27-31
          ceilings = range(60, 240, 10)
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(67,73,78,82,86,89,92,95,96,98,99,100)
          score = findScore(ceilings, points_array, weight)
  
        } else if (ageGroupIndex == 3) {
          // 32-36
          ceilings = range(60, 230, 10)
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(68,74,79,83,87,90,93,95,97,99,100)
          score = findScore(ceilings, points_array, weight)
  
        } else if (ageGroupIndex == 4) {
          // 37-41
          ceilings = range(60, 220, 10)
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(69,75,80,85,89,92,95,97,99,100)
          score = findScore(ceilings, points_array, weight)
   
        } else if (ageGroupIndex == 5) {
          // 42-46
          ceilings = range(60, 210, 10)
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(70,76,82,86,90,93,96,98,100)
          score = findScore(ceilings, points_array, weight)
   
        } else if (ageGroupIndex == 6) {
          // 47-51
          ceilings = range(60, 200, 10)
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(73,79,84,89,93,96,98,100)
          score = findScore(ceilings, points_array, weight)
   
        } else if (ageGroupIndex == 7) {
          // 52-56
          ceilings = range(60, 190, 10)
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(72,79,85,91,95,98,100)
          score = findScore(ceilings, points_array, weight)
  
        } else if (ageGroupIndex == 8) {
          // 57-61
          ceilings = range(60, 170, 10)
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(71,80,90,99,100)
          score = findScore(ceilings, points_array, weight)
  
        } else if (ageGroupIndex == 9) {
          // 62+
          ceilings = range(60, 170, 10)
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(72,80,90,99,100)
          score = findScore(ceilings, points_array, weight)
  
        }
      }
      return score
  }
  