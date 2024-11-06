"use client";

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import GradientCard from "@/components/custom/GradientCard";
import Link from "next/link";
import axios from "axios";
import { IProject } from "@/models/Project";
import truncateText from "@/lib/helpers/string";
import { NavbarDashboardComponent } from "@/components/blocks/dashboard/Navbar";


export default function Component() {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)  

  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    setLoading(true)
      axios.get("/api/app/project").then((response)=>{
        setProjects(response.data.data)
        setLoading(false)
      });

  }, [])

  return (
    <>
    <NavbarDashboardComponent/>
    
    <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center space-y-6">

        <div className="w-full space-y-4">
        <div className="flex justify-between">

        <h2 className="text-2xl font-bold">Your Apps</h2>
        <Link href={"/app/new"}>
        <Button className="w-full sm:w-auto">Create New App</Button>
        </Link>

        </div>
        {loading ? (<div className="w-full h-1/2 flex justify-center items-center">

          <span className="loader w-12 loader-black"></span>
          Loading...
        </div>) : 
        (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 mx-auto">
            {projects.map((project: IProject, index)=>(
                <GradientCard link={"/app/"+project._id} key={index}>
                <div className="flex flex-col px-2">
                    <div className="space-y-1">
                      <h3 className="font-semibold tracking-tight mt-1 text-base">
                      {truncateText(project.name, 30)}
                      </h3>
                      <time className="font-sans text-xs text-red-500">{new Date(project.createdAt).toLocaleString()}</time>
                      <div className="hidden font-sans text-xs underline print:visible" />
                      <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                        <p>
                          {truncateText(project.description, 100)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-pretty mt-auto font-sans text-sm text-muted-foreground flex flex-col px-2">
                    <div className="mt-2 flex flex-wrap gap-1">
                      {/* <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
                        <PencilIcon size={15}/> <span>update</span>
                      </div>
                      <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
                        <Trash2 size={15}/> <span>delete</span>
                      </div> */}
                      {/* <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
                        Dashboard
                      </div> */}
                     
                    </div>
                  </div>
              </GradientCard>
            ))}
              
        
          </div>
        )
        
        }

          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
         

          </div>
        </div>
      </div>
    </div>
    </>
   

    
  )
}