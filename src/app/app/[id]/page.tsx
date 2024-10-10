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


export default function Component() {
  const [loading, setLoading] = useState<boolean>(false)  
  const [menu, setMenu] = useState()
  const [websiteContent, setWebsiteContent] = useWebsiteContent()
  const [sideContent, setSideContent] = useState<any>()
  const params = useParams<{ id: string }>()
  const [sitemap, setSitemap] = useState<Sitemap | undefined>()
  const [project, setProject] = useState<IProject>()
  useEffect(()=>{
    setLoading(true)
      axios.get("/api/app/page", {params: {project_id: params.id}}).then((response)=>{
        const data = response.data.data;
        let pages: any = {
          static: [],
          auth: [],
          admin: [],
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

  const handleMenuClick = async (page: any, page_section: string) =>{
    setLoading(true);
    try {
      const key = page_section + " : "+page.title + " - " + page.description
      setMenu(page.title)
      const response = await axios.post("/api/app/block/getOrCreate",  {
        app_context: project?.description,
        page_description: key,
        page_id: page._id
      });
      const completePageCode = response.data.data.map((item)=>{
        return {...item.content, id: item.id}
      })

      console.log(completePageCode, "COMPLETE")
      
      setWebsiteContent({pageCode: completePageCode});
      console.log("==================================================")
      // if(sitemap && Array.isArray(sitemap.pages))
      // setSitemap({pages: sitemap?.pages?.map((sitePage)=>{
      //   if(page._id == sitePage._id){
      //     sitePage.blocks = response.data.data
      //   }
      //   return sitePage;
      // })})

      // return response.data;
    } catch (error) {
      console.log({ error });
    }
    setLoading(false)
  }

  useEffect(()=>{
    window.addEventListener("message", (iframeData)=>{
      if(iframeData.data.operation == "component_clicked"){
        console.log(iframeData.data.id, websiteContent)
        let side = websiteContent.pageCode.filter((data: any)=> {
            console.log(data.id, data, iframeData.data.id.toString())
            return data.id == iframeData.data.id.toString()
        })
        if(side.length > 0)
            setSideContent(side[0])
      } 
    })

  }, [websiteContent])

  return (
    <div  className="flex h-screen bg-background text-foreground">
      <LeftNav onItemClick={handleMenuClick} activeMenu={menu??""} sitemap={sitemap}></LeftNav>

      {/* Main content area */}
      <SitePreviewContainer windowClick={()=>{setSideContent(undefined)}} website_content={websiteContent} loadingIframe={loading}></SitePreviewContainer>

      <RightNav sideContent={sideContent}></RightNav>
    </div>
  )
}