/**
 * Calculate the score for the 2-Mile Run event
 * @param seconds Time in seconds
 * @param ageGroupIndex Index of the age group
 * @param gender 'male' or 'female'
 * @returns Score from 0-100
 */
export function calculateRunScore(seconds: number, ageGroupIndex: number, gender: string): number {
    // Base time varies by age group and gender
    let baseTime = 1200 // Default for young males
  
    if (gender === "male") {
      if (ageGroupIndex < 2) {
        // 17-26
        baseTime = 1200
      } else if (ageGroupIndex < 4) {
        // 27-36
        baseTime = 1230
      } else if (ageGroupIndex < 6) {
        // 37-46
        baseTime = 1260
      } else {
        // 47+
        baseTime = 1290
      }
    } else {
      // female
      if (ageGroupIndex < 2) {
        // 17-26
        baseTime = 1320
      } else if (ageGroupIndex < 4) {
        // 27-36
        baseTime = 1350
      } else if (ageGroupIndex < 6) {
        // 37-46
        baseTime = 1380
      } else {
        // 47+
        baseTime = 1410
      }
    }
  
    // Calculate score based on run time (lower time is better)
    // Divide by 2 to make the scoring more gradual
    const score = Math.floor(baseTime - seconds / 2)
  
    // Ensure score is between 0 and 100
    return Math.min(100, Math.max(0, score))
  }
  