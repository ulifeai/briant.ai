import { ThemeOptions } from "@/types/themeConfig";
import { generateTwoRandomColors } from "../helpers/colors";

const colors = generateTwoRandomColors();

const primaryColor = colors[0] ?? '#3b82f6';
const secondaryColor = colors[1] ?? '#10b981';
const backgroundColor = '#fff';
const foregroundColor = '#fff';

export const defaultTheme = {
    borderRadius: 4,
    fontSize: 16,
    backgroundColor,
    foregroundColor,
    primaryColor,
    secondaryColor,
    buttonSize: 40,
    transparency: 100,
    imageRadius: 8,
    sectionsPadding: 20,
    tagColors: '#ff0000',
    headerColors: '#000000',
    pageTextColor: '#333333',
    headerFont: 'Plus Jakarta Sans',
    pageTextFont: 'Plus Jakarta Sans',
    tagFont: 'Manrope',
    buttonStyle: 'solid',
}

export const defaultCustomization: ThemeOptions = {
    borderRadius: 4,
    fontSize: 16,
    backgroundColor: "#fff",
    foregroundColor: "#000",
    primaryColor: '#3b82f6',
    secondaryColor: '#10b981',
    buttonSize: 40,
    transparency: 100,
    imageRadius: 8,
    sectionsPadding: 20,
    tagColors: '#ff0000',
    headerColors: '#000000',
    pageTextColor: '#333333',
    headerFont: 'Plus Jakarta Sans',
    pageTextFont: 'Plus Jakarta Sans',
    tagFont: 'Manrope',
    buttonStyle: 'solid',
}