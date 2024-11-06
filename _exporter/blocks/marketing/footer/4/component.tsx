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
  getStartedHref,
  navLinks,
  copyrightText,
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
                    {subscribeTitle}
                  </span>
                  <a
                    href={getStartedHref}
                    className="relative group inline-block w-full sm:w-auto py-3 px-5 mb-4 text-center text-sm font-semibold text-orange-50 hover:text-orange-900 bg-orange-900 rounded-md overflow-hidden transition duration-300"
                  >
                    <div className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-105 transition duration-500"></div>
                    <span className="relative">{getStartedButtonText}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mb-5 lg:-mx-6 items-center justify-center">
            {navLinks?.map((navLink, index) => (
              <div key={index} className="px-6 mb-5">
                <a
                  href={navLink.href}
                  className="inline-block text-gray-300 hover:text-gray-200"
                >
                  {navLink.title}
                </a>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <span className="text-gray-500">{copyrightText}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
