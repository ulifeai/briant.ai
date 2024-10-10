"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FormEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";



type LayoutSectionsType = {
  title: string;
  description: string;
}

export default function Home() {

  const [loading, setLoading] = useState<boolean>(false)  
  const [layoutSections, setLayoutSetions] = useState<LayoutSectionsType[]>()  
  const router = useRouter()

  const fetchLayout = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    let app_description: string = formData.get('app_description') as string || "";
    // console.log(formData.get('description'))
    try {
      const response = await axios.post("/api/ai/generator/sitemap", {
        app_context: app_description,
      });
      // setLayoutSetions(response.data.layout)
    localStorage.setItem("app_description",  app_description);
    localStorage.setItem("app_data",  JSON.stringify(response.data));

    router.push("/sitemap")


      const element = document.getElementById("layoutSection")
      element?.scrollIntoView({ behavior: "smooth"});

    } catch (error) {
      console.log({ error });
    }
    setLoading(false)
  }

  const generatePage = ()=>{
    localStorage.setItem("layout", JSON.stringify(layoutSections));
    router.push("/dashboard")
  }

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background">
     <section  className="flex min-h-screen w-full items-center justify-center bg-background">
       
        <div className="overflow-hidden pt-16">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -m-8">
              <div className="w-full p-8">
              <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Your apps <span className="text-indigo-800">landing page</span> built by AI in minutes</h1>
                <p className="mt-2 text-muted-foreground">
                Manage entities, create dashboards, and create app flows in minutes with our AI-powered automation tool.
                </p>
              </div>
                             
                <div className="flex items-center justify-center w-full flex-wrap -m-2.5 mb-20">
                  <div className="w-full md:w-auto p-2.5">
                    <div className="block w-[40rem]">
                      <form action="" onSubmit={fetchLayout}>
                        <div className="text-center">
                          <div className="my-8 w-full font-bold font-inter">Your app idea</div>
                          <Textarea name="app_description" className="font-inter p-6 mb-8 w-full border rounded-md" placeholder="I am buildng..." rows={10}></Textarea>
                          <Button>
                         
                         {loading ? (<span className="loader"></span>): "Generate pages"}
                         
                         </Button>
                        </div>
                        
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      
    </main>


  );

}



