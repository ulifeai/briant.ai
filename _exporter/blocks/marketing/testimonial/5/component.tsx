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
];

export default function CustomerTestimonials({
  title = "Our happy clients says about us",
  subtitle = "Risus viverra justo sagittis vestibulum metus. Massa lacinia eros posuere cursus sed vestibulum massa gravida. Turpis volutpat faucibus hac sed suspendisse convallis vestibulum massa.",
  imageBg = "https://static.shuffle.dev/components/preview/f47e4207-4c02-4c08-a829-05700d61a77b/assets/public/saturn-assets/images/testimonials/orange-light.png",
  altBg = "",
  tag = "",
  testimonials = defaultTestimonials,
}: CustomerTestimonialsProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

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
    <section className="lg:container lg:mx-auto py-12 relative overflow-hidden">
      <img
        className="absolute right-0 top-0 size-full  object-cover"
        src={imageBg}
        alt={altBg}
      />
      <div className="relative lg:max-w-none mx-auto max-w-[480px]">
        <div className="flex lg:flex-row flex-col items-center mb-16 px-3">
          <h3 className="mb-8 lg:w-[51%] max-w-xl text-4xl font-bold w-full lg:text-5xl">
            {title}
          </h3>
          <p className="max-w-xl lg:w-[41%] text-slate-400 my-0 w-full">
            {subtitle}
          </p>
        </div>

        <Carousel
          opts={options}
          plugins={plugins}
          setApi={setApi}
          className="px-3 items-center w-full mb-8 lg:mb-0"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="lg:flex lg:flex-row lg:gap-x-16"
              >
                <div className="flex items-center w-full lg:w-[50%] mb-8">
                  <img
                    className="block w-full max-w-full h-[280px] object-cover aspect-square"
                    src={testimonial.imageAuthor}
                    alt={testimonial.altAuthor}
                  />
                </div>
                <div className="lg:w-[50%]">
                  <img
                    className="block max-w-full h-auto mb-8"
                    src="images/quote.svg"
                    alt="quote"
                  />
                  <p className="lg:text-2xl text-xl font-bold mb-6">
                    {testimonial.quote}
                  </p>
                  <span className="block text-base font-semibold mb-1">
                    — {testimonial.author}
                  </span>
                  <span className="text-slate-400 block text-base font-semibold mb-8">
                    {testimonial.position}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="px-3 flex flex-row justify-center">
          <div>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={clsx("mx-[3px] inline-block size-2 rounded-full", {
                  "bg-black": current === index + 1,
                  "bg-[#ddd]": current !== index + 1,
                })}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
