import { componentVersions } from "@/lib/helpers/featureSettings";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { range } from "@/lib/helpers/array";
import { useWebsiteContent } from "@/hooks/useWebsiteSections";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, Trash2Icon } from "lucide-react";
import { Textarea } from "../ui/textarea";
import axios from "axios";

type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue | number | string }
  | { version: number };

interface JsonEditorProps {
  data: JsonValue;
  onSave: (data: JsonValue) => void;
  componentType: string;
  id: string;
  onChange: any;
  sendDataToParent: ({ index, bool }: { index: number; bool: boolean }) => void;
  page_id: string;
  sendHandleChildLoading: (loading: boolean) => void;
}

export default function BlockCustomizer({
  data: initialData,
  onSave,
  componentType,
  id,
  onChange,
  sendDataToParent,
  page_id,
  sendHandleChildLoading,
}: JsonEditorProps) {
  const [selectedVersion, setSelectedVersion] = useState(0);
  const [websiteContent, setWebsiteContent] = useWebsiteContent();
  const [data, setData] = useState<JsonValue>(initialData);
  const [newBlock, setNewBlock] = useState<any>();
  const [isActive, setIsActive] = useState(false);
  const [disableMouseLeave, setDisableMouseLeave] = useState(true);
  const [saveIdAdd, setSaveIdAdd] = useState<string>();
  const [activeAddBlockNav, setActiveAddBlockNav] = useState<boolean>();
  const [activeAddBlockCta, setActiveAddBlockCta] = useState<boolean>();
  const [activeAddBlockFaq, setActiveAddBlockFaq] = useState<boolean>();
  const [activeAddBlockFeature, setActiveAddBlockFeature] = useState<boolean>();
  const [activeAddBlockFooter, setActiveAddBlockFooter] = useState<boolean>();
  const [activeAddBlockHeader, setActiveAddBlockHeader] = useState<boolean>();
  const [activeAddBlockPricing, setActiveAddBlockPricing] = useState<boolean>();
  const [activeAddBlockTestimonial, setActiveAddBlockTestimonial] =
    useState<boolean>();
  const [hoverButtonAddBlock, setHoverButtonAddBlock] = useState<boolean>();

  useEffect(() => {
    setData(initialData);
    // @ts-ignore
    setSelectedVersion(initialData?.version);
  }, [initialData]);

  useEffect(() => {
    if (selectedVersion == 0) return;
    let newValue = websiteContent?.pageCode.map((section: any) => {
      if (section.id == id) {
        section.data = data;
        section.data.version = selectedVersion;
        // console.log(section, "SECTION");
      }

      return section;
    });
    setWebsiteContent({ ...websiteContent, pageCode: newValue });
  }, [selectedVersion, data]);

  useEffect(() => {
    window.addEventListener("message", (iframeData) => {
      if (iframeData.data.operation == "select_clicked") {
        setIsActive(iframeData.data.addSection);
      }
      if (iframeData.data.operation == "component_clicked") {
        setIsActive(false);
      }
    });
    setDisableMouseLeave(true);
    let pageCode = websiteContent.pageCode;
    const index = pageCode.findIndex((element: any) => element.id === id);
    const next = index + 1;
  }, [websiteContent]);

  useEffect(() => {
    if (websiteContent.pageCode) {
      const index =
        websiteContent.pageCode.findIndex((element: any) => element.id === id) +
        1;

      sendDataToParent({ index, bool: false });
    }
  }, [websiteContent, hoverButtonAddBlock]);

  const handleChange = (path: string[], value: JsonValue) => {
    setData((prevData) => {
      const newData = JSON.parse(JSON.stringify(prevData));
      let current: any = newData;
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }
      current[path[path.length - 1]] = value;
      return newData;
    });
  };

  const handleAddItem = (path: string[]) => {
    setData((prevData) => {
      const newData = JSON.parse(JSON.stringify(prevData));
      let current: any = newData;
      for (let i = 0; i < path.length; i++) {
        current = current[path[i]];
      }
      if (Array.isArray(current)) {
        let newItem;
        if (current.length > 0) {
          // Clone the first item and reset its values
          newItem = cloneAndResetItem(current[0]);
        } else {
          // If the array is empty, decide on a default value
          newItem = "";
        }
        current.push(newItem);
      }
      return newData;
    });
  };

  const cloneAndResetItem = (item: any): any => {
    const clonedItem = JSON.parse(JSON.stringify(item));
    resetValues(clonedItem);
    return clonedItem;
  };

  const resetValues = (item: any) => {
    if (typeof item === "object" && item !== null) {
      if (Array.isArray(item)) {
        for (let i = 0; i < item.length; i++) {
          item[i] = resetValues(item[i]);
        }
      } else {
        for (let key in item) {
          item[key] = resetValues(item[key]);
        }
      }
      return item;
    } else {
      if (typeof item === "string") {
        return "";
      } else if (typeof item === "number") {
        return 0;
      } else if (typeof item === "boolean") {
        return false;
      } else {
        return null;
      }
    }
  };

  const handleDeleteItem = (path: string[], index: number) => {
    setData((prevData) => {
      const newData = JSON.parse(JSON.stringify(prevData));
      let current: any = newData;
      for (let i = 0; i < path.length; i++) {
        current = current[path[i]];
      }
      if (Array.isArray(current)) {
        current.splice(index, 1);
      }
      return newData;
    });
  };

  const renderEditor = (
    value: JsonValue,
    path: string[] = []
  ): React.ReactNode => {
    if (typeof value === "object" && value !== null) {
      if (Array.isArray(value)) {
        if (path.length === 0) {
          // Top-level array, render entries directly
          return (
            <div>
              {value.map((item, index) => (
                <div key={index} className="pl-4 border-l border-gray-200">
                  {renderEditor(item, [...path, index.toString()])}
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteItem(path, index)}
                  >
                    Delete
                  </Button>
                </div>
              ))}
              <Button className="mt-2" onClick={() => handleAddItem(path)}>
                Add Item
              </Button>
            </div>
          );
        } else {
          // Internal arrays as collapsibles
          return (
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={path.join(".")}>
                <AccordionTrigger className="text-sm font-medium">
                  {path[path.length - 1] || "Array"} [{value.length}]
                </AccordionTrigger>
                <AccordionContent>
                  {value.map((item, index) => (
                    <div
                      key={index}
                      className="pl-4 border-l border-gray-200 flex items-start space-x-2 px-2"
                    >
                      {renderEditor(item, [...path, index.toString()])}
                      <div
                        onClick={() => handleDeleteItem(path, index)}
                        className="flex items-center space-x-4 mt-4"
                      >
                        {" "}
                        <Trash2Icon size={20} />{" "}
                      </div>
                    </div>
                  ))}
                  <Button className="mt-2" onClick={() => handleAddItem(path)}>
                    Add Item
                  </Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        }
      } else {
        if (path.length === 0) {
          // Top-level object, render entries directly
          return (
            <div>
              {Object.entries(value).map(([key, val]) => (
                <div key={key} className="pl-4 border-l border-gray-200">
                  {!Array.isArray(val) && !(val instanceof Object) && (
                    <span className="text-sm font-medium">
                      {key.replaceAll("_", " ")}:
                    </span>
                  )}
                  {renderEditor(val, [...path, key])}
                </div>
              ))}
            </div>
          );
        } else {
          // Internal objects as collapsibles
          return (
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={path.join(".")}>
                <AccordionTrigger className="text-sm font-medium">
                  Element {path[path.length - 1] || "Object"}
                </AccordionTrigger>
                <AccordionContent>
                  {Object.entries(value).map(([key, val]) => (
                    <div key={key} className="pl-4 border-l border-gray-200">
                      {renderEditor(val, [...path, key])}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        }
      }
    } else {
      // Primitive values
      return renderInput(value, path);
    }
  };

  const renderInput = (
    value: string | number | boolean | null,
    path: string[]
  ) => {
    return (
      <div className="flex items-center space-x-2 py-4">
        {path.length > 1 && (
          <span className="text-sm font-medium">
            {path[path.length - 1].replaceAll("_", " ")}:
          </span>
        )}

        {path[path.length - 1] == "description" ? (
          <Textarea
            value={value as string}
            onChange={(e) => handleChange(path, e.target.value)}
            className="flex-grow"
          />
        ) : (
          <>
            {path[path.length - 1] == "version" && path.length <= 1 ? (
              <SelectVersion />
            ) : (
              <Input
                value={value as string}
                onChange={(e) => handleChange(path, e.target.value)}
                className="flex-grow"
              />
            )}
          </>
        )}
      </div>
    );
  };

  const SelectVersion = () => {
    return (
      <Select
        value={selectedVersion?.toString()}
        onValueChange={(val) => setSelectedVersion(parseInt(val))}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a Version" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Versions</SelectLabel>
            {range(0, componentVersions[componentType], 1).map((val: any) => (
              <SelectItem key={val} value={val.toString()}>
                {val}{" "}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  };

  const buttonAddSection = (iter: number, blocks: string) => {
    return (
      <div>
        {Array.from({ length: 3 }, (_, i) => {
          const buttonId = `v${i + 1}`; // Génère des IDs dynamiques comme v1, v2, v3
          const navId = `/nav${i + 1}.jpg`;
          return (
            <Button
              key={buttonId}
              onMouseEnter={() => handleMouseEnter(buttonId, blocks)}
              onMouseLeave={() => handleMouseLeave(buttonId, blocks)}
              onClick={() => handleClick(buttonId, blocks)}
              className="mb-4 w-full bg-transparent border border-sky-50 text-blue-950 hover:opacity-20 hover:text-blue-950 hover:bg-transparent"
            >
              <img src={navId} alt="" className="w-auto object-cover" />
            </Button>
          );
        })}
      </div>
    );
  };

  const renderSelectBoxAdd = () => {
    return (
      <div className="p-3">
        <h2 className="mb-2">Add block</h2>
        <Button
          onClick={() => setActiveAddBlockNav((v) => !v)}
          className="mb-4 w-full"
        >
          Navbar
        </Button>
        {activeAddBlockNav && <>{buttonAddSection(3, "navbar")}</>}
        <Button
          onClick={() => setActiveAddBlockCta((v) => !v)}
          className="mb-4 w-full"
        >
          Cta
        </Button>
        {activeAddBlockCta && (
          <>
            {Array.from({ length: 3 }, (_, i) => {
              const buttonId = `v${i + 1}`; // Génère des IDs dynamiques comme v1, v2, v3
              const navId = `/cta${i + 1}.jpg`;
              const blocks = "cta";
              return (
                <div
                  key={buttonId}
                  onMouseEnter={() => handleMouseEnter(buttonId, blocks)}
                  onMouseLeave={() => handleMouseLeave(buttonId, blocks)}
                  onClick={() => handleClick(buttonId, blocks)}
                  className="mb-4 w-full bg-transparent border border-sky-50 text-blue-950 hover:opacity-20 hover:text-blue-950 hover:bg-transparent"
                >
                  <img
                    src={navId}
                    alt=""
                    className="h-full w-auto object-cover"
                  />
                </div>
              );
            })}
          </>
        )}
        <Button
          onClick={() => setActiveAddBlockFaq((v) => !v)}
          className="mb-4 w-full"
        >
          Faq
        </Button>
        {activeAddBlockFaq && (
          <>
            {Array.from({ length: 3 }, (_, i) => {
              const buttonId = `v${i + 1}`; // Génère des IDs dynamiques comme v1, v2, v3
              const navId = `/faq${i + 1}.jpg`;
              const blocks = "faq";
              return (
                <div
                  key={buttonId}
                  onMouseEnter={() => handleMouseEnter(buttonId, blocks)}
                  onMouseLeave={() => handleMouseLeave(buttonId, blocks)}
                  onClick={() => handleClick(buttonId, blocks)}
                  className="mb-4 w-full bg-transparent border border-sky-50 text-blue-950 hover:opacity-20 hover:text-blue-950 hover:bg-transparent"
                >
                  <img
                    src={navId}
                    alt=""
                    className="h-full w-auto object-cover"
                  />
                </div>
              );
            })}
          </>
        )}
        <Button
          onClick={() => setActiveAddBlockFeature((v) => !v)}
          className="mb-4 w-full"
        >
          Feature
        </Button>
        {activeAddBlockFeature && (
          <>
            {Array.from({ length: 3 }, (_, i) => {
              const buttonId = `v${i + 1}`; // Génère des IDs dynamiques comme v1, v2, v3
              const navId = `/feature${i + 1}.jpg`;
              const blocks = "feature";
              return (
                <div
                  key={buttonId}
                  onMouseEnter={() => handleMouseEnter(buttonId, blocks)}
                  onMouseLeave={() => handleMouseLeave(buttonId, blocks)}
                  onClick={() => handleClick(buttonId, blocks)}
                  className="mb-4 w-full bg-transparent border border-sky-50 text-blue-950 hover:opacity-20 hover:text-blue-950 hover:bg-transparent"
                >
                  <img
                    src={navId}
                    alt=""
                    className="h-full w-auto object-cover"
                  />
                </div>
              );
            })}
          </>
        )}
        <Button
          onClick={() => setActiveAddBlockFooter((v) => !v)}
          className="mb-4 w-full"
        >
          Footer
        </Button>
        {activeAddBlockFooter && (
          <>
            {Array.from({ length: 3 }, (_, i) => {
              const buttonId = `v${i + 1}`; // Génère des IDs dynamiques comme v1, v2, v3
              const navId = `/footer${i + 1}.jpg`;
              const blocks = "footer";
              return (
                <div
                  key={buttonId}
                  onMouseEnter={() => handleMouseEnter(buttonId, blocks)}
                  onMouseLeave={() => handleMouseLeave(buttonId, blocks)}
                  onClick={() => handleClick(buttonId, blocks)}
                  className="mb-4 w-full bg-transparent border border-sky-50 text-blue-950 hover:opacity-20 hover:text-blue-950 hover:bg-transparent"
                >
                  <img
                    src={navId}
                    alt=""
                    className="h-full w-auto object-cover"
                  />
                </div>
              );
            })}
          </>
        )}
        <Button
          onClick={() => setActiveAddBlockHeader((v) => !v)}
          className="mb-4 w-full"
        >
          Header
        </Button>
        {activeAddBlockHeader && (
          <>
            {" "}
            {Array.from({ length: 3 }, (_, i) => {
              const buttonId = `v${i + 1}`; // Génère des IDs dynamiques comme v1, v2, v3
              const navId = `/header${i + 1}.jpg`;
              const blocks = "header";
              return (
                <div
                  key={buttonId}
                  onMouseEnter={() => handleMouseEnter(buttonId, blocks)}
                  onMouseLeave={() => handleMouseLeave(buttonId, blocks)}
                  onClick={() => handleClick(buttonId, blocks)}
                  className="mb-4 w-full bg-transparent border border-sky-50 text-blue-950 hover:opacity-20 hover:text-blue-950 hover:bg-transparent"
                >
                  <img
                    src={navId}
                    alt=""
                    className="h-full w-auto object-cover"
                  />
                </div>
              );
            })}
          </>
        )}
        <Button
          onClick={() => setActiveAddBlockPricing((v) => !v)}
          className="mb-4 w-full"
        >
          Pricing
        </Button>
        {activeAddBlockPricing && (
          <>
            {Array.from({ length: 3 }, (_, i) => {
              const buttonId = `v${i + 1}`; // Génère des IDs dynamiques comme v1, v2, v3
              const navId = `/pricing${i + 1}.jpg`;
              const blocks = "pricing";
              return (
                <div
                  key={buttonId}
                  onMouseEnter={() => handleMouseEnter(buttonId, blocks)}
                  onMouseLeave={() => handleMouseLeave(buttonId, blocks)}
                  onClick={() => handleClick(buttonId, blocks)}
                  className="mb-4 w-full bg-transparent border border-sky-50 text-blue-950 hover:opacity-20 hover:text-blue-950 hover:bg-transparent"
                >
                  <img
                    src={navId}
                    alt=""
                    className="h-full w-auto object-cover"
                  />
                </div>
              );
            })}
          </>
        )}
        <Button
          onClick={() => setActiveAddBlockTestimonial((v) => !v)}
          className="mb-4 w-full"
        >
          Testimonial
        </Button>
        {activeAddBlockTestimonial && (
          <>
            {Array.from({ length: 3 }, (_, i) => {
              const buttonId = `v${i + 1}`; // Génère des IDs dynamiques comme v1, v2, v3
              const navId = `/testimoniale${i + 1}.jpg`;
              const blocks = "testimoniale";
              return (
                <div
                  key={buttonId}
                  onMouseEnter={() => handleMouseEnter(buttonId, blocks)}
                  onMouseLeave={() => handleMouseLeave(buttonId, blocks)}
                  onClick={() => handleClick(buttonId, blocks)}
                  className="mb-4 w-full bg-transparent border border-sky-50 text-blue-950 hover:opacity-20 hover:text-blue-950 hover:bg-transparent"
                >
                  <img
                    src={navId}
                    alt=""
                    className="h-full w-auto object-cover"
                  />
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  };

  const handleMouseEnter = (version: string, blocks: string) => {
    setHoverButtonAddBlock(true);
    let tempItem: any;

    if (blocks === "navbar") {
      if (version === "v1") {
        tempItem = {
          data: {
            version: 1,
            buttons: [
              { title: "Sign Up", variant: "default", size: "default" },
              { title: "Login", variant: "default", size: "default" },
            ],
            logo: {
              src: "1.jpg",
            },
            navItems: [
              { title: "Home", url: "/" },
              { title: "Latest Updates", url: "/updates" },
              { title: "Popular Manga", url: "/popular" },
              { title: "Genres", url: "/genres" },
            ],
          },
          id: "d18a64fb-063d-499b-ad33-f635314acc56",
          type: "navbar",
          _id: "673a1cae0ccfee067d8f78bd",
        };
      } else if (version === "v2") {
        tempItem = {
          data: {
            version: 2,
            buttons: [
              { title: "Sign Up", variant: "default", size: "default" },
              { title: "Login", variant: "default", size: "default" },
            ],
            logo: {
              src: "1.jpg",
            },
            navItems: [
              { title: "Home", url: "/" },
              { title: "Latest Updates", url: "/updates" },
              { title: "Popular Manga", url: "/popular" },
              { title: "Genres", url: "/genres" },
            ],
          },
          id: "fcc710e5-07b0-4c54-b131-a654c09daff",
          type: "navbar",
          _id: "67337fe4c5ba24aeda789b11",
        };
      } else if (version === "v3") {
        tempItem = {
          data: {
            version: 3,
            buttons: [
              { title: "Sign Up", variant: "default", size: "default" },
              { title: "Login", variant: "default", size: "default" },
            ],
            logo: {
              src: "1.jpg",
            },
            navItems: [
              { title: "Home", url: "/" },
              { title: "Latest Updates", url: "/updates" },
              { title: "Popular Manga", url: "/popular" },
              { title: "Genres", url: "/genres" },
            ],
          },
          id: "fcc710e5-07b0-4c54-b131-fa654c09daf",
          type: "navbar",
          _id: "67337fe4c5ba24aeda789b11",
        };
      }
    } else if (blocks === "cta") {
      if (version === "v1") {
        tempItem = {
          data: {
            buttons: [
              { title: "Sign Up", variant: "primary", size: "medium" },
              { title: "Learn More", variant: "secondary", size: "medium" },
            ],
            colorText: "black",
            description:
              "Embrace the music revolution by joining our vibrant community. Sign up for exclusive updates and engage with other music enthusiasts.",
            image: {
              image: "/3.jpg",
              alt: "Community Engagement",
            },
            tag: "Join Us",
            title: "Become Part of Our Journey",
            version: 1,
          },
          id: "448e2558-d4cc-4fff-a95d-d241d65ae9d4",
          type: "cta",
          _id: "673a03ac0ccfee067d8f75bb",
        };
      } else if (version === "v2") {
        tempItem = {
          data: {
            buttons: [
              { title: "Sign Up", variant: "primary", size: "medium" },
              { title: "Learn More", variant: "secondary", size: "medium" },
            ],
            colorText: "black",
            description:
              "Embrace the music revolution by joining our vibrant community. Sign up for exclusive updates and engage with other music enthusiasts.",
            image: {
              image: "/3.jpg",
              alt: "Community Engagement",
            },
            tag: "Join Us",
            title: "Become Part of Our Journey",
            version: 2,
          },
          id: "448e2558-d4cc-4fff-a95d-d241d65ae9d4",
          type: "cta",
          _id: "673a03ac0ccfee067d8f75bb",
        };
      } else if (version === "v3") {
        tempItem = {
          data: {
            buttons: [
              { title: "Sign Up", variant: "primary", size: "medium" },
              { title: "Learn More", variant: "secondary", size: "medium" },
            ],
            colorText: "black",
            description:
              "Embrace the music revolution by joining our vibrant community. Sign up for exclusive updates and engage with other music enthusiasts.",
            image: {
              image: "/3.jpg",
              alt: "Community Engagement",
            },
            tag: "Join Us",
            title: "Become Part of Our Journey",
            version: 3,
          },
          id: "448e2558-d4cc-4fff-a95d-d241d65ae9d4",
          type: "cta",
          _id: "673a03ac0ccfee067d8f75bb",
        };
      }
    } else if (blocks === "faq") {
      if (version === "v1") {
        tempItem = {
          id: "2fe32d59-0bb1-4be2-8dca-98392788655f",
          type: "faq",
          _id: "6738eea80ccfee067d8f7354",
          data: {
            version: 1,
            title: "Frequently Asked Questions",
            description:
              "Find answers to common questions about Dragon Ball Z.",
            cta_title: "Need More Help?",
            cta_description:
              "Contact our support team for additional assistance.",
            button: {
              title: "Contact Us",
              variant: "primary",
            },
            questions: [
              {
                title: "What is Dragon Ball Z about?",
                answer:
                  "Dragon Ball Z follows the adventures of Goku as he and his companions defend the Earth against a variety of powerful foes.",
              },
              {
                title: "Can I watch full episodes here?",
                answer:
                  "With our Saiyan Plan, you can gain access to all Dragon Ball Z episodes.",
              },
              {
                title: "Is there a free plan available?",
                answer: "Yes, we offer a free plan with limitations.",
              },
              {
                title: "How do I join the community forums?",
                answer:
                  "Community forum access is available with the Saiyan Plan.",
              },
            ],
          },
        };
      } else if (version === "v2") {
        tempItem = {
          id: "2fe32d59-0bb1-4be2-8dca-98392788655f",
          type: "faq",
          _id: "6738eea80ccfee067d8f7354",
          data: {
            version: 2,
            title: "Frequently Asked Questions",
            description:
              "Find answers to common questions about Dragon Ball Z.",
            cta_title: "Need More Help?",
            cta_description:
              "Contact our support team for additional assistance.",
            button: {
              title: "Contact Us",
              variant: "primary",
            },
            questions: [
              {
                title: "What is Dragon Ball Z about?",
                answer:
                  "Dragon Ball Z follows the adventures of Goku as he and his companions defend the Earth against a variety of powerful foes.",
              },
              {
                title: "Can I watch full episodes here?",
                answer:
                  "With our Saiyan Plan, you can gain access to all Dragon Ball Z episodes.",
              },
              {
                title: "Is there a free plan available?",
                answer: "Yes, we offer a free plan with limitations.",
              },
              {
                title: "How do I join the community forums?",
                answer:
                  "Community forum access is available with the Saiyan Plan.",
              },
            ],
          },
        };
      } else if (version === "v3") {
        tempItem = {
          id: "2fe32d59-0bb1-4be2-8dca-98392788655f",
          type: "faq",
          _id: "6738eea80ccfee067d8f7354",
          data: {
            version: 3,
            title: "Frequently Asked Questions",
            description:
              "Find answers to common questions about Dragon Ball Z.",
            cta_title: "Need More Help?",
            cta_description:
              "Contact our support team for additional assistance.",
            button: {
              title: "Contact Us",
              variant: "primary",
            },
            questions: [
              {
                title: "What is Dragon Ball Z about?",
                answer:
                  "Dragon Ball Z follows the adventures of Goku as he and his companions defend the Earth against a variety of powerful foes.",
              },
              {
                title: "Can I watch full episodes here?",
                answer:
                  "With our Saiyan Plan, you can gain access to all Dragon Ball Z episodes.",
              },
              {
                title: "Is there a free plan available?",
                answer: "Yes, we offer a free plan with limitations.",
              },
              {
                title: "How do I join the community forums?",
                answer:
                  "Community forum access is available with the Saiyan Plan.",
              },
            ],
          },
        };
      }
    } else if (blocks === "feature") {
      if (version === "v1") {
        tempItem = {
          id: "a815d183-b483-4bde-a9ea-6e4499f07494",
          type: "feature",
          _id: "6738eea50ccfee067d8f734b",
          data: {
            version: 1,
            title: "Unleash Your Saiyan Power",
            tag: "Key Features",
            description:
              "Discover the unique features of our platform that cater to every Dragon Ball Z fan.",
            image: {
              alt: "Saiyan Power",
              src: "https://images.pexels.com/photos/29355063/pexels-photo-29355063.jpeg",
            },
            buttons: [
              {
                title: "Start Your Journey",
                variant: "default",
                size: "large",
              },
              {
                title: "Discover More",
                variant: "secondary",
                size: "medium",
              },
            ],
            feature_items: [
              {
                title: "Character Profiles",
                description:
                  "Detailed analysis and histories of all your favorite DBZ characters.",
                image:
                  "https://images.pexels.com/photos/29411317/pexels-photo-29411317.jpeg",
                alt: "Character Profiles Image",
              },
              {
                title: "Episode Guide",
                description:
                  "Comprehensive guide to every Dragon Ball Z episode with synopses and analyses.",
                image:
                  "https://images.pexels.com/photos/29373216/pexels-photo-29373216.jpeg",
                alt: "Episode Guide Image",
              },
              {
                title: "Behind-the-Scenes",
                description:
                  "Exclusive content and interviews with the creators behind Dragon Ball Z.",
                image:
                  "https://images.pexels.com/photos/29366119/pexels-photo-29366119.jpeg",
                alt: "Behind-the-Scenes Image",
              },
              {
                title: "Fan Community",
                description:
                  "Join our vibrant fan community to share and discuss your passion for DBZ.",
                image:
                  "https://images.pexels.com/photos/29355063/pexels-photo-29355063.jpeg",
                alt: "Fan Community Image",
              },
              {
                title: "Merchandise",
                description:
                  "Explore a wide range of Dragon Ball Z merchandise available for all fans.",
                image:
                  "https://images.pexels.com/photos/29355062/pexels-photo-29355062.jpeg",
                alt: "Merchandise Image",
              },
            ],
          },
        };
      } else if (version === "v2") {
        tempItem = {
          id: "a815d183-b483-4bde-a9ea-6e4499f07494",
          type: "feature",
          _id: "6738eea50ccfee067d8f734b",
          data: {
            version: 2,
            title: "Unleash Your Saiyan Power",
            tag: "Key Features",
            description:
              "Discover the unique features of our platform that cater to every Dragon Ball Z fan.",
            image: {
              alt: "Saiyan Power",
              src: "https://images.pexels.com/photos/29355063/pexels-photo-29355063.jpeg",
            },
            buttons: [
              {
                title: "Start Your Journey",
                variant: "default",
                size: "large",
              },
              {
                title: "Discover More",
                variant: "secondary",
                size: "medium",
              },
            ],
            feature_items: [
              {
                title: "Character Profiles",
                description:
                  "Detailed analysis and histories of all your favorite DBZ characters.",
                image:
                  "https://images.pexels.com/photos/29411317/pexels-photo-29411317.jpeg",
                alt: "Character Profiles Image",
              },
              {
                title: "Episode Guide",
                description:
                  "Comprehensive guide to every Dragon Ball Z episode with synopses and analyses.",
                image:
                  "https://images.pexels.com/photos/29373216/pexels-photo-29373216.jpeg",
                alt: "Episode Guide Image",
              },
              {
                title: "Behind-the-Scenes",
                description:
                  "Exclusive content and interviews with the creators behind Dragon Ball Z.",
                image:
                  "https://images.pexels.com/photos/29366119/pexels-photo-29366119.jpeg",
                alt: "Behind-the-Scenes Image",
              },
              {
                title: "Fan Community",
                description:
                  "Join our vibrant fan community to share and discuss your passion for DBZ.",
                image:
                  "https://images.pexels.com/photos/29355063/pexels-photo-29355063.jpeg",
                alt: "Fan Community Image",
              },
              {
                title: "Merchandise",
                description:
                  "Explore a wide range of Dragon Ball Z merchandise available for all fans.",
                image:
                  "https://images.pexels.com/photos/29355062/pexels-photo-29355062.jpeg",
                alt: "Merchandise Image",
              },
            ],
          },
        };
      } else if (version === "v3") {
        tempItem = {
          id: "a815d183-b483-4bde-a9ea-6e4499f07494",
          type: "feature",
          _id: "6738eea50ccfee067d8f734b",
          data: {
            version: 3,
            title: "Unleash Your Saiyan Power",
            tag: "Key Features",
            description:
              "Discover the unique features of our platform that cater to every Dragon Ball Z fan.",
            image: {
              alt: "Saiyan Power",
              src: "https://images.pexels.com/photos/29355063/pexels-photo-29355063.jpeg",
            },
            buttons: [
              {
                title: "Start Your Journey",
                variant: "default",
                size: "large",
              },
              {
                title: "Discover More",
                variant: "secondary",
                size: "medium",
              },
            ],
            feature_items: [
              {
                title: "Character Profiles",
                description:
                  "Detailed analysis and histories of all your favorite DBZ characters.",
                image:
                  "https://images.pexels.com/photos/29411317/pexels-photo-29411317.jpeg",
                alt: "Character Profiles Image",
              },
              {
                title: "Episode Guide",
                description:
                  "Comprehensive guide to every Dragon Ball Z episode with synopses and analyses.",
                image:
                  "https://images.pexels.com/photos/29373216/pexels-photo-29373216.jpeg",
                alt: "Episode Guide Image",
              },
              {
                title: "Behind-the-Scenes",
                description:
                  "Exclusive content and interviews with the creators behind Dragon Ball Z.",
                image:
                  "https://images.pexels.com/photos/29366119/pexels-photo-29366119.jpeg",
                alt: "Behind-the-Scenes Image",
              },
              {
                title: "Fan Community",
                description:
                  "Join our vibrant fan community to share and discuss your passion for DBZ.",
                image:
                  "https://images.pexels.com/photos/29355063/pexels-photo-29355063.jpeg",
                alt: "Fan Community Image",
              },
              {
                title: "Merchandise",
                description:
                  "Explore a wide range of Dragon Ball Z merchandise available for all fans.",
                image:
                  "https://images.pexels.com/photos/29355062/pexels-photo-29355062.jpeg",
                alt: "Merchandise Image",
              },
            ],
          },
        };
      }
    } else if (blocks === "footer") {
      if (version === "v1") {
        tempItem = {
          id: "2f44ac67-1384-494b-9a5a-9f023f9b2654",
          type: "footer",
          _id: "6738eea90ccfee067d8f735a",
          data: {
            version: 1,
            variant: "subscribe",
            logo: {
              alt: "DBZ Logo",
              image: "/6.jpg",
            },
            navLinks: [
              {
                href: "/terms",
                title: "Terms",
              },
              {
                href: "/privacy",
                title: "Privacy",
              },
              {
                href: "/support",
                title: "Support",
              },
            ],
            subscribeButtonText: "Sign Up",
            subscribePrivacyText: "We respect your privacy.",
            subscribeText:
              "Join our newsletter for the latest on Dragon Ball Z.",
          },
        };
      } else if (version === "v2") {
        tempItem = {
          id: "2f44ac67-1384-494b-9a5a-9f023f9b2654",
          type: "footer",
          _id: "6738eea90ccfee067d8f735a",
          data: {
            version: 2,
            variant: "subscribe",
            logo: {
              alt: "DBZ Logo",
              image: "/6.jpg",
            },
            navLinks: [
              {
                href: "/terms",
                title: "Terms",
              },
              {
                href: "/privacy",
                title: "Privacy",
              },
              {
                href: "/support",
                title: "Support",
              },
            ],
            subscribeButtonText: "Sign Up",
            subscribePrivacyText: "We respect your privacy.",
            subscribeText:
              "Join our newsletter for the latest on Dragon Ball Z.",
          },
        };
      } else if (version === "v3") {
        tempItem = {
          id: "2f44ac67-1384-494b-9a5a-9f023f9b2654",
          type: "footer",
          _id: "6738eea90ccfee067d8f735a",
          data: {
            version: 3,
            variant: "subscribe",
            logo: {
              alt: "DBZ Logo",
              image: "/6.jpg",
            },
            navLinks: [
              {
                href: "/terms",
                title: "Terms",
              },
              {
                href: "/privacy",
                title: "Privacy",
              },
              {
                href: "/support",
                title: "Support",
              },
            ],
            subscribeButtonText: "Sign Up",
            subscribePrivacyText: "We respect your privacy.",
            subscribeText:
              "Join our newsletter for the latest on Dragon Ball Z.",
          },
        };
      }
    } else if (blocks === "header") {
      if (version === "v1") {
        tempItem = {
          id: "4fe2e327-5ea2-4471-a53f-64d5b616900a",
          type: "header",
          _id: "6738eea30ccfee067d8f7345",
          data: {
            version: 1,
            tag: "Welcome to Dragon Ball Z World",
            title: "Explore the Epic Saga",
            description:
              "Dive into the universe of Dragon Ball Z to discover epic battles, unforgettable characters, and thrilling adventures.",
            buttons: [
              {
                title: "Get Started Now",
                variant: "default",
                size: "large",
              },
              {
                title: "Learn More",
                variant: "secondary",
                size: "medium",
              },
            ],
            images: [
              {
                alt: "Goku Powering Up",
                src: "https://images.pexels.com/photos/29411317/pexels-photo-29411317.jpeg",
              },
              {
                alt: "Dragon Ball Z Warriors",
                src: "https://images.pexels.com/photos/29373216/pexels-photo-29373216.jpeg",
              },
              {
                alt: "The Dragon Balls",
                src: "https://images.pexels.com/photos/29366119/pexels-photo-29366119.jpeg",
              },
              {
                alt: "Goku and Friends",
                src: "https://images.pexels.com/photos/29355063/pexels-photo-29355063.jpeg",
              },
              {
                alt: "Epic Battle Scene",
                src: "https://images.pexels.com/photos/29355062/pexels-photo-29355062.jpeg",
              },
            ],
          },
        };
      } else if (version === "v2") {
        tempItem = {
          id: "4fe2e327-5ea2-4471-a53f-64d5b616900a",
          type: "header",
          _id: "6738eea30ccfee067d8f7345",
          data: {
            version: 2,
            tag: "Welcome to Dragon Ball Z World",
            title: "Explore the Epic Saga",
            description:
              "Dive into the universe of Dragon Ball Z to discover epic battles, unforgettable characters, and thrilling adventures.",
            buttons: [
              {
                title: "Get Started Now",
                variant: "default",
                size: "large",
              },
              {
                title: "Learn More",
                variant: "secondary",
                size: "medium",
              },
            ],
            images: [
              {
                alt: "Goku Powering Up",
                src: "https://images.pexels.com/photos/29411317/pexels-photo-29411317.jpeg",
              },
              {
                alt: "Dragon Ball Z Warriors",
                src: "https://images.pexels.com/photos/29373216/pexels-photo-29373216.jpeg",
              },
              {
                alt: "The Dragon Balls",
                src: "https://images.pexels.com/photos/29366119/pexels-photo-29366119.jpeg",
              },
              {
                alt: "Goku and Friends",
                src: "https://images.pexels.com/photos/29355063/pexels-photo-29355063.jpeg",
              },
              {
                alt: "Epic Battle Scene",
                src: "https://images.pexels.com/photos/29355062/pexels-photo-29355062.jpeg",
              },
            ],
          },
        };
      } else if (version === "v3") {
        tempItem = {
          id: "4fe2e327-5ea2-4471-a53f-64d5b616900a",
          type: "header",
          _id: "6738eea30ccfee067d8f7345",
          data: {
            version: 3,
            tag: "Welcome to Dragon Ball Z World",
            title: "Explore the Epic Saga",
            description:
              "Dive into the universe of Dragon Ball Z to discover epic battles, unforgettable characters, and thrilling adventures.",
            buttons: [
              {
                title: "Get Started Now",
                variant: "default",
                size: "large",
              },
              {
                title: "Learn More",
                variant: "secondary",
                size: "medium",
              },
            ],
            images: [
              {
                alt: "Goku Powering Up",
                src: "https://images.pexels.com/photos/29411317/pexels-photo-29411317.jpeg",
              },
              {
                alt: "Dragon Ball Z Warriors",
                src: "https://images.pexels.com/photos/29373216/pexels-photo-29373216.jpeg",
              },
              {
                alt: "The Dragon Balls",
                src: "https://images.pexels.com/photos/29366119/pexels-photo-29366119.jpeg",
              },
              {
                alt: "Goku and Friends",
                src: "https://images.pexels.com/photos/29355063/pexels-photo-29355063.jpeg",
              },
              {
                alt: "Epic Battle Scene",
                src: "https://images.pexels.com/photos/29355062/pexels-photo-29355062.jpeg",
              },
            ],
          },
        };
      }
    } else if (blocks === "pricing") {
      if (version === "v1") {
        tempItem = {
          id: "8c81e6c1-d53b-48cf-aab9-3b8c1c8f1519",
          type: "pricing",
          _id: "6738eea70ccfee067d8f7351",
          data: {
            version: 1,
            title: "Choose Your Super Plan",
            subtitle:
              "Select the plan that fits your needs and start your Dragon Ball Z adventure!",
            plans: [
              {
                name: "Free Plan",
                description: "Access limited sections of the site with ads.",
                monthlyPrice: 0,
                yearlyPrice: 0,
                features: [
                  { text: "View character profiles" },
                  { text: "Read episode synopses" },
                ],
              },
              {
                name: "Saiyan Plan",
                description:
                  "Get full access to all site features with no ads.",
                monthlyPrice: 9.99,
                yearlyPrice: 99.99,
                features: [
                  { text: "Exclusive video content" },
                  { text: "Behind-the-scenes access" },
                  { text: "Full episode guides" },
                  { text: "Participation in community forums" },
                ],
              },
            ],
          },
        };
      } else if (version === "v2") {
        tempItem = {
          id: "8c81e6c1-d53b-48cf-aab9-3b8c1c8f1519",
          type: "pricing",
          _id: "6738eea70ccfee067d8f7351",
          data: {
            version: 2,
            title: "Choose Your Super Plan",
            subtitle:
              "Select the plan that fits your needs and start your Dragon Ball Z adventure!",
            plans: [
              {
                name: "Free Plan",
                description: "Access limited sections of the site with ads.",
                monthlyPrice: 0,
                yearlyPrice: 0,
                features: [
                  { text: "View character profiles" },
                  { text: "Read episode synopses" },
                ],
              },
              {
                name: "Saiyan Plan",
                description:
                  "Get full access to all site features with no ads.",
                monthlyPrice: 9.99,
                yearlyPrice: 99.99,
                features: [
                  { text: "Exclusive video content" },
                  { text: "Behind-the-scenes access" },
                  { text: "Full episode guides" },
                  { text: "Participation in community forums" },
                ],
              },
            ],
          },
        };
      } else if (version === "v3") {
        tempItem = {
          id: "8c81e6c1-d53b-48cf-aab9-3b8c1c8f1519",
          type: "pricing",
          _id: "6738eea70ccfee067d8f7351",
          data: {
            version: 3,
            title: "Choose Your Super Plan",
            subtitle:
              "Select the plan that fits your needs and start your Dragon Ball Z adventure!",
            plans: [
              {
                name: "Free Plan",
                description: "Access limited sections of the site with ads.",
                monthlyPrice: 0,
                yearlyPrice: 0,
                link: "link",
                features: [
                  { text: "View character profiles" },
                  { text: "Read episode synopses" },
                ],
              },
              {
                name: "Saiyan Plan",
                description:
                  "Get full access to all site features with no ads.",
                monthlyPrice: 9.99,
                yearlyPrice: 99.99,
                link: "link",
                features: [
                  { text: "Exclusive video content" },
                  { text: "Behind-the-scenes access" },
                  { text: "Full episode guides" },
                  { text: "Participation in community forums" },
                ],
              },
            ],
          },
        };
      }
    } else if (blocks === "testimoniale") {
      if (version === "v1") {
        tempItem = {
          id: "28922963-7368-482c-8ec5-92ab1d382f1f",
          type: "testimonial",
          _id: "6738eea60ccfee067d8f734e",
          data: {
            version: 1,
            title: "What Our Fans Say",
            description:
              "Hear from Dragon Ball Z fans from all across the globe about their experiences.",
            testimonials: [
              {
                name: "John Smith",
                position: "Anime Enthusiast",
                quote:
                  "Dragon Ball Z has been a part of my life for years, and this platform makes it come alive!",
                companyName: "Anime Fans United",
                avatar: {
                  alt: "Fan Avatar 1",
                  src: "https://images.pexels.com/photos/29411317/pexels-photo-29411317.jpeg",
                },
                image: {
                  alt: "Testimonial Image 1",
                  src: "https://images.pexels.com/photos/29411317/pexels-photo-29411317.jpeg",
                },
              },
              {
                name: "Sarah Connor",
                position: "DBZ Collector",
                quote:
                  "I found friends and amazing content here. If you love DBZ, this is the place for you!",
                companyName: "Collectibles Co.",
                avatar: {
                  alt: "Fan Avatar 2",
                  src: "https://images.pexels.com/photos/29373216/pexels-photo-29373216.jpeg",
                },
                image: {
                  alt: "Testimonial Image 2",
                  src: "https://images.pexels.com/photos/29373216/pexels-photo-29373216.jpeg",
                },
              },
            ],
          },
        };
      } else if (version === "v2") {
        tempItem = {
          id: "28922963-7368-482c-8ec5-92ab1d382f1f",
          type: "testimonial",
          _id: "6738eea60ccfee067d8f734e",
          data: {
            version: 2,
            title: "What Our Fans Say",
            description:
              "Hear from Dragon Ball Z fans from all across the globe about their experiences.",
            testimonials: [
              {
                name: "John Smith",
                position: "Anime Enthusiast",
                quote:
                  "Dragon Ball Z has been a part of my life for years, and this platform makes it come alive!",
                companyName: "Anime Fans United",
                avatar: {
                  alt: "Fan Avatar 1",
                  src: "https://images.pexels.com/photos/29411317/pexels-photo-29411317.jpeg",
                },
                image: {
                  alt: "Testimonial Image 1",
                  src: "https://images.pexels.com/photos/29411317/pexels-photo-29411317.jpeg",
                },
              },
              {
                name: "Sarah Connor",
                position: "DBZ Collector",
                quote:
                  "I found friends and amazing content here. If you love DBZ, this is the place for you!",
                companyName: "Collectibles Co.",
                avatar: {
                  alt: "Fan Avatar 2",
                  src: "https://images.pexels.com/photos/29373216/pexels-photo-29373216.jpeg",
                },
                image: {
                  alt: "Testimonial Image 2",
                  src: "https://images.pexels.com/photos/29373216/pexels-photo-29373216.jpeg",
                },
              },
            ],
          },
        };
      } else if (version === "v3") {
        tempItem = {
          id: "28922963-7368-482c-8ec5-92ab1d382f1f",
          type: "testimonial",
          _id: "6738eea60ccfee067d8f734e",
          data: {
            version: 3,
            title: "What Our Fans Say",
            description:
              "Hear from Dragon Ball Z fans from all across the globe about their experiences.",
            testimonials: [
              {
                name: "John Smith",
                position: "Anime Enthusiast",
                quote:
                  "Dragon Ball Z has been a part of my life for years, and this platform makes it come alive!",
                companyName: "Anime Fans United",
                avatar: {
                  alt: "Fan Avatar 1",
                  src: "https://images.pexels.com/photos/29411317/pexels-photo-29411317.jpeg",
                },
                image: {
                  alt: "Testimonial Image 1",
                  src: "https://images.pexels.com/photos/29411317/pexels-photo-29411317.jpeg",
                },
              },
              {
                name: "Sarah Connor",
                position: "DBZ Collector",
                quote:
                  "I found friends and amazing content here. If you love DBZ, this is the place for you!",
                companyName: "Collectibles Co.",
                avatar: {
                  alt: "Fan Avatar 2",
                  src: "https://images.pexels.com/photos/29373216/pexels-photo-29373216.jpeg",
                },
                image: {
                  alt: "Testimonial Image 2",
                  src: "https://images.pexels.com/photos/29373216/pexels-photo-29373216.jpeg",
                },
              },
            ],
          },
        };
      }
    }

    setWebsiteContent((prev: any) => {
      const updatedPageCode = [...prev.pageCode];
      const index = updatedPageCode.findIndex(
        (element: any) => element.id === id
      );
      const next = index + 1;

      updatedPageCode.splice(next, 0, tempItem);

      const result = updatedPageCode.some((obj) => obj.id === tempItem.id);

      if (result === true) {
        sendDataToParent({ index: next, bool: true });
      }

      return { ...prev, pageCode: updatedPageCode };
    });
    setSaveIdAdd(tempItem.id);
  };

  const handleMouseLeave = (version: string, blocks: string) => {
    setHoverButtonAddBlock(false);
    if (disableMouseLeave) {
      let pageCode = websiteContent.pageCode;
      const index = pageCode.findIndex((element: any) => element.id === id) + 1;

      const result = pageCode.some((obj: any) => obj.id === saveIdAdd);
      if (result === true) {
        const pageCodeupdatedList = [
          ...pageCode.slice(0, index),
          ...pageCode.slice(index + 1),
        ];

        setWebsiteContent({ pageCode: pageCodeupdatedList });
      }
    }
  };

  const handleClick = async (version: string, blocks: string) => {
    setDisableMouseLeave(false);

    let pageCode = websiteContent.pageCode;
    const index = pageCode.findIndex((element: any) => element.id === id);
    const next = index + 1;

    sendDataToParent({ index, bool: false });
    sendHandleChildLoading(true);

    try {
      // Insérer la nouvelle section avec la mise à jour des ordres
      const response = await axios.post("/api/app/block/insertWithOrder", {
        page_id: page_id,
        order: next,
        content: pageCode[next],
      });

      sendHandleChildLoading(false);
    } catch (error) {
      console.error("Error updating block order:", error);
      sendHandleChildLoading(false);
    }
  };

  const deleteClickBlock = async () => {
    let pageCode = websiteContent.pageCode;
    const index = pageCode.findIndex((element: any) => element.id === id);
    const resultat = pageCode.find((element: any) => element.id === id);

    const pageCodeupdatedList = [
      ...pageCode.slice(0, index),
      ...pageCode.slice(index + 1),
    ];

    setWebsiteContent({ pageCode: pageCodeupdatedList });

    sendHandleChildLoading(true);
    const response = await axios.delete("/api/app/block/" + resultat._id);
    sendHandleChildLoading(false);
  };

  console.log(websiteContent);

  return (
    <div>
      {isActive ? (
        renderSelectBoxAdd()
      ) : (
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div className="w-full h-[90vh] overflow-y-auto py-4">
            <Button onClick={() => deleteClickBlock()} className="mt-4 w-full">
              Delete
            </Button>
            <h2 className="text-lg font-bold mb-4">Component editor</h2>
            {renderEditor(data)}
            <Button onClick={() => onSave(data)} className="mt-4 w-full">
              Save Changes
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
