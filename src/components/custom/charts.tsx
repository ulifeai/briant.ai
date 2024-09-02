"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Pie,
  PieChart,
  XAxis,
  YAxis,
  Sector
} from "recharts"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"


import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartStyle,
  ChartTooltipContent
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

const areaChartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const barChartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const pieChartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
]

const areaChartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const barChartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const pieChartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

const interactiveChartData = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180 },
  { date: "2024-04-08", desktop: 409, mobile: 320 },
  { date: "2024-04-09", desktop: 59, mobile: 110 },
  { date: "2024-04-10", desktop: 261, mobile: 190 },
  { date: "2024-04-11", desktop: 327, mobile: 350 },
  { date: "2024-04-12", desktop: 292, mobile: 210 },
  { date: "2024-04-13", desktop: 342, mobile: 380 },
  { date: "2024-04-14", desktop: 137, mobile: 220 },
  { date: "2024-04-15", desktop: 120, mobile: 170 },
  { date: "2024-04-16", desktop: 138, mobile: 190 },
  { date: "2024-04-17", desktop: 446, mobile: 360 },
  { date: "2024-04-18", desktop: 364, mobile: 410 },
  { date: "2024-04-19", desktop: 243, mobile: 180 },
  { date: "2024-04-20", desktop: 89, mobile: 150 },
  { date: "2024-04-21", desktop: 137, mobile: 200 },
  { date: "2024-04-22", desktop: 224, mobile: 170 },
  { date: "2024-04-23", desktop: 138, mobile: 230 },
  { date: "2024-04-24", desktop: 387, mobile: 290 },
  { date: "2024-04-25", desktop: 215, mobile: 250 },
  { date: "2024-04-26", desktop: 75, mobile: 130 },
  { date: "2024-04-27", desktop: 383, mobile: 420 },
  { date: "2024-04-28", desktop: 122, mobile: 180 },
  { date: "2024-04-29", desktop: 315, mobile: 240 },
  { date: "2024-04-30", desktop: 454, mobile: 380 },
  { date: "2024-05-01", desktop: 165, mobile: 220 },
  { date: "2024-05-02", desktop: 293, mobile: 310 },
  { date: "2024-05-03", desktop: 247, mobile: 190 },
  { date: "2024-05-04", desktop: 385, mobile: 420 },
  { date: "2024-05-05", desktop: 481, mobile: 390 },
  { date: "2024-05-06", desktop: 498, mobile: 520 },
  { date: "2024-05-07", desktop: 388, mobile: 300 },
  { date: "2024-05-08", desktop: 149, mobile: 210 },
  { date: "2024-05-09", desktop: 227, mobile: 180 },
  { date: "2024-05-10", desktop: 293, mobile: 330 },
  { date: "2024-05-11", desktop: 335, mobile: 270 },
  { date: "2024-05-12", desktop: 197, mobile: 240 },
  { date: "2024-05-13", desktop: 197, mobile: 160 },
  { date: "2024-05-14", desktop: 448, mobile: 490 },
  { date: "2024-05-15", desktop: 473, mobile: 380 },
  { date: "2024-05-16", desktop: 338, mobile: 400 },
  { date: "2024-05-17", desktop: 499, mobile: 420 },
  { date: "2024-05-18", desktop: 315, mobile: 350 },
  { date: "2024-05-19", desktop: 235, mobile: 180 },
  { date: "2024-05-20", desktop: 177, mobile: 230 },
  { date: "2024-05-21", desktop: 82, mobile: 140 },
  { date: "2024-05-22", desktop: 81, mobile: 120 },
  { date: "2024-05-23", desktop: 252, mobile: 290 },
  { date: "2024-05-24", desktop: 294, mobile: 220 },
  { date: "2024-05-25", desktop: 201, mobile: 250 },
  { date: "2024-05-26", desktop: 213, mobile: 170 },
  { date: "2024-05-27", desktop: 420, mobile: 460 },
  { date: "2024-05-28", desktop: 233, mobile: 190 },
  { date: "2024-05-29", desktop: 78, mobile: 130 },
  { date: "2024-05-30", desktop: 340, mobile: 280 },
  { date: "2024-05-31", desktop: 178, mobile: 230 },
  { date: "2024-06-01", desktop: 178, mobile: 200 },
  { date: "2024-06-02", desktop: 470, mobile: 410 },
  { date: "2024-06-03", desktop: 103, mobile: 160 },
  { date: "2024-06-04", desktop: 439, mobile: 380 },
  { date: "2024-06-05", desktop: 88, mobile: 140 },
  { date: "2024-06-06", desktop: 294, mobile: 250 },
  { date: "2024-06-07", desktop: 323, mobile: 370 },
  { date: "2024-06-08", desktop: 385, mobile: 320 },
  { date: "2024-06-09", desktop: 438, mobile: 480 },
  { date: "2024-06-10", desktop: 155, mobile: 200 },
  { date: "2024-06-11", desktop: 92, mobile: 150 },
  { date: "2024-06-12", desktop: 492, mobile: 420 },
  { date: "2024-06-13", desktop: 81, mobile: 130 },
  { date: "2024-06-14", desktop: 426, mobile: 380 },
  { date: "2024-06-15", desktop: 307, mobile: 350 },
  { date: "2024-06-16", desktop: 371, mobile: 310 },
  { date: "2024-06-17", desktop: 475, mobile: 520 },
  { date: "2024-06-18", desktop: 107, mobile: 170 },
  { date: "2024-06-19", desktop: 341, mobile: 290 },
  { date: "2024-06-20", desktop: 408, mobile: 450 },
  { date: "2024-06-21", desktop: 169, mobile: 210 },
  { date: "2024-06-22", desktop: 317, mobile: 270 },
  { date: "2024-06-23", desktop: 480, mobile: 530 },
  { date: "2024-06-24", desktop: 132, mobile: 180 },
  { date: "2024-06-25", desktop: 141, mobile: 190 },
  { date: "2024-06-26", desktop: 434, mobile: 380 },
  { date: "2024-06-27", desktop: 448, mobile: 490 },
  { date: "2024-06-28", desktop: 149, mobile: 200 },
  { date: "2024-06-29", desktop: 103, mobile: 160 },
  { date: "2024-06-30", desktop: 446, mobile: 400 },
]

const interactiveChartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const desktopData = [
    { month: "january", desktop: 186, fill: "var(--color-january)" },
    { month: "february", desktop: 305, fill: "var(--color-february)" },
    { month: "march", desktop: 237, fill: "var(--color-march)" },
    { month: "april", desktop: 173, fill: "var(--color-april)" },
    { month: "may", desktop: 209, fill: "var(--color-may)" },
  ]
  const chartConfigPie = {
    visitors: {
      label: "Visitors",
    },
    desktop: {
      label: "Desktop",
    },
    mobile: {
      label: "Mobile",
    },
    january: {
      label: "January",
      color: "hsl(var(--chart-1))",
    },
    february: {
      label: "February",
      color: "hsl(var(--chart-2))",
    },
    march: {
      label: "March",
      color: "hsl(var(--chart-3))",
    },
    april: {
      label: "April",
      color: "hsl(var(--chart-4))",
    },
    may: {
      label: "May",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig
  

const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
  ]
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "hsl(var(--chart-1))",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
    firefox: {
      label: "Firefox",
      color: "hsl(var(--chart-3))",
    },
    edge: {
      label: "Edge",
      color: "hsl(var(--chart-4))",
    },
    other: {
      label: "Other",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig


  const chartDataRadar = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 285 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 203 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 264 },
  ]
  const chartConfigRadar = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig
  
