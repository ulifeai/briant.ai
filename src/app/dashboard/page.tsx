"use client"

import { useState } from "react";





import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { IconRight } from "react-day-picker";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import LeftNav from "@/components/blocks/dashboard/LeftNav";
import RightNav from "@/components/blocks/dashboard/RightNav";
import SitePreviewContainer from "@/components/blocks/dashboard/SitePreviewContainer";

export default function Component() {
  const [viewMode, setViewMode] = useState('web')
  const [designMode, setDesignMode] = useState('design')

  return (
    <div  className="flex h-screen bg-background text-foreground">
      <LeftNav></LeftNav>

      {/* Main content area */}
      <SitePreviewContainer></SitePreviewContainer>

      {/* <RightNav></RightNav> */}
    </div>
  )
}