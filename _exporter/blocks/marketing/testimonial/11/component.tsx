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
    quote: "“Exceptional Customer Service”",
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
    quote: "“Exceptional Customer Service”",
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
    quote: "“Exceptional Customer Service”",
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
  tag = "tag",
  testimonials = defaultTestimonials,
}: CustomerTestimonialsProps) {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -m-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/3 p-8">
              <div className="md:max-w-xs mx-auto text-center">
                <div className="flex justify-center mb-6 -m-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-[24px] h-[23px] p-1" />
                  ))}
                </div>
                <h3 className="mb-4 text-2xl font-semibold leading-snug">
                  {testimonial.quote}
                </h3>
                <p className="text-gray-600 font-medium">Forbes Magazine</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
