import { defaultCustomization } from "@/lib/utils/ui"
import { ThemeOptions } from "@/types/themeConfig"
import { atom, useAtom } from "jotai"
import { atomWithDefault, atomWithStorage } from "jotai/utils"

const configAtom = atom<ThemeOptions>(defaultCustomization)

export function useConfig() {
  return useAtom(configAtom)
}