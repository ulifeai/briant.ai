
export type ThemeOptions = {
  borderRadius: number
  fontSize: number
  backgroundColor: string
  foregroundColor: string
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