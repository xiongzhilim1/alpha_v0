'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

export default function ReadingModule() {
  const [activeLevel, setActiveLevel] = useState(1)

  const levels = [
    {
      id: 1,
      title: 'Fundamentals',
      modules: [
        { id: 1, title: 'Speed Reading Basics', progress: 75 },
        { id: 2, title: 'Comprehension Building', progress: 50 },
      ],
    },
    {
      id: 2,
      title: 'Advanced Techniques',
      modules: [
        { id: 3, title: 'Analytical Reading', progress: 25 },
        { id: 4, title: 'Syntopical Reading', progress: 10 },
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        {levels.map((level) => (
          <Button
            key={level.id}
            variant={activeLevel === level.id ? 'default' : 'outline'}
            onClick={() => setActiveLevel(level.id)}
          >
            Level {level.id}: {level.title}
          </Button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {levels
          .find((level) => level.id === activeLevel)
          ?.modules.map((module) => (
            <Card key={module.id}>
              <CardHeader>
                <CardTitle>{module.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={module.progress} className="w-full mb-4" />
                <p className="text-sm text-muted-foreground mb-4">{module.progress}% complete</p>
                <Button>Continue Learning</Button>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  )
}

