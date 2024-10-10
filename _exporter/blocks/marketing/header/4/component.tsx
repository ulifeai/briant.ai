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

export default function HeaderBlock({
  tag,
  title,
  description,
  buttons,
  form,
  image,
}: HeaderBlockProps) {
  return (
    <div className=" lg:max-h-full">
      <div className="flex flex-col w-full gap-y-12 lg:items-center">
        <div className="flex flex-col w-full">
          <div className="w-full flex-1">
            <img
              src={image?.image}
              alt={image?.alt}
              className="w-full h-full object-cover max-h-[30rem]"
              style={{ borderRadius: "var(--image-radius)" }}
            />
          </div>
          <div className="px-[2%] py-16 container flex flex-row gap-x-8 m-auto max-w-[80rem]">
            {tag && (
              <span className="text-sm font-semibold uppercase tracking-wider  mb-2">
                {tag}
              </span>
            )}
            <h1
              className="text-4xl font-bold py-2"
              style={{ fontFamily: "var(--header-font)" }}
            >
              {title}
            </h1>
            <div>
              <p
                className="text-base py-2"
                style={{ fontFamily: "var(--page-font)" }}
              >
                {description}
              </p>
              <div className="mt-8">
                <div className={`w-full flex items-center`}>
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
                            className="whitespace-nowrap h-10 px-4 mx-2 py-2"
                            style={{ borderRadius: "var(--button-radius)" }}
                          >
                            {button.title}
                          </Button>
                        ))}
                      </>
                    )}

                    <div className={` text-xs`}>{form?.description ?? ""}</div>
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
