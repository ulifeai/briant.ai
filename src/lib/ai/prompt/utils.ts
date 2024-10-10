export const generateComponentsOverview = () =>{
    // banners: A header banner for a simple anoucement if there is a need for it
    
    return `
    cta : A call to action section. 
    FAQSection : A FAQ section
    feature : A single feature sections. A page can contains multiple feature section for more explanation
    footer : The footer section
    navbar : the navigation section containing the website navigation
    header : A header section without the menu. It is the above the fold introducing the website
    logo : set of logo for social proof
    pricing : pricing section
    testimonial: testimonial section
    `
}


export const generateComponentsDocumentation = () => {
    return `
**Component Documentation for AI Application Development**

This guide provides an overview of React components used in web application development. It details component functionalities, props, and usage examples to assist in creating applications.

---

### FAQSection Component

Renders a Frequently Asked Questions (FAQ) section with various layouts based on the specified version.

**Props:**

- \`data\` (object)
  - \`version\` (number): Determines the layout and styling (versions 1-14).
  - \`title\` (string): The main title of the FAQ block.
  - \`description\` (string): A brief description or introduction text for the FAQ section.
  - \`cta_title\` (string): Call-to-action title, typically encouraging further engagement.
  - \`cta_description\` (string): Call-to-action description, providing more details on the CTA.
  - \`questions\` (array of objects): List of frequently asked questions.
    - Each question has:
      - \`title\` (string): The question title.
      - \`answer\` (string): The answer to the question.
  - \`button\` (object, optional): A button for further action.
    - \`title\` (string): The text displayed on the button.
    - \`variant\` (string): Style variant of the button (e.g., 'primary', 'secondary').
    - \`size\` (string, optional): Size of the button (e.g., 'small', 'medium', 'large').


**Versions and Layouts:**

- Versions 1, 4, 7: Centered titles and paragraphs.
- Versions 2, 5, 9: Left-aligned text.
- Versions 3, 6, 8: Split layout with text and questions.
- Versions 10, 11: Grid layout with two columns.
- Versions 12, 13, 14: Grid layout with two or three columns, optional images.

**Example:**

\`\`\`jsx
const data = {{
  version: 1,
  questions: [
    {{ title: 'What is your return policy?', answer: 'Items can be returned within 30 days.' }},
    {{ title: 'Do you offer support?', answer: 'Yes, 24/7 support is available.' }},
  ],
  button: {{ title: 'Contact Us', variant: 'primary' }},
  firstTitle: 'FAQs',
  firstParagraphe: 'Common questions answered.',
  secondTitle: 'Need more help?',
  secondParagraphe: 'Contact our support team.',
}};

\`\`\`

---

### Blog Component

Renders a blog section with a list of blog posts, supporting multiple layouts.

**Props:**

- \`data\` (object)
  - \`version\` (number): Determines the layout (versions 1-3).
  - \`heading\` (string): Main heading text.
  - \`tagline\` (string): Tagline above the heading.
  - \`description\` (string): Description below the heading.
  - \`blogPosts\` (array of objects):
    - Each blog post has:
      - \`title\` (string): Blog post title.
      - \`excerpt\` (string): Blog post excerpt.
      - \`image\` (string): Blog post image URL.
  - \`linkBlog\` (object):
    - \`href\` (string): URL.
    - \`title\` (string): Link text.

**Versions and Layouts:**

- Versions 1 and 3: Centered heading and description.
- Version 2: Left-aligned text with an additional link.

**Example:**

\`\`\`jsx
const data = {{
  version: 1,
  heading: 'Latest Posts',
  tagline: 'Updates',
  description: 'Our recent articles.',
  blogPosts: [
    {{ title: 'Post 1', excerpt: 'Summary 1', image: '/placeholder-image.svg' }},
    {{ title: 'Post 2', excerpt: 'Summary 2', image: '/placeholder-image.svg' }},
  ],
  linkBlog: {{ href: '/blog', title: 'See All Posts' }},
}};

\`\`\`

---

### BlogHeader Component

Renders a blog header with various layouts based on the version.

**Props:**

- \`data\` (object)
  - \`version\` (number): Determines the layout (versions 1-2).
  - \`tagline\` (string, optional): Optional tagline.
  - \`heading\` (string, optional): Main heading text.
  - \`description\` (string, optional): Description text.
  - \`contentCardHeader\` (object, optional): Content for the card header.
  - \`blogPost\` (object, optional): Featured blog post.
  - \`listCardleft\` (array of objects, optional): Posts displayed on the left.
  - \`titleBlogPost\` (string, optional): Title for the featured post section.
  - \`blogPosts\` (array of objects, optional): Main blog posts.
  - \`titleBlogPosts\` (string, optional): Title for the main posts section.
  - \`buttons\` (array of objects, optional):
    - Each button has:
      - \`title\` (string): Button text.
      - \`variant\` (string): Button style variant.
      - \`size\` (string): Button size.

**Versions and Layouts:**

- Version 1: Includes content card header, featured post, and buttons.
- Version 2: Includes categories as buttons and a featured post.

**Example:**

\`\`\`jsx
const data = {{
  version: 1,
  tagline: 'News',
  heading: 'Our Blog',
  description: 'Latest updates.',
  contentCardHeader: {{ /* CardHeader data */ }},
  blogPost: {{ /* Featured post data */ }},
  buttons: [{{ title: 'Tech', variant: 'primary', size: 'medium' }}],
}};

\`\`\`

---

### BlogPost Component

Renders a blog post with various layouts based on the version.

**Props:**

- \`data\` (object)
  - \`version\` (number): Determines the layout (versions 1-5).
  - \`heading\` (string): Blog post heading.
  - \`By\` (string, optional): Text indicating the author.
  - \`blog\` (object, optional):
    - \`href\` (string): Blog URL.
    - \`text\` (string): Blog link text.
  - \`category\` (object):
    - \`href\` (string): Category URL.
    - \`text\` (string): Category link text.
  - \`indicationPost\` (object, optional):
    - \`href\` (string): Previous post URL.
    - \`text\` (string): Previous post text.
  - \`avatar\` (object):
    - \`src\` (string): Avatar image URL.
    - \`alt\` (string): Avatar alt text.
  - \`socialMedias\` (array of objects):
    - Each includes:
      - \`href\` (string): Social media URL.
      - \`logo\` (JSX.Element): Social media icon.
  - \`image\` (object):
    - \`src\` (string): Main image URL.
    - \`alt\` (string): Image alt text.
  - \`fullName\` (string): Author's full name.
  - \`date\` (string): Publication date.
  - \`readTime\` (string): Estimated read time.
  - \`footer\` (object, optional):
    - \`indicationPublished\` (string): Published text.
    - \`date\` (string): Publication date in footer.
    - \`indicationName\` (string): Author's name indication.
    - \`fullName\` (string): Author's full name in footer.

**Versions and Layouts:**

- Version 1: Standard layout with breadcrumbs and author info.
- Version 2: Includes navigation to the previous post and footer info.
- Version 3: Larger heading, different author info display.
- Version 4: Grid layout with category and read time info.
- Version 5: Full-width background image with overlaid text.

**Example:**

\`\`\`jsx

const data = {{
  version: 1,
  heading: 'Understanding Components',
  By: 'By',
  blog: {{ href: '/blog', text: 'Blog' }},
  category: {{ href: '/react', text: 'React' }},
  avatar: {{ src: '/avatar.jpg', alt: 'Author' }},
  socialMedias: [{{ href: 'https://twitter.com', logo: "..." }}],
  image: {{ src: '/placeholder-image.svg', alt: 'Post Image' }},
  fullName: 'Jane Doe',
  date: 'Oct 1, 2023',
  readTime: '5 min read',
}};

\`\`\`

---

### CTA Component

Renders a Call-To-Action section with various layouts based on the version.

**Props:**

- \`data\` (object)
  - \`version\` (number): Determines the layout.
  - \`tag\` (string, optional): Optional tag text.
  - \`title\` (string, optional): CTA title.
  - \`description\` (string, optional): CTA description.
  - \`buttons\` (array of objects):
      - Each button has:
        - \`title\` (string): Button text.
        - \`variant\` (string): Button style variant.
        - \`size\` (string): Button size.
  - \`btnNameInput\` (string, optional): Form button text.
  - \`inputNamePlaceholder\` (string, optional): Input placeholder text.
  - \`btnType\` (string, optional): Button layout type.
  - \`colorText\` (string, optional): Text color ('white' or 'black').
  - \`image\` (object, optional):
    - \`image\` (string, optional): Main image URL.
    - \`imageOverlay\` (string, optional): Overlay image URL.
    - \`imageOverlayVideo\` (string, optional): Overlay video image URL.
    - \`imageBgOverlay\` (string, optional): Background overlay image URL.
    - \`alt\` (string, optional): Image alt text.

**Versions and Layouts:**

- Version 1: Two-column layout with text and image.
- Version 2: Similar to version 1 with background overlay.
- Versions 7, 8, 10: Single-column layouts with larger images.

**Image Options:**

- \`image.image\`: Main image.
- \`image.imageOverlay\`: Image within an overlay.
- \`image.imageOverlayVideo\`: Video image within an overlay.
- \`image.imageBgOverlay\`: Background overlay image.

**Example:**

\`\`\`jsx
const data = {{
  version: 1,
  tag: 'Offer',
  title: 'Join Now',
  description: 'Exclusive access.',

  buttons: [
    {{ title: "Sign up now", variant: "default", size: "default" }},
    {{ title: "Read more", variant: "link", size: "default" }},
  ],

  colorText: 'black',
  image: {{ image: '/placeholder-image.svg', alt: 'CTA Image' }},
}};

\`\`\`

---

### Section Component (Header and Feature)

Renders a feature or header section with various layouts based on the version.

**Props:**

- \`data\` (object)
  - \`version\` (number): Version of the navbar (1-8), determines style and layout.
  - \`tag\` (string): Text label or tag for the section.
  - \`title\` (string): The main title of the header block.
  - \`description\` (string): A brief description or introduction for the section.
  - \`buttons\` (array of objects): List of buttons for actions within the section.
    - Each button has:
      - \`title\` (string): The text displayed on the button.
      - \`variant\` (string): The style variant for the button (e.g., 'primary', 'secondary').
      - \`size\` (string): The size of the button (e.g., 'small', 'medium', 'large').
  - \`image\` (object, optional): Contains image data for the section.
    - \`image\` (string): URL of the main image.
    - \`alt\` (string): Alt text for the image.
  - \`form\` (object, optional): Contains form-related data.
    - \`description\` (string, optional): Description text for the form.
    - \`placeholder\` (string, optional): Placeholder text for the input field.


**Versions and Layouts:**

- Version 1: Two-column layout with text and image.
- Version 2: Reverse layout with image below text.
- Versions 5-7: Various grid layouts.

feature has 7 versions and header has 10 versions.



**Example:**

\`\`\`jsx
const data = {{
  version: 1,
  tag: 'Feature',
  title: 'Our Latest Update',
  description: 'New features included.',

  buttons: [
    {{ title: "Get started", variant: "default", size: "default" }},
    {{ title: "Read more", variant: "secondary", size: "default" }},
  ],
  image: {{ image: '/placeholder-image.svg', alt: 'Feature Image' }},
}};

\`\`\`

---

### Navbar Component

Renders a responsive navigation bar with multiple versions and styles.

**Props:**

- \`data\` (object)
  - \`version\` (number): Version of the navbar (1-8), determines style and layout.
  - \`logo\` :(string): URL to navigate to when the logo is clicked.
  - \`navItems\` (array of objects):
    - Each link has:
      - \`title\` (string): Title of the navigation link.
      - \`url\` (string): URL the link points to.
  - \`buttons\` (array of objects):
    - Each button has:
      - \`title\` (string): Button text.
      - \`variant\` (string): Button style variant.
      - \`size\` (string): Button size.

**Example:**

\`\`\`jsx
const navbarData = {{
        version: 1,
        logo: "/placeholder-image.svg",
        navItems: [
          {{ title: "Home", url: "/" }},
          {{ title: "Features", url: "/features" }},
          {{ title: "Pricing", url: "/pricing" }},
          {{ title: "About", url: "/about" }},
        ],
        buttons: [
            {{ title: "Features", variant: "default", size: "default" }},
            {{ title: "Read more", variant: "default", size: "default" }},
        ],
      }};

\`\`\`

---

### Pricing Component

Renders a pricing section with multiple versions and styles based on the provided data.

**Props:**

- \`data\` (object)
  - \`version\` (number): Version number, determines style and layout.
  - \`title\` (string): Main title of the pricing section.
  - \`subtitle\` (string): Subtitle or description for the pricing section.
  - \`plans\` (array of objects): Array of pricing plans.
    - Each plan contains:
      - \`name\` (string): The name of the pricing plan.
      - \`description\` (string): Description or summary of the plan.
      - \`monthlyPrice\` (number): Monthly pricing value (e.g., 19 for $19).
      - \`yearlyPrice\` (number): Yearly pricing value (e.g., 199 for $199).
      - \`features\` (array of objects): List of features included in the pricing plan.
        - Each feature contains:
          - \`text\` (string): The description of the feature.

**Version Descriptions:**

- Version 1: Includes title, description, and a single pricing plan.

**Example:**

\`\`\`jsx
const pricingData = {{
  version: 1,
  tagline: 'Tagline',
  heading: 'Pricing Plan',
  description: 'Choose the plan that suits you best.',
  pricingPlan: {{
    planName: 'Basic Plan',
    price: '$19',
    yearlyPrice: '$199',
    features: [
      'Feature one',
      'Feature two',
      'Feature three',
    ],
    button: {{ title: 'Get Started' }},
  }},
}};

\`\`\`

---

### Testimonial Component

Renders testimonials in various layouts based on the provided version.

**Props:**

- \`data\` (object)
  - \`version\` (number): Version number, determines style and layout.
  - \`heading\` (string, optional): Main heading of the testimonial section.
  - \`description\` (string, optional): Description text below the heading.
  - \`testimonials\` (array of objects):
    - Each testimonial includes:
      - \`image\` (object, optional):
        - \`src\` (string): Company logo image URL.
        - \`alt\` (string): Alt text for the image.
      - \`quote\` (string): Testimonial quote text.
      - \`avatar\` (object, optional):
        - \`src\` (string): Person's avatar image URL.
        - \`alt\` (string): Alt text for the avatar.
      - \`name\` (string): Name of the person.
      - \`position\` (string): Position or job title.
      - \`companyName\` (string): Company name.
      - \`location\` (string, optional): Location (used in Version 1).
      - \`button\` (object, optional):
        - \`title\` (string): Button text.
        - \`variant\` (string): Button style variant.
        - \`size\` (string): Button size.

**Version Descriptions:**

- Version 1: Includes logo, quote, persons image, location, and company name.
- Versions 2-4: Various layouts with multiple testimonials.

**Example:**

\`\`\`jsx
const testimonialData = {{
  version: 1,
  heading: 'Our Happy Customers',
  description: "Here's what our customers have to say about us.",
  testimonials: [
    {{
      image: {{ src: '/placeholder-image.svg', alt: 'Company Logo' }},
      quote: 'This service has changed my life!',
      avatar: {{ src: '/placeholder-image.svg', alt: 'Person Avatar' }},
      name: 'Jane Doe',
      position: 'Product Manager',
      companyName: 'Tech Corp',
      location: 'San Francisco, CA',
    }},
    // Additional testimonials...
  ],
}};

\`\`\`

### Footer Component

Renders a responsive and customizable footer section with multiple layouts based on the specified version. Each version offers different configurations to suit various design requirements, including logo display, newsletter subscription forms, social media links, and navigational links.

**Props:**

Here's the reformatted documentation based on your example:

- \`data\` (object) 
  - \`version\` (number): Determines the layout and structure of the footer (version 1 is used).
  - \`variant\` (string): Style variant of the footer (e.g., 'subscribe').
  - \`logo\` (object)
    - \`image\` (string): Source URL of the logo image.
    - \`alt\` (string): Alt text for the logo image.
  - \`navLinks\` (array of objects): Navigational links displayed in the footer.
    - \`label\` (string): Text of the navigation link.
    - \`href\` (string): URL the link points to.
  - \`subscribeText\` (string, optional): Text prompting users to subscribe to the newsletter.
  - \`subscribeButtonText\` (string, optional): Text displayed on the subscription button.
  - \`subscribePrivacyText\` (string, optional): Privacy notice text regarding newsletter subscriptions.
  - \`socialLinks\` (array of objects, optional): List of social media links.
    - \`platform\` (string): Social media platform (e.g., 'facebook', 'twitter').
    - \`href\` (string): URL of the social media profile.
  - \`legalLinks\` (array of objects): Legal-related footer links such as privacy policy and terms of service.
    - \`label\` (string): Text of the legal link.
    - \`href\` (string): URL the link points to.
  - \`copyrightText\` (string): Text displayed at the bottom of the footer (e.g., copyright information).

  
**Versions and Layouts:**

- **Version 1:**
  - Displays the logo, newsletter subscription form, two columns of links, social media icons, and footer text with additional links.
  

\`\`\`

---

### General Usage Guidelines

- **Data Structure**: Each component uses a \`data\` prop with a specific structure.
- **Version Selection**: The \`version\` property determines the component's layout and styling.
- **Optional Props**: Include optional properties as needed.
- **Media Assets**: Provide correct paths and \`alt\` texts for images.
- **Buttons and Links**: Provide necessary properties like \`title\`, \`href\`, \`variant\` (only buttons), and \`size\` (only buttons). variant have these properties : "default","secondary","link","link2","third","four","five","six","submit";
  and size have values "default","sm","secondary","link","link2","third","four","five","six","submit";


---
`;

}


