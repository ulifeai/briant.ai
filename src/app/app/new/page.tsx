"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import axios from "axios";
import {ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import FeaturePickerModal from "@/components/custom/FeaturePicker";
import { fork } from "child_process";
import { NavbarDashboardComponent } from "../layout";

type Feature = {
  name: string
  description: string
  project_id?: string
  path: string
}

export default function InteractiveSitemap() {
  const [appDescription, setAppDescription] = useState("")
  const [loading, setLoading] = useState<boolean>(false)  
  const [open, setOpen] = useState(false)
  const [features, setFeatures] = useState(
    {
      "public": [
          {
              "title": "Dashboard",
              "id": "/dashboard",
              "description": "An intuitive overview provides users quick insights into key metrics, recent activities, and a personalized workspace to enhance productivity."
          },
          {
              "title": "Connection Hub",
              "id": "/connection-hub",
              "description": "A unified platform for viewing and managing all client interactions, ensuring a streamlined communication process."
          },
          {
              "title": "Growth Insights",
              "id": "/growth-insights",
              "description": "Analytics page offering deep dives into sales metrics, conversion rates, and customer trends, helping teams strategize effectively."
          },
          {
              "title": "Campaign Catalyst",
              "id": "/campaign-catalyst",
              "description": "Innovative campaign management tools that empower users to design, launch, and evaluate marketing campaigns directly."
          },
          {
              "title": "Integration Station",
              "id": "/integration-station",
              "description": "Facilitates integrations with various third-party tools, ensuring seamless connectivity and improved efficiency."
          }
      ],
      "auth": [
          {
              "title": "User Login",
              "id": "/login",
              "description": "Secure login page for system authentication and personalized access based on roles."
          },
          {
              "title": "Signup",
              "id": "/signup",
              "description": "Registration page for new users to join the platform."
          },
          {
              "title": "Password Recovery",
              "id": "/password-recovery",
              "description": "Helps users recover access in case they forget their passwords, ensuring security."
          }
      ],
      "authenticated": [
          {
              "title": "User Management",
              "id": "/authenticated/user-management",
              "description": "authenticated page for managing user roles, permissions, and access levels across the platform."
          },
          {
              "title": "System Analytics",
              "id": "/authenticated/system-analytics",
              "description": "Provides authenticatedistrators with insights into system performance, user interactions, and operational metrics."
          },
          {
              "title": "Data Console",
              "id": "/authenticated/data-console",
              "description": "authenticated interface for overseeing data integrity, backups, and system checks."
          }
      ]
  
  })
  const [selectedFeatures, setSelectedFeatures] = useState<Feature[]>([])

  const router = useRouter()

  const [currentStep, setCurrentStep] = useState(1)


  const handleNext = async (e?: any) => {
    if(e)
      e.preventDefault()
    setLoading(true)
    if(appDescription) {
      try {
        const response = await axios.post("/api/app/project", {
          description: appDescription,
        });
        console.log(response.data.data.pages)
        let pages: any = {}
        
        // pages.public = response.data.data.pages.public.map((item: any, index: number)=>({
        //   id: item.path,
        //   ...item
        // }))
        // pages.authenticated = response.data.data.pages.authenticated.map((item: any, index: number)=>({
        //   id: item.path,
        //   ...item
        // }))
        // pages.auth = response.data.data.pages.auth.map((item: any, index: number)=>({
        //   id: item.path,
        //   ...item
        // }))
        const featuresId: Feature[] = []
        for (const key in response.data.data.pages) {
          if (Object.prototype.hasOwnProperty.call(response.data.data.pages, key)) {
            const element = response.data.data.pages[key];
            pages[key] = element.map((item: any, index: number)=>{
              
              item = {
                project_id: response.data.data.project._id,
                category: key,
                name: item.title,
              ...item
              }

              featuresId.push(item)

              return item
            })
          }
        }
  
        setFeatures(pages)
        console.log(featuresId)
        setSelectedFeatures(featuresId)
        setCurrentStep(2)
        // router.push("/app/"+response.data.data.project._id)
      } catch (error) {
        console.log(error)
        alert("Something went wrong")
      }
    }
    
    setLoading(false)
    setOpen(true)
  }

  const handleSave = async () => {
    setLoading(true)
    console.log('Selected features:', selectedFeatures)
    try {
      const response = await axios.post("/api/app/page/bulk", selectedFeatures);
      router.push("/app/"+selectedFeatures[0].project_id)
    } catch (error) {
      console.log(error)
    }

    setLoading(false)

  }


  function clickSuggestions(idea: string): void {
    setAppDescription(idea)
    handleNext()
  }

  return (
    // <div className="flex min-h-[80vh] w-full items-center justify-center bg-background">
    //   <div className="w-full max-w-2xl space-y-4 px-4 sm:px-6">
    //     <div className="text-center">
    //       <h1 className="text-4xl font-bold tracking-tight text-foreground"> What can i help you build?
    //       </h1>
    //     </div>
    //     <Textarea
    //       value={appDescription}
    //       onChange={(e) => setappDescription(e.target.value)}
    //       placeholder="App description..."
    //       className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
    //       rows={4}
    //     />
    //     <Button onClick={handleNext} className="w-full">
    //     {loading ? (<span className="loader"></span>): "Next"}

          
    //     </Button>
    //   </div>
    // </div>

    <>

    <NavbarDashboardComponent/>
    <div className="mx-auto w-full h-screen flex ">
    {/* Stepper Header */}
   
     
      {currentStep === 1  ? (
        <form onSubmit={handleNext} className="flex min-h-[80vh] mb-[20%] w-full items-center justify-center bg-background flex flex-col items-center justify-center p-4">

        <h1 className="text-4xl font-bold mb-8">What can i help you build?</h1>

        {/* Textarea Section */}
        <div className="w-full max-w-3xl">
          <div className="relative">
            {/* Premium Banner */}
        {/* <div className="w-full max-w-3xl mb-6 flex items-center justify-between p-3 bg-muted rounded-lg text-sm">
          <span>Need more messages? Get higher limits with Premium.</span>
          <Button variant="link" className="text-primary">
            Upgrade Plan
          </Button>
        </div> */}
            <Textarea
              className="w-full min-h-[56px] pl-6 pr-24 py-4 text-lg resize-none border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Describe your idea as much as you can..."
              value={appDescription}
              rows={3}
              onChange={(e) => setAppDescription(e.target.value)}

            />
            
            <div className="absolute right-4 top-16 flex items-center gap-2">
              <Button  onClick={handleNext} size="icon" className="h-10 text-white w-10">
                
                {loading ? (<span className="loader"></span>): <ArrowRight className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Example Queries */}
          <div className="flex flex-wrap gap-2 mt-4 text-gray-700">
            <Button variant="outline" onClick={()=>clickSuggestions("Create a CRM platform")} size="sm" className="rounded-full text-xs">
              Create a CRM platform <ArrowUpRight className="ml-2 " size={20}/>
            </Button>
            <Button onClick={()=>clickSuggestions("Create a school management system")}  variant="outline" size="sm" className="rounded-full text-xs">
              Create a school management system <ArrowUpRight className="ml-2 " size={20}/>
            </Button>
            <Button onClick={()=>clickSuggestions("Create a jobboard application")}  variant="outline" size="sm" className="rounded-full text-xs">
              Create a jobboard application <ArrowUpRight className="ml-2 " size={20}/>
            </Button>
          </div>
        </div>
      </form>
      ): (
        <>
        <div className="h-screen bg-gray-100 w-1/2 flex justify-center flex-col items-center">
        <p className="text-md text-gray-500  font-light mb-8 text-center px-12">"{appDescription}"</p>

          <h1 className="text-4xl font-bold mb-8">Choose your project pages</h1>
          <p className="text-md font-light mb-8">You can add as many pages as you want later. only choose the relevant pages</p>
           {/* Navigation Buttons */}
            

        </div>
        <div className="w-1/2">
          <div className="h-[85vh] w-full p-12 overflow-auto">

            <FeaturePickerModal  
              selectedFeatures={selectedFeatures}
              setSelectedFeatures = {setSelectedFeatures}
              features={features} 
            />

          
          </div>
          <div className=" flex justify-end px-12 pt-4 border-t">
              {/* <Button
                variant="outline"
                onClick={() => setCurrentStep(prev => prev - 1)}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button> */}
              <Button
                // onClick={() => setCurrentStep(prev => prev + 1)}
                // disabled={currentStep === 2}
                onClick={handleSave} 
              >
                {loading ? (<span className="loader"></span>): (<>Create my project <ArrowRight className="h-6 w-6" /></>)}
                
              </Button>
          </div>
        </div>
        
        

        </>
      )}

       
      
      
    </div>
    </>
    
  )
}

