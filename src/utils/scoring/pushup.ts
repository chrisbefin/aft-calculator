import { range, findScore } from "@/lib/utils"

/**
 * Calculate the score for the Hand Release Push-up event
 * @param count Number of push-ups completed
 * @param ageGroupIndex Index of the age group
 * @param gender 'male' or 'female'
 * @returns Score from 0-100
 */
export function calculatePushupScore(count: number, ageGroupIndex: number, gender: string): number {
    let score: number = 0
    let ceilings: number[] = []
    let points_array: number[] = []

    if (gender === "male") {
      if (ageGroupIndex == 0) {
          // 17-21
          ceilings = [4, 5, 6, 7, 8, 9, 15, 17, 18, 19, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 52, 53, 54, 55, 57, 58]
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(range(61,70,1).concat(range(72,82,1)).concat(range(84,100,1)))
          score = findScore(ceilings, points_array, count)
          } else if (ageGroupIndex == 1) {
          // 22-26
          ceilings = [4, 5, 6, 7, 8, 9, 14, 15, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 48, 49, 50, 51, 52, 53, 55, 56, 57, 59, 61]
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(range(61,100,1))
          score = findScore(ceilings, points_array, count)
          } else if (ageGroupIndex == 2) {
          // 27-31
          ceilings = [4, 5, 6, 7, 8, 9, 14, 15, 17, 18, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 52, 53, 54, 55, 57, 58, 60, 62]
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(range(61,100,1))
          score = findScore(ceilings, points_array, count)
          } else if (ageGroupIndex == 3) {
          // 32-36
          ceilings = [4, 5, 6, 7, 8, 9, 13, 15, 16, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 52, 53, 54, 55, 57, 58, 60]
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(range(61,100,1))
          score = findScore(ceilings, points_array, count)
  
          } else if (ageGroupIndex == 4) {
          // 37-41
          ceilings = [4, 5, 6, 7, 8, 9, 12, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 51, 53, 54, 55, 57, 59]
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(range(61,100,1))
          score = findScore(ceilings, points_array, count)
      
          } else if (ageGroupIndex == 5) {
          // 42-46
          ceilings = [4, 5, 6, 7, 8, 9, 11, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 52, 53, 55, 57]
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(range(61,100,1))
          score = findScore(ceilings, points_array, count)
      
          } else if (ageGroupIndex == 6) {
          // 47-51
          ceilings = [4, 5, 6, 7, 8, 9, 1, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 48, 49, 50, 51, 53, 55]
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(range(61,100,1))
          score = findScore(ceilings, points_array, count)
      
          } else if (ageGroupIndex == 7) {
          // 52-56
          ceilings = [4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 50, 51]
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100)
          score = findScore(ceilings, points_array, count)
  
          } else if (ageGroupIndex == 8) {
          // 57-61
          ceilings = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 29, 30, 31, 33, 34, 35, 37, 38, 40, 43, 46]
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(65, 68, 71, 73, 75, 76, 78, 80, 81, 82, 83, 84, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100)
          score = findScore(ceilings, points_array, count)
  
          } else if (ageGroupIndex == 9) {
          // 62+
          ceilings = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 29, 30, 31, 33, 34, 35, 37, 39, 41, 43]
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(68, 71, 74, 76, 77, 79, 80, 81, 82, 83, 84, 85, 87, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100)
          score = findScore(ceilings, points_array, count)
  
          }
      } else {
        // female
        if (ageGroupIndex == 0) {
          // 17-21
          ceilings = [4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 38, 40, 42, 44, 48, 53]
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(62, 64, 66, 68, 70, 73, 76, 78, 79, 80, 81, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100)
          score = findScore(ceilings, points_array, count)
  
        } else if (ageGroupIndex == 1) {
          // 22-26
          ceilings = [4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 38, 39, 40, 42, 44, 45, 50]
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(63, 65, 66, 68, 70, 71, 73, 74, 76, 77, 78, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100)
          score = findScore(ceilings, points_array, count)
  
        } else if (ageGroupIndex == 2) {
          // 27-31
          ceilings = [4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 42, 43, 45, 48]
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(62, 64, 66, 68, 70, 71, 73, 74, 76, 77, 78, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100)
          score = findScore(ceilings, points_array, count)
  
        } else if (ageGroupIndex == 3) {
          // 32-36
          ceilings = [4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 38, 39, 40, 42, 44, 47]
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(63, 65, 67, 68, 70, 72, 73, 75, 76, 78, 79, 80, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100)
          score = findScore(ceilings, points_array, count)
  
        } else if (ageGroupIndex == 4) {
          // 37-41
          ceilings = [4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 41, 43]
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(61, 63, 65, 67, 69, 71, 73, 74, 76, 77, 79, 80, 82, 83, 84, 85, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100)
          score = findScore(ceilings, points_array, count)
   
        } else if (ageGroupIndex == 5) {
          // 42-46
          ceilings = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 35, 36, 37, 38, 40]
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(62, 64, 66, 68, 70, 72, 74, 75, 77, 79, 80, 82, 83, 84, 86, 87, 88, 89, 90, 92, 93, 94, 95, 96, 97, 98, 99, 100)
          score = findScore(ceilings, points_array, count)
   
        } else if (ageGroupIndex == 6) {
          // 47-51
          ceilings = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38]
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(62, 64, 66, 69, 70, 71, 73, 75, 76, 78, 80, 81, 83, 84, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100)
          score = findScore(ceilings, points_array, count)
   
        } else if (ageGroupIndex == 7) {
          // 52-56
          ceilings = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 36]
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(63, 65, 68, 70, 72, 74, 76, 78, 80, 82, 83, 85, 86, 88, 89, 90, 92, 93, 94, 95, 96, 97, 98, 99, 100)
          score = findScore(ceilings, points_array, count)
  
        } else if (ageGroupIndex == 8) {
          // 57-61
          ceilings = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(67,77,84,89,90,91,92,94,95,96,97,98,99,100)
          score = findScore(ceilings, points_array, count)
  
        } else if (ageGroupIndex == 9) {
          // 62+
          ceilings = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
          const pa_1: number[] = range(0, 60, 10)
          points_array = pa_1.concat(69,79,86,89,90,91,92,94,95,96,97,98,99,100)
          score = findScore(ceilings, points_array, count)
  
        }
      }
      return score
  }