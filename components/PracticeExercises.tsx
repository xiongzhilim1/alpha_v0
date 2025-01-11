'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function PracticeExercises() {
  const [activeCategory, setActiveCategory] = useState('speed')

  const exercises = {
    speed: [
      { id: 1, title: 'Timed Reading Passage', difficulty: 'Easy', estimatedTime: '5 min' },
      { id: 2, title: 'Rapid Comprehension Check', difficulty: 'Medium', estimatedTime: '10 min' },
      { id: 3, title: 'Advanced Speed Challenge', difficulty: 'Hard', estimatedTime: '15 min' },
    ],
    comprehension: [
      { id: 4, title: 'Main Idea Identification', difficulty: 'Easy', estimatedTime: '7 min' },
      { id: 5, title: 'Critical Analysis Quiz', difficulty: 'Medium', estimatedTime: '12 min' },
      { id: 6, title: 'Multi-Text Synthesis', difficulty: 'Hard', estimatedTime: '20 min' },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <Button
          variant={activeCategory === 'speed' ? 'default' : 'outline'}
          onClick={() => setActiveCategory('speed')}
        >
          Speed Reading
        </Button>
        <Button
          variant={activeCategory === 'comprehension' ? 'default' : 'outline'}
          onClick={() => setActiveCategory('comprehension')}
        >
          Comprehension
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {exercises[activeCategory].map((exercise) => (
          <Card key={exercise.id}>
            <CardHeader>
              <CardTitle>{exercise.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <Badge variant={exercise.difficulty === 'Easy' ? 'default' : exercise.difficulty === 'Medium' ? 'secondary' : 'destructive'}>
                  {exercise.difficulty}
                </Badge>
                <span className="text-sm text-muted-foreground">{exercise.estimatedTime}</span>
              </div>
              <Button className="w-full">Start Exercise</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

