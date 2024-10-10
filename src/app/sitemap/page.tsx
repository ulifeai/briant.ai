"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";


export default function InteractiveSitemap() {
  const [jsonInput, setJsonInput] = useState(localStorage.getItem("app_data")??"[]")
  const router = useRouter()

  const handleNext = () => {
    try {
      JSON.parse(jsonInput)
      localStorage.setItem("app_data", jsonInput)
      router.push("/dashboard")
    } catch (error) {
      alert("Invalid JSON format")
    }
  }
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background">
      <div className="w-full max-w-lg space-y-4 px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Website sitemap</h1>
          <p className="mt-2 text-muted-foreground">
            You can update youor page structure here.
          </p>
        </div>
        <Textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder="Enter JSON data here..."
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          rows={8}
        />
        <Button onClick={handleNext} className="w-full">
          Next
        </Button>
      </div>
    </div>
  )
}

