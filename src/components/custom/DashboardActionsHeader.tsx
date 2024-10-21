import { DownloadIcon, MonitorIcon, Settings, SmartphoneIcon, Sparkles, TabletIcon, UploadIcon } from "lucide-react"
import { Button } from "../ui/button"
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"
import { Dispatch, SetStateAction } from "react"
import { ModeToggle } from "./ModeToggle"
import { ThemeCustomizer } from "@/components/custom/theme-customizer"
import { useParams } from "next/navigation"
import Link from "next/link"

type Props = {
    viewMode: string,
    setViewMode: Dispatch<SetStateAction<string>>

}
export const DashboardActionsHeader = ({viewMode, setViewMode}:Props) => {
    const params = useParams<{ id: string }>()

    return (
        <div className="bg-muted py-2 px-4 border-b border-border">
            <div className="flex items-center justify-between">
            <div className="flex">
                <Button className="bg-primary mr-4" size="sm">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Change style with AI
                </Button>
                <Button size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Custom style
                </Button>
                {/* <ThemeCustomizer /> */}
            </div>
            <div className="flex items-center space-x-4">
                <ToggleGroup type="single" value={viewMode} onValueChange={(value) => value && setViewMode(value)}>
                <ToggleGroupItem value="web" aria-label="Web view">
                    <MonitorIcon className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="tablet" aria-label="Tablet view">
                    <TabletIcon className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="mobile" aria-label="Mobile view">
                    <SmartphoneIcon className="h-4 w-4" />
                </ToggleGroupItem>
                </ToggleGroup>
            
            </div>
            <div className="flex items-center space-x-4">
                {/* <ToggleGroup type="single" value={designMode} onValueChange={(value) => value && setDesignMode(value)}>
                <ToggleGroupItem value="design" aria-label="Design view">
                    <PencilIcon className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="code" aria-label="Code view">
                    <CodeIcon className="h-4 w-4" />
                </ToggleGroupItem>
                </ToggleGroup> */}
                <Link href={"/api/app/project/download/"+params.id} target="downloadPage">
                    <Button  size="sm">
                        <DownloadIcon className="h-4 w-4 mr-2" />
                        Download source
                    </Button>
                </Link>
                <Button className="bg-primary" size="sm">
                    <UploadIcon className="h-4 w-4 mr-2" />
                    Deploy
                </Button>
                <ModeToggle></ModeToggle>
            </div>

            </div>
        </div>
    )
}