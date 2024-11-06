import React from "react";
import Footer1 from "./1/component";
import Footer2 from "./2/component";
import Footer3 from "./3/component";
import Footer4 from "./4/component";
import Footer5 from "./5/component";

const sampleFooter = {
  variant: "",
  logo: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Logo",
  },
  getStartedTitle: "Ready to get started ?",
  getStartedButtonText: "Get Started",
  subscribeTitle: "Subscribe to our newsletter",
  subscribeLabel: "Subscribe to our newsletter",

  subscribePlaceholder: "pat@shuffle.dev",
  subscribeText:
    "If there are questions you want to ask, we will answer all your question",
  subscribeButtonText: "Subscribe",
  informationTitle:
    "Maybe your question is have been answered, check this out.",
  informationLinks: [
    "What is Coca Soft",
    "How can I get service from Coca Soft",
    "What kind of service will I getWhat kind of service will I get",
  ],
  copyrightText: "© All Rights Reserved",
  legalLinks: [
    {
      label: "Privacy Policy",
      href: "#",
    },
    {
      label: "Terms & Conditions",
      href: "#",
    },
    {
      label: "Support",
      href: "#",
    },
  ],
  socialLinks: [
    {
      platform: "facebook",
      href: "#",
    },
    {
      platform: "instagram",
      href: "#",
    },
    {
      platform: "youtube",
      href: "#",
    },
    {
      platform: "linkedin",
      href: "#",
    },
  ],
  FooterLinkCols: [
    {
      title: "Services",
      FooterLinks: [
        {
          label: "Email Marketing",
          href: "#",
        },
        {
          label: "Campaigns",
          href: "#",
        },
        {
          label: "Branding",
          href: "#",
        },
        {
          label: "Offline",
          href: "#",
        },
      ],
    },
    {
      title: "Services",
      FooterLinks: [
        {
          label: "Our Story",
          href: "#",
        },
        {
          label: "Benefits",
          href: "#",
        },
        {
          label: "Team",
          href: "#",
        },
        {
          label: "Careers",
          href: "#",
        },
      ],
    },
    {
      title: "Services",
      FooterLinks: [
        {
          label: "FAQs",
          href: "#",
        },
        {
          label: "Contact Us",
          href: "#",
        },
      ],
    },
  ],
  navLinks: [
    {
      title: "Features",
      href: "#",
    },
    {
      title: "Pricing",
      href: "#",
    },
    {
      title: "Resources",
      href: "#",
    },
    {
      title: "Careers",
      href: "#",
    },
    {
      title: "Help",
      href: "#",
    },
    {
      title: "Privacy",
      href: "#",
    },
  ],
};

function sample() {
  return <Footer4 {...sampleFooter}></Footer4>;
}

export default sample;
