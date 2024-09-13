"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { 
  MonitorIcon, SmartphoneIcon, TabletIcon,  UploadIcon,
  DownloadIcon,
  Settings,
  Sparkles,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { IframeHTMLAttributes, useEffect, useRef, useState } from "react";
import { DashboardActionsHeader } from "@/components/custom/DashboardActionsHeader";
import SitePreview from "./SitePreview";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function SitePreviewContainer({website_content}: {website_content: string}) {

  const [viewMode, setViewMode] = useState('web')
  const iframeRef = useRef<any>(null)

  useEffect(()=>{
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current?.contentWindow.postMessage({website_content}, "*")
    }
  }, [website_content])

    return <div className="flex-1 flex flex-col">
    {/* Top Header */}
    <DashboardActionsHeader viewMode={viewMode} setViewMode={setViewMode} />

    {/* Main content */}
    <div className=" bg-gray-100 w-full h-[98vh]">
          {/* <div className="text-center pt-6 pb-2 text-gray-200">
            <Button variant={"outline"} className="px-8 py-0 border-gray-50 bg-transparent">{viewMode}</Button>
          </div> */}
    <ScrollArea className="h-full flex-1 container overflow-auto pt-6 pb-6 text-black">
      <div className={`rounded-md h-[95vh] bg-white mx-auto ${
        viewMode === 'web' ? 'max-w-7xl' : 
        viewMode === 'tablet' ? 'max-w-2xl' : 
        'max-w-sm'
      }`}>
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

        <iframe ref={iframeRef} src="http://localhost:3001/preview" className="w-full h-[95vh]"></iframe>
          
      </div>
    </ScrollArea>

    </div>
  
  </div>
}