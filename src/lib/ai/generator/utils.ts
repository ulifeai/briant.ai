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

export const generateComponentsDocumentation = () =>{
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
     * @param {string} [tag] It allows adding a tag to the headers (optional)
     * @param {string} [title] It allows adding a title to the headers (optional)
     * @param {string} [description] It allows adding a description to the headers (optional)
     * @param {string} [btnName1] It allows naming the left button (optional, required if using a left button)
     * @param {string} [btnName2] It allows naming the right button (optional, required if using a right button)
     * @param {string} [btnNameInput] It allows naming the form button (optional, required if using a form button)
     * @param {string} [inputNamePlaceholder] It allows naming the input placeholder (optional, required if using an input field)
     * @param {string} [Version] It allows choosing different header templates (optional)
     * @param {string} [image] It allows setting the image path (optional, required if displaying an image)
     * @param {string} [imageOverlay] It allows setting the image path for the overlay (optional, required if using an image overlay)
     * @param {string} [imageOverlayVideo] It allows setting the video path for the overlay (optional, required if using a video overlay)
     * @param {string} [imageBgOverlay] It allows setting the image path for the header overlay background (optional, required if using a background overlay)
     * @param {string} [btnType] It allows choosing the button layout (optional, defaults to a standard layout if not specified)
     * @param {string} [colorText="white"|"black"] It allows setting the text color (optional, defaults to "black" if not specified)
     */
    ## Component versions

        ### Version 1

        A CTA with two columns. In the left column, a title, a text, and two buttons (or a form with a button on the right and text below). In the right column, an image or a video.

        ---

        ### Version 2

        A CTA with two columns. In the left column, a title, a text, and two buttons (or a form with a button on the right and text below). The right column is empty. The CTA has an image or video in the background with a transparent black overlay.

        ---

        ### Version 3

        A CTA with two columns. In the left column, a title and a text. In the right column, two buttons (or a form with a button on the right and text below).

        ---

        ### Version 4

        A CTA with two columns. In the left column, a title and a text. In the right column, two buttons (or a form with a button on the right and text below). The CTA has an image or video in the background with a transparent black overlay.

        ---

        ### Version 5

        A CTA with two columns. In the left column, a title. In the right column, a text followed by two buttons (or a form with a button on the right and text below the form).

        ---

        ### Version 6

        A CTA with two columns. In the left column, a title. In the right column, a text followed by two buttons (or a form with a button on the right and text below the form). The CTA has an image or video in the background with a transparent black overlay.

        ---

        ### Version 7

        A CTA with two blocks aligned horizontally. The top block is divided into two columns: on the left, a title, and on the right, a text followed by two buttons (or a form with a button on the right and text below the form). The CTA includes an image or video in the background.

        ---

        ### Version 8

        A CTA with two blocks aligned horizontally. The top block is divided into two columns: on the left, a title, a text followed by two buttons (or a form with a button on the right and text below the form), and the right column is empty. The CTA includes an image or video in the background.

        ---

        ### Version 9

        A CTA with a title, a text, and two buttons (or a form with a button on the right and text below), all centered.

        ---

        ### Version 10

        A CTA with two blocks aligned horizontally. The top block contains a centered title, a text, and two buttons (or a form with a button on the right and text below). The bottom block contains an image or video in the background.

    # header
    ## component documentation
    Component Name : <HeroHeader/>
    Same as the cta component documentation
    ## Component versions
        ### Vertical Version

        A header that takes 100% of the visible height with two columns. In the left column, a tag, a title, text, and two buttons (or a form with a button on the right and text below the form and button). In the right column, an image or a video.

        ---

        ### Overlay2 Version

        A header that takes 100% of the visible height with two columns. In the left column, a tag, a title, text, and two buttons (or a form with a button on the right and text below the form and button). In the right column, an image or a video with a transparent black overlay.

        ---

        ### v3 Version

        A header that takes 100% of the visible height with a title, text, and two buttons (or a form with a button on the right and text below the form and button) placed in the center. The header also contains image and video overlays with a transparent black background.

        ---

        ### v4 Version

        A header that takes 100% of the visible height with two columns. On the left, a title, text, and two buttons (or a form with a button on the right and text below the form and button). On the right, nothing. The header also contains image and video overlays with a transparent black background.

        ---

        ### v5 Version

        A header that takes 100% of the visible height with two columns. On the left, a title, text, and two buttons (or a form with a button on the right and text below the form and button). On the right, nothing. The header also contains image and video overlays with a transparent black background. The title and text are in black.

        ---

        ### Horizontal Version

        A header that takes 100% of the visible height with two rows. The bottom block is divided into two parts: on the left, a title, and on the right, text and two buttons (or a form with a button on the right and text below the form and button). In the top block, an image or a video with a transparent black overlay.

        ---

        ### Horizontal2 Version

        A header that takes 100% of the visible height with two rows. The top block is divided into two parts: on the left, a title, and on the right, text and two buttons (or a form with a button on the right and text below the form and button). In the bottom block, an image or a video with a transparent black overlay.

        ---

        ### v6 Version

        A header that takes 100% of the visible height with two rows. The top block is divided into two parts: on the left, a title, text, and two buttons (or a form with a button on the right and text below the form and button), and there is nothing on the right. In the bottom block, an image or a video with a transparent black overlay.

        ---

        ### v7 Version

        A header that takes 100% of the visible height with two rows. The top block contains a title, text, and two buttons (or a form with a button on the right and text below the form and button) placed in the center. In the bottom block, an image or a video.

        ---

        ### v8 Version

        A header that takes 100% of the visible height with two columns. In the left column, a tag, a title, text, and a block containing two boxes aligned vertically. In each box, a title at the top and text at the bottom. Below this block, two buttons (or a form with a button on the right and text below the form and button). In the right column, an image or a video.

        ---

        ### v9 Version

        A header that does not take 100% of the visible height with two columns. In the left column, a tag, a title, text, and a block containing two boxes aligned vertically. Inside each box, a logo at the top left, a title to the right of the logo, and text below the logo and title. Below this block, two buttons (or a form with a button on the right and text below the form and button). In the right column, an image or a video.

        ---

        ### v10 Version

        A header that does not take 100% of the visible height with two columns. In the left column, a tag, a title, text, and two buttons (or a form with a button on the right and text below the form and button). In the right column, an image or a video.

        ---

        ### v11 Version

        A header that does not take 100% of the visible height with two columns. In the left column, a tag, a title, text, and a block containing three boxes aligned in a row. In each box, a logo on the left and text to the right of the logo. Below this block, two buttons (or a form with a button on the right and text below the form and button). In the right column, an image or a video.

        ---

        ### v12 Version

        A header that does not take 100% of the visible height with two columns. In the left column, a tag, a title, text, and a block containing two boxes aligned vertically. In each box, a percentage and text below the percentage. Below these boxes, two buttons (or a form with a button on the right and text below the form and button). In the right column, an image or a video.

        ---

        ### v13 Version

        A header that does not take 100% of the visible height with two columns. In the left column, three blocks aligned vertically. Each block contains a title and text. In the right column, an image or a video.

        ---

        ### v14 Version

        A header that does not take 100% of the visible height with two columns. In the left column, four blocks aligned in two rows of two blocks each. In each block, a logo at the top left, a title below the logo, and text below the title. Below these four blocks, two buttons. In the right column, an image or a video.

        ---

        ### v15 Version

        A header that does not take 100% of the visible height with two columns. In the left column, three blocks aligned horizontally. In each block, a logo at the top left, a title to the right of the logo, and text below the title. Below these three blocks, two buttons. In the right column, an image or a video.

    # feature
    Component Name : <Feature/>
    The feature documentation is exactly the same as the header documentation. You can rely on the header documentation.
    `
    
    // FAQSection : A FAQ section
    // footer : The footer section
    // navbar : the navigation section containing the website navigation
    // logo : set of logo for social proof
    // pricing : pricing section
    // testimonial: testimonial section
}