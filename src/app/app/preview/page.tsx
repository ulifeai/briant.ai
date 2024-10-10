"use client"

import { useState } from "react";





import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { IconRight } from "react-day-picker";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import LeftNav from "@/components/blocks/dashboard/LeftNav";
import RightNav from "@/components/blocks/dashboard/RightNav";
import SitePreview from "@/components/blocks/dashboard/SitePreview";

export default function Page() {
  const [viewMode, setViewMode] = useState('web')
  const [designMode, setDesignMode] = useState('design')

  return (
      <SitePreview></SitePreview>
  )
}