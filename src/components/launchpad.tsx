
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export function launchpad() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center space-y-6">
        <div className="w-full">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full sm:w-auto">Create New App</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Create New App</DialogTitle>
                <DialogDescription>Enter a description for your new app.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div>
                  <Label htmlFor="app-description">App Description</Label>
                  <Textarea id="app-description" placeholder="Enter a description for your app..." className="h-24" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Create App</Button>
                <div>
                  <Button variant="outline">Cancel</Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="w-full space-y-4">
          <h2 className="font-title text-2xl font-bold">Your Apps</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-4 space-y-2">
              <div className="font-medium">App 1</div>
              <p className="text-gray-500 dark:text-gray-400">This is a description of the first app you created.</p>
            </Card>
            <Card className="p-4 space-y-2">
              <div className="font-medium">App 2</div>
              <p className="text-gray-500 dark:text-gray-400">This is a description of the second app you created.</p>
            </Card>
            <Card className="p-4 space-y-2">
              <div className="font-medium">App 3</div>
              <p className="text-gray-500 dark:text-gray-400">This is a description of the third app you created.</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
