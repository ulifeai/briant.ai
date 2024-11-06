import { Json2React } from "./lib/converters/json2react";
import { React2Json } from "./lib/converters/react2json";
import path from "path";

const jsonData = {
  "imports": [
    {
      "source": "@/components/ui/base/text",
      "specifiers": [
        {
          "type": "named" as "named" | "default" | "namespace",
          "imported": "Text",
          "local": "Text"
        }
      ]
    },
    {
      "source": "@/components/ui/button",
      "specifiers": [
        {
          "type": "named" as "named" | "default" | "namespace",
          "imported": "Button",
          "local": "Button"
        }
      ]
    },
    {
      "source": "@uidotdev/usehooks",
      "specifiers": [
        {
          "type": "named" as "named" | "default" | "namespace",
          "imported": "useMediaQuery",
          "local": "useMediaQuery"
        }
      ]
    },
    {
      "source": "framer-motion",
      "specifiers": [
        {
          "type": "named" as "named" | "default" | "namespace",
          "imported": "motion",
          "local": "motion"
        },
        {
          "type": "named" as "named" | "default" | "namespace",
          "imported": "useScroll",
          "local": "useScroll"
        },
        {
          "type": "named" as "named" | "default" | "namespace",
          "imported": "useTransform",
          "local": "useTransform"
        }
      ]
    }
  ],
  "components": [
    {
      "name": "HeroHeaderBlock",
      "preReturnCode": "const isMobile = useMediaQuery(\"(max-width: 767px)\");\nconst {\n  scrollYProgress\n} = useScroll();\nconst createTransform = (mobileValues: string[], desktopValues: string[]) => useTransform(scrollYProgress, [0, 1], isMobile ? mobileValues : desktopValues);\nconst containerHeight = {\n  height: createTransform([\"60vh\", \"100vh\"], [\"70vh\", \"100vh\"])\n};\nconst leftImageGroup = {\n  x: createTransform([\"0vw\", \"-25vw\"], [\"0vw\", \"-50vw\"])\n};\nconst centerImageContainer = {\n  x: createTransform([\"0vw\", \"-25vw\"], [\"0vw\", \"-50vw\"]),\n  width: createTransform([\"50vw\", \"100vw\"], [\"30vw\", \"100vw\"]),\n  height: createTransform([\"50vh\", \"100vh\"], [\"70vh\", \"100vh\"])\n};\nconst rightImage = {\n  x: createTransform([\"0vw\", \"25vw\"], [\"0vw\", \"20vw\"])\n};",
      "jsx": {
        "type": "element",
        "tag": "section",
        "props": {
          "className": "relative h-[250vh]"
        },
        "children": [
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "px-[5%] pt-16 md:pt-24 lg:pt-28"
            },
            "children": [
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "container"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "w-full max-w-2xl"
                    },
                    "children": [
                      {
                        "type": "component",
                        "component": "Text",
                        "package": "@/components/ui/base/text",
                        "props": {
                          "as": "hero",
                          "className": "mb-4 text-8xl text-lowercase first-letter-uppercase"
                        },
                        "children": [
                          {
                            "type": "dynamicText",
                            "text": "title"
                          }
                        ]
                      },
                      {
                        "type": "component",
                        "component": "Text",
                        "package": "@/components/ui/base/text",
                        "props": {
                          "as": "h6",
                          "className": "text-base py-2"
                        },
                        "children": [
                          {
                            "type": "dynamicText",
                            "text": "description"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "div",
                        "props": {
                          "className": "mt-6 flex gap-x-4 md:mt-8"
                        },
                        "children": [
                          {
                            "type": "loop",
                            "loop": {
                              "array": "buttons",
                              "iterator": "button"
                            },
                            "children": [
                              {
                                "type": "component",
                                "component": "Button",
                                "package": "@/components/ui/button",
                                "props": {
                                  "variant": "{button.variant}",
                                  "size": "{button.size}",
                                  "key": "{index}",
                                  "className": "whitespace-nowrap px-4 py-2"
                                },
                                "children": [
                                  {
                                    "type": "dynamicText",
                                    "text": "button.title"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "sticky top-0 mt-[-10rem] flex h-screen w-full items-center overflow-hidden"
            },
            "children": [
              {
                "type": "element",
                "tag": "motion.div",
                "props": {
                  "style": "{containerHeight}",
                  "className": "z-10 grid w-full grid-flow-col grid-cols-[25%_50%_25%] justify-center md:grid-cols-[50%_30%_20%]"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "motion.div",
                    "props": {
                      "style": "{leftImageGroup}",
                      "className": "grid grid-flow-col grid-cols-1 justify-items-end gap-4 justify-self-end px-4"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "div",
                        "props": {
                          "className": "relative top-[5%] hidden w-[40vw] sm:w-[25vw] md:block lg:w-[22vw]"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "img",
                            "props": {
                              "className": "aspect-[2/3] w-full object-cover"
                            }
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "div",
                        "props": {
                          "className": "relative top-[-5%] flex flex-col gap-4 self-center"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "div",
                            "props": {
                              "className": "relative w-[30vw] flex-none md:w-[15vw]"
                            },
                            "children": [
                              {
                                "type": "element",
                                "tag": "img",
                                "props": {
                                  "className": "aspect-square w-full object-cover"
                                }
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "div",
                            "props": {
                              "className": "relative w-[30vw] flex-none md:w-[15vw]"
                            },
                            "children": [
                              {
                                "type": "element",
                                "tag": "img",
                                "props": {
                                  "className": "aspect-[3/4] w-full object-cover"
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "div",
                        "props": {
                          "className": "relative top-[15%] hidden w-[40vw] sm:w-[25vw] md:block lg:w-[22vw]"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "img",
                            "props": {
                              "className": "aspect-square w-full object-cover"
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "motion.div",
                    "props": {
                      "style": "{centerImageContainer}",
                      "className": "relative"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "img",
                        "props": {
                          "className": "size-full object-cover"
                        }
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "motion.div",
                    "props": {
                      "style": "{rightImage}",
                      "className": "grid grid-flow-col grid-cols-1 gap-4 justify-self-start px-4"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "div",
                        "props": {
                          "className": "relative top-[5%] w-[40vw] md:w-[25vw] lg:w-[22vw]"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "img",
                            "props": {
                              "className": "aspect-[3/4] w-full object-cover"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "absolute inset-0 -z-10 mt-[100vh]"
            }
          }
        ]
      }
    }
  ]
}


const data = {
  "version": 1,
  "description": "Start building apps quickly with our AI-powered platform, offering fast setup, easy integration, and powerful features to transform your ideas into reality.",
  tag: "Tag",
  "buttons": [
    {
      "title": "Get Started Free",
      "variant": "primary",
      "size": "large"
    },
    {
      "title": "Learn More",
      "variant": "secondary",
      "size": "large"
    }
  ],
  "image": {
    "image": "/placeholder-image.svg",
    "alt": "AI app building"
  }
}


const components = ["marketing", "application", "auth"]

const json2react = new Json2React();
let result =

  console.log(json2react.transform(jsonData, data))

