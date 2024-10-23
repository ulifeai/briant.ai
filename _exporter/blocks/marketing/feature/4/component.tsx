import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Package2 } from "lucide-react";
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users2, ClipboardCheck, DollarSign } from "lucide-react"
import {Text} from "@/components/ui/base/text";

const items = [
  {
    icon: <Users2 className="h-6 w-6 text-orange-500" />,
    title: "Consultancy",
    description: "It is a long established fact that a reader will be content distracted by the readable many content of a page when it looking."
  },
  {
    icon: <ClipboardCheck className="h-6 w-6 text-orange-500" />,
    title: "Audit & assurance",
    description: "It is a long established fact that a reader will be content distracted by the readable many content of a page when it looking."
  },
  {
    icon: <DollarSign className="h-6 w-6 text-orange-500" />,
    title: "Tax planning services",
    description: "It is a long established fact that a reader will be content distracted by the readable many content of a page when it looking."
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
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative w-full h-[300px] rounded-xl overflow-hidden mb-8">
      <Image
        src="/placeholder.png"
        alt="Two people smiling and looking at each other"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute text-white inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-end p-8">
        {/* {tag && (
          <Text className="text-sm font-semibold uppercase tracking-wider  mb-2">
            {tag}
          </Text>
        )} */}
        <Text
          as="h1"
          className="mb-2"
        >
          {title}
        </Text>
        <Text
        as="h6"
          className="py-2 text-white max-w-4xl"
        >
          {description}
        </Text>
      </div>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {feature_items?.map((service, index) => (
          <Card className={index%2 == 0 ? "bg-gray-200": "bg-gray-200"} key={index}>
            <CardHeader>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                {index + 1}
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-loose text-md text-gray-600">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}






