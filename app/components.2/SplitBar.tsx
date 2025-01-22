import Link from "next/link"
import { Brain, Zap, Users, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import BrainwaveVisualizer from "./BrainwaveVisualizer"
import UserAvatar from "./UserAvatar"
import MoodSelector from "./MoodSelector"

export default function SplitBar() {
  return (
    <header className="bg-gradient-to-r from-purple-900/80 to-indigo-900/80 backdrop-blur-md text-white shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Linke Seite - Logo und Hauptnavigation */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-xl font-bold flex items-center">
              <Brain className="w-6 h-6 mr-2" />
              NeuroSync
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link
                href="/training"
                className="text-sm font-medium hover:text-purple-300 transition-colors flex items-center"
              >
                <Zap className="w-4 h-4 mr-1" />
                Training
              </Link>
              <Link
                href="/community"
                className="text-sm font-medium hover:text-purple-300 transition-colors flex items-center"
              >
                <Users className="w-4 h-4 mr-1" />
                Community
              </Link>
            </nav>
          </div>

          {/* Rechte Seite - Interaktive Elemente */}
          <div className="flex items-center space-x-4">
            <BrainwaveVisualizer />
            <MoodSelector />
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 transform translate-x-1/2 -translate-y-1/2"></span>
            </Button>
            <UserAvatar />
          </div>
        </div>
      </div>
    </header>
  )
}

