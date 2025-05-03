// Interface for event values
interface EventValues {
    deadlift: number
    pushups: number
    sprintDragCarry: number
    plank: number
    run: number
  }
  
  /**
   * Get minimum passing values (score of 60) for each event
   * @param ageGroupIndex Index of the age group
   * @param gender 'male' or 'female'
   * @returns Object with minimum values for each event
   */
  export function getMinimumValues(ageGroupIndex: number, gender: string): EventValues {
    // These values are approximations that would result in a score of 60
    // In a real application, these would be based on official Army scoring tables
  
    let deadlift: number = 0
    let pushups: number = 0
    let sprintDragCarry: number = 0
    let plank: number = 0
    let run: number = 0
  
    if (gender === "male") {
      // Male minimum values by age group
      if (ageGroupIndex == 0) {
        // 17-21
        deadlift = 150
        pushups = 15
        sprintDragCarry = 148
        plank = 90
        run = 1197
      } else if (ageGroupIndex == 1) {
        // 22-26
        deadlift = 150
        pushups = 14
        sprintDragCarry = 151
        plank = 85
        run = 1185
      } else if (ageGroupIndex == 2) {
        // 27-31
        deadlift = 150
        pushups = 14
        sprintDragCarry = 152
        plank = 80
        run = 1185
      } else if (ageGroupIndex == 3) {
        // 32-36
        deadlift = 140
        pushups = 13
        sprintDragCarry = 156
        plank = 75
        run = 1244
      } else if (ageGroupIndex == 4) {
        // 37-41
        deadlift = 140
        pushups = 12
        sprintDragCarry = 161
        plank = 70
        run = 1244
      } else if (ageGroupIndex == 5) {
        // 42-46
        deadlift = 140
        pushups = 11
        sprintDragCarry = 165
        plank = 70
        run = 1244
      } else if (ageGroupIndex == 6) {
        // 47-51
        deadlift = 140
        pushups = 11
        sprintDragCarry = 173
        plank = 70
        run = 1244
      } else if (ageGroupIndex == 7) {
        // 52-56
        deadlift = 140
        pushups = 10
        sprintDragCarry = 180
        plank = 70
        run = 1290
      } else if (ageGroupIndex == 8) {
        // 57-61
        deadlift = 140
        pushups = 10
        sprintDragCarry = 192
        plank = 70
        run = 1416
      } else if (ageGroupIndex == 9) {
        // 62+
        deadlift = 140
        pushups = 10
        sprintDragCarry = 196
        plank = 70
        run = 1416
      }
    } else {
      // Female minimum values by age group
      if (ageGroupIndex == 0) {
        // 17-21
        deadlift = 120
        pushups = 11
        sprintDragCarry = 195
        plank = 90
        run = 1375
      } else if (ageGroupIndex == 1) {
        // 22-26
        deadlift = 120
        pushups = 11
        sprintDragCarry = 195
        plank = 85
        run = 1365
      } else if (ageGroupIndex == 2) {
        // 27-31
        deadlift = 120
        pushups = 11
        sprintDragCarry = 195
        plank = 80
        run = 1365
      } else if (ageGroupIndex == 3) {
        // 32-36
        deadlift = 120
        pushups = 11
        sprintDragCarry = 202
        plank = 75
        run = 1370
      } else if (ageGroupIndex == 4) {
        // 37-41
        deadlift = 120
        pushups = 10
        sprintDragCarry = 207
        plank = 70
        run = 1379
      } else if (ageGroupIndex == 5) {
        // 42-46
        deadlift = 120
        pushups = 10
        sprintDragCarry = 222
        plank = 70
        run = 1395
      } else if (ageGroupIndex == 6) {
        // 47-51
        deadlift = 120
        pushups = 10
        sprintDragCarry = 231
        plank = 70
        run = 1410
      } else if (ageGroupIndex == 7){
        // 52-56
        deadlift = 120
        pushups = 10
        sprintDragCarry = 243
        plank = 70
        run = 1440
      } else if (ageGroupIndex == 8) {
        // 57-61
        deadlift = 120
        pushups = 10
        sprintDragCarry = 288
        plank = 70
        run = 1488
      } else if (ageGroupIndex == 9) {
        // 62+
        deadlift = 120
        pushups = 10
        sprintDragCarry = 288
        plank = 70
        run = 1500
      }
    }
  
    return {
      deadlift,
      pushups,
      sprintDragCarry,
      plank,
      run,
    }
  }
  
  /**
   * Get maximum possible values (score of 100) for each event
   * @param ageGroupIndex Index of the age group
   * @param gender 'male' or 'female'
   * @returns Object with maximum values for each event
   */
  export function getMaximumValues(ageGroupIndex: number, gender: string): EventValues {
    // These values are approximations that would result in a score of 100
    // In a real application, these would be based on official Army scoring tables
  
    let deadlift: number = 0
    let pushups: number = 0
    let sprintDragCarry: number = 0
    let plank: number = 0
    let run: number = 0
  
    if (gender === "male") {
      // Male maximum values by age group
      if (ageGroupIndex == 0) {
        // 17-21
        deadlift = 340
        pushups = 58
        sprintDragCarry = 89
        plank = 220
        run = 802
      } else if (ageGroupIndex == 1) {
        // 22-26
        deadlift = 350
        pushups = 61
        sprintDragCarry = 90
        plank = 215 
        run = 805
      } else if (ageGroupIndex == 2) {
        // 27-31
        deadlift = 350
        pushups = 62
        sprintDragCarry = 90
        plank = 210
        run = 805
      } else if (ageGroupIndex == 3) {
        // 32-36
        deadlift = 350
        pushups = 58
        sprintDragCarry = 93
        plank = 205
        run = 822
      } else if (ageGroupIndex == 4) {
        // 37-41
        deadlift = 350
        pushups = 59
        sprintDragCarry = 96
        plank = 200
        run = 822
      } else if (ageGroupIndex == 5) {
        // 42-46
        deadlift = 350
        pushups = 57
        sprintDragCarry = 100
        plank = 200
        run = 845
      } else if (ageGroupIndex == 6) {
        // 47-51
        deadlift = 340
        pushups = 55
        sprintDragCarry = 105
        plank = 200
        run = 865
      } else if (ageGroupIndex == 7){
        // 52-56
        deadlift = 330
        pushups = 51
        sprintDragCarry = 112
        plank = 200
        run = 909
      } else if (ageGroupIndex == 8) {
        // 57-61
        deadlift = 250
        pushups = 46
        sprintDragCarry = 118
        plank = 200
        run = 928
      } else if (ageGroupIndex == 9) {
        // 62+
        deadlift = 230
        pushups = 43
        sprintDragCarry = 129
        plank = 200
        run = 928
      }
    } else {
      // Female maximum values by age group
      if (ageGroupIndex == 0) {
        // 17-21
        deadlift = 220
        pushups = 53
        sprintDragCarry = 115
        plank = 220
        run = 960
      } else if (ageGroupIndex == 1) {
        // 22-26
        deadlift = 230
        pushups = 50
        sprintDragCarry = 115
        plank = 215
        run = 930
      } else if (ageGroupIndex == 2) {
        // 27-31
        deadlift = 240
        pushups = 48
        sprintDragCarry = 115
        plank = 210
        run = 930
      } else if (ageGroupIndex == 3) {
        // 32-36
        deadlift = 230
        pushups = 47
        sprintDragCarry = 119
        plank = 205
        run = 948
      } else if (ageGroupIndex == 4) {
        // 37-41
        deadlift = 220
        pushups = 43
        sprintDragCarry = 122
        plank = 200
        run = 952
      } else if (ageGroupIndex == 5) {
        // 42-46
        deadlift = 210
        pushups = 40
        sprintDragCarry = 129
        plank = 200
        run = 960
      } else if (ageGroupIndex == 6) {
        // 47-51
        deadlift = 200
        pushups = 38
        sprintDragCarry = 131
        plank = 200
        run = 990
      } else if (ageGroupIndex == 7) {
        // 52-56
        deadlift = 190
        pushups = 36
        sprintDragCarry = 138
        plank = 200
        run = 1019
      } else if (ageGroupIndex == 8) {
        // 57-61
        deadlift = 170
        pushups = 24
        sprintDragCarry = 146
        plank = 200
        run = 1038
      } else if (ageGroupIndex == 9) {
        // 62+
        deadlift = 170
        pushups = 24
        sprintDragCarry = 146
        plank = 200
        run = 1038
      }
    }
  
    return {
      deadlift,
      pushups,
      sprintDragCarry,
      plank,
      run,
    }
  }
  