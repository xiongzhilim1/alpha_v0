'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { date: '2023-05-01', readingSpeed: 200, comprehension: 70 },
  { date: '2023-05-08', readingSpeed: 220, comprehension: 75 },
  { date: '2023-05-15', readingSpeed: 240, comprehension: 78 },
  { date: '2023-05-22', readingSpeed: 260, comprehension: 80 },
  { date: '2023-05-29', readingSpeed: 280, comprehension: 82 },
]

export default function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Learning Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="readingSpeed" stroke="#8884d8" name="Reading Speed (WPM)" />
              <Line yAxisId="right" type="monotone" dataKey="comprehension" stroke="#82ca9d" name="Comprehension (%)" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Learning Time</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">24h 35m</p>
            <p className="text-sm text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Exercises Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">47</p>
            <p className="text-sm text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Session Duration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">32m</p>
            <p className="text-sm text-muted-foreground">This week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Global Percentile</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">85th</p>
            <p className="text-sm text-muted-foreground">Among all users</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

