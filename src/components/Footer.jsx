import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 mt-8">
      <div className="container mx-auto px-4 py-8 flex flex-wrap justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} A.Mostakir. All rights reserved.
        </p>
        <a
          href="#hero"
          className="p-2.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
