"use client"

import { useEffect, useRef, useState } from "react";
import LeftNav from "@/components/blocks/dashboard/LeftNav";
import SitePreviewContainer from "@/components/blocks/dashboard/SitePreviewContainer";
import axios from "axios";
import RightNav from "@/components/blocks/dashboard/RightNav";
import { useWebsiteContent } from "@/hooks/useWebsiteSections";
import { useParams } from "next/navigation";
import { Category } from "@/models/Page";
import { Sitemap } from "@/validators/modelOutput";
import { IProject } from "@/models/Project";
import { ThemeOptions } from "@/types/themeConfig";
import { configAtom, useConfig } from "@/hooks/useConfig";
import { deepEqual } from "@/lib/utils/object";
import { defaultCustomization } from "@/lib/utils/ui";
import ComingSoonModal from "@/components/blocks/dashboard/CommingSoonModal";
import { SetStateAction, useAtom } from "jotai";


export default function Component() {
  const [loading, setLoading] = useState<boolean>(false)  
  const [menu, setMenu] = useState()
  const [websiteContent, setWebsiteContent] = useWebsiteContent()
  const [websiteConfig, setWebsiteConfig] = useConfig()
  const [sideContent, setSideContent] = useState<any>()
  const params = useParams<{ id: string }>()
  const [sitemap, setSitemap] = useState<Sitemap | undefined>()
  const [project, setProject] = useState<IProject>()
  const [commingSoonModalOpen, setCommingSoonModalOpen] = useState<boolean>(false)
  
  
  useEffect(()=>{
    setLoading(true)
      axios.get("/api/app/page", {params: {project_id: params.id}}).then((response)=>{
        const data = response.data.data;
        let pages: any = {
          public: [],
          auth: [],
          authenticated: [],
        }
        data.pages.forEach((element: any) => {
          pages[element.category as Category].push(element);
        });
        setSitemap({pages, sitename: ""})
        setProject(data.project)
        setLoading(false)
      });
      // setSitemap(JSON.parse(localStorage.getItem("app_data") ?? "")??undefined)

  }, [])
  useEffect(()=>{
    if(project?.customizations){
      setWebsiteConfig(project?.customizations as ThemeOptions) // eslint-disable-line
    }
  }, [project])



  const handleMenuClick = async (page: any, page_section: string) =>{
    if(page_section == "__disabled__"){
      setCommingSoonModalOpen(true)
      return;
    }
    setLoading(true);
    try {
      const key = page_section + " : "+page.name + " - " + page.description
      setMenu(page.title)
      const response = await axios.post("/api/app/block/getOrCreate",  {
        app_context: project?.description,
        page_description: key,
        page_id: page._id
      });

      const completePageCode = response.data.data.map((item: any)=>{
        return {...item.content, id: item.id, _id: item._id}
      })
      
      setWebsiteContent({pageCode: completePageCode});
      if(sitemap && sitemap?.pages){
        const old_sitemap = {...sitemap};
        old_sitemap.pages[page_section as "public" | "auth" | "authenticated"].map((sitePage: any)=>{
          if(page._id == sitePage._id){
            sitePage.blocks = response.data.data
          }
          return sitePage;
        })

        setSitemap(old_sitemap)
      }
      

      // return response.data;
    } catch (error) {
      // console.log({ error });
    }
    setLoading(false)
  }

  const commingSoonModalOpenNotifyMe = async () => {
    const response = axios('/api/app/notifications/feature-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setCommingSoonModalOpen(false)

    alert("Thank you! You will be notified when it is released.")
  }

  useEffect(()=>{
    window.addEventListener("message", (iframeData)=>{
      if(iframeData.data.operation == "component_clicked"){
        console.log("I am here after", iframeData.data, websiteContent)
        let side = websiteContent.pageCode.filter((data: any)=> {
            return data.id == iframeData.data.id.toString()
        })
        if(side.length > 0){
          setSideContent(side[0])
          console.log(side[0])
        }
      } 
    })

  }, [websiteContent])

  const saveBlockContent = async () => {
    // just save the data
    if(!sideContent || !sideContent.id)
      return false;
    let newBlock = websiteContent.pageCode.filter((data: any)=> {
        return data.id == sideContent.id.toString()
    })
    if(newBlock.length > 0){
      let newData = {...newBlock[0]}
      const id = newData._id
      setLoading(true)
      delete newData.id
      delete newData._id
      const response = await axios.put("/api/app/block/"+id,  {
        content: newData,
      });
    }
    setLoading(false)
    
    setSideContent(undefined)
  }

  const onThemeChange = async (themeOptions: ThemeOptions) => {
    // just save the data
    setLoading(true)

    if(!deepEqual(themeOptions, defaultCustomization)) {
      const response = await axios.put("/api/app/project/"+params.id,  {
        customizations: themeOptions,
      });
    }
 
    setLoading(false)
    
    setSideContent(undefined)
  }

  return (
    <div  className="flex h-screen bg-background text-foreground">
      <LeftNav onItemClick={handleMenuClick} activeMenu={menu??""} sitemap={sitemap}></LeftNav>

      {/* Main content area */}
      <SitePreviewContainer windowClick={saveBlockContent} onThemeChange={onThemeChange} website_content={websiteContent} loadingIframe={loading}></SitePreviewContainer>

      <RightNav sideContent={sideContent} saveContent={saveBlockContent}></RightNav>

      <ComingSoonModal feature="Auth/Dashboard" 
      open={commingSoonModalOpen} 
      submitItend={commingSoonModalOpenNotifyMe}
      setOpen={setCommingSoonModalOpen}
      ></ComingSoonModal>
    </div>
  )
}