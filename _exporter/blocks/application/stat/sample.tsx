"use client";
import React from "react";
import BlockComponent1 from "./1/component";
import BlockComponent2 from "./2/component";
import BlockComponent3 from "./3/component";
import BlockComponent4 from "./4/component";
import BlockComponent5 from "./5/component";
import BlockComponent6 from "./6/component";
import BlockComponent7 from "./7/component";
import BlockComponent8 from "./8/component";

let sampleStatBlock1 = {
  title: "New Users",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissevarius enim in eros.",
  buttons: [
    {
      name: "button",
      variant: "ghost",
      size: "default",
      href: "#",
    },
    {
      name: "button",
      variant: "default",
      size: "default",
      href: "#",
    },
  ],
  floatingBoxMenu: [
    {
      name: "Option one",
      href: "#",
    },
    {
      name: "Option two",
      href: "#",
    },
    {
      name: " Option three",
      href: "#",
    },
  ],
  cards: [
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
    },
  ],
};

let sampleStatBlock2 = {
  title: "New Users",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissevarius enim in eros.",
  buttons: [
    {
      name: "button",
      variant: "ghost",
      size: "default",
      href: "#",
    },
    {
      name: "button",
      variant: "default",
      size: "default",
      href: "#",
    },
  ],
  floatingBoxMenu: [
    {
      name: "Option one",
      href: "#",
    },
    {
      name: "Option two",
      href: "#",
    },
    {
      name: " Option three",
      href: "#",
    },
  ],
  cards: [
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
  ],
};

let sampleStatBlock3 = {
  title: "New Users",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissevarius enim in eros.",
  buttons: [
    {
      name: "button",
      variant: "ghost",
      size: "default",
      href: "#",
    },
    {
      name: "button",
      variant: "default",
      size: "default",
      href: "#",
    },
  ],
  floatingBoxMenu: [
    {
      name: "Option one",
      href: "#",
    },
    {
      name: "Option two",
      href: "#",
    },
    {
      name: " Option three",
      href: "#",
    },
  ],
  cards: [
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
  ],
};

let sampleStatBlock4 = {
  title: "New Users",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissevarius enim in eros.",
  buttons: [
    {
      name: "button",
      variant: "ghost",
      size: "default",
      href: "#",
    },
    {
      name: "button",
      variant: "default",
      size: "default",
      href: "#",
    },
  ],
  floatingBoxMenu: [
    {
      name: "Option one",
      href: "#",
    },
    {
      name: "Option two",
      href: "#",
    },
    {
      name: " Option three",
      href: "#",
    },
  ],
  cards: [
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      link: {
        href: "",
        name: "View report",
      },
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      link: {
        href: "",
        name: "View report",
      },
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      link: {
        href: "",
        name: "View report",
      },
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      link: {
        href: "",
        name: "View report",
      },
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      link: {
        href: "",
        name: "View report",
      },
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      link: {
        href: "",
        name: "View report",
      },
    },
  ],
};

let sampleStatBlock5 = {
  title: "New Users",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissevarius enim in eros.",
  buttons: [
    {
      name: "button",
      variant: "ghost",
      size: "default",
      href: "#",
    },
    {
      name: "button",
      variant: "default",
      size: "default",
      href: "#",
    },
  ],
  floatingBoxMenu: [
    {
      name: "Option one",
      href: "#",
    },
    {
      name: "Option two",
      href: "#",
    },
    {
      name: " Option three",
      href: "#",
    },
  ],
  cards: [
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
    },
  ],
};

let sampleStatBlock6 = {
  title: "New Users",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissevarius enim in eros.",
  buttons: [
    {
      name: "button",
      variant: "ghost",
      size: "default",
      href: "#",
    },
    {
      name: "button",
      variant: "default",
      size: "default",
      href: "#",
    },
  ],
  floatingBoxMenu: [
    {
      name: "Option one",
      href: "#",
    },
    {
      name: "Option two",
      href: "#",
    },
    {
      name: " Option three",
      href: "#",
    },
  ],
  cards: [
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
  ],
};

let sampleStatBlock7 = {
  title: "New Users",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissevarius enim in eros.",
  buttons: [
    {
      name: "button",
      variant: "ghost",
      size: "default",
      href: "#",
    },
    {
      name: "button",
      variant: "default",
      size: "default",
      href: "#",
    },
  ],
  floatingBoxMenu: [
    {
      name: "Option one",
      href: "#",
    },
    {
      name: "Option two",
      href: "#",
    },
    {
      name: " Option three",
      href: "#",
    },
  ],
  cards: [
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      periode: "vs last month",
    },
  ],
};

let sampleStatBlock8 = {
  title: "New Users",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissevarius enim in eros.",
  buttons: [
    {
      name: "button",
      variant: "ghost",
      size: "default",
      href: "#",
    },
    {
      name: "button",
      variant: "default",
      size: "default",
      href: "#",
    },
  ],
  floatingBoxMenu: [
    {
      name: "Option one",
      href: "#",
    },
    {
      name: "Option two",
      href: "#",
    },
    {
      name: " Option three",
      href: "#",
    },
  ],
  cards: [
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      link: {
        href: "",
        name: "View report",
      },
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      link: {
        href: "",
        name: "View report",
      },
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      link: {
        href: "",
        name: "View report",
      },
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      link: {
        href: "",
        name: "View report",
      },
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      link: {
        href: "",
        name: "View report",
      },
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      link: {
        href: "",
        name: "View report",
      },
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },

      floatingBox: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: " Option three",
          href: "#",
        },
      ],
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      link: {
        href: "",
        name: "View report",
      },
    },
    {
      imageBox: {
        src: "https://assets-global.website-files.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg",
        alt: "",
      },
      text: "Lorem ipsum",
      price: "90.000",
      pourcentage: "100%",
      link: {
        href: "",
        name: "View report",
      },
    },
  ],
};

export default function Sample() {
  return (
    <div className="mt-10 mb-10">
      <h1 className="text-2xl">Stat Block Presentation</h1>
      <div className="mt-20 mb-20">
        <h1>Stat 1</h1>
        <BlockComponent1 {...sampleStatBlock1}></BlockComponent1>
      </div>
      <div className="mt-20 mb-20">
        <h1>Stat 2</h1>
        <BlockComponent2 {...sampleStatBlock2}></BlockComponent2>
      </div>
      <div className="mt-20 mb-20">
        <h1>Stat 3</h1>
        <BlockComponent3 {...sampleStatBlock3}></BlockComponent3>
      </div>
      <div className="mt-20 mb-20">
        <h1>Stat 4</h1>
        <BlockComponent4 {...sampleStatBlock4}></BlockComponent4>
      </div>
      <div className="mt-20 mb-20">
        <h1>Stat 5</h1>
        <BlockComponent5 {...sampleStatBlock5}></BlockComponent5>
      </div>
      <div className="mt-20 mb-20">
        <h1>Stat 6</h1>
        <BlockComponent6 {...sampleStatBlock6}></BlockComponent6>
      </div>
      <div className="mt-20 mb-20">
        <h1>Stat 7</h1>
        <BlockComponent7 {...sampleStatBlock7}></BlockComponent7>
      </div>
      <div className="mt-20 mb-20">
        <h1>Stat 8</h1>
        <BlockComponent8 {...sampleStatBlock8}></BlockComponent8>
      </div>
    </div>
  );
}
