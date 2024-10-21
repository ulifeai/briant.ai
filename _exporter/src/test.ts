import { Json2React } from "./lib/converters/json2react";
import { React2Json } from "./lib/converters/react2json";
import path from "path";

const jsonData = {
  "type": "element",
  "tag": "div",
  "props": {
    "className": "relative px-[5%] py-16 min-h-screen flex items-center overflow-hidden"
  },
  "children": [
    {
      "type": "dynamicText",
      "text": ""
    },
    {
      "type": "element",
      "tag": "div",
      "props": {
        "style": "{{ backgroundImage: `url(${image.image})`, backgroundSize: \"cover\", backgroundPosition: \"center\", filter: \"brightness(0.4)\" }}",
        "role": "img",
        "aria-label": "{image.alt}",
        "className": "absolute inset-0 z-0"
      }
    },
    {
      "type": "dynamicText",
      "text": ""
    },
    {
      "type": "element",
      "tag": "div",
      "props": {
        "className": "relative z-10 w-full max-w-6xl mx-auto text-white"
      },
      "children": [
        {
          "type": "element",
          "tag": "div",
          "props": {
            "className": "flex flex-col gap-y-12 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center"
          },
          "children": [
            {
              "type": "element",
              "tag": "div",
              "props": {
                "className": "flex flex-col"
              },
              "children": [
                {
                  "type": "element",
                  "tag": "div",
                  "children": [
                    {
                      "type": "conditional",
                      "condition": "tag",
                      "children": [
                        {
                          "type": "element",
                          "tag": "span",
                          "props": {
                            "className": "text-sm font-semibold uppercase tracking-wider  mb-2"
                          },
                          "children": [
                            {
                              "type": "dynamicText",
                              "text": "tag"
                            }
                          ]
                        }
                      ],
                      "else": [
                        {
                          "type": "text",
                          "text": "[object Object]"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "tag": "h1",
                      "props": {
                        "style": "{{ fontFamily: \"var(--header-font)\" }}",
                        "className": "text-4xl font-bold py-2"
                      },
                      "children": [
                        {
                          "type": "dynamicText",
                          "text": "title"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "tag": "p",
                      "props": {
                        "style": "{{ fontFamily: \"var(--page-font)\" }}",
                        "className": "text-base py-2 text-gray-200"
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
                        "className": "mt-8"
                      },
                      "children": [
                        {
                          "type": "element",
                          "tag": "div",
                          "props": {
                            "className": "w-full flex items-center"
                          },
                          "children": [
                            {
                              "type": "element",
                              "tag": "div",
                              "props": {
                                "className": "lg:max-w-[30rem]"
                              },
                              "children": [
                                {
                                  "type": "conditional",
                                  "condition": "form",
                                  "children": [
                                    {
                                      "type": "element",
                                      "tag": "form",
                                      "props": {
                                        "action": "",
                                        "className": "flex flex-col gap-y-3 mb-4 lg:grid lg:grid-rows-1 lg:grid-cols-[1fr_max-content] lg:gap-x-4"
                                      },
                                      "children": [
                                        {
                                          "type": "component",
                                          "component": "Input",
                                          "props": {
                                            "type": "text",
                                            "placeholder": "{(form?.placeholder ?? \"\")}",
                                            "className": "border border-black h-auto min-h-11 mb-0 px-2 rounded-none text-base leading-relaxed bg-white text-black"
                                          }
                                        },
                                        {
                                          "type": "loop",
                                          "loop": {
                                            "array": "buttons.buttons",
                                            "iterator": "button"
                                          },
                                          "props": {
                                            "key": "{index}"
                                          },
                                          "children": [
                                            {
                                              "type": "component",
                                              "component": "Button",
                                              "props": {
                                                "key": "{index}",
                                                "style": "{{ borderRadius: \"var(--button-radius)\" }}",
                                                "className": "whitespace-nowrap h-10 px-4 py-2"
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
                                  ],
                                  "else": [
                                    {
                                      "type": "fragment",
                                      "children": [
                                        {
                                          "type": "loop",
                                          "loop": {
                                            "array": "buttons.buttons",
                                            "iterator": "button"
                                          },
                                          "props": {
                                            "key": "{index}"
                                          },
                                          "children": [
                                            {
                                              "type": "component",
                                              "component": "Button",
                                              "props": {
                                                "key": "{index}",
                                                "variant": "{button.variant}",
                                                "size": "{button.size}",
                                                "style": "{{ borderRadius: \"var(--button-radius)\" }}",
                                                "className": "whitespace-nowrap h-10 mx-2 px-4 py-2"
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
                "className": "hidden lg:block"
              },
              "children": [
                {
                  "type": "text",
                  "text": "[object Object]"
                },
                {
                  "type": "dynamicText",
                  "text": ""
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}


const data = {
  "version": 1,
  "title": "Your apps built by AI in minutes",
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

  console.log(json2react.transform("componentName", jsonData, data))