export const generateComponentsDocumentationOld = () =>{
    return `

    These component is a versatile component that can have many different shapes based on the given parameters. You can customize them the way you will like it to be using the parameters
    Each component have multiple versions. You are free to choose between multiple version depending on the usecase and the version specification. 
    You can also just remove some part of the component by not providing their parameters (if they are not mandatory). but try to use as many parameters as possible. Be creative and mix between multiple versions of component to create a beautiful website.  
    Also notice that all images must be /img/placeholder-image.svg. For section be creative and don't repeat same version for multiple sections. Use the version to create innovative designs
    # cta 
    
    ## component documentation
    /**
     * Component Name : <CTA/>
     * 
     * It allows generating different versions of headers
     * @param {{string}} [tag] It allows adding a tag to the headers (optional)
     * @param {{string}} [title] It allows adding a title to the headers (optional)
     * @param {{string}} [description] It allows adding a description to the headers (optional)
     * @param {{string}} [btnName1] It allows naming the left button (optional, required if using a left button)
     * @param {{string}} [btnName2] It allows naming the right button (optional, required if using a right button)
     * @param {{string}} [btnNameInput] It allows naming the form button (optional, required if using a form button)
     * @param {{string}} [inputNamePlaceholder] It allows naming the input placeholder (optional, required if using an input field)
     * @param {{number}} [Version] It allows choosing different header templates (optional)
     * @param {{string}} [image] It allows setting the image path (optional, required if displaying an image). It is an object containing image and alt
     * @param {{string}} [imageOverlay] It allows setting the image path for the overlay (optional, required if using an image overlay)
     * @param {{string}} [imageOverlayVideo] It allows setting the video path for the overlay (optional, required if using a video overlay)
     * @param {{string}} [imageBgOverlay] It allows setting the image path for the header overlay background (optional, required if using a background overlay)
     * @param {{string}} [btnType] It allows choosing the button layout (optional, defaults to a standard layout if not specified)
     * @param {{string}} [colorText="white"|"black"] It allows setting the text color (optional, defaults to "black" if not specified)
     */
    ## Component versions

    
        ### 1

        A CTA with two columns. In the left column, a title, a text, and two buttons (or a form with a button on the right and text below). In the right column, an image or a video.

        ---

        ### 2

        A CTA with two columns. In the left column, a title, a text, and two buttons (or a form with a button on the right and text below). The right column is empty. The CTA has an image or video in the background with a transparent black overlay.

        ---

        ### 3

        A CTA with two columns. In the left column, a title and a text. In the right column, two buttons (or a form with a button on the right and text below).

        ---

        ### 4

        A CTA with two columns. In the left column, a title and a text. In the right column, two buttons (or a form with a button on the right and text below). The CTA has an image or video in the background with a transparent black overlay.

        ---

        ### 5

        A CTA with two columns. In the left column, a title. In the right column, a text followed by two buttons (or a form with a button on the right and text below the form).

        ---

        ### 6

        A CTA with two columns. In the left column, a title. In the right column, a text followed by two buttons (or a form with a button on the right and text below the form). The CTA has an image or video in the background with a transparent black overlay.

        ---

        ### 7

        A CTA with two blocks aligned horizontally. The top block is divided into two columns: on the left, a title, and on the right, a text followed by two buttons (or a form with a button on the right and text below the form). The CTA includes an image or video in the background.

        ---

        ### 8

        A CTA with two blocks aligned horizontally. The top block is divided into two columns: on the left, a title, a text followed by two buttons (or a form with a button on the right and text below the form), and the right column is empty. The CTA includes an image or video in the background.

        ---

        ### 9

        A CTA with a title, a text, and two buttons (or a form with a button on the right and text below), all centered.

        ---

        ### 10

        A CTA with two blocks aligned horizontally. The top block contains a centered title, a text, and two buttons (or a form with a button on the right and text below). The bottom block contains an image or video in the background.

    

    # header
    ## component documentation
    Component Name : <HeroHeader/>
    Same as the cta component documentation
    ## Component versions
        ### 1

        A header that takes 100% of the visible height with two columns. In the left column, a tag, a title, text, and two buttons (or a form with a button on the right and text below the form and button). In the right column, an image or a video.

        ---

        ### 2

        A header that takes 100% of the visible height with two columns. In the left column, a tag, a title, text, and two buttons (or a form with a button on the right and text below the form and button). In the right column, an image or a video with a transparent black overlay.

        ---

        ### 3

        A header that takes 100% of the visible height with a title, text, and two buttons (or a form with a button on the right and text below the form and button) placed in the center. The header also contains image and video overlays with a transparent black background.

        ---

        ### 4

        A header that takes 100% of the visible height with two columns. On the left, a title, text, and two buttons (or a form with a button on the right and text below the form and button). On the right, nothing. The header also contains image and video overlays with a transparent black background.

        ---

        ### 5

        A header that takes 100% of the visible height with two columns. On the left, a title, text, and two buttons (or a form with a button on the right and text below the form and button). On the right, nothing. The header also contains image and video overlays with a transparent black background. The title and text are in black.

        ---

        ### 6

        A header that takes 100% of the visible height with two rows. The bottom block is divided into two parts: on the left, a title, and on the right, text and two buttons (or a form with a button on the right and text below the form and button). In the top block, an image or a video with a transparent black overlay.

        ---

        ### 7

        A header that takes 100% of the visible height with two rows. The top block is divided into two parts: on the left, a title, and on the right, text and two buttons (or a form with a button on the right and text below the form and button). In the bottom block, an image or a video with a transparent black overlay.

        ---

        ### 8

        A header that takes 100% of the visible height with two rows. The top block is divided into two parts: on the left, a title, text, and two buttons (or a form with a button on the right and text below the form and button), and there is nothing on the right. In the bottom block, an image or a video with a transparent black overlay.

        ---

        ### 9

        A header that takes 100% of the visible height with two rows. The top block contains a title, text, and two buttons (or a form with a button on the right and text below the form and button) placed in the center. In the bottom block, an image or a video.

        ---

        ### 10

        A header that takes 100% of the visible height with two columns. In the left column, a tag, a title, text, and a block containing two boxes aligned vertically. In each box, a title at the top and text at the bottom. Below this block, two buttons (or a form with a button on the right and text below the form and button). In the right column, an image or a video.

        ---

        ### 11

        A header that does not take 100% of the visible height with two columns. In the left column, a tag, a title, text, and a block containing two boxes aligned vertically. Inside each box, a logo at the top left, a title to the right of the logo, and text below the logo and title. Below this block, two buttons (or a form with a button on the right and text below the form and button). In the right column, an image or a video.

        ---

        ### 12

        A header that does not take 100% of the visible height with two columns. In the left column, a tag, a title, text, and two buttons (or a form with a button on the right and text below the form and button). In the right column, an image or a video.

        ---

        ### 13

        A header that does not take 100% of the visible height with two columns. In the left column, a tag, a title, text, and a block containing three boxes aligned in a row. In each box, a logo on the left and text to the right of the logo. Below this block, two buttons (or a form with a button on the right and text below the form and button). In the right column, an image or a video.

        ---

        ### 14

        A header that does not take 100% of the visible height with two columns. In the left column, a tag, a title, text, and a block containing two boxes aligned vertically. In each box, a percentage and text below the percentage. Below these boxes, two buttons (or a form with a button on the right and text below the form and button). In the right column, an image or a video.

        ---

        ### 15

        A header that does not take 100% of the visible height with two columns. In the left column, three blocks aligned vertically. Each block contains a title and text. In the right column, an image or a video.

        ---

        ### 16

        A header that does not take 100% of the visible height with two columns. In the left column, four blocks aligned in two rows of two blocks each. In each block, a logo at the top left, a title below the logo, and text below the title. Below these four blocks, two buttons. In the right column, an image or a video.

        ---

        ### 17

        A header that does not take 100% of the visible height with two columns. In the left column, three blocks aligned horizontally. In each block, a logo at the top left, a title to the right of the logo, and text below the title. Below these three blocks, two buttons. In the right column, an image or a video.

    # feature
    Component Name : <Feature/>
    The feature documentation is exactly the same as the header documentation. You can rely on the header documentation.

    # FAQSection
        /**
         * FAQSection component renders a Frequently Asked Questions (FAQ) section with multiple layout variations based on the specified version.
         *
         * @component
         * @param {{Object}} props - Component props.
         * @param {{Object}} props.data - Data object containing all the information needed to render the FAQ section.
         * @param {{number}} props.data.version - Version number (1-14) that determines the layout and styling of the FAQ section.
         * @param {{string}} [props.data.logo] - Optional logo image source.
         * @param {{Array<Object>}} props.data.questions - An array of question objects.
         * @param {{string}} props.data.questions[].title - The question title.
         * @param {{string}} props.data.questions[].answer - The answer to the question.
         * @param {{Object}} [props.data.button] - Button data object.
         * @param {{string}} props.data.button.title - Text to display on the button.
         * @param {{string}} props.data.button.variant - Variant style for the button.
         * @param {{string}} props.data.firstTitle - Title text for the first section.
         * @param {{string}} props.data.firstParagraphe - Paragraph text for the first section.
         * @param {{string}} props.data.secondTitle - Title text for the second section.
         * @param {{string}} props.data.secondParagraphe - Paragraph text for the second section.
         *
         * @returns {{JSX.Element}} The rendered FAQSection component.
         *
         * @description
         * The FAQSection component dynamically renders an FAQ section based on the provided version prop. It supports multiple layouts and styles to fit different design requirements. The component displays a list of questions and answers, along with optional titles, paragraphs, and a call-to-action button.
         *
         * **Versions and Layouts:**
         * - **Versions 1, 4, 7**: Centered titles and paragraphs, questions displayed in different styles.
         * - **Versions 2, 5, 9**: Left-aligned text, different question display styles.
         * - **Versions 3, 6, 8**: Split layout with text on the left and questions on the right.
         * - **Versions 10, 11**: Grid layout with questions split into two columns.
         * - **Versions 12, 13, 14**: Grid layout with questions in two or three columns, optional images.
         *
         * @example
         * 
         * const data = {{
         *   version: 1,
         *   logo: 'path/to/logo.png',
         *   questions: [
         *     {{ title: 'What is your return policy?', answer: 'You can return items within 30 days.' }},
         *     {{ title: 'Do you offer technical support?', answer: 'Yes, 24/7 support is available.' }},
         *   ],
         *   button: {{
         *     title: 'Contact Us',
         *     variant: 'primary',
         *   }},
         *   firstTitle: 'Frequently Asked Questions',
         *   firstParagraphe: 'Find answers to common questions below.',
         *   secondTitle: 'Still have questions?',
         *   secondParagraphe: 'Reach out to our support team.',
         * }};
         *
         * <FAQSection data={{data}} />
         * 
         */
    # Blog
        /**
         * Blog component renders a blog section with a list of blog posts and supports multiple layout versions.
         *
         * @component
         * @param {{Object}} props - Component props.
         * @param {{Object}} props.data - Data object containing information to render the blog section.
         * @param {{number}} props.data.version - Version number (1-3) that determines the layout and styling of the blog section.
         * @param {{string}} props.data.heading - Main heading text for the blog section.
         * @param {{string}} props.data.tagline - Tagline text displayed above the heading.
         * @param {{string}} props.data.description - Description text displayed below the heading.
         * @param {{Array<Object>}} props.data.blogPosts - An array of blog post objects.
         * @param {{string}} props.data.blogPosts[].title - Title of the blog post.
         * @param {{string}} props.data.blogPosts[].excerpt - Short excerpt of the blog post.
         * @param {{string}} props.data.blogPosts[].image - Image URL for the blog post.
         * @param {{Object}} props.data.linkBlog - Object containing information for the link to the blog.
         * @param {{string}} props.data.linkBlog.href - URL to link to.
         * @param {{string}} props.data.linkBlog.title - Text to display for the link.
         *
         * @returns {{JSX.Element}} The rendered Blog component.
         *
         * @description
         * The Blog component dynamically renders a blog section based on the provided version prop. It supports multiple layouts and styles to fit different design requirements. The component displays a list of blog posts using different card styles, along with optional titles, taglines, descriptions, and links.
         *
         * **Versions and Layouts:**
         * - **Version 1 and 3**: Centered heading and description with blog posts displayed using CardHorizontal (version 1) and CardHorizontal3 (version 3) components respectively.
         * - **Version 2**: Left-aligned text with an additional link, blog posts displayed using the CardHorizontal2 component.
         *
         * @example
         * jsx
         * const data = {{
         *   version: 1,
         *   heading: 'Latest Blog Posts',
         *   tagline: 'Stay Updated',
         *   description: 'Read our latest articles and updates.',
         *   blogPosts: [
         *     {{ title: 'Post 1', excerpt: 'Summary of post 1', image: '/placeholder-image.svg' }},
         *     {{ title: 'Post 2', excerpt: 'Summary of post 2', image: '/placeholder-image.svg' }},
         *   ],
         *   linkBlog: {{
         *     href: '/blog',
         *     title: 'View All Posts',
         *   }},
         * }};
         *
         * <Blog data={{data}} />
         * 
         */

    // FAQSection : A FAQ section
    // footer : The footer section
    // navbar : the navigation section containing the website navigation
    // logo : set of logo for social proof
    // pricing : pricing section
    // testimonial: testimonial section
    `
    
    
}