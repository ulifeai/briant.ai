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
    <section className="px-[5%] pt-32 pb-36 bg-slate-100 overflow-hidden h-fit mx-auto">
      <div className="flex flex-col justify-center md:mb-36 mb-20">
        <Text
          as="h2"
          className="mb-2 text-4xl md:text-2xl lg:text-6xl font-bold leading-none"
        >
          {title}
        </Text>
        <Text as="h3" className="text-lg font-semibold md:py-8 md:max-w-2xl">
          {description}
        </Text>
      </div>
      <div className="flex flex-col md:justify-between justify-center gap-y-4 md:flex-row md:gap-x-4">
        <div className="p-3 w-full bg-white border border-gray-900 flex flex-row rounded-3xl">
          <div className="w-auto p-4">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-config-id="svg-5b8a8b-1"
            >
              <path
                d="M4.66669 5.83329C4.66669 5.18896 5.18902 4.66663 5.83335 4.66663H22.1667C22.811 4.66663 23.3334 5.18896 23.3334 5.83329V8.16663C23.3334 8.81096 22.811 9.33329 22.1667 9.33329H5.83335C5.18902 9.33329 4.66669 8.81096 4.66669 8.16663V5.83329Z"
                stroke="#6366F1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M4.66669 15.1666C4.66669 14.5223 5.18902 14 5.83335 14H12.8334C13.4777 14 14 14.5223 14 15.1666V22.1666C14 22.811 13.4777 23.3333 12.8334 23.3333H5.83335C5.18902 23.3333 4.66669 22.811 4.66669 22.1666V15.1666Z"
                stroke="#6366F1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M18.6667 15.1666C18.6667 14.5223 19.189 14 19.8334 14H22.1667C22.811 14 23.3334 14.5223 23.3334 15.1666V22.1666C23.3334 22.811 22.811 23.3333 22.1667 23.3333H19.8334C19.189 23.3333 18.6667 22.811 18.6667 22.1666V15.1666Z"
                stroke="#6366F1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div className="flex-1 p-4">
            <Text
              as="h3"
              className="py-0 mb-3 text-lg font-semibold leading-none"
            >
              {feature_items && feature_items[0] && feature_items[0].title
                ? feature_items[0].title
                : ""}
            </Text>
            <Text as="p" className="text-gray-600 font-medium">
              {feature_items && feature_items[0] && feature_items[0].description
                ? feature_items[0].description
                : ""}
            </Text>
          </div>
        </div>

        <div className="p-3 w-full bg-white border border-gray-900 flex flex-row rounded-3xl">
          <div className="w-auto p-4">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-config-id="svg-5b8a8b-1"
            >
              <path
                d="M4.66669 5.83329C4.66669 5.18896 5.18902 4.66663 5.83335 4.66663H22.1667C22.811 4.66663 23.3334 5.18896 23.3334 5.83329V8.16663C23.3334 8.81096 22.811 9.33329 22.1667 9.33329H5.83335C5.18902 9.33329 4.66669 8.81096 4.66669 8.16663V5.83329Z"
                stroke="#6366F1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M4.66669 15.1666C4.66669 14.5223 5.18902 14 5.83335 14H12.8334C13.4777 14 14 14.5223 14 15.1666V22.1666C14 22.811 13.4777 23.3333 12.8334 23.3333H5.83335C5.18902 23.3333 4.66669 22.811 4.66669 22.1666V15.1666Z"
                stroke="#6366F1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M18.6667 15.1666C18.6667 14.5223 19.189 14 19.8334 14H22.1667C22.811 14 23.3334 14.5223 23.3334 15.1666V22.1666C23.3334 22.811 22.811 23.3333 22.1667 23.3333H19.8334C19.189 23.3333 18.6667 22.811 18.6667 22.1666V15.1666Z"
                stroke="#6366F1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div className="flex-1 p-4">
            <Text
              as="h3"
              className="py-0 mb-3 text-lg font-semibold leading-none"
            >
              {feature_items && feature_items[1] && feature_items[1].title
                ? feature_items[1].title
                : ""}
            </Text>
            <Text as="p" className="text-gray-600 font-medium">
              {feature_items && feature_items[1] && feature_items[1].description
                ? feature_items[1].description
                : ""}
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
