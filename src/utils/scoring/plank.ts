/**
 * Calculate the score for the Plank event
 * @param seconds Time in seconds
 * @param ageGroupIndex Index of the age group
 * @param gender 'male' or 'female'
 * @returns Score from 0-100
 */
export function calculatePlankScore(seconds: number, ageGroupIndex: number, gender: string): number {
    // Divisor varies by age group and gender (lower divisor means higher score per second)
    let divisor = 3.0 // Default for young males
  
    if (gender === "male") {
      if (ageGroupIndex < 2) {
        // 17-26
        divisor = 3.0
      } else if (ageGroupIndex < 4) {
        // 27-36
        divisor = 2.8
      } else if (ageGroupIndex < 6) {
        // 37-46
        divisor = 2.6
      } else {
        // 47+
        divisor = 2.4
      }
    } else {
      // female
      if (ageGroupIndex < 2) {
        // 17-26
        divisor = 2.8
      } else if (ageGroupIndex < 4) {
        // 27-36
        divisor = 2.6
      } else if (ageGroupIndex < 6) {
        // 37-46
        divisor = 2.4
      } else {
        // 47+
        divisor = 2.2
      }
    }
  
    // Calculate score based on plank time
    const score = Math.floor(seconds / divisor)
  
    // Ensure score is between 0 and 100
    return Math.min(100, Math.max(0, score))
  }
  