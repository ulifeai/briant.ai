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
  cardImages,
}: FeatureBlockProps) {
  return (
    <section className="pt-24 pb-40 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <Text
          as="h2"
          className="mb-20 text-6xl md:text-8xl xl:text-10xl font-bold font-heading text-center tracking-px-n leading-none"
        >
          {title}
        </Text>
        <div className="flex flex-wrap -m-16 md:-m-3">
          <div className="w-full md:w-1/3 p-16 md:p-3">
            <div className="px-10 pt-11 text-center bg-gray-100 h-96 rounded-3xl">
              <Text
                as="h3"
                className="mb-3 text-xl font-bold font-heading leading-normal"
              >
                {cardImages && cardImages[0] && cardImages[0].title
                  ? cardImages[0].title
                  : ""}
              </Text>
              <Text
                as="p"
                className="mb-10 text-gray-600 font-medium leading-relaxed"
              >
                {cardImages && cardImages[0] && cardImages[0].description
                  ? cardImages[0].description
                  : ""}
              </Text>
              <img
                src={
                  cardImages && cardImages[0] && cardImages[0].src
                    ? cardImages[0].src
                    : ""
                }
                alt={
                  cardImages && cardImages[0] && cardImages[0].alt
                    ? cardImages[0].alt
                    : ""
                }
                className="mx-auto h-72 object-cover rounded-3xl shadow-3xl transform hover:translate-y-3 transition ease-in-out duration-1000"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 p-16 md:p-3">
            <div className="px-10 pt-11 text-center bg-gray-100 h-96 rounded-3xl">
              <Text
                as="h3"
                className="mb-3 text-xl font-bold font-heading leading-normal"
              >
                {cardImages && cardImages[1] && cardImages[1].title
                  ? cardImages[1].title
                  : ""}
              </Text>
              <Text
                as="p"
                className="mb-10 text-gray-600 font-medium leading-relaxed"
              >
                {cardImages && cardImages[1] && cardImages[1].description
                  ? cardImages[1].description
                  : ""}
              </Text>
              <img
                src={
                  cardImages && cardImages[1] && cardImages[1].src
                    ? cardImages[1].src
                    : ""
                }
                alt={
                  cardImages && cardImages[1] && cardImages[1].alt
                    ? cardImages[1].alt
                    : ""
                }
                className="mx-auto h-72 object-cover rounded-3xl shadow-3xl transform hover:translate-y-3 transition ease-in-out duration-1000"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 p-16 md:p-3">
            <div className="px-10 pt-11 text-center bg-gray-100 h-96 rounded-3xl">
              <Text
                as="h3"
                className="mb-3 text-xl font-bold font-heading leading-normal"
              >
                {cardImages && cardImages[2] && cardImages[2].title
                  ? cardImages[2].title
                  : ""}
              </Text>
              <Text
                as="p"
                className="mb-10 text-gray-600 font-medium leading-relaxed"
              >
                {cardImages && cardImages[2] && cardImages[2].description
                  ? cardImages[2].description
                  : ""}
              </Text>
              <img
                src={
                  cardImages && cardImages[2] && cardImages[2].src
                    ? cardImages[2].src
                    : ""
                }
                alt={
                  cardImages && cardImages[2] && cardImages[2].alt
                    ? cardImages[2].alt
                    : ""
                }
                className="mx-auto h-72 object-cover rounded-3xl shadow-3xl transform hover:translate-y-3 transition ease-in-out duration-1000"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
