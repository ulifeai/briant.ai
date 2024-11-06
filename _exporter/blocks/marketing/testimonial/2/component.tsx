import React from "react";
import { Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text } from "@/components/ui/base/text";

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
  },
  {
    id: "relume1",
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    author: "Jane Doe",
    position: "CEO",
    company: "Tech Corp",
    rating: 4,
    logo: "/api/placeholder/120/40",
    alt: "Relume",
  },
  {
    id: "webflow2",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "John Smith",
    position: "CTO",
    company: "Innovation Inc",
    rating: 5,
    logo: "/api/placeholder/120/40",
    alt: "Webflow",
  },
];

export default function CustomerTestimonials({
  title = "Customer testimonials",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  testimonials = defaultTestimonials,
}: CustomerTestimonialsProps) {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
      <Text as="hero" className="text-4xl font-bold text-center mb-4">
        {title}
      </Text>
      <Text as="h6" className="text-xl text-center  mb-12">
        {subtitle}
      </Text>

      <div className=" mx-auto gap-6 flex flex-1 flex-row justify-center gap-x-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="rounded-lg p-8 mb-8">
            <div className="flex justify-center mb-4">
              <img src={testimonial.logo} />
            </div>
            <blockquote className="text-xl text-center mb-8">
              &quot;{testimonial.quote}&quot;
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
              <div className="text-center">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="">
                  {testimonial.position}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
