import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Designed with <Heart className="h-4 w-4 text-red-500 fill-current" /> for the students and faculty of LUBNA GBSS
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2">
            Created by Muhammad Younis Channa PST-B-14
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;