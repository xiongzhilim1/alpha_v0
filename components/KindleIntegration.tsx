'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

export default function KindleIntegration() {
  const [connected, setConnected] = useState(false)

  const books = [
    { id: 1, title: 'The Speed Reading Book', author: 'Tony Buzan', progress: 65 },
    { id: 2, title: 'How to Read a Book', author: 'Mortimer J. Adler', progress: 30 },
    { id: 3, title: 'Deep Work', author: 'Cal Newport', progress: 80 },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Kindle Integration</CardTitle>
        </CardHeader>
        <CardContent>
          {connected ? (
            <Button variant="outline" onClick={() => setConnected(false)}>Disconnect Kindle</Button>
          ) : (
            <Button onClick={() => setConnected(true)}>Connect Kindle</Button>
          )}
        </CardContent>
      </Card>
      {connected && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Your Kindle Books</h3>
          {books.map((book) => (
            <Card key={book.id}>
              <CardHeader>
                <CardTitle>{book.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{book.author}</p>
              </CardHeader>
              <CardContent>
                <Progress value={book.progress} className="w-full mb-2" />
                <p className="text-sm text-muted-foreground">{book.progress}% complete</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

