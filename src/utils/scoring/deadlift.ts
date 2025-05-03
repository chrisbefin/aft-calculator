/**
 * Calculate the score for the 3 Repetition Deadlift event
 * @param weight Weight lifted in pounds
 * @param ageGroupIndex Index of the age group
 * @param gender 'male' or 'female'
 * @returns Score from 0-100
 */
export function calculateDeadliftScore(weight: number, ageGroupIndex: number, gender: string): number {
    // Base weight requirements vary by age group and gender
    let baseWeight = 140 // Default for young males
    let weightIncrement = 3 // Default points per weight increment
  
    if (gender === "male") {
      if (ageGroupIndex < 2) {
        // 17-26
        baseWeight = 140
        weightIncrement = 3
      } else if (ageGroupIndex < 4) {
        // 27-36
        baseWeight = 130
        weightIncrement = 3
      } else if (ageGroupIndex < 6) {
        // 37-46
        baseWeight = 120
        weightIncrement = 3
      } else {
        // 47+
        baseWeight = 110
        weightIncrement = 3
      }
    } else {
      // female
      if (ageGroupIndex < 2) {
        // 17-26
        baseWeight = 120
        weightIncrement = 2.5
      } else if (ageGroupIndex < 4) {
        // 27-36
        baseWeight = 110
        weightIncrement = 2.5
      } else if (ageGroupIndex < 6) {
        // 37-46
        baseWeight = 100
        weightIncrement = 2.5
      } else {
        // 47+
        baseWeight = 90
        weightIncrement = 2.5
      }
    }
  
    // Calculate score based on weight lifted
    const score = Math.floor((weight - baseWeight) / weightIncrement)
  
    // Ensure score is between 0 and 100
    return Math.min(100, Math.max(0, score))
  }
  