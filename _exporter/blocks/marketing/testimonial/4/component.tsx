import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
}

interface CustomerTestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: "webflow1",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    author: "Name Surname",
    position: "Position",
    company: "Company name",
    rating: 5,
    logo: "/api/placeholder/120/40",
    alt: "Webflow",
  }
]


export default function CustomerTestimonials({
  title = "Customer testimonials",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  testimonials = defaultTestimonials,
}: CustomerTestimonialsProps) {
  return (
    <div className="px-[5%] py-16 lg:max-h-full container mx-auto">
      <div className="flex flex-row gap-x-12 lg:items-center">
        <div className="w-1/3">
          <img
            src={testimonials[0].image}
            className="w-full h-full object-cover h-[30rem] max-h-[30rem]"
            style={{ borderRadius: "var(--image-radius)" }}
          />
        </div>
        <div className="w-2/3 flex flex-col">
          <div className="max-w-[35rem]">
            <div className="flex justify-start mb-4">
                  {[...Array(testimonials[0].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-current"
                    />
                  ))}
            </div>
              
              {/* <h1
                className="text-4xl font-bold py-2"
                style={{ fontFamily: "var(--header-font)" }}
              >
                {title}
              </h1> */}
              <p
                className="text-base text-xl font-semibold leading-9 py-2"
                style={{ fontFamily: "var(--page-font)" }}
              >
                &quot;{testimonials[0].quote}&quot;
              </p>
              <div className="flex gap-x-2 items-start mt-8">
                <div className="text-left border-r-2 pr-4 mr-4">
                      <p className="font-semibold">{testimonials[0].author}</p>
                      <p className="">
                        {testimonials[0].position}, {testimonials[0].company}
                      </p>
                    </div>
                <img
                  src={testimonials[0].logo}
                  className="w-8 h-8 object-cover  max-h-[30rem]"
                  style={{ borderRadius: "var(--image-radius)" }}
                />
              </div>
              
              
            </div>
          </div>
        
      </div>
    </div>
  );
}
