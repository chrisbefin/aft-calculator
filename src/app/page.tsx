"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Trophy, CheckCircle, XCircle, Sun, Moon, ArrowDown, ArrowUp } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { useTheme } from "next-themes"
import { calculateDeadliftScore } from "../utils/scoring/deadlift"
import { calculatePushupScore } from "../utils/scoring/pushup"
import { calculateSprintDragCarryScore } from "../utils/scoring/sprint-drag-carry"
import { calculatePlankScore } from "../utils/scoring/plank"
import { calculateRunScore } from "../utils/scoring/run"
import { getMinimumValues, getMaximumValues } from "../utils/reference-values"
import { AGE_GROUPS, getAgeGroupById } from "../utils/age-groups"

export default function ArmyFitnessTestCalculator() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [ageGroupId, setAgeGroupId] = useState<string>("")
  const [gender, setGender] = useState<string>("")
  const [deadlift, setDeadlift] = useState<number | "">("")
  const [pushups, setPushups] = useState<number | "">("")

  // Sprint-Drag-Carry time (separate minutes and seconds)
  const [sdcMinutes, setSdcMinutes] = useState<number | "">("")
  const [sdcSeconds, setSdcSeconds] = useState<number | "">("")

  // Plank time (separate minutes and seconds)
  const [plankMinutes, setPlankMinutes] = useState<number | "">("")
  const [plankSeconds, setPlankSeconds] = useState<number | "">("")

  // 2-Mile Run time (separate minutes and seconds)
  const [runMinutes, setRunMinutes] = useState<number | "">("")
  const [runSeconds, setRunSeconds] = useState<number | "">("")

  const [scores, setScores] = useState<{
    deadlift: number
    pushups: number
    sprintDragCarry: number
    plank: number
    run: number
    total: number
  } | null>(null)
  const [result, setResult] = useState<"combat" | "pass" | "fail" | null>(null)

  // Ensure theme component doesn't render until mounted on client
  useEffect(() => {
    setMounted(true)
  }, [])

  // Convert minutes and seconds to total seconds
  const getSeconds = (minutes: number | "", seconds: number | ""): number => {
    const mins = typeof minutes === "number" ? minutes : 0
    const secs = typeof seconds === "number" ? seconds : 0
    return mins * 60 + secs
  }

  // Set form values from seconds
  const setTimeValues = (
    totalSeconds: number,
    setMinutes: React.Dispatch<React.SetStateAction<number | "">>,
    setSeconds: React.Dispatch<React.SetStateAction<number | "">>,
  ) => {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    setMinutes(minutes)
    setSeconds(seconds)
  }

  // Get age group index from selected age group ID
  const getSelectedAgeGroupIndex = (): number => {
    if (!ageGroupId) return 0
    return AGE_GROUPS.findIndex((group) => group.id === ageGroupId)
  }

  // Set minimum passing values
  const setMinimumValues = () => {
    if (!ageGroupId || !gender) return

    const ageGroupIndex = getSelectedAgeGroupIndex()
    const minValues = getMinimumValues(ageGroupIndex, gender)

    setDeadlift(minValues.deadlift)
    setPushups(minValues.pushups)

    // Set time values
    setTimeValues(minValues.sprintDragCarry, setSdcMinutes, setSdcSeconds)
    setTimeValues(minValues.plank, setPlankMinutes, setPlankSeconds)
    setTimeValues(minValues.run, setRunMinutes, setRunSeconds)

    // Calculate scores with these values
    calculateScores()
  }

  // Set maximum possible values
  const setMaximumValues = () => {
    if (!ageGroupId || !gender) return

    const ageGroupIndex = getSelectedAgeGroupIndex()
    const maxValues = getMaximumValues(ageGroupIndex, gender)

    setDeadlift(maxValues.deadlift)
    setPushups(maxValues.pushups)

    // Set time values
    setTimeValues(maxValues.sprintDragCarry, setSdcMinutes, setSdcSeconds)
    setTimeValues(maxValues.plank, setPlankMinutes, setPlankSeconds)
    setTimeValues(maxValues.run, setRunMinutes, setRunSeconds)

    // Calculate scores with these values
    calculateScores()
  }

  // Calculate scores for each event based on age group and gender
  const calculateScores = () => {
    if (!ageGroupId || !gender) {
      alert("Please select your age group and gender first")
      return
    }

    const ageGroupIndex = getSelectedAgeGroupIndex()

    // Calculate individual event scores using the utility functions
    const deadliftScore = typeof deadlift === "number" ? calculateDeadliftScore(deadlift, ageGroupIndex, gender) : 0
    const combatDeadlift = typeof deadlift === "number" ? calculateDeadliftScore(deadlift, ageGroupIndex, "male") : 0

    const pushupsScore = typeof pushups === "number" ? calculatePushupScore(pushups, ageGroupIndex, gender) : 0
    const combatPushups = typeof pushups === "number" ? calculatePushupScore(pushups, ageGroupIndex, "male") : 0

    const sdcTotalSeconds = getSeconds(sdcMinutes, sdcSeconds)
    const sprintDragCarryScore =
      sdcTotalSeconds > 0 ? calculateSprintDragCarryScore(sdcTotalSeconds, ageGroupIndex, gender) : 0
      const combatSprintDragCarryScore =
      sdcTotalSeconds > 0 ? calculateSprintDragCarryScore(sdcTotalSeconds, ageGroupIndex, "male") : 0

    const plankTotalSeconds = getSeconds(plankMinutes, plankSeconds)
    const plankScore = plankTotalSeconds > 0 ? calculatePlankScore(plankTotalSeconds, ageGroupIndex, gender) : 0
    const combatPlankScore = plankTotalSeconds > 0 ? calculatePlankScore(plankTotalSeconds, ageGroupIndex, "male") : 0

    const runTotalSeconds = getSeconds(runMinutes, runSeconds)
    const runScore = runTotalSeconds > 0 ? calculateRunScore(runTotalSeconds, ageGroupIndex, gender) : 0
    const combatRunScore = runTotalSeconds > 0 ? calculateRunScore(runTotalSeconds, ageGroupIndex, "male") : 0
    // Calculate total score
    const totalScore = deadliftScore + pushupsScore + sprintDragCarryScore + plankScore + runScore
    const combatScore = combatDeadlift + combatPlankScore + combatPushups + combatSprintDragCarryScore + combatRunScore

    // Determine result
    let testResult: "combat" | "pass" | "fail" = "fail"

    if (
      combatScore >= 350 &&
      combatDeadlift >= 60 &&
      combatPushups >= 60 &&
      combatSprintDragCarryScore >= 60 &&
      combatPlankScore >= 60 &&
      combatRunScore >= 60
    ) {
      testResult = "combat"
    } else if (
      totalScore >= 300 &&
      deadliftScore >= 60 &&
      pushupsScore >= 60 &&
      sprintDragCarryScore >= 60 &&
      plankScore >= 60 &&
      runScore >= 60
    ) {
      testResult = "pass"
    }

    setScores({
      deadlift: deadliftScore,
      pushups: pushupsScore,
      sprintDragCarry: sprintDragCarryScore,
      plank: plankScore,
      run: runScore,
      total: totalScore,
    })

    setResult(testResult)
  }

  const resetForm = () => {
    setAgeGroupId("")
    setGender("")
    setDeadlift("")
    setPushups("")
    setSdcMinutes("")
    setSdcSeconds("")
    setPlankMinutes("")
    setPlankSeconds("")
    setRunMinutes("")
    setRunSeconds("")
    setScores(null)
    setResult(null)
  }

  // Get color based on score
  const getScoreColor = (score: number) => {
    if (score >= 90) return "bg-green-500"
    if (score >= 70) return "bg-emerald-500"
    if (score >= 60) return "bg-amber-500"
    return "bg-red-500"
  }

  // Get result background color
  const getResultBgColor = (result: "combat" | "pass" | "fail" | null) => {
    if (result === "combat") return "bg-gradient-to-r from-emerald-500 to-green-500"
    if (result === "pass") return "bg-gradient-to-r from-blue-500 to-cyan-500"
    return "bg-gradient-to-r from-red-500 to-pink-500"
  }

  // Handle seconds input to ensure it's between 0-59
  const handleSecondsChange = (value: string, setter: React.Dispatch<React.SetStateAction<number | "">>) => {
    if (value === "") {
      setter("")
      return
    }

    const numValue = Number.parseInt(value, 10)
    if (isNaN(numValue)) return

    // Ensure seconds are between 0-59
    setter(Math.min(59, Math.max(0, numValue)))
  }

  // Get the selected age group label
  const getSelectedAgeGroupLabel = (): string => {
    const ageGroup = getAgeGroupById(ageGroupId)
    return ageGroup ? ageGroup.label : ""
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Army Fitness Test Calculator
            </h1>
            <p className="mt-3 text-xl text-gray-500 dark:text-gray-400">
              Calculate your score on the Army Fitness Test
            </p>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-t-4 border-t-purple-500">
            <CardHeader>
              <CardTitle className="text-purple-600 dark:text-purple-400">Personal Information</CardTitle>
              <CardDescription>Select your age group and gender</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="ageGroup">Age Group</Label>
                <Select value={ageGroupId} onValueChange={setAgeGroupId}>
                  <SelectTrigger id="ageGroup" className="border-purple-200 dark:border-purple-900">
                    <SelectValue placeholder="Select age group" />
                  </SelectTrigger>
                  <SelectContent>
                    {AGE_GROUPS.map((group) => (
                      <SelectItem key={group.id} value={group.id}>
                        {group.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger id="gender" className="border-purple-200 dark:border-purple-900">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-blue-500">
            <CardHeader>
              <CardTitle className="text-blue-600 dark:text-blue-400">Enter Your Results</CardTitle>
              <CardDescription>Input your performance for each of the five events</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="deadlift">3 Repetition Deadlift (pounds)</Label>
                <Input
                  id="deadlift"
                  type="number"
                  placeholder="Enter weight in pounds"
                  value={deadlift}
                  onChange={(e) => setDeadlift(e.target.value ? Number(e.target.value) : "")}
                  disabled={!ageGroupId || !gender}
                  className="border-blue-200 dark:border-blue-900"
                />
              </div>

              <div>
                <Label htmlFor="pushups">Hand Release Push-ups (count)</Label>
                <Input
                  id="pushups"
                  type="number"
                  placeholder="Enter number of push-ups"
                  value={pushups}
                  onChange={(e) => setPushups(e.target.value ? Number(e.target.value) : "")}
                  disabled={!ageGroupId || !gender}
                  className="border-blue-200 dark:border-blue-900"
                />
              </div>

              <div>
                <Label>Sprint-Drag-Carry (Time)</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="sdcMinutes" className="text-xs">
                      Minutes
                    </Label>
                    <Input
                      id="sdcMinutes"
                      type="number"
                      placeholder="Min"
                      value={sdcMinutes}
                      onChange={(e) => setSdcMinutes(e.target.value ? Number(e.target.value) : "")}
                      disabled={!ageGroupId || !gender}
                      className="border-blue-200 dark:border-blue-900"
                      min="0"
                    />
                  </div>
                  <div>
                    <Label htmlFor="sdcSeconds" className="text-xs">
                      Seconds
                    </Label>
                    <Input
                      id="sdcSeconds"
                      type="number"
                      placeholder="Sec"
                      value={sdcSeconds}
                      onChange={(e) => handleSecondsChange(e.target.value, setSdcSeconds)}
                      disabled={!ageGroupId || !gender}
                      className="border-blue-200 dark:border-blue-900"
                      min="0"
                      max="59"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label>Plank (Time)</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="plankMinutes" className="text-xs">
                      Minutes
                    </Label>
                    <Input
                      id="plankMinutes"
                      type="number"
                      placeholder="Min"
                      value={plankMinutes}
                      onChange={(e) => setPlankMinutes(e.target.value ? Number(e.target.value) : "")}
                      disabled={!ageGroupId || !gender}
                      className="border-blue-200 dark:border-blue-900"
                      min="0"
                    />
                  </div>
                  <div>
                    <Label htmlFor="plankSeconds" className="text-xs">
                      Seconds
                    </Label>
                    <Input
                      id="plankSeconds"
                      type="number"
                      placeholder="Sec"
                      value={plankSeconds}
                      onChange={(e) => handleSecondsChange(e.target.value, setPlankSeconds)}
                      disabled={!ageGroupId || !gender}
                      className="border-blue-200 dark:border-blue-900"
                      min="0"
                      max="59"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label>2-Mile Run (Time)</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="runMinutes" className="text-xs">
                      Minutes
                    </Label>
                    <Input
                      id="runMinutes"
                      type="number"
                      placeholder="Min"
                      value={runMinutes}
                      onChange={(e) => setRunMinutes(e.target.value ? Number(e.target.value) : "")}
                      disabled={!ageGroupId || !gender}
                      className="border-blue-200 dark:border-blue-900"
                      min="0"
                    />
                  </div>
                  <div>
                    <Label htmlFor="runSeconds" className="text-xs">
                      Seconds
                    </Label>
                    <Input
                      id="runSeconds"
                      type="number"
                      placeholder="Sec"
                      value={runSeconds}
                      onChange={(e) => handleSecondsChange(e.target.value, setRunSeconds)}
                      disabled={!ageGroupId || !gender}
                      className="border-blue-200 dark:border-blue-900"
                      min="0"
                      max="59"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={setMinimumValues}
                    disabled={!ageGroupId || !gender}
                    className="flex items-center gap-1 flex-1"
                  >
                    <ArrowDown className="h-4 w-4" />
                    <span>Minimum</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={setMaximumValues}
                    disabled={!ageGroupId || !gender}
                    className="flex items-center gap-1 flex-1"
                  >
                    <ArrowUp className="h-4 w-4" />
                    <span>Maximum</span>
                  </Button>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={resetForm}>
                    Reset
                  </Button>
                  <Button
                    onClick={calculateScores}
                    disabled={!ageGroupId || !gender}
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
                  >
                    Calculate Score
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 border-t-4 border-t-green-500 overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-green-600 dark:text-green-400">Results</CardTitle>
            <CardDescription>Your Army Fitness Test performance</CardDescription>
          </CardHeader>
          <Separator />

          {scores ? (
            <>
              <CardHeader className={`${getResultBgColor(result)} text-white`}>
                <CardTitle>Your Army Fitness Test Results</CardTitle>
                <CardDescription className="text-white text-opacity-90">
                  {gender === "male" ? "Male" : "Female"}, Age Group: {getSelectedAgeGroupLabel()}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="text-center">
                  <h2 className="text-3xl font-bold dark:text-white">Total Score: {scores.total} / 500</h2>
                  <Progress
                    value={(scores.total / 500) * 100}
                    className="h-4 mt-2"
                    indicatorClassName={getScoreColor(scores.total / 5)}
                  />
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium dark:text-white">3 Repetition Deadlift</span>
                      <span className="font-bold dark:text-white">{scores.deadlift} / 100</span>
                    </div>
                    <Progress
                      value={scores.deadlift}
                      className="mb-4"
                      indicatorClassName={getScoreColor(scores.deadlift)}
                    />

                    <div className="flex justify-between mb-1">
                      <span className="font-medium dark:text-white">Hand Release Push-ups</span>
                      <span className="font-bold dark:text-white">{scores.pushups} / 100</span>
                    </div>
                    <Progress
                      value={scores.pushups}
                      className="mb-4"
                      indicatorClassName={getScoreColor(scores.pushups)}
                    />

                    <div className="flex justify-between mb-1">
                      <span className="font-medium dark:text-white">Sprint-Drag-Carry</span>
                      <span className="font-bold dark:text-white">{scores.sprintDragCarry} / 100</span>
                    </div>
                    <Progress
                      value={scores.sprintDragCarry}
                      className="mb-4"
                      indicatorClassName={getScoreColor(scores.sprintDragCarry)}
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium dark:text-white">Plank</span>
                      <span className="font-bold dark:text-white">{scores.plank} / 100</span>
                    </div>
                    <Progress value={scores.plank} className="mb-4" indicatorClassName={getScoreColor(scores.plank)} />

                    <div className="flex justify-between mb-1">
                      <span className="font-medium dark:text-white">2-Mile Run</span>
                      <span className="font-bold dark:text-white">{scores.run} / 100</span>
                    </div>
                    <Progress value={scores.run} className="mb-4" indicatorClassName={getScoreColor(scores.run)} />

                    <Alert
                      variant={result === "combat" ? "default" : result === "pass" ? "default" : "destructive"}
                      className={`mt-2 ${
                        result === "combat"
                          ? "bg-emerald-50 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-50"
                          : result === "pass"
                            ? "bg-blue-50 text-blue-900 dark:bg-blue-900 dark:text-blue-50"
                            : "bg-red-50 text-red-900 dark:bg-red-900 dark:text-red-50"
                      }`}
                    >
                      {result === "combat" && <Trophy className="h-4 w-4" />}
                      {result === "pass" && <CheckCircle className="h-4 w-4" />}
                      {result === "fail" && <XCircle className="h-4 w-4" />}
                      <AlertTitle>
                        {result === "combat" && "Combat Standard Achieved!"}
                        {result === "pass" && "Test Passed!"}
                        {result === "fail" && "Test Failed"}
                      </AlertTitle>
                      <AlertDescription>
                        {result === "combat" &&
                          "You have met the gender-neutral combat standard with a score of 350+ and at least 60 points in each event. The combat standard is equivalent to the male standard for each age group"}
                        {result === "pass" &&
                          "You have passed the test with a score of 300+ and at least 60 points in each event."}
                        {result === "fail" && "You did not meet the minimum requirements. Keep training and try again!"}
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>
              </CardContent>
            </>
          ) : (
            <CardContent className="py-8 text-center text-gray-500 dark:text-gray-400">
              <p>Enter your results and click &quot;Calculate Score&quot; to see your performance.</p>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  )
}
