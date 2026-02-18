import { Button } from "../ui/button";
import Link from "next/link";

interface navLink {
  label: string;
  href: string
} 

const navigationLinks: navLink[] = [
  {label: "estudio 1", href: "/estudiouno"},
  {label: "estudio 2", href: "/estudiodos"},
  {label: "estudio 3", href: "/estudiotres"},
  {label: "shadcn", href: "https://ui.shadcn.com/docs/components"}
]

const NavBar = () => {
  return (
    <nav className="w-full border-b bg-green-600 dark:bg-emerald-950 ">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="text-white font-bold text-3xl uppercase tracking-tighter">
          Arturo<span className="text-green-200">.Dev</span>
        </div>
        <div className="flex gap-6 items-center">
          {navigationLinks.map(nav => {
            const isInternal = !nav.href.startsWith("http")
            if(isInternal) {
              return ( 
                <Link key={nav.href} href={nav.href}>
                  {nav.label}
                </Link>      
              )
            } return (
              <a key={nav.href} href={nav.href} target="_blank" rel="noopener noreferrer">
                {nav.label}
              </a>
            )           
          })}
        </div>
        <Button className="hover:brightness-110 hover:scale-105 transition-all" >
          Contacto
        </Button>
      </div>
    </nav>
  )
}

export default NavBar
