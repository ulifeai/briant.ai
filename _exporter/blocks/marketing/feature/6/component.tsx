"use client"

import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import { Text } from "@/components/ui/base/text"

const items = [
  {
    title: "Althhorpe Street Leamigton Spa",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: '/placeholder.svg?height=400&width=400&text=De-risking'
  },
  {
    title: "Althhorpe Street Leamigton Spa",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: '/placeholder.svg?height=400&width=400&text=Planning'
  },
  {
    title: "Althhorpe Street Leamigton Spa",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: '/placeholder.svg?height=400&width=400&text=ROI'
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
  feature_items = items
}: FeatureBlockProps) {
  return (
    <div className="container px-[5%] mx-auto px-4 py-8">
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
        className="text-base py-2 max-w-4xl"
      >
        {description}
      </Text>

      {feature_items.map((item, index) => (
        <Card className="mb-8 mt-12 bg-white">
        <CardContent className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 p-8`}>
          <div className="w-full md:w-1/2 space-y-6">
            <Text as="h1" className="text-4xl font-semibold">{item.title}</Text>
            <Text as="h6" className="mb-8">{item.description}</Text>
            <Button variant="outline" className="rounded-full border-secondary mt-8">
              Take action <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={"/placeholder-image.svg"}
              alt={""}
              width={500}
              height={200}
              className="rounded-xl h-[18rem] object-cover shadow-lg"
            />
          </div>
        </CardContent>
      </Card>
      ))}
    </div>
  );
}

