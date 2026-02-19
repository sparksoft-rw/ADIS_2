import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-white p-4">
      <div className="glass-card p-12 rounded-3xl text-center max-w-lg w-full border-white/5">
        <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-destructive" />
        </div>
        
        <h1 className="text-6xl font-bold text-white mb-2">404</h1>
        <h2 className="text-2xl font-semibold mb-4 text-white/90">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link href="/">
          <Button className="bg-primary hover:bg-primary/90 text-white w-full h-12 text-lg">
            <Home className="mr-2 w-5 h-5" /> Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
