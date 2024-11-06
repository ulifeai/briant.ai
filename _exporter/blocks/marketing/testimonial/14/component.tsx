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
  tag="tag",
  testimonials = defaultTestimonials,
}: CustomerTestimonialsProps) {
  return (
    <section className="pt-24 pb-36 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <h2 className="mb-4 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">
          {title}
        </h2>
        <p className="mb-20 text-lg text-gray-900 font-medium">{subtitle}</p>
      </div>
      <div className="container px-4 mx-auto flex lg:flex-row flex-col -m-8">
        <div className="w-full flex lg:flex-row lg:items-center flex-col lg:gap-10 mb-8">
          <div className="flex flex-wrap sm:items-center -m-4">
            <div className="w-full sm:w-auto mb-5">
              <a
                className="block max-w-max mx-auto overflow-hidden rounded-xl"
                href="#"
              >
                <img
                  className="transform hover:scale-105 transition ease-in-out duration-1000 w-[270px] max-h-[180px] object-cover"
                  src={testimonials[0].imageAuthor}
                  alt={testimonials[0].altAuthor}
                />
              </a>
            </div>
          </div>
          <div className="w-full sm:flex-1 lg:p-4 px-9 py-3">
            <div className="sm:w-64">
              <p className="lg:mb-4 font-medium leading-relaxed">
                {testimonials[0].quote}
              </p>
              <h3 className="font-bold font-heading">
                {testimonials[0].author}
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full flex lg:flex-row lg:items-center flex-col lg:gap-10">
          <div className="flex flex-wrap sm:items-center -m-4">
            <div className="w-full sm:w-auto mb-5">
              <a
                className="block max-w-max mx-auto overflow-hidden rounded-xl"
                href="#"
              >
                <img
                  className="transform hover:scale-105 transition ease-in-out duration-1000 w-[270px] max-h-[180px] object-cover"
                  src={testimonials[0].imageAuthor}
                  alt={testimonials[0].altAuthor}
                />
              </a>
            </div>
          </div>
          <div className="w-full sm:flex-1 lg:p-4 px-9 py-3">
            <div className="sm:w-64">
              <p className="lg:mb-4 font-medium leading-relaxed">
                {testimonials[0].quote}
              </p>
              <h3 className="font-bold font-heading">
                {testimonials[0].author}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
