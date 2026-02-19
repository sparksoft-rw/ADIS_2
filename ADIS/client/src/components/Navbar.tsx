import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import logo from "@assets/A.D.I.S_Logo_1771540029193.png";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full group-hover:bg-primary/40 transition-all" />
                <img src={logo} alt="A.D.I.S Logo" className="h-10 w-auto relative z-10" />
              </div>
              <span className="font-display font-bold text-xl tracking-wider text-white hidden sm:block">
                A.D.I.S
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 bg-secondary/30 px-6 py-2 rounded-full border border-white/5 backdrop-blur-sm">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <span
                    className={`cursor-pointer text-sm font-medium transition-colors hover:text-primary ${
                      isActive(link.href) ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>

            {user ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span className="hidden lg:inline">{user.firstName || user.email}</span>
                </div>
                <Button 
                  onClick={() => logout()} 
                  variant="outline" 
                  size="sm"
                  className="border-primary/20 hover:border-primary hover:bg-primary/10 hover:text-primary"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button 
                onClick={() => window.location.href = "/api/login"}
                className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
              >
                Client Login
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <span 
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium cursor-pointer block ${
                      isActive(link.href) ? "text-primary" : "text-white/80"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              {user ? (
                <Button 
                  onClick={() => { logout(); setIsOpen(false); }} 
                  variant="outline" 
                  className="w-full justify-center"
                >
                  Sign Out
                </Button>
              ) : (
                <Button 
                  onClick={() => window.location.href = "/api/login"}
                  className="w-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                >
                  Client Login
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
