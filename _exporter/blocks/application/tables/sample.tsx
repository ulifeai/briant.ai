"use client";
import React from "react";
import BlockComponent1 from "./1/component";
import BlockComponent2 from "./2/component";
import BlockComponent3 from "./3/component";
import BlockComponent4 from "./4/component";
import BlockComponent5 from "./5/component";
import BlockComponent6 from "./6/component";

let sampleTableBlock123 = {
  title: "Table Header",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  buttons: [
    {
      name: "button",
      variant: "ghost",
      size: "",
      href: "#",
    },
    {
      name: "button",
      variant: "",
      size: "",
      href: "#",
    },
  ],
  firstColHeader: {
    name: "Name",
    href: "#",
  },
  secondColHeader: {
    name: "Company",
    href: "#",
  },
  thirdColHeader: {
    name: "Number",
    href: "#",
  },
  fourthColHeader: {
    name: "Team",
    href: "#",
  },
  fifthColHeader: {
    name: "Date",
    href: "#",
  },
  bodyRowContent: [
    {
      firstCol: "Full name",
      secondCol: "Company name",
      thirdCol: "14",
      fourthCol: "Team name",
      fifthCol: "Jan 11, 2050",
      linkCol: {
        name: "View",
        href: "#",
      },
    },
    {
      firstCol: "Full name",
      secondCol: "Company name",
      thirdCol: "14",
      fourthCol: "Team name",
      fifthCol: "Jan 11, 2050",
      linkCol: {
        name: "View",
        href: "#",
      },
    },
    {
      firstCol: "Full name",
      secondCol: "Company name",
      thirdCol: "14",
      fourthCol: "Team name",
      fifthCol: "Jan 11, 2050",
      linkCol: {
        name: "View",
        href: "#",
      },
    },
    {
      firstCol: "Full name",
      secondCol: "Company name",
      thirdCol: "14",
      fourthCol: "Team name",
      fifthCol: "Jan 11, 2050",
      linkCol: {
        name: "View",
        href: "#",
      },
    },
    {
      firstCol: "Full name",
      secondCol: "Company name",
      thirdCol: "14",
      fourthCol: "Team name",
      fifthCol: "Jan 11, 2050",
      linkCol: {
        name: "View",
        href: "#",
      },
    },
  ],
  buttonNextFooter: {
    name: "Next",
    variant: "ghost",
    size: "",
    href: "#",
  },
  buttonPrevFooter: {
    name: "Prev",
    variant: "ghost",
    size: "",
    href: "#",
  },
  linkPageFooter: [
    {
      numero: "1",
      href: "#",
    },
    {
      numero: "2",
      href: "#",
    },
    {
      numero: "3",
      href: "#",
    },
    {
      numero: "4",
      href: "#",
    },
    {
      numero: "5",
      href: "#",
    },
  ],
};

let sampleTableBlock4 = {
  title: "Table Header",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  buttons: [
    {
      name: "button",
      variant: "ghost",
      size: "",
      href: "#",
    },
    {
      name: "button",
      variant: "",
      size: "",
      href: "#",
    },
  ],
  firstColHeader: {
    name: "Name",
    href: "#",
  },
  secondColHeader: {
    name: "Company",
    href: "#",
  },
  thirdColHeader: {
    name: "Number",
    href: "#",
  },
  fourthColHeader: {
    name: "Team",
    href: "#",
  },
  fifthColHeader: {
    name: "Date",
    href: "#",
  },
  groupRow: [
    {
      name: "Group name",
      bodyRowContent: [
        {
          firstCol: "Full name",
          secondCol: "Company name",
          thirdCol: "14",
          fourthCol: "Team name",
          fifthCol: "Jan 11, 2050",
          linkCol: {
            name: "View",
            href: "#",
          },
        },
        {
          firstCol: "Full name",
          secondCol: "Company name",
          thirdCol: "14",
          fourthCol: "Team name",
          fifthCol: "Jan 11, 2050",
          linkCol: {
            name: "View",
            href: "#",
          },
        },
        {
          firstCol: "Full name",
          secondCol: "Company name",
          thirdCol: "14",
          fourthCol: "Team name",
          fifthCol: "Jan 11, 2050",
          linkCol: {
            name: "View",
            href: "#",
          },
        },
        {
          firstCol: "Full name",
          secondCol: "Company name",
          thirdCol: "14",
          fourthCol: "Team name",
          fifthCol: "Jan 11, 2050",
          linkCol: {
            name: "View",
            href: "#",
          },
        },
        {
          firstCol: "Full name",
          secondCol: "Company name",
          thirdCol: "14",
          fourthCol: "Team name",
          fifthCol: "Jan 11, 2050",
          linkCol: {
            name: "View",
            href: "#",
          },
        },
      ],
    },
    {
      name: "Group name",
      bodyRowContent: [
        {
          firstCol: "Full name",
          secondCol: "Company name",
          thirdCol: "14",
          fourthCol: "Team name",
          fifthCol: "Jan 11, 2050",
          linkCol: {
            name: "View",
            href: "#",
          },
        },
        {
          firstCol: "Full name",
          secondCol: "Company name",
          thirdCol: "14",
          fourthCol: "Team name",
          fifthCol: "Jan 11, 2050",
          linkCol: {
            name: "View",
            href: "#",
          },
        },
        {
          firstCol: "Full name",
          secondCol: "Company name",
          thirdCol: "14",
          fourthCol: "Team name",
          fifthCol: "Jan 11, 2050",
          linkCol: {
            name: "View",
            href: "#",
          },
        },
        {
          firstCol: "Full name",
          secondCol: "Company name",
          thirdCol: "14",
          fourthCol: "Team name",
          fifthCol: "Jan 11, 2050",
          linkCol: {
            name: "View",
            href: "#",
          },
        },
        {
          firstCol: "Full name",
          secondCol: "Company name",
          thirdCol: "14",
          fourthCol: "Team name",
          fifthCol: "Jan 11, 2050",
          linkCol: {
            name: "View",
            href: "#",
          },
        },
      ],
    },
  ],
};

