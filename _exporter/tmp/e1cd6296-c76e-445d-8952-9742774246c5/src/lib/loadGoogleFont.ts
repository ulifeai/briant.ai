const googleFonts: any = {
  "DM Sans": "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap",
  "Inter": "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap",
  "Space Mono": "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap",
  "Space Grotesk": "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap",
  "Work Sans": "https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap",
  "Syne": "https://fonts.googleapis.com/css2?family=Syne:wght@400;700&display=swap",
  "Libre Franklin": "https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;700&display=swap",
  "Cormorant": "https://fonts.googleapis.com/css2?family=Cormorant:wght@400;700&display=swap",
  "Fira Sans": "https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap",
  "Eczar": "https://fonts.googleapis.com/css2?family=Eczar:wght@400;700&display=swap",
  "Alegreya Sans": "https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@400;700&display=swap",
  "Alegreya": "https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&display=swap",
  "Source Sans Pro": "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap",
  "Source Serif Pro": "https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;700&display=swap",
  "Roboto": "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
  "Fraunces": "https://fonts.googleapis.com/css2?family=Fraunces:wght@400;700&display=swap",
  "Inknut Antiqua": "https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@400;700&display=swap",
  "BioRhyme": "https://fonts.googleapis.com/css2?family=BioRhyme:wght@400;700&display=swap",
  "Poppins": "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap",
  "Archivo Narrow": "https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@400;700&display=swap",
  "Libre Baskerville": "https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap",
  "Playfair Display": "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap",
  "Karla": "https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap",
  "Lora": "https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap",
  "Proza Libre": "https://fonts.googleapis.com/css2?family=Proza+Libre:wght@400;700&display=swap",
  "Spectral": "https://fonts.googleapis.com/css2?family=Spectral:wght@400;700&display=swap",
  "IBM Plex Sans": "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap",
  "Manrope": "https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap",
  "Montserrat": "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap",
  "Lato": "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap",
  "PT Sans": "https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap",
  "PT Serif": "https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&display=swap",
  "Cardo": "https://fonts.googleapis.com/css2?family=Cardo:wght@400;700&display=swap",
  "Chivo": "https://fonts.googleapis.com/css2?family=Chivo:wght@400;700&display=swap",
  "Neuton": "https://fonts.googleapis.com/css2?family=Neuton:wght@400;700&display=swap",
  "Rubik": "https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap",
  "Open Sans": "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap",
  "Inconsolata": "https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap",
  "Raleway": "https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap",
  "Merriweather": "https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap"
};


export function loadGoogleFont(font: string) {
  const link = document.createElement('link');
  link.href = googleFonts[font];
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}