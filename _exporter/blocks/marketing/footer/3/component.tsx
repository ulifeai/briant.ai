import { Text } from "@/components/ui/base/text";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  SendHorizonal,
  Twitter,
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
  subscribePlaceholder,
  subscribeLabel,
  socialLinks,
  legalLinks,
  FooterLinkCols,
}: FooterProps) {
  return (
    <footer className="py-20 bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="pb-10 mb-10 border-b border-gray-700 items-center">
            <div className="flex flex-wrap -mx-4 items-center">
              <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                <a href="#" className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                  <img src={logo.src} alt={logo.alt} className="h-14" />
                </a>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="sm:flex -mb-4 items-center lg:justify-end">
                  <span className="inline-block text-white mb-4 mr-8">
                    {getStartedTitle}
                  </span>
                  <a
                    href="#"
                    className="relative group inline-block w-full sm:w-auto py-3 px-5 mb-4 text-center text-sm font-semibold text-orange-50 hover:text-orange-900 bg-orange-900 rounded-md overflow-hidden transition duration-300"
                  >
                    <div className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-105 transition duration-500"></div>
                    <span className="relative">{getStartedButtonText}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 mb-18">
            <div className="w-full lg:w-2/5 px-4 mb-12 lg:mb-0">
              <div className="lg:max-w-xs">
                <Text
                  as="h4"
                  className="font-heading text-2xl font-semibold text-gray-50 mb-4"
                >
                  {subscribeTitle || ""}
                </Text>
                <form action="">
                  <label
                    htmlFor=""
                    className="block mb-1.5 text-sm font-semibold text-white"
                  >
                    {subscribeLabel}
                  </label>
                  <div className="md:flex items-center">
                    <div className="relative mb-4 lg:mb-0 md:mr-4">
                      <span className="absolute left-0 top-1/2 ml-4 transform -translate-y-1/2">
                        <Mail />
                      </span>
                      <input
                        type="email"
                        placeholder={subscribePlaceholder}
                        className="w-full p-12 pr-4 py-4 text-sm text-gray-300 placeholder-gray-400 rounded-lg bg-gray-800 border border-gray-700 outline-none"
                      />
                    </div>
                    <button className="flex flex-shrink-0 ml-auto lg:ml-0 items-center justify-center w-12 h-12 text-orange-50 hover:text-orange-900 bg-orange-900 hover:bg-white rounded-full transition duration-200">
                      <SendHorizonal />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="w-full md:w-1/3 lg:w-1/5 px-4 mb-8 md:mb-0">
              <Text as="h5" className="text-lg font-semibold text-gray-50 mb-4">
                {FooterLinkCols ? FooterLinkCols[0]?.title : ""}
              </Text>
              <ul className="">
                {FooterLinkCols
                  ? FooterLinkCols[0]?.FooterLinks.map((FooterLink, index) => (
                      <li key={index} className="mb-4">
                        <a
                          href={FooterLink.href}
                          className="inline-block text-gray-300 hover:text-gray-200"
                        >
                          {FooterLink.title}
                        </a>
                      </li>
                    ))
                  : ""}
              </ul>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/5 px-4 mb-8 md:mb-0">
              <Text as="h5" className="text-lg font-semibold text-gray-50 mb-4">
                {FooterLinkCols ? FooterLinkCols[1]?.title : ""}
              </Text>
              <ul className="">
                {FooterLinkCols
                  ? FooterLinkCols[1]?.FooterLinks.map((FooterLink, index) => (
                      <li key={index} className="mb-4">
                        <a
                          href={FooterLink.href}
                          className="inline-block text-gray-300 hover:text-gray-200"
                        >
                          {FooterLink.title}
                        </a>
                      </li>
                    ))
                  : ""}
              </ul>
            </div>
            <div className="w-full sm:w-1/3 lg:w-1/5 px-4">
              <Text as="h5" className="text-lg font-semibold text-gray-50 mb-4">
                {FooterLinkCols ? FooterLinkCols[2]?.title : ""}
              </Text>
              <ul className="">
                {FooterLinkCols
                  ? FooterLinkCols[2]?.FooterLinks.map((FooterLink, index) => (
                      <li key={index} className="mb-4">
                        <a
                          href={FooterLink.href}
                          className="inline-block text-gray-300 hover:text-gray-200"
                        >
                          {FooterLink.title}
                        </a>
                      </li>
                    ))
                  : ""}
              </ul>
            </div>
          </div>
          <div className="sm:flex items-center justify-between">
            <div className="sm:flex mb-6 sm:mb-0 items-center">
              <a
                href={legalLinks[0].href}
                className="inline-block mr-6 sm:mr-12 text-gray-300 hover:text-gray-200"
              >
                {legalLinks[0].title}
              </a>
              <a
                href={legalLinks[1].href}
                className="inline-block text-gray-300 hover:text-gray-200"
              >
                {legalLinks[1].title}
              </a>
            </div>
            <div className="flex items-center">
              {socialLinks?.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="inline-block mr-9 p-1 hover:bg-gray-800 rounded-md text-white"
                >
                  {link.platform == "facebook" && (
                    <Facebook className="h-5 w-5" />
                  )}
                  {link.platform == "instagram" && (
                    <Instagram className="h-5 w-5" />
                  )}
                  {link.platform == "twitter" && (
                    <Twitter className="h-5 w-5" />
                  )}
                  {link.platform == "linkedin" && (
                    <Linkedin className="h-5 w-5" />
                  )}
                  {link.platform == "youtube" && (
                    <Youtube className="h-5 w-5" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
