"use client";

import { useEffect, useRef, useState } from "react";
import { useWebsiteContent } from "@/hooks/useWebsiteSections";
import { useConfig } from "@/hooks/useConfig";
import { Category } from "@/models/Page";
import { useParams } from "next/navigation";
import axios from "axios";

export default function Component() {
  const [websiteContent, setWebsiteContent] = useWebsiteContent();
  const [websiteData, setWebsiteData] = useState<any>();
  const [themeOptions, setThemeOptions] = useConfig();
  const params = useParams<{ id: string; pageid: string }>();

  const iframeRef = useRef<any>(null);

  useEffect(() => {
    axios
      .get("/api/app/page", { params: { project_id: params.id } })
      .then((response) => {
        const data = response.data.data;
        let page: any = {};
        data.pages.forEach((element: any) => {
          if (element.id === params.pageid) {
            page = element;
          }
        });
        console.log(page);
        const completePageCode = page.blocks.map((item: any) => {
          return { ...item.content, id: item.id, _id: item._id };
        });
        console.log("completePageCode", completePageCode);
        setWebsiteData({ pageCode: completePageCode });
      });
  }, []);

  useEffect(() => {
    console.log("websiteContent", websiteData);
    sendIframeMessage("website_content", { ...websiteData });
    sendIframeMessage("route_page_app_render", { page_app_render: true });
  }, [websiteData]);

  useEffect(() => {
    sendIframeMessage("set_theme", { themeOptions });
  }, [themeOptions]);

  const sendIframeMessage = (operation: string, data: any) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current?.contentWindow.postMessage({ ...data, operation }, "*");
    }
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      <iframe
        ref={iframeRef}
        src={
          (process.env.NEXT_PUBLIC_PREVIEW_URL ?? "http://localhost:3001") +
          "/preview"
        }
        className="w-full h-full"
      ></iframe>
    </div>
  );
}
