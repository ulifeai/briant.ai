import {Text} from "@/components/ui/base/text";
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
    images: {
      src: string;
      alt?: string;
    }[];
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
  images,
}: HeaderBlockProps) {
  return (
    <div className=" lg:max-h-full px-[2%] py-16 container  m-auto ">
      <div className="flex flex-col items-center w-full gap-y-12 lg:items-center">
        <div className="flex flex-col-reverse w-full">
          <div className="w-full my-12">
            <img
              src={images[0]?.src}
              alt={images[0]?.alt}
              className="w-full h-full my-2 object-cover max-h-[50rem]"
              style={{ borderRadius: "var(--image-radius)" }}
            />
          </div>
          <div className="flex flex-col text-center items-center gap-x-8">
          {tag && (
              <Text className="text-sm font-semibold uppercase tracking-wider  mb-2">
                {tag}
              </Text>
            )}
            <Text
              as="hero"
              className="mb-4 text-lowercase first-letter-uppercase"
            >
              {title}
            </Text>
            
            <div className="max-w-[50rem]">
            <Text
              as="h6"
              className="text-base py-2"
            >
              {description}
            </Text>
              <div className="mt-8">
                <div className={`w-full flex items-center`}>
                  <div className="lg:max-w-[30rem] mx-auto">
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
