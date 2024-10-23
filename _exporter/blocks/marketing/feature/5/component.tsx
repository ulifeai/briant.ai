import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
"use client"

import Image from 'next/image'
import { ArrowUpIcon } from 'lucide-react'
import { useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {Text} from "@/components/ui/base/text";

const items = [
  {
    title: 'De-risking your project',
    description: 'Identify and mitigate potential risks early in your project lifecycle.',
    image: '/placeholder.svg?height=400&width=400&text=De-risking'
  },
  {
    title: 'Planning strategies',
    description: 'Develop comprehensive strategies to ensure project success.',
    image: '/placeholder.svg?height=400&width=400&text=Planning'
  },
  {
    title: 'Return on investment',
    description: 'Maximize your ROI through careful planning and execution.',
    image: '/placeholder.svg?height=400&width=400&text=ROI'
  },
  {
    title: 'Convert traveler demand',
    description: 'Implement strategies to increase traveler conversion rates.',
    image: '/placeholder.svg?height=400&width=400&text=Traveler+Demand'
  }
]
interface FeatureBlockProps {
  tag: string;
  title: string;
  description: string;

      buttons: {
      title: string;
      variant: string;
      size: string;
    }[];
  image: {
    image: string;
    alt: string;
  };
  form?: {
    description?: string;
    placeholder?: string;
  };
  feature_items?: {
    title: string;
    description: string;
  }[]
}

export default function FeatureBlock({
  tag,
  title,
  description,
  buttons,
  form,
  image,
  feature_items
}: FeatureBlockProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  return (
    <div className="p-8 px-[5%] container">
      {tag && (
        <span className="text-sm font-semibold uppercase tracking-wider  mb-2">
          {tag}
        </span>
      )}
      <Text
        as="h1"
        className="mb-4"
      >
        {title}
      </Text>
      <Text
      as="h6"
        className="text-base py-2 max-w-5xl"
      >
        {description}
      </Text>
      <div className="flex mt-8 w-full justify-between items-center">
        <div className="space-y-6 w-1/2 justify-betwwen">
          {feature_items?.map((item) => (
            <Collapsible
              key={item.title}
              open={expandedItem === item.title}
              onOpenChange={() => setExpandedItem(expandedItem === item.title ? null : item.title)}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full border-b border-gray-200 pb-2">
                <Text
                  as="h4"
                    className="text-base py-2 max-w-5xl"
                  >
                    {item.title}
                  </Text>
                <ArrowUpIcon 
                  className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                    expandedItem === item.title ? 'transform rotate-180' : ''
                  }`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-2 CollapsibleContent pb-4 transition-all duration-200 ease-in-out">
              <Text
                  as="p"
                    className="text-base py-2 max-w-5xl"
                  >
                    {item.description}
                  </Text>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
        <div className="w-1/2 mx-auto relative">
          <Image
            src={image?.image ??'/5.jpg'}
            alt="Dashboard visualization"
            width={400}
            height={400}
            className="rounded-lg mx-auto shadow-lg transition-opacity duration-200 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}

