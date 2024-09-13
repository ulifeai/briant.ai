type Props = {
    tag?: string;
    title?: string;
    description?: string;
    btnName1?: string;
    btnName2?: string;
    btnNameInput?: string;
    inputNamePlaceholder?: string;
    Version?: string;
    image?: string;
    btnType?: number;
    imageOverlay?: string;
    imageBgOverlay?: string;
    imageOverlayVideo?: string;
    colorText?: "white" | "black";
  };


export type WebPageConfig = [
    {
      type: string,
      data: Props & Record<string, any>
    }
  ]
  
// export interface WebPageConfig {

//     navbar: Props[] | Props & {
//       logo?: string;
//       menuItems?: string[];
//     };
//     header: Props[] | Props;
//     feature:  Props[] |(Props & {
//       title: string;
//       description: string;
//       image: string;
//     })[];
//     cta: Props[] | Props;
//     testimonial: Props[] | Props & {
//       testimonials: {
//         name: string;
//         feedback: string;
//         image: string;
//       }[];
//     };
//     pricing: Props[] | Props & {
//       plans: {
//         name: string;
//         price: string;
//         features: string[];
//       }[];
//     };
//     FAQSection: Props[] | Props & {
//       faqs: {
//         question: string;
//         answer: string;
//       }[];
//     };
//     footer: Props[] | Props & {
//       logo?: string;
//       menuItems?: string[];
//     };
//   }
  