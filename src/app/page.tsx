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
      const response = await axios.post("/api/ai", {
        app_context: app_description,
      });
      setLayoutSetions(response.data.layout)
    localStorage.setItem("app_description",  app_description);


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
    <main className="m-0 p-0">
     <section data-section-id="1" data-share="" data-category="headers" data-component-id="44d0b9e2_01_awz" x-data="{ mobileNavOpen: false }" className="bg-blueGray-50 h-screen">
       
        <div className="overflow-hidden pt-16">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -m-8">
              <div className="w-full p-8">
                <div className="w-full flex items-center justify-center">
                  <h1 className="font-title m-6 text-3xl md:text-8xl lg:text-6xl text-center max-w-[80%] font-bold font-heading leading-none" data-config-id="auto-txt-12-1"> Your apps <span className="text-indigo-800">landing page</span> built by AI in minutes</h1>
                </div>                
                <p className="mb-11 text-lg text-gray-900 text-center" data-config-id="auto-txt-13-1">Manage entities, create dashboards, and create app flows in minutes with our AI-powered automation tool.</p>
                <div className="flex items-center justify-center w-full flex-wrap -m-2.5 mb-20">
                  <div className="w-full md:w-auto p-2.5">
                    <div className="block w-[40rem]">
                      <form action="" onSubmit={fetchLayout}>
                        <div className="text-center">
                          <div className="mb-8 w-full font-bold font-inter">Your app idea</div>
                          <textarea name="app_description" className="font-inter p-6 w-full border border-primary-500 rounded-md" placeholder="I am buildng..." rows={10}></textarea>
                        </div>
                        <button className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200">
                         
                        {loading ? (<span className="loader"></span>): "Generate pages"}
                        
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="layoutSection" className=" border-t bg-blueGray-50 h-screen">
        <div className="overflow-hidden pt-16">
          <div className="container px-4 mx-auto">
            <div className="flex items-center justify-center flex-col w-full flex-wrap -m-2.5 mb-20">
                <div>
                <h1  className="m-6 mb-16 text-2xl md:text-4xl lg:text-3xl text-center font-bold font-heading leading-none">
                  Your page sections
                </h1>
                </div>
                <div className="w-[40rem]">
                  <Accordion type="single" collapsible>

                    {layoutSections?.map((layoutSection, index)=>(
                      <AccordionItem key={index} className="border-2 mb-4 p-4 rounded-lg" value={"item-"+index}>
                        <AccordionTrigger className="font-bold text-xl">{layoutSection.title}</AccordionTrigger>
                        <AccordionContent>
                          {layoutSection.description}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  <div className="flex justify-center mt-8">
                    <button onClick={generatePage} className="py-4 px-6 text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button" data-config-id="auto-txt-14-1">
                    {loading ? (<span className="loader"></span>): "Validate and Generate pages"}

                      
                    </button>
                  </div>
                </div>
                
            </div>
            
          </div>
        </div>

      </section>
      
    </main>


  );

}
