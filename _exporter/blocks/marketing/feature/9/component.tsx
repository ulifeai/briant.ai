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
    <section className="pt-28 pb-36 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="mb-20 flex flex-wrap items-end -m-8">
          <div className="w-full md:w-1/2 p-8">
            <Text
              as="h2"
              className="text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight md:max-w-xl"
            >
              {title}
            </Text>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <Text
              as="p"
              className="text-lg text-gray-900 font-medium leading-relaxed md:max-w-lg"
            >
              {description}
            </Text>
          </div>
        </div>
        <div className="flex flex-wrap -m-3">
          <div className="w-full md:w-1/3 p-3">
            <a
              href={
                cardImages && cardImages[0] && cardImages[0].link
                  ? cardImages[0].link
                  : ""
              }
              className="flex justify-center md:block h-full"
            >
              <div className="relative h-full rounded-3xl overflow-hidden">
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
                  className="h-full md:w-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
                />
                <div className="absolute bottom-0 left-0 w-full px-11 pb-10">
                  <div className="px-8 py-4 bg-white bg-opacity-10 rounded-xl shadow-5xl">
                    <Text
                      as="h3"
                      className="text-lg text-white text-center font-semibold"
                    >
                      {cardImages && cardImages[0] && cardImages[0].description
                        ? cardImages[0].description
                        : ""}
                    </Text>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/3 p-3">
            <a
              href={
                cardImages && cardImages[1] && cardImages[1].link
                  ? cardImages[1].link
                  : ""
              }
              className="flex justify-center md:block h-full"
            >
              <div className="relative h-full rounded-3xl overflow-hidden">
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
                  className="h-full md:w-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
                />
                <div className="absolute bottom-0 left-0 w-full px-11 pb-10">
                  <div className="px-8 py-4 bg-white bg-opacity-10 rounded-xl shadow-5xl">
                    <Text
                      as="h3"
                      className="text-lg text-white text-center font-semibold"
                    >
                      {cardImages && cardImages[1] && cardImages[1].description
                        ? cardImages[1].description
                        : ""}
                    </Text>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/3 p-3">
            <a
              href={
                cardImages && cardImages[2] && cardImages[2].link
                  ? cardImages[2].link
                  : ""
              }
              className="flex justify-center md:block h-full"
            >
              <div className="relative h-full rounded-3xl overflow-hidden">
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
                  className="h-full md:w-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
                />
                <div className="absolute bottom-0 left-0 w-full px-11 pb-10">
                  <div className="px-8 py-4 bg-white bg-opacity-10 rounded-xl shadow-5xl">
                    <Text
                      as="h3"
                      className="text-lg text-white text-center font-semibold"
                    >
                      {cardImages && cardImages[2] && cardImages[2].description
                        ? cardImages[2].description
                        : ""}
                    </Text>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
