import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full border-b border--indigo-500/6 bg-[#F8FAFC]">
      <div className="max-w-[1060px] mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <div className="text--indigo-500 font-semibold text-lg">Brillance</div>
            <div className="hidden md:flex items-center space-x-6">
              <button className="text--indigo-500 hover:text--indigo-500/80 text-sm font-medium">Products</button>
              <button className="text--indigo-500 hover:text--indigo-500/80 text-sm font-medium">Pricing</button>
              <button className="text--indigo-500 hover:text--indigo-500/80 text-sm font-medium">Docs</button>
            </div>
          </div>
          <Button variant="ghost" className="text--indigo-500 hover:bg-indigo-500/5">
            Log in
          </Button>
        </nav>
      </div>
    </header>
  )
}