let sampleTableBlock5 = {
  title: "Table Header",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  buttons: [
    {
      name: "button",
      variant: "ghost",
      size: "",
      href: "#",
    },
    {
      name: "button",
      variant: "",
      size: "",
      href: "#",
    },
  ],
  firstColHeader: {
    name: "Name",
    href: "#",
  },
  secondColHeader: {
    name: "Company",
    href: "#",
  },
  thirdColHeader: {
    name: "Products",
    href: "#",
  },
  fourthColHeader: {
    name: "Team",
    href: "#",
  },
  fifthColHeader: {
    name: "Date",
    href: "#",
  },
  bodyRowContent: [
    {
      firstCol: {
        srcProfil:
          "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
        altProfil: "image profil",
        nameProfil: "Full name",
        hrefProfil: "#",
        nameLinkProfil: " name@relume.io",
      },
      secondCol: "Company name",
      thirdCol: [
        {
          srcMemberTeam:
            "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
          altMemberTeam: "image member team",
        },
        {
          srcMemberTeam:
            "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
          altMemberTeam: "image member team",
        },
        {
          srcMemberTeam:
            "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
          altMemberTeam: "image member team",
        },
        {
          srcMemberTeam:
            "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
          altMemberTeam: "image member team",
        },
      ],
      fourthCol: "Team name",
      fifthCol: "1/11/2050",
      linkCol: {
        name: "View",
        href: "#",
      },
    },
    {
      firstCol: {
        srcProfil:
          "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
        altProfil: "image profil",
        nameProfil: "Full name",
        hrefProfil: "#",
        nameLinkProfil: " name@relume.io",
      },
      secondCol: "Company name",
      thirdCol: [
        {
          srcMemberTeam:
            "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
          altMemberTeam: "image member team",
        },
        {
          srcMemberTeam:
            "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
          altMemberTeam: "image member team",
        },
        {
          srcMemberTeam:
            "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
          altMemberTeam: "image member team",
        },
        {
          srcMemberTeam:
            "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
          altMemberTeam: "image member team",
        },
      ],
      fourthCol: "Team name",
      fifthCol: "1/11/2050",
      linkCol: {
        name: "View",
        href: "#",
      },
    },
    {
      firstCol: {
        srcProfil:
          "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
        altProfil: "image profil",
        nameProfil: "Full name",
        hrefProfil: "#",
        nameLinkProfil: " name@relume.io",
      },
      secondCol: "Company name",
      thirdCol: [
        {
          srcMemberTeam:
            "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
          altMemberTeam: "image member team",
        },
        {
          srcMemberTeam:
            "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
          altMemberTeam: "image member team",
        },
        {
          srcMemberTeam:
            "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
          altMemberTeam: "image member team",
        },
        {
          srcMemberTeam:
            "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
          altMemberTeam: "image member team",
        },
      ],
      fourthCol: "Team name",
      fifthCol: "1/11/2050",
      linkCol: {
        name: "View",
        href: "#",
      },
    },
    {
      firstCol: {
        srcProfil:
          "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
        altProfil: "image profil",
        nameProfil: "Full name",
        hrefProfil: "#",
        nameLinkProfil: " name@relume.io",
      },
      secondCol: "Company name",
      thirdCol: [
        {
          srcMemberTeam:
            "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
          altMemberTeam: "image member team",
        },
        {
          srcMemberTeam:
            "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
          altMemberTeam: "image member team",
        },
        {
          srcMemberTeam:
            "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
          altMemberTeam: "image member team",
        },
        {
          srcMemberTeam:
            "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
          altMemberTeam: "image member team",
        },
      ],
      fourthCol: "Team name",
      fifthCol: "1/11/2050",
      linkCol: {
        name: "View",
        href: "#",
      },
    },
    {
      firstCol: {
        srcProfil:
          "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
        altProfil: "image profil",
        nameProfil: "Full name",
        hrefProfil: "#",
        nameLinkProfil: " name@relume.io",
      },
      secondCol: "Company name",
      thirdCol: [
        {
          srcMemberTeam:
            "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
          altMemberTeam: "image member team",
        },
        {
          srcMemberTeam:
            "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
          altMemberTeam: "image member team",
        },
        {
          srcMemberTeam:
            "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
          altMemberTeam: "image member team",
        },
        {
          srcMemberTeam:
            "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
          altMemberTeam: "image member team",
        },
      ],
      fourthCol: "Team name",
      fifthCol: "1/11/2050",
      linkCol: {
        name: "View",
        href: "#",
      },
    },
    {
      firstCol: {
        srcProfil:
          "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
        altProfil: "image profil",
        nameProfil: "Full name",
        hrefProfil: "#",
        nameLinkProfil: " name@relume.io",
      },
      secondCol: "Company name",
      thirdCol: [
        {
          srcMemberTeam:
            "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
          altMemberTeam: "image member team",
        },
        {
          srcMemberTeam:
            "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
          altMemberTeam: "image member team",
        },
        {
          srcMemberTeam:
            "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
          altMemberTeam: "image member team",
        },
        {
          srcMemberTeam:
            "https://assets.website-files.com/624380709031623bfe4aee60/631035b9698714c1fee46997_Placeholder%20Small%20Image.svg",
          altMemberTeam: "image member team",
        },
      ],
      fourthCol: "Team name",
      fifthCol: "1/11/2050",
      linkCol: {
        name: "View",
        href: "#",
      },
    },
  ],
  buttonNextFooter: {
    name: "Next",
    variant: "ghost",
    size: "",
    href: "#",
  },
  buttonPrevFooter: {
    name: "Prev",
    variant: "ghost",
    size: "",
    href: "#",
  },
  linkPageFooter: [
    {
      numero: "1",
      href: "#",
    },
    {
      numero: "2",
      href: "#",
    },
    {
      numero: "3",
      href: "#",
    },
    {
      numero: "4",
      href: "#",
    },
    {
      numero: "5",
      href: "#",
    },
  ],
};

