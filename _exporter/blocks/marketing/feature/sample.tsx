import React from "react";
import FeatureBlock1 from "./7/component";
import FeatureBlock2 from "./8/component";
import FeatureBlock3 from "./9/component";
import FeatureBlock4 from "./10/component";
import FeatureBlock5 from "./11/component";

const sampleFeature = {
  tag: "tag",
  title: "The difference is clear.",
  description:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",

  buttons: [
    {
      title: "",
      variant: "",
      size: "",
    },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "",
  },
  form: {
    description: "",
    placeholder: "",
  },
  subheadings: [
    {
      title: "Unlimited Meetings",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      title: "Hybrid Collaboration",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      title: "Hybrid Collaboration",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
  ],
  cardImages: [
    {
      link: "#",
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "",
      description: "A complete toolkit for your business",
      title: "Unlimited Team Members",
    },
    {
      link: "#",
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "",
      description: "Build any website in minutes",
      title: "Get Exact Reports",
    },
    {
      link: "#",
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "",
      description: "Stay happy with results",
      title: "Unlimited Team Members",
    },
  ],
};

function sample() {
  return (
    <div>
      <FeatureBlock1 {...sampleFeature}></FeatureBlock1>
      <FeatureBlock2 {...sampleFeature}></FeatureBlock2>
      <FeatureBlock3 {...sampleFeature}></FeatureBlock3>
      <FeatureBlock4 {...sampleFeature}></FeatureBlock4>
      <FeatureBlock5 {...sampleFeature}></FeatureBlock5>
    </div>
  );
}

export default sample;
