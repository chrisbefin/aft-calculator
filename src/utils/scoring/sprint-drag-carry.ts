/**
 * Calculate the score for the Sprint-Drag-Carry event
 * @param seconds Time in seconds
 * @param ageGroupIndex Index of the age group
 * @param gender 'male' or 'female'
 * @returns Score from 0-100
 */
export function calculateSprintDragCarryScore(seconds: number, ageGroupIndex: number, gender: string): number {
    // Base time varies by age group and gender
    let baseTime = 240 // Default for young males
  
    if (gender === "male") {
      if (ageGroupIndex < 2) {
        // 17-26
        baseTime = 240
      } else if (ageGroupIndex < 4) {
        // 27-36
        baseTime = 250
      } else if (ageGroupIndex < 6) {
        // 37-46
        baseTime = 260
      } else {
        // 47+
        baseTime = 270
      }
    } else {
      // female
      if (ageGroupIndex < 2) {
        // 17-26
        baseTime = 270
      } else if (ageGroupIndex < 4) {
        // 27-36
        baseTime = 280
      } else if (ageGroupIndex < 6) {
        // 37-46
        baseTime = 290
      } else {
        // 47+
        baseTime = 300
      }
    }
  
    // Calculate score based on time (lower time is better)
    const score = Math.floor(baseTime - seconds)
  
    // Ensure score is between 0 and 100
    return Math.min(100, Math.max(0, score))
  }
  