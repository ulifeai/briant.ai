/**
 * Truncates a given string to a specified maximum length.
 * 
 * @param text - The original text to truncate.
 * @param maxLength - The maximum allowed length of the truncated text.
 * @param options - Optional settings for truncation.
 * @returns The truncated string with the specified suffix if truncation occurred.
 */
export function truncateText(
    text: string | null | undefined,
    maxLength: number,
    options?: {
        suffix?: string;
        truncateAtWord?: boolean;
    }
): string {
    if (typeof text !== 'string') {
        return '';
    }

    const { suffix = '...', truncateAtWord = false } = options || {};

    if (text.length <= maxLength) {
        return text;
    }

    if (truncateAtWord) {
        // Find the last space within maxLength
        const truncated = text.slice(0, maxLength + 1);
        const lastSpaceIndex = truncated.lastIndexOf(' ');
        if (lastSpaceIndex > 0) {
            return truncated.slice(0, lastSpaceIndex) + suffix;
        }
    }

    return text.slice(0, maxLength) + suffix;
}

export default truncateText;
