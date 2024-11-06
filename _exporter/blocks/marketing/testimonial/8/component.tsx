import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

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
        <Carousel className="">
          <CarouselContent className="-ml-2">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="flex-shrink-0 h-full w-full p-5"
              >
                <div className="flex mb-8 items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-current"
                  />
                ))}
                </div>
                <p className="text-xl sm:text-2xl md:text-4xl text-gray-900 font-semibold mb-10">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <img
                    className="block w-14 h-14 rounded-full"
                    src={testimonial.imageAuthor}
                    alt={testimonial.altAuthor}
                  />
                  <div className="ml-5">
                    <span className="block text-xl font-semibold leading-none">
                      {testimonial.author}
                    </span>
                    <span className="block text-sm ">
                      {testimonial.position}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="rounded-full size-16 -translate-x-[60%]" />
          <CarouselNext className="size-16 translate-x-[30%]" />
        </Carousel>
      </div>
    </section>
  );
}
