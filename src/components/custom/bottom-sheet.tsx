import * as React from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {  Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { DatePicker } from "./datepicker";


export function BottomSheet({entity, editValues, processForm, open, setOpen}:{entity: any, editValues?: any, processForm: Function, open: boolean, setOpen: any}) {

  const [loading, setLoading] = React.useState<boolean>(false)  
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  // const loading = false
  // const [fetchedData, setFecthedData] = useState<any>([])


  // const fetchSelectValues = async (entity_name: any,)=>{
  //   axios.get("/api/tools/crud/readAll", {
  //     params: {
  //       tableName: entity_name
  //     }
  //   }).then((response)=>{
  //     console.log(response.data.records)
  //     // setFecthedData(response.data.records)

  //   })
  //   let response = await axios.get("/api/tools/crud/readAll", {
  //     params: {
  //       tableName: entity_name
  //     }
  //   })

  //   return response.data.records
  //     const sample = (JSON.parse(localStorage.getItem("app_data")??"[]").sampleData)[entity_name]
  //     return sample ?? []
  // }

  const handleSubmit = async (e: any)=>{
    e.preventDefault();
    setLoading(true)
    const formData = new FormData(e.currentTarget);
    try {
      var object: any = {};
      formData.forEach((value, key) => object[key] = value);
      // console.log(object)
      // Special handling for checkboxes
      formData.forEach((value, key) => {
        let element: any = document.querySelector(`[name="${key}"]`);
        if (element && element.type === 'checkbox') {
            object[key] = element.checked;
        }
      });
      // console.log(object)
      await processForm(object)
      setOpen(false)
      setLoading(false)

    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <Button variant="outline" onClick={()=>setOpen(true)}>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay className="fixed inset-0 bg-black/40" />
        <DrawerContent  className="bg-white flex flex-col fixed bottom-0 left-0 right-0 max-h-[96%] rounded-t-[10px]">
        <div className="max-w-3xl w-full mx-auto flex flex-col overflow-auto p-4 rounded-t-[10px]">

          <form action="" onSubmit={handleSubmit}>
            <DrawerHeader className="text-center flex justify-center flex-col items-center">
              <DrawerTitle>Manage {entity?.name}</DrawerTitle>
              <DrawerDescription>
                Manage {entity?.name}
              </DrawerDescription>
            </DrawerHeader>
            <div className="grid gap-4 py-4 max-w-xl">
            {(entity?.manage) && entity?.manage.map((field: any, index: number)=>{
              
                return (field.display_name || field.fetch_display_field) && (
                  <>
                    <div className="grid grid-cols-4 items-center gap-4">
                    
                        < Label htmlFor={field.field} className="text-right">
                            {field.display_name}
                          </Label>
                          {field.input_type == "select" ? (
                            <Select name={field.field} defaultValue={editValues?editValues[field.field]: ""}>
                            <SelectTrigger className="w-[250px]">
                              <SelectValue placeholder={"Select from "+ (field.fetch_from ?? field.field)} />
                            </SelectTrigger>
                            <SelectContent>
                              {!field.options ? field?.table_options?.map((elt: any, index: number)=>(
                                <SelectItem key={index} value={elt.id}>{elt[field.fetch_display_field.toLowerCase()]}</SelectItem>

                              )): field.options.map((elt: any, index: number)=>(
                                <SelectItem key={index} value={elt}>{elt}</SelectItem>

                              ))}
                            </SelectContent>
                          </Select>
                          ): (
                            <>
                              {field.input_type == "datetime" || field.input_type == "datetime-local" || field.input_type == "date"?(
                                  // <DatePicker/>
                                <Input name={field.field} id={field.field} type={"datetime-local"} defaultValue={editValues?editValues[field.field]: ""}  className="col-span-3" />
                              ):(
                                    <>
                                      {field.input_type == "checkbox"?(
                                        <Input name={field.field} id={field.field} type={"checkbox"} defaultChecked={editValues?editValues[field.field]: false}  className="col-span-1" />
                                      ):(
                                        <Input name={field.field} defaultValue={editValues?editValues[field.field]: ""} id={field.field} type={field.field == "id" ?"hidden": field.input_type}  className="col-span-3" />
                                      )} 
                                    </>
                                )} 
                            </>                  
                          )}
                    </div>

                  </>
                )
              })}
              
            </div>
            
            <DrawerFooter className="block text-center">
              <Button type="submit">{loading ? (<span className="loader"></span>): "Save changes"}</Button>
              <DrawerClose asChild>
                  <Button variant="outline" className="ml-8">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
            
          </form>

        </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  )
}
