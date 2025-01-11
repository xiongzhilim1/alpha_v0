'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Welcome back, Learner!</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="modules">Modules</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <OverviewTab />
        </TabsContent>
        <TabsContent value="modules">
          <ModulesTab />
        </TabsContent>
        <TabsContent value="progress">
          <ProgressTab />
        </TabsContent>
        <TabsContent value="achievements">
          <AchievementsTab />
        </TabsContent>
        <TabsContent value="social">
          <SocialTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function OverviewTab() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Daily Streak</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">7 days</p>
            <p className="text-sm text-muted-foreground">+50 points today</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Reading Speed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">250 wpm</p>
            <p className="text-sm text-muted-foreground">+15 wpm this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Comprehension Score</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">85%</p>
            <p className="text-sm text-muted-foreground">+5% this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Points</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1,250</p>
            <p className="text-sm text-muted-foreground">Level 5 Learner</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Badge variant="secondary">Speed Reader I</Badge>
            <Badge variant="secondary">Consistent Learner</Badge>
            <Badge variant="secondary">Knowledge Explorer</Badge>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Next Challenge</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold">Analytical Reading: Author's Argument</h3>
          <p className="text-sm text-muted-foreground mb-4">Map the main arguments in a complex text</p>
          <Button>Start Challenge</Button>
        </CardContent>
      </Card>
    </div>
  )
}

function ModulesTab() {
  const modules = [
    { id: 1, title: 'Speed Reading Fundamentals', progress: 75, level: 1 },
    { id: 2, title: 'Comprehension Building', progress: 50, level: 1 },
    { id: 3, title: 'Analytical Reading', progress: 25, level: 2 },
    { id: 4, title: 'Syntopical Reading', progress: 10, level: 2 },
  ]

  return (
    <div className="space-y-4">
      {modules.map((module) => (
        <Card key={module.id}>
          <CardHeader>
            <CardTitle>{module.title}</CardTitle>
            <Badge variant={module.level === 1 ? "default" : "secondary"}>
              Level {module.level}
            </Badge>
          </CardHeader>
          <CardContent>
            <Progress value={module.progress} className="w-full" />
            <p className="mt-2 text-sm text-muted-foreground">{module.progress}% complete</p>
            <Button className="mt-4">Continue Learning</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function ProgressTab() {
  const skills = [
    { name: 'Reading Speed', value: 70, points: 350 },
    { name: 'Comprehension', value: 85, points: 425 },
    { name: 'Critical Thinking', value: 60, points: 300 },
    { name: 'Note-Taking', value: 75, points: 375 },
  ]

  return (
    <div className="space-y-6">
      {skills.map((skill) => (
        <Card key={skill.name}>
          <CardHeader>
            <CardTitle>{skill.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between mb-2">
              <span>{skill.value}%</span>
              <span>{skill.points} points</span>
            </div>
            <Progress value={skill.value} className="w-full" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function AchievementsTab() {
  const achievements = [
    { id: 1, name: 'Speed Reader I', description: 'Read 300 words per minute', completed: true, points: 100 },
    { id: 2, name: 'Comprehension Master', description: 'Achieve 90% accuracy in quizzes', completed: false, points: 200 },
    { id: 3, name: 'Synthesis Sage', description: 'Complete 5 synthesis exercises', completed: true, points: 150 },
    { id: 4, name: 'Consistent Learner', description: 'Maintain a 7-day streak', completed: true, points: 100 },
    { id: 5, name: 'Knowledge Explorer', description: 'Try all platform features', completed: false, points: 100 },
    { id: 6, name: 'Master Student', description: 'Complete the advanced learning path', completed: false, points: 500 },
  ]

  return (
    <div className="space-y-4">
      {achievements.map((achievement) => (
        <Card key={achievement.id}>
          <CardHeader>
            <CardTitle className={achievement.completed ? 'text-green-600' : 'text-gray-600'}>
              {achievement.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{achievement.description}</p>
            <div className="flex justify-between items-center mt-2">
              {achievement.completed ? (
                <Badge variant="success">Completed</Badge>
              ) : (
                <Badge variant="secondary">In Progress</Badge>
              )}
              <span className="text-sm font-semibold">{achievement.points} points</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function SocialTab() {
  const studyGroups = [
    { id: 1, name: 'Speed Reading Enthusiasts', members: 8, challenges: 2 },
    { id: 2, name: 'Critical Thinkers United', members: 6, challenges: 1 },
  ]

  const leaderboard = [
    { rank: 1, name: 'Alice', points: 2500, avatar: '/avatars/01.png' },
    { rank: 2, name: 'Bob', points: 2300, avatar: '/avatars/02.png' },
    { rank: 3, name: 'Charlie', points: 2100, avatar: '/avatars/03.png' },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Study Groups</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {studyGroups.map((group) => (
              <div key={group.id} className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{group.name}</h3>
                  <p className="text-sm text-muted-foreground">{group.members} members</p>
                </div>
                <div>
                  <Badge variant="secondary">{group.challenges} active challenges</Badge>
                </div>
              </div>
            ))}
          </div>
          <Button className="mt-4">Create New Group</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Leaderboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {leaderboard.map((user) => (
              <div key={user.rank} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="font-bold">{user.rank}</span>
                  <Avatar>
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <span>{user.name}</span>
                </div>
                <span className="font-semibold">{user.points} points</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

