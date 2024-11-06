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
  tag = "",
  testimonials = defaultTestimonials,
}: CustomerTestimonialsProps) {
  return (
    <section className="containerpt-24 lg:my-32 my-12 pb-32 bg-white overflow-hidden">
      <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between px-4 mx-auto mb-10">
        <h2 className="w-auto p-2 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">
          {title}
        </h2>
      </div>
      <div className="flex flex-wrap -m-2">
        <div className="w-full md:w-1/2 lg:w-1/4 p-2 px-8 py-6 h-full bg-white bg-opacity-80 rounded-3xl">
          <div className="mb-7 block">
            <div className="flex flex-wrap -m-0.5 mb-6">
              {[...Array(testimonials[0].rating)].map((_, i) => (
                <Star key={i} className="w-[24px] h-[23px] p-1" />
              ))}
            </div>
            <p className="text-lg font-medium">{testimonials[0].quote}</p>
          </div>
          <div className="block">
            <p className="font-bold">
              {testimonials[0].author} - {testimonials[0].position}
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 p-2 px-8 py-6 h-full bg-white bg-opacity-80 rounded-3xl">
          <div className="mb-7 block">
            <div className="flex flex-wrap -m-0.5 mb-6">
              {[...Array(testimonials[1].rating)].map((_, i) => (
                <Star key={i} className="w-[24px] h-[23px] p-1" />
              ))}
            </div>
            <p className="text-lg font-medium">{testimonials[1].quote}</p>
          </div>
          <div className="block">
            <p className="font-bold">
              {testimonials[1].author} - {testimonials[1].position}
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 p-2 px-8 py-6 h-full bg-white bg-opacity-80 rounded-3xl">
          <div className="mb-7 block">
            <div className="flex flex-wrap -m-0.5 mb-6">
              {[...Array(testimonials[2].rating)].map((_, i) => (
                <Star key={i} className="w-[24px] h-[23px] p-1" />
              ))}
            </div>
            <p className="text-lg font-medium">{testimonials[2].quote}</p>
          </div>
          <div className="block">
            <p className="font-bold">
              {testimonials[2].author} - {testimonials[2].position}
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 p-2 px-8 py-6 h-full bg-white bg-opacity-80 rounded-3xl">
          <div className="mb-7 block">
            <div className="flex flex-wrap -m-0.5 mb-6">
              {[...Array(testimonials[3].rating)].map((_, i) => (
                <Star key={i} className="w-[24px] h-[23px] p-1" />
              ))}
            </div>
            <p className="text-lg font-medium">{testimonials[3].quote}</p>
          </div>
          <div className="block">
            <p className="font-bold">
              {testimonials[3].author} - {testimonials[3].position}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
