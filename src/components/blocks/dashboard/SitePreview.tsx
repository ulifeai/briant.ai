"use client";

import axios from 'axios';
import { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';

const dataSample = [
  {
    title: 'Header navigations',
    description: 'Provides links to different sections of the landing page and other important pages like About, Contact, and Pricing.'
  },
  {
    title: 'Header sections',
    description: 'Introduces the AI app creation service with a compelling headline and subheadline, along with a brief description of the service.'
  },
  {
    title: 'Features sections',
    description: 'Highlights the key features of the AI app creation service, explaining how it can benefit agencies.'
  },
  {
    title: 'CTA sections',
    description: 'Encourages visitors to take a specific action, such as signing up for a demo or starting a free trial.'
  },
  {
    title: 'Metrics sections',
    description: 'Displays important metrics and statistics that demonstrate the effectiveness and reliability of the AI app creation service.'
  },
  {
    title: 'Testimonial sections',
    description: 'Showcases positive feedback and reviews from agencies that have successfully used the AI app creation service.'
  },
  {
    title: 'Social proof sections',
    description: 'Includes logos or names of well-known agencies or companies that use the AI app creation service to build credibility.'
  },
  {
    title: 'FAQ sections',
    description: 'Provides answers to common questions that potential customers might have about the AI app creation service.'
  },
  {
    title: 'Footers',
    description: 'Contains additional navigation links, contact information, social media links, and other relevant details.'
  }
]

// let dataContent = {
//   "0": {
//       "component": "Headernavigations",
//       "texts": [
//           "<a href=\"#\" title=\"\">Our Services</a>",
//           "<a href=\"#\" title=\"\">How It Works</a>",
//           "<a href=\"#\" title=\"\">Pricing</a>",
//           "<a href=\"#\" title=\"\">Support</a>",
//           "<a href=\"#\" title=\"\" role=\"button\">Start Your Free Trial</a>"
//       ]
//   },
//   "1": {
//       "component": "Headersections",
//       "texts": [
//           "<h1>Welcome to Your Premier Healthcare Recruitment Solution</h1>",
//           "<p>Empowering healthcare providers with top-tier carers and nurses, ensuring seamless shift management and efficient invoicing.</p>",
//           "<a href=\"#\" title=\"\" role=\"button\">Get Started with Us</a>"
//       ]
//   },
//   "2": {
//       "component": "Featuressections",
//       "texts": [
//           "<p>Real-time Shift Management</p>",
//           "<h2>Optimize Your Workforce with Comprehensive Reporting.</h2>",
//           "<a href=\"#\" title=\"\" role=\"button\">Explore Our Features</a>",
//           "<p>“This platform has revolutionized our staffing process, making it easier to manage shifts and track performance.”</p>",
//           "<p>Grandon Jones</p>"
//       ]
//   },
//   "3": {
//       "component": "CTAsections",
//       "texts": [
//           "<h2>Ready to Transform Your Recruitment Process?</h2>",
//           "<p>Join countless healthcare providers who trust us for efficient shift management and reliable staffing solutions.</p>",
//           "<a href=\"#\" title=\"\" role=\"button\">Download Our App</a>"
//       ]
//   },
//   "4": {
//       "component": "Metricssections",
//       "texts": [
//           "<h2>Our Impact</h2>",
//           "<p>We provide the tools you need to streamline your recruitment and shift management processes.</p>",
//           "<p>483</p>",
//           "<h3>Happy Clients Worldwide</h3>",
//           "<p>78%</p>",
//           "<h3>Increase in Efficiency</h3>",
//           "<p>854</p>",
//           "<h3>Successful Placements</h3>",
//           "<p>315</p>",
//           "<h3>Awards for Excellence</h3>"
//       ]
//   },
//   "5": {
//       "component": "Testimonialsections",
//       "texts": [
//           "<p>Albert Flores</p>",
//           "<p>Product Manager at Jomanar</p>",
//           "<p>“Our performance conversations have become actionable and impactful.”</p>",
//           "<p>“With this platform, our design team can now create solutions that align with our employees' career goals, enhancing overall satisfaction.”</p>",
//           "<a href=\"#\" title=\"\">Read Our Success Story</a>"
//       ]
//   },
//   "6": {
//       "component": "Socialproofsections",
//       "texts": [
//           "<p>Join over 200+ healthcare providers already benefiting from our services</p>"
//       ]
//   },
//   "7": {
//       "component": "Content&richtextsections",
//       "texts": [
//           "<h1>Content & Rich Text Sections</h1>",
//           "<p>Explore the comprehensive features of our platform designed to meet your recruitment needs.</p>"
//       ]
//   },
//   "8": {
//       "component": "Contactsections",
//       "texts": [
//           "<h2>We'd Love to Hear from You, Get in Touch 👋</h2>",
//           "<p>Our platform offers the tools you need for professional and efficient healthcare recruitment and shift management.</p>",
//           "<p>\"We love this platform! Our team uses it extensively for their projects, and it perfectly matches our design needs.\"</p>",
//           "<p>Devon Lane</p>",
//           "<p>Co-Founder, Design.co</p>",
//           "<h3>Send Us a Message</h3>",
//           "<label for=\"fullName\">Your Name</label>",
//           "<label for=\"email\">Email Address</label>",
//           "<label for=\"phone\">Phone</label>",
//           "<label for=\"message\">Write Your Message</label>",
//           "<button type=\"submit\">Send Message</button>"
//       ]
//   },
//   "9": {
//       "component": "FAQsections",
//       "texts": [
//           "<h2>Frequently Asked Questions</h2>",
//           "<p>Find answers to all your questions about our services and platform.</p>",
//           "<span>How is this platform different from others in the market?</span>",
//           "<span>Does this platform support plugins?</span>",
//           "<span>Do you provide any money-back guarantee on this product?</span>",
//           "<span>What payment methods do you support?</span>",
//           "<span>Will I get my money back if I am not satisfied?</span>",
//           "<span>How do you provide support?</span>",
//           "<h3>Still Have Questions?</h3>",
//           "<p>Can't find the answer you're looking for? Please chat with our friendly team.</p>",
//           "<a href=\"#\" title=\"\" role=\"button\">Start Your Free Trial</a>"
//       ]
//   },
//   "10": {
//       "component": "Footers",
//       "texts": [
//           "<h2>Subscribe to Our Newsletter</h2>",
//           "<label for=\"\">First Name</label>",
//           "<label for=\"\">Email Address</label>",
//           "<button type=\"submit\">Subscribe Now</button>",
//           "<p>Stay updated with the latest in healthcare recruitment and shift management.</p>",
//           "<p>Company</p>",
//           "<a href=\"#\" title=\"\">About Us</a>",
//           "<a href=\"#\" title=\"\">Features</a>",
//           "<a href=\"#\" title=\"\">Our Work</a>",
//           "<a href=\"#\" title=\"\">Careers</a>",
//           "<p>Help</p>",
//           "<a href=\"#\" title=\"\">Customer Support</a>",
//           "<a href=\"#\" title=\"\">Delivery Details</a>",
//           "<a href=\"#\" title=\"\">Terms & Conditions</a>",
//           "<a href=\"#\" title=\"\">Privacy Policy</a>",
//           "<p>Resources</p>",
//           "<a href=\"#\" title=\"\">Free eBooks</a>",
//           "<a href=\"#\" title=\"\">Development Tutorials</a>",
//           "<a href=\"#\" title=\"\">How-to Blog</a>",
//           "<a href=\"#\" title=\"\">YouTube Playlist</a>",
//           "<p>© Copyright 2022, All Rights Reserved by ClarityUI</p>"
//       ]
//   }
// }


type LayoutSectionsType = {
  title: string;
  description: string;
} 

export default function SitePreview() {

  const [data, setData] = useState<LayoutSectionsType[]>(dataSample)
  const [htmlContents, setHtmlContents] = useState<string[]>([]);
  const [dataContent, setDataContent] = useState<{component: string, texts: string[]}[]>([])
  const [components, setComponents] = useState<any[]>([])

  useEffect(()=>{ 
    let layoutData = JSON.parse(localStorage.getItem("layout")??"[]")
    if(layoutData.length != 0)
      setData(layoutData)
  }, [])

  function extractTextFromHTML(htmlString: string) {
    // Create a temporary DOM element to parse the HTML
    var tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;

    // Get the text content
    var textContent = tempDiv.textContent || tempDiv.innerText || "";

    return textContent;
  }

  const extract_key_texts = (htmlString: string) => {
      // Create a new DOM parser
    const parser = new DOMParser();
    
    // Parse the HTML string into a document
    const doc = parser.parseFromString(htmlString, 'text/html');
    
    // Get all elements with text content
    const elementsWithText: string[] = [];
    const allElements = doc.body.querySelectorAll('*');
    
    allElements.forEach((element: any) => {
        // Check if the element has direct text content
        const textContent = element.childNodes[0] && element.childNodes[0].nodeType === Node.TEXT_NODE
                            ? element.textContent.trim()
                            : '';

        if (textContent) {
            // Keep the outerHTML but replace child nodes with only the text content
            const tempElement = element.cloneNode(true);
            tempElement.removeAttribute('class');

            tempElement.innerHTML = textContent;
            elementsWithText.push(tempElement.outerHTML);
        }
    });
    
    return elementsWithText;
  
  }


  useEffect(() => {
    const loadComponentsAndGenerateHTML = async () => {
      let app_description = localStorage.getItem("app_description")??""
      const loadedHTML = await Promise.all(
        data.map(async (item) => {
          const moduleVal = await import(`../../../blocks/${item.title}/default/Component`);
          const Component = moduleVal.default;
          // Render the component to static HTML
          let htmlContent = ReactDOMServer.renderToStaticMarkup(<Component />);
          return {
            component: item.title.replaceAll(" ", ""),
            texts : extract_key_texts(htmlContent)
          }

        })
      );

      if(loadedHTML.length != 0){
        // const response = await axios.post("/api/ai/generate_copy", {
        //     context_data: app_description,
        //     html_content: loadedHTML
        // });

        // setDataContent(response.data)

      }
     
    };

    loadComponentsAndGenerateHTML();
  }, [data]);

  useEffect(()=>{

    const dataApp: any = {};
    if(true) {
      Object.values(dataContent).forEach((val)=>{
        dataApp[val.component] = val.texts;
      });
    
      const loadComponentsAndGenerateHTML = async () => {
        const loadedHTML = await Promise.all(
          data.map(async (item) => {
            const moduleVal = await import(`../../../blocks/${item.title}/default/Component`);
            const Component = moduleVal.default;
            let htmlContent = ReactDOMServer.renderToStaticMarkup(<Component />);
            let old_text = extract_key_texts(htmlContent)
            let new_texts = dataApp[item.title.replaceAll(" ", "")];
            // old_text.forEach((text, index)=>{
            //   htmlContent = htmlContent.replaceAll(extractTextFromHTML(text), extractTextFromHTML(new_texts[index]))
            // })
            return Component;
          })
        );     
        setHtmlContents(loadedHTML);
      };
  
      loadComponentsAndGenerateHTML();
    }
    
  }, [data, dataContent])


  return (
    <div className=''>
      {htmlContents.map((Component, index) => (
        <Component key={index} />
        // <div key={index} dangerouslySetInnerHTML={{ __html: htmlContent }} />
      ))}
    </div>
  );

}
