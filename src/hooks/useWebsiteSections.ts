
import { atomWithStorage } from "jotai/utils"
import { useAtom } from 'jotai/react';



const configAtom = atomWithStorage<any>("websiteContent", {
    pageCode: []
})

export function useWebsiteContent() {
    return useAtom<any, [any], void>(configAtom)
}