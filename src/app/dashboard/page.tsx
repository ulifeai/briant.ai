"use client"

import { useRef, useState } from "react";
import LeftNav from "@/components/blocks/dashboard/LeftNav";
import SitePreviewContainer from "@/components/blocks/dashboard/SitePreviewContainer";
import axios from "axios";

export default function Component() {
  const cache = useRef(new Map())  
  const [loading, setLoading] = useState<boolean>(false)  
  const [menu, setMenu] = useState()
  const [websiteContent, setWebsiteContent] = useState("")

  const handleMenuClick = async (item: any, page_section: string) =>{
    setLoading(true);
    try {
      const app_description = localStorage.getItem("app_description");
      const key = page_section + " : "+item.title + " - " + item.description
      setMenu(item.title)
      if(!cache.current) {
        cache.current = new Map()
      }
      if(cache.current?.has(key)) {
        setWebsiteContent(cache.current.get(key))
      }
      const response = await axios.post("/api/ai/generator/layout", {
        app_context: app_description,
        page_description: key,
      });
      cache.current.set(key.replaceAll(" ", ""), response.data)
      setWebsiteContent(response.data);

      return response.data;
    } catch (error) {
      console.log({ error });
    }
    setLoading(false)
  }

  return (
    <div  className="flex h-screen bg-background text-foreground">
      <LeftNav onItemClick={handleMenuClick} activeMenu={menu??""}></LeftNav>

      {/* Main content area */}
      <SitePreviewContainer website_content={websiteContent}></SitePreviewContainer>

      {/* <RightNav></RightNav> */}
    </div>
  )
}