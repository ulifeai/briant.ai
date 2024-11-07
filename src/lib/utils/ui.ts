
export type ThemeOptions = {
    borderRadius: number
    fontSize: number
    primaryColor: string
    secondaryColor: string
    buttonSize: number
    transparency: number
    imageRadius: number
    sectionsPadding: number
    tagColors: string
    headerColors: string
    pageTextColor: string
    headerFont: string
    pageTextFont: string
    tagFont: string
    buttonStyle: 'solid' | 'gradient' | 'transparent'
    buttonGradient?: { from: string; to: string }
}
export const defaultCustomization: ThemeOptions = {
    borderRadius: 4,
    fontSize: 16,
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