let sampleTableBlock6 = {
  title: "Table Header",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  buttons: [
    {
      name: "button",
      variant: "ghost",
      size: "",
      href: "#",
    },
    {
      name: "button",
      variant: "",
      size: "",
      href: "#",
    },
  ],
  firstColHeader: {
    name: "Transaction ID",
    href: "#",
  },
  secondColHeader: {
    name: "Company",
    href: "#",
  },
  thirdColHeader: {
    name: "Date",
    href: "#",
  },
  fourthColHeader: {
    name: "Price",
    href: "#",
  },
  fifthColHeader: {
    name: "Quantity",
    href: "#",
  },
  sixthColHeader: {
    name: "Status",
    href: "#",
  },
  bodyRowContent: [
    {
      firstCol: "123456",
      secondCol: "Company name",
      thirdCol: "1/11/2050",
      fourthCol: "$55.00",
      fifthCol: "14",
      sixthCol: "Complete",
      menuCol: [
        {
          name: "Option one",
          href: "#",
        },
        {
          name: "Option two",
          href: "#",
        },
        {
          name: "Option Three",
          href: "#",
        },
      ],
    },
  ],
  buttonNextFooter: {
    name: "Next",
    variant: "ghost",
    size: "",
    href: "#",
  },
  buttonPrevFooter: {
    name: "Prev",
    variant: "ghost",
    size: "",
    href: "#",
  },
  linkPageFooter: [
    {
      numero: "1",
      href: "#",
    },
    {
      numero: "2",
      href: "#",
    },
    {
      numero: "3",
      href: "#",
    },
    {
      numero: "4",
      href: "#",
    },
    {
      numero: "5",
      href: "#",
    },
  ],
};

export default function Sample() {
  return (
    <div className="mt-10 mb-10">
      <h1 className="text-2xl">Table Block Presentation</h1>
      <div className="mt-20 mb-20">
        <h1>Table 1</h1>
        <BlockComponent1 {...sampleTableBlock123}></BlockComponent1>
      </div>
      <div className="mt-20 mb-20">
        <h1>Table 2</h1>
        <BlockComponent2 {...sampleTableBlock123}></BlockComponent2>
      </div>
      <div className="mt-20 mb-20">
        <h1>Table 3</h1>
        <BlockComponent3 {...sampleTableBlock123}></BlockComponent3>
      </div>
      <div className="mt-20 mb-20">
        <h1>Table 4</h1>
        <BlockComponent4 {...sampleTableBlock4}></BlockComponent4>
      </div>
      <div className="mt-20 mb-20">
        <h1>Table 5</h1>
        <BlockComponent5 {...sampleTableBlock5}></BlockComponent5>
      </div>
      <div className="mt-20 mb-20">
        <h1>Table 6</h1>
        <BlockComponent6 {...sampleTableBlock6}></BlockComponent6>
      </div>
    </div>
  );
}
