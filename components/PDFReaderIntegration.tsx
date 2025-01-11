'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function PDFReaderIntegration() {
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Critical Thinking Guide.pdf', lastOpened: '2023-05-15' },
    { id: 2, name: 'Advanced Reading Techniques.pdf', lastOpened: '2023-05-10' },
  ])

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setDocuments([...documents, { id: documents.length + 1, name: file.name, lastOpened: new Date().toISOString().split('T')[0] }])
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>PDF Reader Integration</CardTitle>
        </CardHeader>
        <CardContent>
          <Input type="file" accept=".pdf" onChange={handleFileUpload} />
        </CardContent>
      </Card>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Your PDF Documents</h3>
        {documents.map((doc) => (
          <Card key={doc.id}>
            <CardHeader>
              <CardTitle>{doc.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Last opened: {doc.lastOpened}</p>
              <Button>Open Document</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

