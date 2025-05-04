import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function range(start: number, end: number, step: number): number[] {
  if (end === start || step === 0) {
      return [start];
  }
  if (step < 0) {
      step = -step;
  }

  const stepNumOfDecimal = step.toString().split(".")[1]?.length || 0;
  const endNumOfDecimal = end.toString().split(".")[1]?.length || 0;
  const maxNumOfDecimal = Math.max(stepNumOfDecimal, endNumOfDecimal);
  const power = Math.pow(10, maxNumOfDecimal);
  const diff = Math.abs(end - start);
  const count = Math.trunc(diff / step + 1);
  step = end - start > 0 ? step : -step;

  const intStart = Math.trunc(start * power);
  return Array.from(Array(count).keys())
      .map(x => {
          const increment = Math.trunc(x * step * power);
          const value = intStart + increment;
          return Math.trunc(value) / power;
      });
}

export function findScore(ceilings: number[], points_array: number[], result: number): number {
  // ceilings and points array should be same length
  // find the highest ceiling that result is <=, then return corresponding points_array value
  if (ceilings.length != points_array.length) {
    console.log("ceilings and points array length mismatch")
    console.log(ceilings.length)
    console.log(points_array.length)
    console.log(result)
    return -1
  }
  for (let i = ceilings.length-1; i > -1; i--) {
    if (result >= ceilings[i]) {
      return points_array[i]
    }
  }
  return 0
}

export function timeToScore(floors: number[], points_array: number[], seconds: number): number {
  // ceilings and points array should be same length
  // find the highest ceiling that result is <=, then return corresponding points_array value
  if (floors.length != points_array.length) {
    console.log("ceilings and points array length mismatch")
    console.log(floors.length)
    console.log(points_array.length)
    console.log(floors)
    return -1
  }
  for (let i = 0; i < floors.length; i++) {
    if (seconds <= floors[i]) {
      return points_array[i]
    }
  }
  return -1
}

export function plankTimeToScore(floors: number[], points_array: number[], seconds: number): number {
  // ceilings and points array should be same length
  // find the highest ceiling that result is <=, then return corresponding points_array value
  if (floors.length != points_array.length) {
    console.log("ceilings and points array length mismatch")
    console.log(floors.length)
    console.log(points_array.length)
    console.log(floors)
    return -1
  }
  for (let i = 0; i < floors.length; i++) {
    if (seconds >= floors[i]) {
      return points_array[i]
    }
  }
  return -1
}

