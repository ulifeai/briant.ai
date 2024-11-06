'use client'

import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

type Feature = {
  path: string
  name: string
  description: string
}



function Feature({ feature, checked, onCheckedChange }: { feature: Feature, checked: boolean, onCheckedChange: (checked: boolean) => void }) {
  return (
    <div className="flex items-start space-x-2 mb-4">
      <Checkbox id={feature.path} checked={checked} onCheckedChange={onCheckedChange} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={feature.path}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {feature.name}
        </label>
        <p className="text-sm text-gray-800 font-light">
          {feature.description}
        </p>
      </div>
    </div>
  )
}

export default function FeaturePickerModal({features,selectedFeatures, setSelectedFeatures}: {features: Record<string, Feature[]>, selectedFeatures: Feature[], setSelectedFeatures: Function}) {
  
  const handleFeatureToggle = (featureTemp: Feature, checked: boolean) => {
    setSelectedFeatures((prev: any) =>
      checked
        ? [...prev, featureTemp]
        : prev.filter((item: any) => item.path !== featureTemp.path)
    )
  }


  return (
    <>
      <div className="grid gap-4 py-2">
      {features?.public && <h1 className="text-xl font-bold">Public</h1>}
        {features?.public?.map((feature: Feature) => (
          <Feature
            key={feature.path}
            feature={feature}
            checked={selectedFeatures.filter((item)=>item.path == feature.path).length != 0}
            onCheckedChange={(checked) => handleFeatureToggle(feature, checked)}
          />
        ))}
      </div>
      <div className="grid gap-4 py-2">
      {features?.auth && <h1 className="text-xl font-bold">Auth</h1>}

        
        {features?.auth?.map((feature: Feature) => (
          <Feature
            key={feature.path}
            feature={feature}
            checked={selectedFeatures.filter((item)=>item.path == feature.path).length != 0}
            onCheckedChange={(checked) => handleFeatureToggle(feature, checked)}
          />
        ))}
      </div>
      <div className="grid gap-4 py-2">
      {features?.authenticated && <h1 className="text-xl font-bold">Dashboard</h1>}
        {features?.authenticated?.map((feature: Feature) => (
          <Feature
            key={feature.path}
            feature={feature}
            checked={selectedFeatures.filter((item)=>item.path == feature.path).length != 0}
            onCheckedChange={(checked) => handleFeatureToggle(feature, checked)}
          />
        ))}
      </div>
    </>
    // <Dialog open={open} onOpenChange={setOpen}>
    //   {/* <DialogTrigger asChild>
    //     <Button variant="outline">Pick Features</Button>
    //   </DialogTrigger> */}
    //   <DialogContent className="sm:max-w-[425px]">
    //     <DialogHeader>
    //       <Dialogname>Choose Your Features</Dialogname>
    //       <DialogDescription>
    //         Select the features you'd like to include in your project. Click save when you're done.
    //       </DialogDescription>
    //     </DialogHeader>
    //     <div className="grid gap-4 py-4">
    //       <h1>public</h1>
    //       {features.public.map((feature: Feature) => (
    //         <Feature
    //           key={feature.path}
    //           feature={feature}
    //           checked={selectedFeatures.includes(feature.path)}
    //           onCheckedChange={(checked) => handleFeatureToggle(feature.path, checked)}
    //         />
    //       ))}
    //     </div>
    //     <div className="grid gap-4 py-4">
    //     {features?.auth && <h1>Auth</h1>}

          
    //       {features?.auth?.map((feature: Feature) => (
    //         <Feature
    //           key={feature.path}
    //           feature={feature}
    //           checked={selectedFeatures.includes(feature.path)}
    //           onCheckedChange={(checked) => handleFeatureToggle(feature.path, checked)}
    //         />
    //       ))}
    //     </div>
    //     <div className="grid gap-4 py-4">
    //     {features?.authenticated && <h1>Dashboard</h1>}
    //       {features?.authenticated?.map((feature: Feature) => (
    //         <Feature
    //           key={feature.path}
    //           feature={feature}
    //           checked={selectedFeatures.includes(feature.path)}
    //           onCheckedChange={(checked) => handleFeatureToggle(feature.path, checked)}
    //         />
    //       ))}
    //     </div>
    //     <DialogFooter>
    //       <Button type="submit" onClick={()=>handleSave(selectedFeatures)}>Save preferences</Button>
    //     </DialogFooter>
    //   </DialogContent>
    // </Dialog>
  )
}