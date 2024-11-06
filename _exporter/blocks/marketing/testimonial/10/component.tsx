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
    <section className="relative pt-24 pb-32 bg-white overflow-hidden">
      <div className="relative z-10 container px-4 mx-auto">
        <h2 className="mb-16 text-6xl md:text-7xl font-bold font-heading text-center tracking-px-n leading-tight">
          {title}
        </h2>
        <div className="flex flex-wrap -m-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-3">
              <div className="p-6 h-full bg-white bg-opacity-60 border rounded-3xl">
                <div className="mb-5 block">
                  <div className="flex flex-wrap mb-4 -m-2">
                    <div className="w-auto p-2">
                      <img
                        className="w-[46px] h-[46px] object-cover rounded-full"
                        src={testimonial.imageAuthor}
                        alt={testimonial.altAuthor}
                      />
                    </div>
                    <div className="w-auto p-2">
                      <h3 className="font-semibold leading-normal">
                        {testimonials[0].author}
                      </h3>
                      <p className="text-gray-500 uppercase">@brooklysim</p>
                    </div>
                  </div>
                  <p className="text-lg font-medium">{testimonial.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
