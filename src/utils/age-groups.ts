// Define age group ranges
export interface AgeGroup {
    id: string
    label: string
    minAge: number
    maxAge: number
  }
  
  export const AGE_GROUPS: AgeGroup[] = [
    { id: "17-21", label: "17-21", minAge: 17, maxAge: 21 },
    { id: "22-26", label: "22-26", minAge: 22, maxAge: 26 },
    { id: "27-31", label: "27-31", minAge: 27, maxAge: 31 },
    { id: "32-36", label: "32-36", minAge: 32, maxAge: 36 },
    { id: "37-41", label: "37-41", minAge: 37, maxAge: 41 },
    { id: "42-46", label: "42-46", minAge: 42, maxAge: 46 },
    { id: "47-51", label: "47-51", minAge: 47, maxAge: 51 },
    { id: "52-56", label: "52-56", minAge: 52, maxAge: 56 },
    { id: "57-61", label: "57-61", minAge: 57, maxAge: 61 },
    { id: "62+", label: "62+", minAge: 62, maxAge: 100 },
  ]
  
  // Helper function to get age group index from age
  export function getAgeGroupIndex(age: number): number {
    for (let i = 0; i < AGE_GROUPS.length; i++) {
      if (age >= AGE_GROUPS[i].minAge && age <= AGE_GROUPS[i].maxAge) {
        return i
      }
      return AGE_GROUPS.length-1;
    }
    // Default to the last age group if no match is found
    return AGE_GROUPS.length - 1
  }
  
  // Helper function to get age group from index
  export function getAgeGroup(index: number): AgeGroup {
    return AGE_GROUPS[index]
  }
  
  // Helper function to get age group from id
  export function getAgeGroupById(id: string): AgeGroup | undefined {
    return AGE_GROUPS.find((group) => group.id === id)
  }
  