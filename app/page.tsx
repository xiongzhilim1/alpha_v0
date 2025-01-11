import { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OnboardingFlow from '@/components/OnboardingFlow'
import Dashboard from '@/components/Dashboard'
import ReadingModule from '@/components/ReadingModule'
import PracticeExercises from '@/components/PracticeExercises'
import KindleIntegration from '@/components/KindleIntegration'
import PDFReaderIntegration from '@/components/PDFReaderIntegration'
import AnalyticsDashboard from '@/components/AnalyticsDashboard'
import LoadingSpinner from '@/components/LoadingSpinner'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Home() {
  // In a real app, you'd check if the user is onboarded
  const isOnboarded = true

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Suspense fallback={<LoadingSpinner />}>
          {isOnboarded ? (
            <Tabs defaultValue="dashboard">
              <TabsList>
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="reading">Reading Module</TabsTrigger>
                <TabsTrigger value="practice">Practice</TabsTrigger>
                <TabsTrigger value="integrations">Integrations</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
              <TabsContent value="dashboard">
                <Dashboard />
              </TabsContent>
              <TabsContent value="reading">
                <ReadingModule />
              </TabsContent>
              <TabsContent value="practice">
                <PracticeExercises />
              </TabsContent>
              <TabsContent value="integrations">
                <div className="space-y-8">
                  <KindleIntegration />
                  <PDFReaderIntegration />
                </div>
              </TabsContent>
              <TabsContent value="analytics">
                <AnalyticsDashboard />
              </TabsContent>
            </Tabs>
          ) : (
            <OnboardingFlow />
          )}
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

