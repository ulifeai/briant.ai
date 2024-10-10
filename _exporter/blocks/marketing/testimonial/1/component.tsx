import React from "react";
import { Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  {
    id: "relume2",
    quote: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Alice Johnson",
    position: "COO",
    company: "Global Solutions",
    rating: 4,
    logo: "/api/placeholder/120/40",
    alt: "Relume",
  },
];

export default function CustomerTestimonials({
  title = "Customer testimonials",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  testimonials = defaultTestimonials,
}: CustomerTestimonialsProps) {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-4">{title}</h2>
      <p className="text-xl text-center text-gray-600 mb-12">{subtitle}</p>

      <Tabs
        defaultValue={testimonials[0].id}
        className="max-w-4xl mx-auto border border-gray-200"
      >
        
        {testimonials.map((testimonial) => (
          <TabsContent key={testimonial.id} value={testimonial.id}>
            <div className="rounded-lg p-8 mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-xl text-center mb-8">
              &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
                <div className="text-center">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}

        <TabsList className="flex justify-center border-b border-gray-200">
          {testimonials.map((testimonial) => (
            <TabsTrigger
              key={testimonial.id}
              value={testimonial.id}
              className="flex-1 py-4 px-6 focus:outline-none data-[state=active]:border-2 data-[state=active]:border-black"
            >
              <img
                src={testimonial.logo}
                alt={testimonial.alt}
                className="mx-auto h-10"
              />
            </TabsTrigger>
          ))}
        </TabsList>

      </Tabs>
    </div>
  );
}
