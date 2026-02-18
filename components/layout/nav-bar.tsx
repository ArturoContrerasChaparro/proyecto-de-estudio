import { Button } from "../ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from "../ui/sheet";

interface NavLink {
  label: string;
  href: string;
}

const navigationLinks: NavLink[] = [
  { label: "estudio 1", href: "/estudiouno" },
  { label: "estudio 2", href: "/estudiodos" },
  { label: "estudio 3", href: "/estudiotres" },
  { label: "shadcn", href: "https://ui.shadcn.com/docs/components" }
];

const NavBar = () => {
  const linkStyles = "text-sm font-medium text-muted-foreground hover:text-primary transition-colors";
  const mobileLinkStyles = "flex w-full items-center py-4 text-lg font-semibold text-foreground border-b border-border/50 hover:text-primary transition-all";

  return (
    <nav className="w-full border-b bg-amber-100 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="text-foreground font-bold text-2xl md:text-3xl uppercase tracking-tighter">
          Arturo<span className="text-primary">.Dev</span>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          {navigationLinks.map((nav) => {
            const isInternal = !nav.href.startsWith("http");
            return isInternal ? (
              <Link key={nav.href} href={nav.href} className={linkStyles}>{nav.label}</Link>
            ) : (
              <a key={nav.href} href={nav.href} target="_blank" rel="noopener noreferrer" className={linkStyles}>{nav.label}</a>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <Button className="hidden sm:flex hover:scale-105 transition-all">
            Contacto
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-75 bg-background flex flex-col p-6">
                <SheetHeader className="border-b border-border pb-4 mb-2">
                  <SheetTitle className="text-left">
                    <div className="text-foreground font-bold text-2xl uppercase tracking-tighter">
                      Arturo<span className="text-primary">.Dev</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                
                <div className="flex flex-col flex-1">
                  {navigationLinks.map((nav) => {
                    const isInternal = !nav.href.startsWith("http");
                    
                    return (
                      <SheetClose asChild key={nav.href}>
                        {isInternal ? (
                          <Link href={nav.href} className={mobileLinkStyles}>
                            {nav.label}
                          </Link>
                        ) : (
                          <a href={nav.href} target="_blank" rel="noopener noreferrer" className={mobileLinkStyles}>
                            {nav.label}
                          </a>
                        )}
                      </SheetClose>
                    );
                  })}
                </div>
                <div className="mt-auto pt-6">
                  <Button className="w-full h-12 text-lg font-bold bg-primary text-primary-foreground hover:brightness-110">
                    Contacto
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;