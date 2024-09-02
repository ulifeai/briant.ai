// "use client";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import axios from "axios";
import { DatePicker } from "./datepicker";

export function DialogDemo({entity, editValues, processForm, open, setOpen}:{entity: any, editValues?: any, processForm: Function, open: boolean, setOpen: any}) {

  const [loading, setLoading] = useState<boolean>(false)  
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
      formData.forEach((value, key) => object[key.toLowerCase()] = value);
      // console.log(object)
      // Special handling for checkboxes
      formData.forEach((value, key) => {
        let element: any = document.querySelector(`[name="${key}"]`);
        if (element && element.type === 'checkbox') {
            object[key.toLowerCase()] = element.checked;
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger  asChild>
        <Button onClick={()=>setOpen(true)}>Add {entity?.name}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action="" onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Manage {entity?.name}</DialogTitle>
            <DialogDescription>
              Manage {entity?.name}

            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
          {(entity?.manage) && entity?.manage.map((field: any, index: number)=>{
             
              return (field.display_name || field.fetch_display_field) && (
                <>
                  <div className="grid grid-cols-4 items-center gap-4">
                  
                      < Label htmlFor={field.field} className={field.field == "id" ?"hidden": "" + " text-right"}>
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
                                // <DatePicker></DatePicker>
                              <Input name={field.field} id={field.field} type={"datetime-local"} defaultValue={editValues?editValues[field.field]: ""}  className="col-span-3" />
                            ):(
                                  <>
                                    {field.input_type == "checkbox"?(
                                      <Input name={field.field} id={field.field} type={"checkbox"} defaultChecked={editValues?editValues[field.field]: false}  className="col-span-1" />
                                    ):(
                                      <Input name={field.field} defaultValue={editValues?editValues[field.field.toLowerCase()]: ""} id={field.field}  type={field.field == "id" ?"hidden": field.input_type} className="col-span-3" />
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
          
          <DialogFooter>
            <Button type="submit">{loading ? (<span className="loader"></span>): "Save changes"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
