import { defaultCustomization } from "@/lib/utils/ui"
import { ThemeOptions } from "@/types/themeConfig"
import { atom } from "jotai"
import { useAtom } from 'jotai/react';


export const configAtom = atom<ThemeOptions>(defaultCustomization)

export function useConfig() {
  return useAtom(configAtom)
}