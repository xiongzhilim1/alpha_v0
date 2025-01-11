'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const steps = [
  { id: 'goals', title: 'Learning Goals' },
  { id: 'level', title: 'Current Level' },
  { id: 'style', title: 'Learning Style' },
  { id: 'time', title: 'Time Commitment' },
  { id: 'topics', title: 'Topic Preferences' },
  { id: 'companion', title: 'AI Companion' },
  { id: 'assessment', title: 'Initial Assessment' },
]

export default function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Handle onboarding completion
      console.log('Onboarding completed')
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStepContent = () => {
    const step = steps[currentStep]
    switch (step.id) {
      case 'goals':
        return <GoalsStep />
      case 'level':
        return <LevelStep />
      case 'style':
        return <StyleStep />
      case 'time':
        return <TimeStep />
      case 'topics':
        return <TopicsStep />
      case 'companion':
        return <CompanionStep />
      case 'assessment':
        return <AssessmentStep />
      default:
        return null
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{steps[currentStep].title}</CardTitle>
      </CardHeader>
      <CardContent>{renderStepContent()}</CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handlePrevious} disabled={currentStep === 0}>
          Previous
        </Button>
        <Button onClick={handleNext}>
          {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </CardFooter>
    </Card>
  )
}

function GoalsStep() {
  return (
    <div className="space-y-4">
      <Label>Select your primary learning goals:</Label>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="goal1" className="form-checkbox" />
          <label htmlFor="goal1">Improve learning efficiency for career advancement</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="goal2" className="form-checkbox" />
          <label htmlFor="goal2">Master complex reading materials quickly</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="goal3" className="form-checkbox" />
          <label htmlFor="goal3">Develop better knowledge retention</label>
        </div>
      </div>
    </div>
  )
}

function LevelStep() {
  return (
    <div className="space-y-4">
      <Label>What's your current comfort level with advanced learning techniques?</Label>
      <RadioGroup defaultValue="novice">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="novice" id="novice" />
          <Label htmlFor="novice">Novice</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="intermediate" id="intermediate" />
          <Label htmlFor="intermediate">Intermediate</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="advanced" id="advanced" />
          <Label htmlFor="advanced">Advanced</Label>
        </div>
      </RadioGroup>
    </div>
  )
}

function StyleStep() {
  return (
    <div className="space-y-4">
      <Label>What's your preferred learning style?</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a learning style" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="visual">Visual</SelectItem>
          <SelectItem value="auditory">Auditory</SelectItem>
          <SelectItem value="reading-writing">Reading/Writing</SelectItem>
          <SelectItem value="kinesthetic">Kinesthetic</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

function TimeStep() {
  return (
    <div className="space-y-4">
      <Label>How much time can you commit to learning each week?</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select time commitment" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1-2">1-2 hours</SelectItem>
          <SelectItem value="3-5">3-5 hours</SelectItem>
          <SelectItem value="6-10">6-10 hours</SelectItem>
          <SelectItem value="10+">10+ hours</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

function TopicsStep() {
  return (
    <div className="space-y-4">
      <Label>Select your preferred topics:</Label>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="topic1" className="form-checkbox" />
          <label htmlFor="topic1">Speed reading techniques</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="topic2" className="form-checkbox" />
          <label htmlFor="topic2">Critical thinking</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="topic3" className="form-checkbox" />
          <label htmlFor="topic3">Note-taking systems</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="topic4" className="form-checkbox" />
          <label htmlFor="topic4">Knowledge synthesis</label>
        </div>
      </div>
    </div>
  )
}

function CompanionStep() {
  return (
    <div className="space-y-4">
      <Label>Choose your AI companion personality:</Label>
      <RadioGroup defaultValue="encouraging">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="encouraging" id="encouraging" />
          <Label htmlFor="encouraging">Encouraging</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="funny" id="funny" />
          <Label htmlFor="funny">Funny</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="challenging" id="challenging" />
          <Label htmlFor="challenging">Challenging</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="scholarly" id="scholarly" />
          <Label htmlFor="scholarly">Scholarly</Label>
        </div>
      </RadioGroup>
    </div>
  )
}

function AssessmentStep() {
  return (
    <div className="space-y-4">
      <p>Let's start with a quick assessment to gauge your current skills.</p>
      <Button>Start Assessment</Button>
    </div>
  )
}

