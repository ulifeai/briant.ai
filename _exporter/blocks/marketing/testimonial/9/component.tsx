import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
];

export default function CustomerTestimonials({
  title = "Customer is Our Priority",
  subtitle = "Risus viverra justo sagittis vestibulum metus. Massa lacinia eros posuere cursus sed vestibulum massa gravida. Turpis volutpat faucibus hac sed suspendisse convallis vestibulum massa.",
  imageBg = "https://static.shuffle.dev/components/preview/f47e4207-4c02-4c08-a829-05700d61a77b/assets/public/saturn-assets/images/testimonials/orange-light.png",
  altBg = "",
  tag = "TESTIMONIALS",
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
    <section className="relative py-20 lg:pt-32 lg:pb-36 container px-4 max-w-7xl mx-auto">
      <div className="flex flex-wrap -mx-4 items-center mb-16">
        <div className="w-full lg:w-2/3 px-4 mb-12 lg:mb-0">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
            {tag}
          </span>
          <h1 className="font-heading text-4xl xs:text-6xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-gray-500">{subtitle}</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <Carousel opts={options} plugins={plugins} setApi={setApi} className="">
          <CarouselContent className="-ml-2">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="w-full max-w-lg md:max-w-4xl px-4 flex-shrink-0"
              >
                <div className="px-6 py-12 xs:pl-12 xs:pr-14 bg-yellow-50 rounded-3xl">
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-2/5 px-4 mb-6 lg:mb-0">
                      <img
                        className="block w-full h-full object-cover rounded-3xl"
                        src={testimonial.imageAuthor}
                        alt={testimonial.altAuthor}
                      />
                    </div>
                    <div className="w-full md:w-3/5 px-4">
                      <div>
                        <img
                          className="block mb-4"
                          src="images/quote.svg"
                          alt="quote"
                        />
                        <p className="text-gray-500 mb-5">
                          {testimonial.quote}
                        </p>
                        <span className="font-semibold text-orange-900">
                          {testimonial.position}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="rounded-full size-16 -translate-x-[60%]" />
          <CarouselNext className="size-16 translate-x-[30%]" />
        </Carousel>

        <div className="flex items-center justify-center mt-16">
          {testimonials.map((_, index) => (
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
