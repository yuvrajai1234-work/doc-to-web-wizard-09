import { Button } from "@/components/ui/button";
import { 
  Github, 
  Twitter, 
  Instagram, 
  Mail,
  Heart,
  Target
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold gradient-hero bg-clip-text text-transparent">
                HabitFlow
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Transform your daily routines into powerful habits with AI-powered insights 
              and community support.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">API</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Mobile App</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">About</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Status</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-muted/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} HabitFlow. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for habit builders worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};