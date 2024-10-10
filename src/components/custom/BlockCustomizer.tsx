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
/**
 * Field definitions for each component type and version.
 * This mapping determines which fields are displayed for each component and version.
 */


function BlockCustomizer({ componentType, id, onChange }: any) {
  // const [formData, setFormData] = useState({});
  const [selectedVersion, setSelectedVersion] = useState(0)
  const [websiteContent, setWebsiteContent] = useWebsiteContent()

  useEffect(()=>{
    if(selectedVersion == 0)
      return;
    let newValue = websiteContent?.pageCode.map((section: any) => {
      if(section.id == id ){
        section.data.version = selectedVersion;
      }
      return section
    });
    setWebsiteContent({...websiteContent, pageCode: newValue})
  }, [selectedVersion])
  // componentType = componentType == "feature" || componentType == "header" ? "section": componentType

  // Retrieve the field definitions for the selected component and version
  // const componentDefinition = componentFieldDefinitions[componentType];
  // if (!componentDefinition) {
  //   return <div>Unsupported component type: {componentType}</div>;
  // }

  // const version = formData.version || '1'; // Default to version '1' if not specified
  // const versionFields = componentDefinition.versions[version];
  // if (!versionFields) {
  //   return <div>Unsupported version {version} for component {componentType}</div>;
  // }

  // Handler for updating form data
  // const handleFieldChange = (fieldPath: any, value: any) => {
  //   const newFormData = { ...formData };
  //   let current = newFormData;
  //   const pathParts = fieldPath.split('.');
  //   pathParts.forEach((part: any, index: any) => {
  //     if (index === pathParts.length - 1) {
  //       current[part] = value;
  //     } else {
  //       current = current[part] = current[part] || {};
  //     }
  //   });
  //   setFormData(newFormData);
  //   if (onChange) onChange(newFormData);
  // };

  // Function to render input fields based on field definitions
  // const renderFields = (fields: any, data: any, path = '') => {
  //   return Object.keys(fields).map((fieldKey) => {
  //     const fieldDef = fields[fieldKey];
  //     const fieldValue = data[fieldKey];

  //     const fieldPath = path ? `${path}.${fieldKey}` : fieldKey;

  //     if (fieldDef.type === 'string' || fieldDef.type === 'number') {
  //       return (
  //         <div key={fieldPath}>
  //           <label>{fieldKey}</label>
  //           <Input
  //             type={fieldDef.type === 'number' ? 'number' : 'text'}
  //             value={fieldValue || ''}
  //             onChange={(e) =>
  //               handleFieldChange(fieldPath, e.target.value)
  //             }
  //             required={fieldDef.required}
  //           />
  //         </div>
  //       );
  //     } else if (fieldDef.type === 'array') {
  //       // return (
  //       //   <div key={fieldPath}>
  //       //     <label>{fieldKey}</label>
  //       //     {(fieldValue || []).map((item: any, index:number) => (
  //       //       <div key={`${fieldPath}[${index}]`} style={{ marginLeft: 20 }}>
  //       //         {renderFields(
  //       //           fieldDef.fields,
  //       //           item,
  //       //           `${fieldPath}.${index}`
  //       //         )}
  //       //         <button
  //       //           type="button"
  //       //           onClick={() => {
  //       //             const newArray = [...(fieldValue || [])];
  //       //             newArray.splice(index, 1);
  //       //             handleFieldChange(fieldPath, newArray);
  //       //           }}
  //       //         >
  //       //           Remove
  //       //         </button>
  //       //       </div>
  //       //     ))}
  //       //     <button
  //       //       type="button"
  //       //       onClick={() => {
  //       //         const newItem: any = {};
  //       //         Object.keys(fieldDef.fields).forEach((key: any) => {
  //       //           newItem[key] = '';
  //       //         });
  //       //         handleFieldChange(fieldPath, [
  //       //           ...(fieldValue || []),
  //       //           newItem,
  //       //         ]);
  //       //       }}
  //       //     >
  //       //       Add {fieldKey}
  //       //     </button>
  //       //   </div>
  //       // );
  //     } else if (fieldDef.type === 'object' ) {
  //       // return (
  //       //   <div key={fieldPath} style={{ marginLeft: 20 }}>
  //       //     <label>{fieldKey}</label>
  //       //     {renderFields(
  //       //       fieldDef.fields,
  //       //       fieldValue || {},
  //       //       fieldPath
  //       //     )}
  //       //   </div>
  //       // );
  //     } else {
  //       return null;
  //     }
  //   });
  // };


  return (
    <form>
      {/* {renderFields(versionFields, formData)} */}
      <Select value={selectedVersion?.toString()} onValueChange={(val)=>setSelectedVersion(parseInt(val))}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Version" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Versions</SelectLabel>
          {
          range(0, componentVersions[componentType], 1).map((val: any)=>(
              <SelectItem key={val} value={val.toString()}>{val} </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
      {/* You can add a submit button or other form controls here */}
    </form>
  );
}

export default BlockCustomizer;
