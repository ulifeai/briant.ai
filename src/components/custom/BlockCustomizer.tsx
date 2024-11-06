import { componentVersions } from '@/lib/helpers/featureSettings';
import React, { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { range } from '@/lib/helpers/array';
import { useWebsiteContent } from '@/hooks/useWebsiteSections';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight, Trash2Icon } from 'lucide-react'
import { Textarea } from '../ui/textarea';

type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue }

interface JsonEditorProps {
  data: JsonValue
  onSave: (data: JsonValue) => void
  componentType: string,
  id: string,
  onChange: any
}

export default function BlockCustomizer({ data: initialData, onSave, componentType, id, onChange }: JsonEditorProps) {

  const [selectedVersion, setSelectedVersion] = useState(0)
  const [websiteContent, setWebsiteContent] = useWebsiteContent()
  const [data, setData] = useState<JsonValue>(initialData)

  useEffect(() => {
    setData(initialData)
    setSelectedVersion(initialData?.version)
  }, [initialData])

  useEffect(() => {
    if (selectedVersion == 0)
      return;
    let newValue = websiteContent?.pageCode.map((section: any) => {
      if (section.id == id) {
        section.data = data
        section.data.version = selectedVersion;
        console.log(section, "SECTION")
      }

      return section
    });
    setWebsiteContent({ ...websiteContent, pageCode: newValue })
  }, [selectedVersion, data])

  const handleChange = (path: string[], value: JsonValue) => {
    setData(prevData => {
      const newData = JSON.parse(JSON.stringify(prevData))
      let current: any = newData
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]]
      }
      current[path[path.length - 1]] = value
      return newData
    })
  }

  const handleAddItem = (path: string[]) => {
    setData(prevData => {
      const newData = JSON.parse(JSON.stringify(prevData))
      let current: any = newData
      for (let i = 0; i < path.length; i++) {
        current = current[path[i]]
      }
      if (Array.isArray(current)) {
        let newItem;
        if (current.length > 0) {
          // Clone the first item and reset its values
          newItem = cloneAndResetItem(current[0])
        } else {
          // If the array is empty, decide on a default value
          newItem = ''
        }
        current.push(newItem)
      }
      return newData
    })
  }

  const cloneAndResetItem = (item: any): any => {
    const clonedItem = JSON.parse(JSON.stringify(item))
    resetValues(clonedItem)
    return clonedItem
  }

  const resetValues = (item: any) => {
    if (typeof item === 'object' && item !== null) {
      if (Array.isArray(item)) {
        for (let i = 0; i < item.length; i++) {
          item[i] = resetValues(item[i])
        }
      } else {
        for (let key in item) {
          item[key] = resetValues(item[key])
        }
      }
      return item
    } else {
      if (typeof item === 'string') {
        return ''
      } else if (typeof item === 'number') {
        return 0
      } else if (typeof item === 'boolean') {
        return false
      } else {
        return null
      }
    }
  }

  const handleDeleteItem = (path: string[], index: number) => {
    setData(prevData => {
      const newData = JSON.parse(JSON.stringify(prevData))
      let current: any = newData
      for (let i = 0; i < path.length; i++) {
        current = current[path[i]]
      }
      if (Array.isArray(current)) {
        current.splice(index, 1)
      }
      return newData
    })
  }

  const renderEditor = (value: JsonValue, path: string[] = []): React.ReactNode => {
    if (typeof value === 'object' && value !== null) {
      if (Array.isArray(value)) {
        if (path.length === 0) {
          // Top-level array, render entries directly
          return (
            <div>
              {value.map((item, index) => (
                <div key={index} className="pl-4 border-l border-gray-200">
                  {renderEditor(item, [...path, index.toString()])}
                  <Button variant="destructive" size="sm" onClick={() => handleDeleteItem(path, index)}>Delete</Button>
                </div>
              ))}
              <Button className="mt-2" onClick={() => handleAddItem(path)}>Add Item</Button>
            </div>
          );
        } else {
          // Internal arrays as collapsibles
          return (
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={path.join('.')}>
                <AccordionTrigger className="text-sm font-medium">
                  {path[path.length - 1] || 'Array'} [{value.length}]
                </AccordionTrigger>
                <AccordionContent>
                  {value.map((item, index) => (
                    <div key={index} className="pl-4 border-l border-gray-200 flex items-start space-x-2 px-2">
                      {renderEditor(item, [...path, index.toString()])}
                      <div onClick={() => handleDeleteItem(path, index)} className='flex items-center space-x-4 mt-4'>  <Trash2Icon size={20}/>   </div>
                    </div>
                  ))}
                  <Button className="mt-2" onClick={() => handleAddItem(path)}>Add Item</Button>
              </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        }
      } else {
        if (path.length === 0) {
          // Top-level object, render entries directly
          return (
            <div>
              {Object.entries(value).map(([key, val]) => (
                <div key={key} className="pl-4 border-l border-gray-200">
                  {!Array.isArray(val) && !(val instanceof Object) && (
                    <span className="text-sm font-medium">{key.replaceAll("_", " ")}:</span>
                  )}
                  {renderEditor(val, [...path, key])}
                </div>
              ))}
            </div>
          );
        } else {
          // Internal objects as collapsibles
          return (
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={path.join('.')}>
                <AccordionTrigger className="text-sm font-medium">
                  Element {path[path.length - 1] || 'Object'}
                </AccordionTrigger>
                <AccordionContent>
                  {Object.entries(value).map(([key, val]) => (
                    <div key={key} className="pl-4 border-l border-gray-200">
                      {renderEditor(val, [...path, key])}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        }
      }
    } else {
      // Primitive values
      return renderInput(value, path)
    }
  };

  const renderInput = (value: string | number | boolean | null, path: string[]) => {
    return (
      <div className="flex items-center space-x-2 py-4">
        {path.length > 1 && (
          <span className="text-sm font-medium">{path[path.length - 1].replaceAll("_", " ")}:</span>
        )}

        {path[path.length - 1] == "description" ? (
          <Textarea
            value={value as string}
            onChange={(e) => handleChange(path, e.target.value)}
            className="flex-grow"
          />
        ) : (
          <>
            {path[path.length - 1] == "version" && path.length <= 1 ? (
              <SelectVersion />
            ) : (
              <Input
                value={value as string}
                onChange={(e) => handleChange(path, e.target.value)}
                className="flex-grow"
              />
            )}

          </>
        )}
      </div>
    );
  }

  const SelectVersion = () => {
    return (
      <Select value={selectedVersion?.toString()} onValueChange={(val) => setSelectedVersion(parseInt(val))}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a Version" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Versions</SelectLabel>
            {
              range(0, componentVersions[componentType], 1).map((val: any) => (
                <SelectItem key={val} value={val.toString()}>{val} </SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  }

  return (
    <form action="#" onSubmit={(e)=>e.preventDefault()}>
      <div className="w-full h-[90vh] overflow-y-auto py-4">
        <h2 className="text-lg font-bold mb-4">Component editor</h2>
        {renderEditor(data)}
        <Button
          onClick={() => onSave(data)}
          className="mt-4 w-full"
        >
          Save Changes
        </Button>
      </div>
    </form>

  )
}
