import { Text } from "@/components/ui/base/text";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  SendHorizonal,
  Youtube,
} from "lucide-react";

interface FooterLink {
  title: string;
  href: string;
}

interface FooterLinkCol {
  title: string;
  FooterLinks: FooterLink[];
}

interface SocialLink {
  platform:
    | "facebook"
    | "instagram"
    | "twitter"
    | "linkedin"
    | "youtube"
    | string;
  href: string;
}

interface FooterProps {
  variant: "subscribe" | "centered" | "social" | string;
  logo: { src: string; alt: string };
  navLinks?: FooterLink[];
  getStartedTitle?: string;
  getStartedButtonText?: string;
  getStartedHref?: string;
  subscribeTitle?: string;
  subscribeText?: string;
  subscribeLabel?: string;
  subscribePlaceholder?: string;
  subscribeButtonText?: string;
  informationTitle?: string;
  informationLinks?: string[];
  subscribePrivacyText?: string;
  socialLinks?: SocialLink[];
  legalLinks: FooterLink[];
  copyrightText: string;
  FooterLinkCols?: FooterLinkCol[];
}

export default function Footer({
  logo,
  getStartedTitle,
  getStartedButtonText,
  subscribeTitle,
  subscribeText,
  subscribePlaceholder,
  subscribeButtonText,
  subscribeLabel,
  socialLinks,
  legalLinks,
  FooterLinkCols,
  getStartedHref,
  navLinks,
  copyrightText,
}: FooterProps) {
  return (
    <footer className="pt-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="pb-20 border-b">
          <div className="flex flex-wrap -m-8">
            <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
              <Text as="h3" className="mb-6 font-semibold leading-normal">
                {FooterLinkCols ? FooterLinkCols[0]?.title : ""}
              </Text>

              <ul>
                {FooterLinkCols
                  ? FooterLinkCols[0]?.FooterLinks.map((FooterLink, index) => (
                      <li key={index} className="mb-3.5">
                        <a
                          href={FooterLink.href}
                          className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                        >
                          {FooterLink.title}
                        </a>
                      </li>
                    ))
                  : ""}
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
              <Text as="h3" className="mb-6 font-semibold leading-normal">
                {FooterLinkCols ? FooterLinkCols[1]?.title : ""}
              </Text>
              <ul>
                {FooterLinkCols
                  ? FooterLinkCols[1]?.FooterLinks.map((FooterLink, index) => (
                      <li key={index} className="mb-3.5">
                        <a
                          href={FooterLink.href}
                          className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                        >
                          {FooterLink.title}
                        </a>
                      </li>
                    ))
                  : ""}
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
              <Text as="h3" className="mb-6 font-semibold leading-normal">
                {FooterLinkCols ? FooterLinkCols[2]?.title : ""}
              </Text>
              <ul>
                {FooterLinkCols
                  ? FooterLinkCols[2]?.FooterLinks.map((FooterLink, index) => (
                      <li key={index} className="mb-3.5">
                        <a
                          href={FooterLink.href}
                          className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                        >
                          {FooterLink.title}
                        </a>
                      </li>
                    ))
                  : ""}
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
              <Text as="h3" className="mb-6 font-semibold leading-normal">
                {FooterLinkCols ? FooterLinkCols[3]?.title : ""}
              </Text>
              <ul>
                {FooterLinkCols
                  ? FooterLinkCols[3]?.FooterLinks.map((FooterLink, index) => (
                      <li key={index} className="mb-3.5">
                        <a
                          href={FooterLink.href}
                          className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                        >
                          {FooterLink.title}
                        </a>
                      </li>
                    ))
                  : ""}
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-4/12 p-8">
              <div className="lg:max-w-sm">
                <Text as="h3" className="mb-6 font-semibold leading-normal">
                  {subscribeTitle || ""}
                </Text>
                <Text
                  as="p"
                  className="mb-5 font-sans text-gray-600 leading-relaxed"
                >
                  {subscribeText || ""}
                </Text>
                <div className="mb-3 xl:pl-6 inline-block md:max-w-xl w-full overflow-hidden border border-gray-300 rounded-xl focus-within:ring focus-within:ring-indigo-300">
                  <div className="flex flex-wrap items-center">
                    <div className="w-full xl:flex-1">
                      <input
                        type="text"
                        placeholder={subscribePlaceholder}
                        className="p-3 lg:p-0 lg:pr-6 w-full font-medium text-gray-500 placeholder-gray-500 outline-none"
                      />
                    </div>
                    <div className="w-full xl:w-auto">
                      <button className="py-4 px-8 w-full text-white font-semibold border border-indigo-700 focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200">
                        {subscribeButtonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center py-6 -m-4">
          <div className="w-auto p-4">
            <a href="#">
              <img src={logo.src} alt={logo.alt} className="h-14" />
            </a>
          </div>
          <div className="w-auto p-4">
            <div className="text-sm text-gray-600 font-medium">
              {copyrightText}
            </div>
          </div>
          <div className="w-auto p-4">
            <div className="flex flex-wrap -m-4">
              <div className="w-auto p-4">
                <a
                  href=""
                  className="text-blueGray-400 hover:text-blueGray-500"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
              <div className="w-auto p-4">
                <a
                  href=""
                  className="text-blueGray-400 hover:text-blueGray-500"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              <div className="w-auto p-4">
                <a
                  href=""
                  className="text-blueGray-400 hover:text-blueGray-500"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
              <div className="w-auto p-4">
                <a
                  href=""
                  className="text-blueGray-400 hover:text-blueGray-500"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
