
import { atomWithStorage } from "jotai/utils"
import { useAtom } from 'jotai/react';
import { atom } from "jotai";



const configAtom = atom<any>({
    pageCode: []
})

export function useWebsiteContent() {
    return useAtom<any, [any], void>(configAtom)
}