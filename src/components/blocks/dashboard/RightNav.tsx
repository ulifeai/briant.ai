import BlockCustomizer from "@/components/custom/BlockCustomizer";
import { ThemeCustomizer } from "@/components/custom/theme-customizer";
import { Button } from "@/components/ui/button";
import { DndContext } from "@/hooks/useDnd";
import { useContext } from "react";

type RightNavProps = {
  sideContent: any;
  saveContent: any;
  page_id: string;
  onChildBlockCustomizerData: ({
    index,
    bool,
  }: {
    index: number;
    bool: boolean;
  }) => void;
  onHandleChildLoading: (loading: boolean) => void;
};

export default function RightNav({
  sideContent,
  saveContent,
  page_id,
  onChildBlockCustomizerData,
  onHandleChildLoading,
}: RightNavProps) {
  const { isDndEnabled, toggleDnd } = useContext(DndContext);
  const handleChildData = ({
    index,
    bool,
  }: {
    index: number;
    bool: boolean;
  }) => {
    onChildBlockCustomizerData({ index, bool });
  };
  return (
    <div className=" bg-muted w-[21vw] border-r border-border bg-white absolute flex flex-col right-0 top-[3.5rem] h-full">
      <Button
        className={`m-5 rounded-xl ${
          isDndEnabled
            ? "bg-red-900 text-white hover:bg-red-900 hover:text-white"
            : "bg-green-950 text-white hover:bg-green-950 hover:text-white"
        }`}
        onClick={toggleDnd}
      >
        {isDndEnabled
          ? "Désactiver le deplacement section"
          : "Activer le deplacement section"}
      </Button>
      <div className="p-4 ">
        {sideContent ? (
          <div>
            <BlockCustomizer
              data={sideContent.data}
              onSave={saveContent}
              componentType={sideContent.type}
              id={sideContent.id}
              page_id={page_id ?? ""}
              onChange={(a: any) => {
                console.log(a);
              }}
              sendDataToParent={handleChildData}
              sendHandleChildLoading={onHandleChildLoading}
            />
          </div>
        ) : (
          <ThemeCustomizer></ThemeCustomizer>
        )}
      </div>
      {/* <ScrollArea className="flex-grow">
          <div className="pt-4 space-y-4">
            <div>
              <h3 className="mb-2 text-sm font-bold px-4 text-muted-foreground flex justify-start">
                <div>
                Home page sections

                </div>
              </h3>
              <Accordion type="single" className="my-0 py-0" collapsible>

                {layoutSections?.map((layoutSection, index)=>(
                  <AccordionItem key={index} className="border-b  px-4 border-gray-900 py-0 my-0" value={"item-"+index}>
                    <AccordionTrigger className="py-2 hover:bg-transparent">
                      <div className="space-y-1">
                        <div className="text-xs py-0 hover:bg-transparent hover:text-muted flex pt-4 font-light w-full justify-start">
                        <GripHorizontal className="mr-2 h-3 w-3 text-xs" />
                        <div>
                        {layoutSection.title}
                        </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-xs px-4">
                      {layoutSection.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            
              <div className="space-y-1">
                <Button variant="ghost" className="text-xs font-light w-full justify-start">
                <LayoutIcon className="mr-2 h-3 w-3" />
                  Contact
                </Button>
              </div>
              <div className="space-y-1">
                <Button variant="ghost" className="text-xs font-light w-full justify-start">
                <LayoutIcon className="mr-2 h-3 w-3" />
                  About
                </Button>
              </div>
            </div>
          
          
          </div>
        </ScrollArea> */}
    </div>
  );
}
