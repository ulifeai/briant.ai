import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
    image: string;
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
    <div className="bg-white p-8 px-[5%] font-sans container">
      
      {tag && (
        <Text className="text-sm font-semibold uppercase tracking-wider  mb-2">
          {tag}
        </Text>
      )}
      <Text
        as="h1"
        className="mb-4"
      >
        {title}
      </Text>
      <Text
      as="h6"
        className="text-base py-2"
      >
        {description}
      </Text>
      <div className="grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {feature_items?.map((item, index) => (
          <Card className="w-full max-w-md" key={index}>
            <CardHeader>
              <div className="text-md mb-2">Apartment</div>
              <CardTitle className="text-2xl font-normal" style={{
                fontFamily: "var(--header-font)"
              }}>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
            <Text
              as="p"
                className="text-md mb-8 py-2"
              >
                {item.description}
              </Text>
              <Button variant="outline" className="rounded-full">
                Get consulation <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
            <CardFooter>
              <div className="w-full">
                <Image
                  src={item.image ?? "/placeholder.png?"}
                  alt={item.title}
                  width={300}
                  height={150}
                  className="w-full rounded-lg h-[150]"
                />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
