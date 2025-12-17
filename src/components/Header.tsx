import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-lg">C</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-semibold text-foreground leading-tight">Crimson</span>
              <span className="text-[10px] text-muted-foreground tracking-wider uppercase">Education</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-sans text-sm">
                  Admissions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4 grid gap-3">
                    <NavigationMenuLink asChild>
                      <a href="#" className="block p-3 rounded-lg hover:bg-muted transition-colors">
                        <div className="font-semibold text-foreground">US College Admissions</div>
                        <div className="text-sm text-muted-foreground">Expert guidance for Ivy League and top US universities</div>
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#" className="block p-3 rounded-lg hover:bg-muted transition-colors">
                        <div className="font-semibold text-foreground">UK University Admissions</div>
                        <div className="text-sm text-muted-foreground">Oxford, Cambridge and Russell Group support</div>
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#" className="block p-3 rounded-lg hover:bg-muted transition-colors">
                        <div className="font-semibold text-foreground">Graduate School</div>
                        <div className="text-sm text-muted-foreground">MBA, Law School, and Medical School admissions</div>
                      </a>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-sans text-sm">
                  About Crimson
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4 grid gap-3">
                    <NavigationMenuLink asChild>
                      <a href="#" className="block p-3 rounded-lg hover:bg-muted transition-colors">
                        <div className="font-semibold text-foreground">Our Story</div>
                        <div className="text-sm text-muted-foreground">Learn about our mission and values</div>
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#" className="block p-3 rounded-lg hover:bg-muted transition-colors">
                        <div className="font-semibold text-foreground">Our Team</div>
                        <div className="text-sm text-muted-foreground">Meet our expert counselors and mentors</div>
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#" className="block p-3 rounded-lg hover:bg-muted transition-colors">
                        <div className="font-semibold text-foreground">Student Results</div>
                        <div className="text-sm text-muted-foreground">See our track record of success</div>
                      </a>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-sans text-sm">
                  Admission Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4 grid gap-3">
                    <NavigationMenuLink asChild>
                      <a href="#" className="block p-3 rounded-lg hover:bg-muted transition-colors">
                        <div className="font-semibold text-foreground">Blog</div>
                        <div className="text-sm text-muted-foreground">Expert insights and admissions tips</div>
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#" className="block p-3 rounded-lg hover:bg-muted transition-colors">
                        <div className="font-semibold text-foreground">Free Resources</div>
                        <div className="text-sm text-muted-foreground">Guides, checklists, and tools</div>
                      </a>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#events"
                  className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-sans transition-colors hover:bg-muted"
                >
                  Events
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="hidden lg:inline-flex rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans"
            >
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="space-y-4">
              <div className="space-y-2">
                <div className="font-semibold text-foreground px-2">Admissions</div>
                <a href="#" className="block px-4 py-2 text-muted-foreground hover:text-foreground">US College Admissions</a>
                <a href="#" className="block px-4 py-2 text-muted-foreground hover:text-foreground">UK University Admissions</a>
                <a href="#" className="block px-4 py-2 text-muted-foreground hover:text-foreground">Graduate School</a>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-foreground px-2">About Crimson</div>
                <a href="#" className="block px-4 py-2 text-muted-foreground hover:text-foreground">Our Story</a>
                <a href="#" className="block px-4 py-2 text-muted-foreground hover:text-foreground">Our Team</a>
              </div>
              <a href="#events" className="block px-2 py-2 font-semibold text-foreground">Events</a>
              <Button className="w-full rounded-full bg-primary text-primary-foreground">Get Started</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
