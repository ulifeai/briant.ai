"use client";

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
import { DndContext, DndContextProvider } from "@/hooks/useDnd";

export default function Component() {
  const [loading, setLoading] = useState<boolean>(false);
  const [menu, setMenu] = useState();
  const [pageid, setPageid] = useState<string>();
  const [page_id, setPage_id] = useState<string>();
  const [websiteContent, setWebsiteContent] = useWebsiteContent();
  const [websiteConfig, setWebsiteConfig] = useConfig();
  const [sideContent, setSideContent] = useState<any>();
  const params = useParams<{ id: string }>();
  const [sitemap, setSitemap] = useState<Sitemap | undefined>();
  const [project, setProject] = useState<IProject>();
  const [comingSoonModalOpen, setComingSoonModalOpen] =
    useState<boolean>(false);

  const [dataFromChildBlockCustomizer, setDataFromChildBlockCustomizer] =
    useState<{ index: number; bool: boolean } | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/app/page", { params: { project_id: params.id } })
      .then((response) => {
        const data = response.data.data;
        let pages: any = {
          public: [],
          auth: [],
          authenticated: [],
        };
        data.pages.forEach((element: any) => {
          pages[element.category as Category].push(element);
        });
        setSitemap({ pages, sitename: "" });
        setProject(data.project);
        setLoading(false);
        setWebsiteConfig(data.project.customizations as ThemeOptions);
      });
    // setSitemap(JSON.parse(localStorage.getItem("app_data") ?? "")??undefined)
  }, []);

  useEffect(() => {
    if (project?.customizations) {
      setWebsiteConfig(project?.customizations as ThemeOptions); // eslint-disable-line
    }
  }, [project]);

  const handleMenuClick = async (page: any, page_section: string) => {
    if (page_section == "__disabled__") {
      setComingSoonModalOpen(true);
      return;
    }
    setPageid(page.id);
    setPage_id(page._id);
    setLoading(true);
    try {
      const key = page_section + " : " + page.name + " - " + page.description;
      setMenu(page.title);
      const response = await axios.post("/api/app/block/getOrCreate", {
        app_context: project?.description,
        page_description: key,
        page_id: page._id,
      });

      // const completePageCode = response.data.data.map((item: any) => {
      //   return { ...item.content, id: item.id, _id: item._id };
      // });

      const completePageCode = response.data.data
        .sort((a: any, b: any) => a.order - b.order)
        .map((item: any) => {
          return { ...item.content, id: item.id, _id: item._id };
        });

      setWebsiteContent({ pageCode: completePageCode });

      if (sitemap && sitemap?.pages) {
        const old_sitemap = { ...sitemap };
        old_sitemap.pages[
          page_section as "public" | "auth" | "authenticated"
        ].map((sitePage: any) => {
          if (page._id == sitePage._id) {
            sitePage.blocks = response.data.data;
          }
          return sitePage;
        });

        setSitemap(old_sitemap);
      }

      setWebsiteConfig(project?.customizations as ThemeOptions);

      // return response.data;
    } catch (error) {
      // console.log({ error });
    }
    setLoading(false);
  };

  const comingSoonModalOpenNotifyMe = async () => {
    const response = axios("/api/app/notifications/feature-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setComingSoonModalOpen(false);

    alert("Thank you! You will be notified when it is released.");
  };

  useEffect(() => {
    const handleMessage = (iframeData: any) => {
      if (iframeData.data.operation == "component_clicked") {
        let side = websiteContent.pageCode.filter((data: any) => {
          return data.id == iframeData.data.id.toString();
        });
        if (side.length > 0) {
          setSideContent(side[0]);
          // console.log(side[0]);
        }
      }
      if (iframeData.data.operation == "order_object_transfert") {
        console.log("iframeData.data.orderObject", iframeData.data.orderObject);
      }
    };
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [websiteContent]);

  useEffect(() => {
    const handleMessage = async (iframeData: any) => {
      if (iframeData.data.operation === "order_object_transfert") {
        try {
          await axios.post("/api/app/block/reorder", {
            blocks: Object.entries(iframeData.data.orderObject).map(
              ([id, order]) => ({
                id,
                order,
              })
            ),
          });
        } catch (error: any) {
          console.error("Error updating order:", error);
        }
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [websiteContent]);

  const saveBlockContent = async () => {
    // just save the data
    if (!sideContent || !sideContent.id) return false;
    let newBlock = websiteContent.pageCode.filter((data: any) => {
      return data.id == sideContent.id.toString();
    });
    if (newBlock.length > 0) {
      let newData = { ...newBlock[0] };
      const id = newData._id;
      setLoading(true);
      delete newData.id;
      delete newData._id;
      const response = await axios.put("/api/app/block/" + id, {
        content: newData,
      });
    }
    setLoading(false);

    setSideContent(undefined);
  };

  const onThemeChange = async (themeOptions: ThemeOptions) => {
    // just save the data
    setLoading(true);

    if (!deepEqual(themeOptions, defaultCustomization)) {
      const response = await axios.put("/api/app/project/" + params.id, {
        customizations: themeOptions,
      });
    }

    setLoading(false);

    setSideContent(undefined);
  };

  const handleChildRightNavData = ({
    index,
    bool,
  }: {
    index: number;
    bool: boolean;
  }) => {
    setDataFromChildBlockCustomizer({ index, bool });
  };

  const handleChildLoading = (loading: boolean) => {
    setLoading(loading);
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      <DndContextProvider>
        <LeftNav
          onItemClick={handleMenuClick}
          activeMenu={menu ?? ""}
          sitemap={sitemap}
        ></LeftNav>

        {/* Main content area */}
        <SitePreviewContainer
          windowClick={saveBlockContent}
          onThemeChange={onThemeChange}
          website_content={websiteContent}
          loadingIframe={loading}
          pageid={pageid ?? ""}
          dataFromBlockCustomizer={dataFromChildBlockCustomizer}
        ></SitePreviewContainer>

        <RightNav
          sideContent={sideContent}
          saveContent={saveBlockContent}
          page_id={page_id ?? ""}
          onChildBlockCustomizerData={handleChildRightNavData}
          onHandleChildLoading={handleChildLoading}
        ></RightNav>

        <ComingSoonModal
          feature="Auth/Dashboard"
          open={comingSoonModalOpen}
          submitItend={comingSoonModalOpenNotifyMe}
          setOpen={setComingSoonModalOpen}
        ></ComingSoonModal>
      </DndContextProvider>
    </div>
  );
}
