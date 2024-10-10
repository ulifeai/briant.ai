// utils/colorUtils.js

/**
 * Converts a HEX color code to HSL.
 * @param {string} hex - The HEX color code (e.g., "#3490dc").
 * @returns {string} - The HSL representation without the 'hsl()' wrapper (e.g., "209, 70%, 53%").
 */
export const hexToHsl = (hex: string) => {
    // Remove the hash symbol if present
    hex = hex.replace(/^#/, '');
  
    // Parse r, g, b values
    let r = parseInt(hex.substring(0, 2), 16) / 255;
    let g = parseInt(hex.substring(2, 4), 16) / 255;
    let b = parseInt(hex.substring(4, 6), 16) / 255;
  
    // Find min and max values among r, g, b
    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let h, s, l;
  
    l = (max + min) / 2;
  
    if (max === min) {
      // Achromatic
      h = s = 0;
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  
      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0));
          break;
        case g:
          h = ((b - r) / d + 2);
          break;
        case b:
          h = ((r - g) / d + 4);
          break;
        default:
          h = 0;
      }
  
      h = h * 60;
    }
  
    // Convert to percentage
    s = s * 100;
    l = l * 100;
  
    // Round the values
    h = Math.round(h);
    s = Math.round(s);
    l = Math.round(l);
  
    return `${h}, ${s}%, ${l}%`;
  };
  