export  function Charts() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = interactiveChartData.filter((item) => {
    const date = new Date(item.date)
    const now = new Date()
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    now.setDate(now.getDate() - daysToSubtract)
    return date >= now
  })

  const totalVisitors = React.useMemo(() => {
    return pieChartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  const id = "pie-interactive"
  const [activeMonth, setActiveMonth] = React.useState(desktopData[0].month)
  const activeIndex = React.useMemo(
    () => desktopData.findIndex((item) => item.month === activeMonth),
    [activeMonth]
  )
  const months = React.useMemo(() => desktopData.map((item) => item.month), [])


  return (
    <div>
         <div className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10">
            {/* Area Chart - Stacked */}
            <Card>
                <CardHeader>
                <CardTitle>Area - Stacked</CardTitle>
                <CardDescription>
                    Showing total visitors for the last 6 months
                </CardDescription>
                </CardHeader>
                <CardContent>
                <ChartContainer config={areaChartConfig}>
                    <AreaChart
                    accessibilityLayer
                    data={areaChartData}
                    margin={{
                        left: 12,
                        right: 12,
                    }}
                    >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="dot" />}
                    />
                    <Area
                        dataKey="mobile"
                        type="natural"
                        fill="var(--color-mobile)"
                        fillOpacity={0.4}
                        stroke="var(--color-mobile)"
                        stackId="a"
                    />
                    <Area
                        dataKey="desktop"
                        type="natural"
                        fill="var(--color-desktop)"
                        fillOpacity={0.4}
                        stroke="var(--color-desktop)"
                        stackId="a"
                    />
                    </AreaChart>
                </ChartContainer>
                </CardContent>
                <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                    <div className="flex items-center gap-2 font-medium leading-none">
                        Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="flex items-center gap-2 leading-none text-muted-foreground">
                        January - June 2024
                    </div>
                    </div>
                </div>
                </CardFooter>
            </Card>

            {/* Bar - Multiple */}
            <Card>
                <CardHeader>
                <CardTitle>Bar - Multiple</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                <CardContent>
                <ChartContainer config={barChartConfig}>
                    <BarChart accessibilityLayer data={barChartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="dashed" />}
                    />
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                    </BarChart>
                </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 6 months
                </div>
                </CardFooter>
            </Card>

            {/* Pie Chart - Donut with Text */}
            <Card className="flex flex-col">
                <CardHeader className="items-center pb-0">
                <CardTitle>Pie</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={pieChartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                        data={pieChartData}
                        dataKey="visitors"
                        nameKey="browser"
                        innerRadius={60}
                        strokeWidth={5}
                    >
                        <Label
                        content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                            return (
                                <text
                                x={viewBox.cx}
                                y={viewBox.cy}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                >
                                <tspan
                                    x={viewBox.cx}
                                    y={viewBox.cy}
                                    className="fill-foreground text-3xl font-bold"
                                >
                                    {totalVisitors.toLocaleString()}
                                </tspan>
                                <tspan
                                    x={viewBox.cx}
                                    y={(viewBox.cy || 0) + 24}
                                    className="fill-muted-foreground"
                                >
                                    Visitors
                                </tspan>
                                </text>
                            )
                            }
                        }}
                        />
                    </Pie>
                    </PieChart>
                </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 6 months
                </div>
                </CardFooter>
            </Card>

            <Card>
            <CardHeader>
                <CardTitle>Bar - Mixed</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                <BarChart
                    accessibilityLayer
                    data={chartData}
                    layout="vertical"
                    margin={{
                    left: 0,
                    }}
                >
                    <YAxis
                    dataKey="browser"
                    type="category"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) =>
                        chartConfig[value as keyof typeof chartConfig]?.label
                    }
                    />
                    <XAxis dataKey="visitors" type="number" hide />
                    <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                    />
                    <Bar dataKey="visitors" layout="vertical" radius={5} />
                </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                Showing total visitors for the last 6 months
                </div>
            </CardFooter>
            </Card>
            
            <Card data-chart={id} className="flex flex-col">
            <ChartStyle id={id} config={chartConfigPie} />
            <CardHeader className="flex-row items-start space-y-0 pb-0">
                <div className="grid gap-1">
                <CardTitle>Pie - Interactive</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
                </div>
                <Select value={activeMonth} onValueChange={setActiveMonth}>
                <SelectTrigger
                    className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
                    aria-label="Select a value"
                >
                    <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent align="end" className="rounded-xl">
                    {months.map((key) => {
                    const config = chartConfig[key as keyof typeof chartConfig]
                    if (!config) {
                        return null
                    }
                    return (
                        <SelectItem
                        key={key}
                        value={key}
                        className="rounded-lg [&_span]:flex"
                        >
                        <div className="flex items-center gap-2 text-xs">
                            <span
                            className="flex h-3 w-3 shrink-0 rounded-sm"
                            style={{
                                backgroundColor: `var(--color-${key})`,
                            }}
                            />
                            {config?.label}
                        </div>
                        </SelectItem>
                    )
                    })}
                </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="flex flex-1 justify-center pb-0">
                <ChartContainer
                id={id}
                config={chartConfig}
                className="mx-auto aspect-square w-full max-w-[300px]"
                >
                <PieChart>
                    <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                    data={desktopData}
                    dataKey="desktop"
                    nameKey="month"
                    innerRadius={60}
                    strokeWidth={5}
                    activeIndex={activeIndex}
                    activeShape={({
                        outerRadius = 0,
                        ...props
                    }: PieSectorDataItem) => (
                        <g>
                        <Sector {...props} outerRadius={outerRadius + 10} />
                        <Sector
                            {...props}
                            outerRadius={outerRadius + 25}
                            innerRadius={outerRadius + 12}
                        />
                        </g>
                    )}
                    >
                    <Label
                        content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                            return (
                            <text
                                x={viewBox.cx}
                                y={viewBox.cy}
                                textAnchor="middle"
                                dominantBaseline="middle"
                            >
                                <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-foreground text-3xl font-bold"
                                >
                                {desktopData[activeIndex].desktop.toLocaleString()}
                                </tspan>
                                <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="fill-muted-foreground"
                                >
                                Visitors
                                </tspan>
                            </text>
                            )
                        }
                        }}
                    />
                    </Pie>
                </PieChart>
                </ChartContainer>
            </CardContent>
            </Card>

            <Card>
            <CardHeader className="items-center pb-4">
                <CardTitle>Radar - Grid Circle Filled</CardTitle>
                <CardDescription>
                Showing total visitors for the last 6 months
                </CardDescription>
            </CardHeader>
            <CardContent className="pb-0">
                <ChartContainer
                config={chartConfigRadar}
                className="mx-auto aspect-square max-h-[250px]"
                >
                <RadarChart data={chartDataRadar}>
                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                    <PolarGrid
                    className="fill-[--color-desktop] opacity-20"
                    gridType="circle"
                    />
                    <PolarAngleAxis dataKey="month" />
                    <Radar
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    fillOpacity={0.5}
                    />
                </RadarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                January - June 2024
                </div>
            </CardFooter>
            </Card>
            
        </div>
        {/* Area - Interactive */}
        <Card>
            <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
            <div className="grid flex-1 gap-1 text-center sm:text-left">
                <CardTitle>Area - Interactive</CardTitle>
                <CardDescription>
                Showing total visitors for the last 3 months
                </CardDescription>
            </div>
            <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger
                className="w-[160px] rounded-lg sm:ml-auto"
                aria-label="Select a value"
                >
                <SelectValue placeholder="Last 3 months" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                <SelectItem value="90d" className="rounded-lg">
                    Last 3 months
                </SelectItem>
                <SelectItem value="30d" className="rounded-lg">
                    Last 30 days
                </SelectItem>
                <SelectItem value="7d" className="rounded-lg">
                    Last 7 days
                </SelectItem>
                </SelectContent>
            </Select>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
            <ChartContainer
                config={interactiveChartConfig}
                className="aspect-auto h-[250px] w-full"
            >
                <AreaChart data={filteredData}>
                <defs>
                    <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                    <stop
                        offset="5%"
                        stopColor="var(--color-desktop)"
                        stopOpacity={0.8}
                    />
                    <stop
                        offset="95%"
                        stopColor="var(--color-desktop)"
                        stopOpacity={0.1}
                    />
                    </linearGradient>
                    <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                    <stop
                        offset="5%"
                        stopColor="var(--color-mobile)"
                        stopOpacity={0.8}
                    />
                    <stop
                        offset="95%"
                        stopColor="var(--color-mobile)"
                        stopOpacity={0.1}
                    />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    minTickGap={32}
                    tickFormatter={(value) => {
                    const date = new Date(value)
                    return date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                    })
                    }}
                />
                <ChartTooltip
                    cursor={false}
                    content={
                    <ChartTooltipContent
                        labelFormatter={(value: any) => {
                        return new Date(value).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                        })
                        }}
                        indicator="dot"
                    />
                    }
                />
                <Area
                    dataKey="mobile"
                    type="natural"
                    fill="url(#fillMobile)"
                    stroke="var(--color-mobile)"
                    stackId="a"
                />
                <Area
                    dataKey="desktop"
                    type="natural"
                    fill="url(#fillDesktop)"
                    stroke="var(--color-desktop)"
                    stackId="a"
                />
                <ChartLegend content={<ChartLegendContent />} />
                </AreaChart>
            </ChartContainer>
            </CardContent>
        </Card>
    </div>
  )
}
