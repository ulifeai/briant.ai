'use client'
import { useState, useEffect } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Slider } from '@/components/ui/slider'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useConfig } from '@/hooks/useConfig'
import { ThemeOptions } from '@/types/themeConfig'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "@/components/ui/command"
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { fonts } from '@/lib/helpers/fonts'



export function ThemeCustomizer() {
  const [themeOptions, setThemeOptions] = useConfig()
  const [openPageFont, setOpenPageFont] = useState(false)
  const [openHeaderFont, setOpenHeaderFont] = useState(false)
 

  const updateThemeOption = (key: keyof ThemeOptions, value: any) => {
    setThemeOptions((prev) => ({ ...prev, [key]: value }))
  }

//   const generateTailwindTheme = () => {
//     console.log(themeOptions)
//     return {
//       extend: {
//         borderRadius: {
//           DEFAULT: `${themeOptions.borderRadius}px`,
//         },
//         fontSize: {
//           base: `${themeOptions.fontSize}px`,
//         },
//         colors: {
//           primary: themeOptions.primaryColor,
//           secondary: themeOptions.secondaryColor,
//         //   pageText: themeOptions.pageTextColor,
//         //   tag: themeOptions.tagColors,
//         //   header: themeOptions.headerColors,
//         },
//         spacing: {
//           'button': `${themeOptions.buttonSize}px`,
//           'section': `${themeOptions.sectionsPadding}px`,
//         },
//         opacity: {
//           'custom': `${themeOptions.transparency / 100}`,
//         },
//         fontFamily: {
//           header: [themeOptions.headerFont],
//           body: [themeOptions.pageTextFont],
//           tag: [themeOptions.tagFont],
//         },
//       },
//     }
//   }

//   const sendThemeToParent = () => {
//     const theme = generateTailwindTheme()
//     window.parent.postMessage({ type: 'THEME_UPDATE', theme }, '*')
//   }

//   useEffect(() => {
//     const theme = generateTailwindTheme()
//     console.log('Generated Tailwind theme:', theme)
//   }, [themeOptions])

  return (
    <div className="grid gap-4 max-h-[80vh] overflow-y-auto">
            <h3 className="font-semibold text-md mb-8">Theme Customizer</h3>


            
            {/* Color Scheme */}
            <section className="grid gap-4">
                <div className="font-semibold text-sm">Color Scheme</div>
                {/* Primary Color */}
                <div className="justify-start flex items-center flex-row">
                    <Input
                        id="primaryColor"
                        className="w-8 h-8 p-0 mr-2 rounded-full border-0"
                        type="color"
                        value={themeOptions.primaryColor}
                        onChange={(e) => updateThemeOption('primaryColor', e.target.value)}
                    />
                    <Label className='text-xs font-normal' htmlFor="primaryColor">Primary Color</Label>

                </div>
                {/* Secondary Color */}
                <div className="justify-start flex items-center flex-row">
                    <Input
                        id="secondaryColor"
                        type="color"
                        className="w-8 mr-2 h-8 p-0 rounded-full border-0"
                        value={themeOptions.secondaryColor}
                        onChange={(e) => updateThemeOption('secondaryColor', e.target.value)}
                    />
                    <Label className='text-xs font-normal' htmlFor="secondaryColor">Secondary Color</Label>

                </div>

                {/* Secondary Color */}
                <div className="justify-start flex items-center flex-row">
                    <Input
                        id="backgroundColor"
                        type="color"
                        className="w-8 mr-2 h-8 p-0 rounded-full border-0"
                        value={themeOptions.backgroundColor}
                        onChange={(e) => updateThemeOption('backgroundColor', e.target.value)}
                    />
                    <Label className='text-xs font-normal' htmlFor="backgroundColor">Background Color</Label>

                </div>

                {/* Secondary Color */}
                <div className="justify-start flex items-center flex-row">
                    <Input
                        id="foregroundColor"
                        type="color"
                        className="w-8 mr-2 h-8 p-0 rounded-full border-0"
                        value={themeOptions.foregroundColor}
                        onChange={(e) => updateThemeOption('foregroundColor', e.target.value)}
                    />
                    <Label className='text-xs font-normal' htmlFor="foregroundColor">Foreground Color</Label>

                </div>
                {/* Tag Colors */}
                {/* <div className="grid gap-2">
                <Label>Tag Colors</Label>
                <div className="flex gap-2">
                    <Input
                    type="color"
                    value={themeOptions.tagColors}
                    onChange={(e) => updateThemeOption('tagColors', e.target.value)}
                    />
                </div>
                </div>
                <div className="grid gap-2">
                <Label>Header Colors</Label>
                <div className="flex gap-2">
                    <Input
                    type="color"
                    value={themeOptions.headerColors}
                    onChange={(e) => updateThemeOption('headerColors', e.target.value)}
                    />
                </div>
                </div>
                <div className="grid gap-2">
                <Label className='text-xs mt-2 font-normal' htmlFor="pageTextColor">Page Text Color</Label>
                <Input
                    id="pageTextColor"
                    type="color"
                    value={themeOptions.pageTextColor}
                    onChange={(e) => updateThemeOption('pageTextColor', e.target.value)}
                />
                </div> */}

                {/* Transparency */}
                {/* <div className="grid gap-2">
                <Label className='text-xs mt-2 font-normal' htmlFor="transparency">Transparency: {themeOptions.transparency}%</Label>
                <Slider
                    id="transparency"
                    min={0}
                    max={100}
                    step={1}
                    value={[themeOptions.transparency]}
                    onValueChange={(value) => updateThemeOption('transparency', value[0])}
                />
                </div> */}
            </section>

            {/* Color Scheme */}
            {/* <section className="grid gap-4"> */}
                {/* <div className="font-semibold text-sm">Chooose a theme</div>
                <div className="justify-start flex items-center flex-row">
                    <div className="relative flex flex-col justify-center overflow-hidden bg-gray-50"> 
                        <div className="relative bg-white shadow-xl flex space-x-4 ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg"> 
                            <div className="mx-auto max-w-md"> 
                                <div className="divide-y divide-gray-300/50"> 
                                    <div className="space-y-6 text-base leading-7 text-gray-600"> 
                                        <h3 className="text-2xl p-2">Aa</h3> 
                                    </div> 
                                </div> 
                                <div className="h-8 w-12 rounded-tl-xl bg-red-500"></div> 
                            </div> 
                            <div className="mx-auto max-w-md"> 
                                <div className="divide-y divide-gray-300/50"> 
                                    <div className="space-y-6 text-base leading-7 text-gray-600"> 
                                        <h3 className="text-2xl p-2 font-serif">Aa</h3> 
                                    </div> 
                                </div> 
                                <div className="h-8 w-12 rounded-tl-xl bg-gray-500"></div> 
                            </div> 
                            <div className="mx-auto max-w-md"> 
                                <div className="divide-y divide-gray-300/50"> 
                                    <div className="space-y-6 text-base leading-7 text-gray-600"> 
                                        <h3 className="text-2xl p-2 font-sans">Aa</h3> 
                                    </div> 
                                </div> 
                                <div className="h-8 w-12 rounded-tl-xl bg-blue-500"></div> 
                            </div> 
                        </div>
                    </div>

                </div> */}
                {/* Secondary Color */}
                {/* <div className="justify-start flex items-center flex-row">
                <Input
                    id="secondaryColor"
                    type="color"
                    className="w-8 mr-2 h-8 p-0 rounded-full border-0"
                    value={themeOptions.secondaryColor}
                    onChange={(e) => updateThemeOption('secondaryColor', e.target.value)}
                />
                <Label className='text-xs font-normal' htmlFor="secondaryColor">Secondary Color</Label>

                </div> */}
                {/* Tag Colors */}
                {/* <div className="grid gap-2">
                <Label>Tag Colors</Label>
                <div className="flex gap-2">
                    <Input
                    type="color"
                    value={themeOptions.tagColors}
                    onChange={(e) => updateThemeOption('tagColors', e.target.value)}
                    />
                </div>
                </div>
                <div className="grid gap-2">
                <Label>Header Colors</Label>
                <div className="flex gap-2">
                    <Input
                    type="color"
                    value={themeOptions.headerColors}
                    onChange={(e) => updateThemeOption('headerColors', e.target.value)}
                    />
                </div>
                </div>
                <div className="grid gap-2">
                <Label className='text-xs mt-2 font-normal' htmlFor="pageTextColor">Page Text Color</Label>
                <Input
                    id="pageTextColor"
                    type="color"
                    value={themeOptions.pageTextColor}
                    onChange={(e) => updateThemeOption('pageTextColor', e.target.value)}
                />
                </div> */}

                {/* Transparency */}
                {/* <div className="grid gap-2">
                <Label className='text-xs mt-2 font-normal' htmlFor="transparency">Transparency: {themeOptions.transparency}%</Label>
                <Slider
                    id="transparency"
                    min={0}
                    max={100}
                    step={1}
                    value={[themeOptions.transparency]}
                    onValueChange={(value) => updateThemeOption('transparency', value[0])}
                />
                </div> */}
            {/* </section> */}

            {/* Layout Settings */}
            <section className="grid gap-4 mt-8">
                <div className="font-semibold text-sm">Layout Settings</div>
                {/* Border Radius */}
                <div className="grid gap-2">
                <Label className='text-xs mt-2 font-normal' htmlFor="borderRadius">Border Radius: {themeOptions.borderRadius}px</Label>
                <Slider
                    id="borderRadius"
                    className='h-4 '
                    min={0}
                    max={40}
                    step={1}
                    value={[themeOptions.borderRadius]}
                    onValueChange={(value) => updateThemeOption('borderRadius', value[0])}
                />
                </div>
                {/* Image Radius */}
                <div className="grid gap-2">
                <Label className='text-xs mt-2 font-normal' htmlFor="imageRadius">Image Radius: {themeOptions.imageRadius}px</Label>
                <Slider
                    id="imageRadius"
                    min={0}
                    max={20}
                    step={1}
                    value={[themeOptions.imageRadius]}
                    onValueChange={(value) => updateThemeOption('imageRadius', value[0])}
                />
                </div>
                {/* Sections Padding */}
                {/* <div className="grid gap-2">
                <Label className='text-xs mt-2 font-normal' htmlFor="sectionsPadding">Sections Padding: {themeOptions.sectionsPadding}px</Label>
                <Slider
                    id="sectionsPadding"
                    min={0}
                    max={50}
                    step={1}
                    value={[themeOptions.sectionsPadding]}
                    onValueChange={(value) => updateThemeOption('sectionsPadding', value[0])}
                />
                </div> */}
            </section>

            {/* Typography Settings */}
            <section className="grid gap-4 mt-8">
                <div className="font-semibold text-sm">Typography Settings</div>
                {/* Font Size */}
                {/* <div className="grid gap-2">
                <Label className='text-xs mt-2 font-normal' htmlFor="fontSize">Font Size: {themeOptions.fontSize}px</Label>
                <Slider
                    id="fontSize"
                    min={12}
                    max={24}
                    step={1}
                    value={[themeOptions.fontSize]}
                    onValueChange={(value) => updateThemeOption('fontSize', value[0])}
                />
                </div> */}
                {/* Header Font */}
                <div className="grid gap-2">
                <Label className='text-xs mt-2 font-normal' htmlFor="headerFont">Header Font</Label>
                {/* <Select
                    value={themeOptions.headerFont}
                    onValueChange={(value) => updateThemeOption('headerFont', value)}
                >
                    <SelectTrigger>
                    <SelectValue>{themeOptions.headerFont}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                    {fonts.map((font) => (
                        <SelectItem key={font} value={font}>
                        {font}
                        </SelectItem>
                    ))}
                    </SelectContent>
                </Select> */}
                <Popover open={openHeaderFont} onOpenChange={setOpenHeaderFont}>
                    <PopoverTrigger asChild>
                        <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={openHeaderFont}
                        className="w-full justify-between"
                        >
                        {themeOptions.headerFont
                            ? fonts.find((font) => font === themeOptions.headerFont)
                            : "Select framework..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                        <Command>
                        <CommandInput placeholder="Search framework..." />
                        <CommandList>
                            <CommandEmpty>No Font found.</CommandEmpty>
                            <CommandGroup>
                            {fonts.map((font) => (
                                <CommandItem
                                key={font}
                                value={font}
                                onSelect={(currentValue) => {
                                    // setValue(currentValue === value ? "" : currentValue)
                                    updateThemeOption('headerFont', currentValue)
                                    setOpenHeaderFont(false)
                                }}
                                >
                                <Check
                                    className={cn(
                                    "mr-2 h-4 w-4",
                                    themeOptions.headerFont === font ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {font}
                                </CommandItem>
                            ))}
                            </CommandGroup>
                        </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
                </div>
                {/* Page Text Font */}
                <div className="grid gap-2">
                <Label className='text-xs mt-2 font-normal' htmlFor="pageTextFont">Page Text Font</Label>
                <Popover open={openPageFont} onOpenChange={setOpenPageFont}>
                    <PopoverTrigger asChild>
                        <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={openPageFont}
                        className="w-full justify-between"
                        >
                        {themeOptions.pageTextFont
                            ? fonts.find((font) => font === themeOptions.pageTextFont)
                            : "Select framework..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                        <Command>
                        <CommandInput placeholder="Search framework..." />
                        <CommandList>
                            <CommandEmpty>No Font found.</CommandEmpty>
                            <CommandGroup>
                            {fonts.map((font) => (
                                <CommandItem
                                key={font}
                                value={font}
                                onSelect={(currentValue) => {
                                    // setValue(currentValue === value ? "" : currentValue)
                                    updateThemeOption('pageTextFont', currentValue)
                                    setOpenPageFont(false)
                                }}
                                >
                                <Check
                                    className={cn(
                                    "mr-2 h-4 w-4",
                                    themeOptions.pageTextFont === font ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {font}
                                </CommandItem>
                            ))}
                            </CommandGroup>
                        </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
                {/* <Select
                    value={themeOptions.pageTextFont}
                    onValueChange={(value) => updateThemeOption('pageTextFont', value)}
                >
                    <SelectTrigger>
                    <SelectValue>{themeOptions.pageTextFont}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                    {fonts.map((font) => (
                        <SelectItem key={font} value={font}>
                        {font}
                        </SelectItem>
                    ))}
                    </SelectContent>
                </Select> */}
                </div>
                {/* Tag Font */}
                {/* <div className="grid gap-2">
                <Label className='text-xs mt-2 font-normal' htmlFor="tagFont">Tag Font</Label>
                <Select
                    value={themeOptions.tagFont}
                    onValueChange={(value) => updateThemeOption('tagFont', value)}
                >
                    <SelectTrigger>
                    <SelectValue>{themeOptions.tagFont}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                    {fonts.map((font) => (
                        <SelectItem key={font} value={font}>
                        {font}
                        </SelectItem>
                    ))}
                    </SelectContent>
                </Select>
                </div> */}
            </section>

            

            {/* Button Customization */}
            {/* <section className="grid gap-4">
                <div className="font-semibold text-sm">Button Customization</div>
                <div className="grid gap-2">
                <Label className='text-xs mt-2 font-normal' htmlFor="buttonSize">Button Size: {themeOptions.buttonSize}px</Label>
                <Slider
                    id="buttonSize"
                    min={20}
                    max={60}
                    step={1}
                    value={[themeOptions.buttonSize]}
                    onValueChange={(value) => updateThemeOption('buttonSize', value[0])}
                />
                </div>
                <div className="grid gap-2">
                <Label className='text-xs mt-2 font-normal' htmlFor="buttonStyle">Button Style</Label>
                <Select
                    value={themeOptions.buttonStyle}
                    onValueChange={(value: 'solid' | 'gradient' | 'transparent') => {
                    updateThemeOption('buttonStyle', value);
                    if (value === 'gradient' && !themeOptions.buttonGradient) {
                        updateThemeOption('buttonGradient', { from: '#ff0000', to: '#0000ff' });
                    }
                    }}
                >
                    <SelectTrigger>
                    <SelectValue>{themeOptions.buttonStyle}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="solid">Solid</SelectItem>
                    <SelectItem value="gradient">Gradient</SelectItem>
                    <SelectItem value="transparent">Transparent</SelectItem>
                    </SelectContent>
                </Select>
                </div>
                {themeOptions.buttonStyle === 'gradient' && (
                <div className="grid gap-2">
                    <Label>Button Gradient</Label>
                    <div className="flex gap-2">
                    <Input
                        type="color"
                        value={themeOptions.buttonGradient?.from || '#ff0000'}
                        onChange={(e) =>
                        updateThemeOption('buttonGradient', { ...themeOptions.buttonGradient, from: e.target.value })
                        }
                    />
                    <Input
                        type="color"
                        value={themeOptions.buttonGradient?.to || '#0000ff'}
                        onChange={(e) =>
                        updateThemeOption('buttonGradient', { ...themeOptions.buttonGradient, to: e.target.value })
                        }
                    />
                    </div>
                </div>
                )}
            </section> */}

            {/* Action Controls */}
            {/* <div className="grid gap-2">
                <Button onClick={sendThemeToParent}>Apply Theme</Button>
            </div> */}
        </div>
    
    // <Popover>
    //   <PopoverTrigger asChild>
    //     <Button variant="outline">Customize Theme</Button>
    //   </PopoverTrigger>
    //   <PopoverContent className="w-96">
        

    //   </PopoverContent>
    // </Popover>
  )
}