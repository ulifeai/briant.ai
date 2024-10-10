import { ThemeOptions } from "@/types/themeConfig"
import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

const configAtom = atomWithStorage<ThemeOptions>("config", {
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
    headerFont: 'Manrope',
    pageTextFont: 'Manrope',
    tagFont: 'Manrope',
    buttonStyle: 'solid',
  })

export function useConfig() {
  return useAtom(configAtom)
}