import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderBlockProps {
  tag: string;
  title: string;
  description: string;
      buttons: {
      title: string;
      variant: string;
      size: string;
    }[];
  image: {
    image: string;
    alt: string;
  };
  form?: {
    description?: string;
    placeholder?: string;
  };
}

export default function Component({
  tag,
  title,
  description,
  buttons,
  form,
  image,
}: HeaderBlockProps) {
  return (
    <div className="relative px-[5%] py-16 min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(placeholder.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)",
        }}
        role="img"
        aria-label={image.alt}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-white">
        <div className="flex flex-col gap-y-12 lg:grid lg:grid-cols-1 lg:gap-x-12 lg:items-center">
          <div className="flex flex-col max-w-[75vh]">
            <div>
              {tag ? (
                <span className="text-sm font-semibold uppercase tracking-wider  mb-2">
                  {tag}
                </span>
              ): null}
              <h1
                className="text-4xl font-bold py-2"
                style={{ fontFamily: "var(--header-font)" }}
              >
                {title}
              </h1>
              <p
                className="text-base py-2 text-gray-200"
                style={{ fontFamily: "var(--page-font)" }}
              >
                {description}
              </p>
              <div className="mt-8">
                <div className="w-full flex items-center">
                  <div className="lg:max-w-[30rem]">
                    {form ? (
                      <form
                        action=""
                        className="flex flex-col gap-y-3 mb-4 lg:grid lg:grid-rows-1 lg:grid-cols-[1fr_max-content] lg:gap-x-4"
                      >
                        <Input
                          type="text"
                          placeholder={form?.placeholder ?? ""}
                          className="border border-black h-auto min-h-11 mb-0 px-2 rounded-none text-base leading-relaxed bg-white text-black"
                        />
                        {buttons?.map((button, index) => (
                          <Button
                            key={index}
                            className="whitespace-nowrap h-10 px-4 py-2"
                            style={{ borderRadius: "var(--button-radius)" }}
                          >
                            {button.title}
                          </Button>
                        ))}
                      </form>
                    ) : (
                      <>
                        {buttons?.map((button, index) => (
                          <Button
                            key={index}
                            variant={button.variant as "default" | "outline"}
                            size={button.size as "default" | "sm" | "lg"}
                            className="whitespace-nowrap h-10 mx-2 px-4 py-2"
                            style={{ borderRadius: "var(--button-radius)" }}
                          >
                            {button.title}
                          </Button>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
