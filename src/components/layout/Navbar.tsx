import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logoFiec from "@/assets/logo-fiec.png";
import logoUp from "@/assets/logo-up.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Conceptos", href: "/conceptos" },
  {
    label: "Encuestas",
    href: "/encuestas",
    submenu: [
      { label: "Puntos de Acceso a Internet", href: "/encuestas/internet" },
      { label: "Computación Cuántica", href: "/encuestas/cuantica" },
    ],
  },
  { label: "Gráficos", href: "/graficos" },
  { label: "Sobre Nosotros", href: "/about" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full glass-effect border-b border-border/50">
      <nav className="container-wide">
        <div className="flex h-16 items-center justify-between">
          {/* Logos */}
          <Link to="/" className="flex items-center gap-3 hover-lift">
            <img src={logoUp} alt="Universidad de Panamá" className="h-10 w-auto" />
            <img src={logoFiec} alt="FIEC" className="h-10 w-auto" />
            <div className="hidden sm:block">
              <p className="text-sm font-heading font-bold text-foreground leading-tight">
                Probabilidad y Estadística
              </p>
              <p className="text-xs text-muted-foreground">FIEC 2025</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "font-body text-sm font-medium transition-colors",
                            isActive(item.href) && "text-primary"
                          )}
                        >
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="w-64 p-2">
                            {item.submenu.map((subItem) => (
                              <li key={subItem.label}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={subItem.href}
                                    className={cn(
                                      "block rounded-md px-4 py-2.5 text-sm font-body transition-colors hover:bg-accent",
                                      isActive(subItem.href) && "bg-accent text-primary"
                                    )}
                                  >
                                    {subItem.label}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className={cn(
                          "inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-body font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none",
                          isActive(item.href) && "text-primary"
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border animate-fade-in">
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    onClick={() => !item.submenu && setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-2.5 text-sm font-body font-medium transition-colors hover:bg-accent rounded-md",
                      isActive(item.href) && "text-primary bg-accent"
                    )}
                  >
                    {item.label}
                    {item.submenu && <ChevronDown className="h-4 w-4" />}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors",
                            isActive(subItem.href) && "text-primary bg-accent"
                          )}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
