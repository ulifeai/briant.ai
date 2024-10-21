"use client"
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useRef, useState } from "react";
import { DashboardActionsHeader } from "@/components/custom/DashboardActionsHeader";

import { useConfig } from "@/hooks/useConfig";

export default function SitePreviewContainer({ website_content, loadingIframe, windowClick, onThemeChange}: {website_content: any, loadingIframe: boolean, windowClick: Function, onThemeChange: Function}) {

  const [viewMode, setViewMode] = useState('web')
  const [themeOptions, setThemeOptions] = useConfig()
  const iframeRef = useRef<any>(null)

  useEffect(()=>{
    sendIframeMessage("website_content", {...website_content})
  }, [website_content])

  useEffect(()=>{
    sendIframeMessage("loading",{loading: loadingIframe})
  }, [loadingIframe])

  useEffect(()=>{
    sendIframeMessage("set_theme",{themeOptions})
    onThemeChange(themeOptions)
    
  }, [themeOptions])



  const sendIframeMessage = (operation: string, data: any) => {
    console.log(data)
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current?.contentWindow.postMessage({...data, operation}, "*")
    }

  }

    return <div className="flex-1 flex flex-col">
    {/* Top Header */}
    <DashboardActionsHeader viewMode={viewMode} setViewMode={setViewMode} />

    {/* Main content */}
    <div className=" bg-gray-200 w-full h-[95vh]" onClick={()=>windowClick()}>
          {/* <div className="text-center pt-6 pb-2 text-gray-200">
            <Button variant={"outline"} className="px-8 py-0 border-gray-50 bg-transparent">{viewMode}</Button>
          </div> */}
    <ScrollArea className="h-full w-[67vw] flex-1 container overflow-auto pt-6 pb-6 text-black">
      <div className={`rounded-md ml-[3.5vw] h-[120vh] bg-white mx-auto ${
        viewMode === 'web' ? 'w-[80vw]' : 
        viewMode === 'tablet' ? 'max-w-2xl' : 
        'max-w-sm'
      }`}
      style={{ transform: "scale(0.75)", transformOrigin: "left top"}}
      >
         {/* <header className="border-b border-gray-800 bg-background">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-14">
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>Feature</MenubarTrigger>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>Pricing</MenubarTrigger>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>Resources</MenubarTrigger>
                  </MenubarMenu>
                </Menubar>
                <div className="text-xl font-bold">Company Logo</div>
                <div className="space-x-2">
                  <Button variant="outline" size="sm">Docs</Button>
                  <Button size="sm">GET STARTED</Button>
                </div>
              </div>
            </div>
          </header>
        <h1 className="text-4xl font-bold mb-4">Title copy goes here</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              tincidunt sagittis eros. Quisque quis euismod lorem. Etiam sodales ac
              felis id interdum. Proin viverra nulla sem, vel molestie lacus vulputat
              nec. Integer ut bibendum erat.
            </p>
            <Button variant="default">START FOR FREE</Button>
          </div>
         
        </div> */}

        <iframe ref={iframeRef} src="http://localhost:3001/preview" className="w-full h-full"></iframe>
          
      </div>
    </ScrollArea>

    </div>
  
  </div>
}