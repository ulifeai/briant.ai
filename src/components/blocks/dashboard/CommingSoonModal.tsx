"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Rocket, Bell, MessageCircle } from "lucide-react"
import Link from "next/link"

interface ComingSoonModalProps {
  feature: string
  description?: string
  open: boolean
  submitItend: Function
  setOpen: (open: boolean) => void
}

export default function ComingSoonModal({ 
  feature = "This Feature", 
  description = "We're working hard to bring you something amazing. Sign up to be notified when it launches!", 
  open, 
  submitItend,
  setOpen
}: ComingSoonModalProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* <DialogTrigger asChild>
        <div className="relative inline-block">
          {children}
          <Badge variant="secondary" className="absolute -top-2 -right-2 text-xs">
            Coming Soon
          </Badge>
        </div>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-primary" />
            {feature} is Coming Soon!
          </DialogTitle>
          <DialogDescription className="pt-4">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase ">
              <span className="bg-background px-2 text-muted-foreground bg-white">Stay Updated</span>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            

            <Button className="gap-2 bg-primary" onClick={()=>submitItend()}>
              <Bell className="h-4 w-4" />
              Notify Me
            </Button>

            <Link data-canny-link target="Briantai.canny.io" href="https://briantai.featurebase.app">
                <Button className="gap-2" onClick={()=>setOpen(false)}>
                    <MessageCircle className="h-4 w-4" />
                    Send feedback
                </Button>
            </Link>
            
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}