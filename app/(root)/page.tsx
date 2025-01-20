import { ModeToggle } from "@/components/ThemeProvider/ModeToggle"
import { UserButton } from "@clerk/nextjs"

export default function SetupPage() {
  return (
    <div className="relative h-screen">
      <div className="absolute top-4 right-4 flex items-center space-x-4">
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  )
}
