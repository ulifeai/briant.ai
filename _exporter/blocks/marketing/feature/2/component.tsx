import {Text} from "@/components/ui/base/text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Package2 } from "lucide-react";

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
  subheadings?: {
    title: string;
    description: string;
  }[];
}

export default function HeaderBlock({
  tag,
  title,
  description,
  buttons,
  form,
  image,
  subheadings,
}: HeaderBlockProps) {
  return (
    <div className="px-[5%] py-16 lg:max-h-full container mx-auto">
      <div className="flex flex-col gap-y-12 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center">
        
        <div>
          <img
            src={image?.image}
            alt={image?.alt}
            className="w-full h-full object-cover max-h-[30rem]"
            style={{ borderRadius: "var(--image-radius)" }}
          />
        </div>
        <div className="flex flex-col">
          <div>
          {tag && (
            <Text className="text-sm font-semibold uppercase tracking-wider  mb-2">
              {tag}
            </Text>
          )}
          <Text
            as="h1"
            className="mb-4"
          >
            {title}
          </Text>
          <Text
          as="p"
            className="text-base py-2"
          >
            {description}
          </Text>
            <div className="gap-6 items-start flex flex-col mt-8">
              {subheadings?.map((subheading, index) => (
                <div
                  key={index}
                  className="flex justify-center items-start space-x-3"
                >
                  <Package2 className="h-6 w-6" />
                  <div className="mx-0">
                    <h3 className="text-normal">{subheading.title}</h3>
                  </div>
                </div>
              ))}
            </div>
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
                          className="whitespace-nowrap "
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
  );
}
