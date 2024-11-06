import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import clsx from "clsx";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

const options = {
  loop: true,
};

const plugins = [
  Autoplay({
    delay: 5000,
  }),
];

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
  logo: string;
  alt: string;
  imageAuthor: string;
  altAuthor: string;
}

interface CustomerTestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  imageBg: string;
  altBg: string;
  tag: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: "webflow1",
    quote:
      "“They are able to help a startup like mine scale and are very responsive to all our unique needs”",
    author: "Name Surname",

    position: "Position",
    company: "Company name",
    rating: 5,
    logo: "/api/placeholder/120/40",
    alt: "Webflow",
    imageAuthor:
      "https://assets-global.website-files.com/624380709031623bfe4aee60/65badf0860e4f5d7a6bdc105_Placeholder%20Image.png",

    altAuthor: "",
  },
  {
    id: "webflow1",
    quote:
      "“They are able to help a startup like mine scale and are very responsive to all our unique needs”",
    author: "Name Surname",

    position: "Position",
    company: "Company name",
    rating: 5,
    logo: "/api/placeholder/120/40",
    alt: "Webflow",
    imageAuthor:
      "https://assets-global.website-files.com/624380709031623bfe4aee60/65badf0860e4f5d7a6bdc105_Placeholder%20Image.png",

    altAuthor: "",
  },
  {
    id: "webflow1",
    quote:
      "“They are able to help a startup like mine scale and are very responsive to all our unique needs 2”",
    author: "Name Surname",

    position: "Position",
    company: "Company name",
    rating: 5,
    logo: "/api/placeholder/120/40",
    alt: "Webflow",
    imageAuthor:
      "https://assets-global.website-files.com/624380709031623bfe4aee60/65badf0860e4f5d7a6bdc105_Placeholder%20Image.png",
    altAuthor: "",
  },
];

export default function CustomerTestimonials({
  title = "Customer is Our Priority",
  subtitle = "Risus viverra justo sagittis vestibulum metus. Massa lacinia eros posuere cursus sed vestibulum massa gravida. Turpis volutpat faucibus hac sed suspendisse convallis vestibulum massa.",
  imageBg = "https://static.shuffle.dev/components/preview/f47e4207-4c02-4c08-a829-05700d61a77b/assets/public/saturn-assets/images/testimonials/orange-light.png",
  altBg = "",
  tag = "",
  testimonials = defaultTestimonials,
}: CustomerTestimonialsProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Diviser le tableau en groupes de deux éléments
  const pairedItems = testimonials.reduce((acc, _, index, array) => {
    if (index % 2 === 0) {
      acc.push(array.slice(index, index + 2));
    }
    return acc;
  }, []);

  console.log(pairedItems);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <section className="py-28 lg:py-32 overflow-hidden bg-gray-900">
      <div className="container px-4 mx-auto max-w-lg lg:max-w-7xl">
        <div className="flex lg:flex-row flex-col items-center mb-16 px-3">
          <h3 className="w-full lg:w-1/2 mb-8 lg:mb-0 max-w-md font-heading text-4xl xs:text-6xl font-bold text-gray-50">
            {title}
          </h3>
          <p className="w-full lg:w-1/2 max-w-lg lg:ml-auto text-gray-300">
            {subtitle}
          </p>
        </div>

        <Carousel
          opts={options}
          plugins={plugins}
          setApi={setApi}
          className="overflow-hidden"
        >
          <CarouselContent>
            {pairedItems.map((pairedItem, index) => (
              <CarouselItem>
                <div className="flex-shrink-0 h-full w-full p-4 flex flex-wrap mb-16 lg:mb-12 items-center">
                  <div className="relative w-full lg:w-1/2 pb-16 lg:pb-0 mb-12 lg:mb-0">
                    <div className="hidden lg:block absolute top-1/2 right-0 transform -translate-y-1/2 w-px h-60 bg-gray-500"></div>
                    <div className="lg:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 h-px w-52 bg-gray-500"></div>
                    <div className="max-w-sm">
                      <img
                        className="block mb-6"
                        src="images/quote.svg"
                        alt="quote"
                      />
                      <p className="text-lg text-gray-300 mb-6">
                        {pairedItem[0].quote}
                      </p>
                      <div className="flex items-center">
                        <img
                          className="block w-12 h-12 rounded-full"
                          src={pairedItem[0].imageAuthor}
                          alt={pairedItem[0].altAuthor}
                        />
                        <div className="ml-4">
                          <span className="block font-semibold text-white leading-none mb-1">
                            {pairedItem[0].author}
                          </span>
                          <span className="block text-sm text-gray-400">
                            {pairedItem[0].position}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {pairedItem[1] ? (
                    <div className="w-full lg:w-1/2">
                      <div className="max-w-sm lg:mx-auto">
                        <img
                          className="block mb-6"
                          src="images/quote.svg"
                          alt=""
                        />
                        <p className="text-lg text-gray-300 mb-6">
                          {pairedItem[1].quote}
                        </p>
                        <div className="flex items-center">
                          <img
                            className="block w-12 h-12 rounded-full"
                            src={pairedItem[1].imageAuthor}
                            alt={pairedItem[1].altAuthor}
                          />
                          <div className="ml-4">
                            <span className="block font-semibold text-white leading-none mb-1">
                              {pairedItem[1].author}
                            </span>
                            <span className="block text-sm text-gray-400">
                              {pairedItem[1].position}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex items-center justify-center">
          {pairedItems.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={clsx("inline-block mr-1 w-7 h-1 cursor-pointer", {
                "bg-orange-900": current === index + 1,
                "bg-[#ddd]": current !== index + 1,
              })}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
