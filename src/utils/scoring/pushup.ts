/**
 * Calculate the score for the Hand Release Push-up event
 * @param count Number of push-ups completed
 * @param ageGroupIndex Index of the age group
 * @param gender 'male' or 'female'
 * @returns Score from 0-100
 */
export function calculatePushupScore(count: number, ageGroupIndex: number, gender: string): number {
    // Multiplier varies by age group and gender

    // let score: number = 0 // Default for young males
    // let ceilings: number[] = Array();
    // let points: number[] = Array();

    if (gender === "male") {
    if (ageGroupIndex == 0) {
        // 17-21

        } else if (ageGroupIndex == 1) {
        // 22-26

        } else if (ageGroupIndex == 2) {
        // 27-31

        } else if (ageGroupIndex == 3) {
        // 32-36

        } else if (ageGroupIndex == 4) {
        // 37-41
    
        } else if (ageGroupIndex == 5) {
        // 42-46
    
        } else if (ageGroupIndex == 6) {
        // 47-51
    
        } else if (ageGroupIndex == 7) {
        // 52-56

        } else if (ageGroupIndex == 8) {
        // 57-61

        } else if (ageGroupIndex == 9) {
        // 62+

        }
    } else {
      // female
      if (ageGroupIndex == 0) {
        // 17-21

      } else if (ageGroupIndex == 1) {
        // 22-26

      } else if (ageGroupIndex == 2) {
        // 27-31

      } else if (ageGroupIndex == 3) {
        // 32-36

      } else if (ageGroupIndex == 4) {
        // 37-41
 
      } else if (ageGroupIndex == 5) {
        // 42-46
 
      } else if (ageGroupIndex == 6) {
        // 47-51
 
      } else if (ageGroupIndex == 7) {
        // 52-56

      } else if (ageGroupIndex == 8) {
        // 57-61

      } else if (ageGroupIndex == 9) {
        // 62+

      }
    }
  
  
    // Ensure score is between 0 and 100
    return 0
  }
  