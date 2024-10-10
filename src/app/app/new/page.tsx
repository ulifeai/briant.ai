"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import axios from "axios";


export default function InteractiveSitemap() {
  const [appDescription, setappDescription] = useState("")
  const [loading, setLoading] = useState<boolean>(false)  

  const router = useRouter()

  const handleNext = async () => {
    setLoading(true)
    try {
      const response = await axios.post("/api/app/project", {
        description: appDescription,
      });
      router.push("/app/"+response.data.data.project._id)
    } catch (error) {
      console.log(error)
      alert("Something went wrong")
    }
    setLoading(false)

  }
  return (
    <div className="flex min-h-[80vh] w-full items-center justify-center bg-background">
      <div className="w-full max-w-lg space-y-4 px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Your <span className="text-indigo-800">apps</span> built by AI in minutes</h1>
          <p className="mt-2 mb-8 text-muted-foreground">
            Build complete app (static pages, auth and dashboard).
          </p>
        </div>
        <Textarea
          value={appDescription}
          onChange={(e) => setappDescription(e.target.value)}
          placeholder="App description..."
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          rows={8}
        />
        <Button onClick={handleNext} className="w-full">
        {loading ? (<span className="loader"></span>): "Next"}

          
        </Button>
      </div>
    </div>
  )
}

