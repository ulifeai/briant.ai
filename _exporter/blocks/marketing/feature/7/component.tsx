"use client"

import { Text } from "@/components/ui/base/text";

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
    src: string;
    alt: string;
  };
  form?: {
    description?: string;
    placeholder?: string;
  };
  feature_items?: {
    title: string;
    description: string;
  }[];
  cardImages?: {
    link?: string;
    src?: string;
    alt?: string;
    title?: string;
    description?: string;
  }[];
}

export default function FeatureBlock({
  title,
  description,
  image,
  feature_items,
}: FeatureBlockProps) {
  return (
    <section className="px-[5%] py-28 h-fit mx-auto">
      <Text
        as="h2"
        className="mb-20 text-4xl md:text-4xl lg:text-6xl font-bold leading-none"
      >
        {title}
      </Text>
      <div className="flex flex-col md:flex-row">
        <div className="w-full h-full md:w-1/2 md:p-8 xl:p-10 mb-12">
          <div className="block overflow-hidden rounded-3xl">
            <img
              className="w-full h-full object-cover aspect-square"
              src={image?.src}
              alt={image?.alt}
            />
          </div>
        </div>
        <div className="flex flex-col md:w-1/2 md:p-8 xl:p-10 my-auto">
          <Text
            as="h3"
            className="mb-11 pb-32 border-b text-lg font-semibold md:p-8 md:max-w-lg"
          >
            {description}
          </Text>
          <div className="flex flex-col md:flex-row">
            <div className="w-auto md:w-1/2 md:p-8 md:max-w-xs">
              <Text as="h3" className="mb-4 text-lg text-black font-semibold">
                {feature_items && feature_items[0] && feature_items[0].title
                  ? feature_items[0].title
                  : ""}
              </Text>
              <Text as="p" className="text-gray-900 font-medium">
                {feature_items &&
                feature_items[0] &&
                feature_items[0].description
                  ? feature_items[0].description
                  : ""}
              </Text>
            </div>
            <div className="w-auto md:w-1/2 md:p-8 md:max-w-xs">
              <Text as="h3" className="mb-4 text-lg text-black font-semibold">
                {feature_items && feature_items[1] && feature_items[1].title
                  ? feature_items[1].title
                  : ""}
              </Text>
              <Text as="p" className="text-gray-900 font-medium">
                {feature_items &&
                feature_items[1] &&
                feature_items[1].description
                  ? feature_items[1].description
                  : ""}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
