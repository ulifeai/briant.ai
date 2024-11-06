import React from "react";
import Navbar1 from "./1/component";
import Navbar2 from "./2/component";
import Navbar3 from "./3/component";
import Navbar4 from "./4/component";
import Navbar5 from "./5/component";
import Navbar6 from "./6/component";

const sampleNavbar1 = {
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo image",
  },
  navItems: [
    { title: "Link One", url: "#" },
    { title: "Link Two", url: "#" },
    { title: "Link Three", url: "#" },
    {
      title: "Link Four",
      url: "#",
      subMenuItems: [
        { title: "Link Five", url: "#" },
        { title: "Link Six", url: "#" },
        { title: "Link Seven", url: "#" },
      ],
    },
  ],
  buttons: [
    {
      title: "Button",
      variant: "secondary",
      size: "sm",
    },
    {
      title: "Button",
      variant: "secondary",
      size: "sm",
    },
  ],
};

function sample() {
  return (
    <div>
      {/* <Navbar1 {...sampleNavbar1}></Navbar1>
      <Navbar2 {...sampleNavbar1}></Navbar2> */}
      <Navbar3 {...sampleNavbar1}></Navbar3>
      <Navbar4 {...sampleNavbar1}></Navbar4>
      <Navbar5 {...sampleNavbar1}></Navbar5>
      <Navbar6 {...sampleNavbar1}></Navbar6>
    </div>
  );
}

export default sample;
