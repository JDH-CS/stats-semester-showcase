import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  delay?: number;
}

export const SectionCard = ({ title, description, icon: Icon, href, delay = 0 }: SectionCardProps) => {
  const content = (
    <div
      className={cn(
        "group relative bg-card rounded-lg border border-border p-6 hover-lift cursor-pointer",
        "transition-all duration-300 hover:border-primary/30 hover:shadow-soft"
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0,
        animation: `fadeInUp 0.6s ease-out ${delay}ms forwards`
      }}
    >
      {/* Icon */}
      <div className="mb-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-6 w-6" />
        </div>
      </div>

      {/* Content */}
      <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Arrow indicator */}
      {href && (
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-primary text-xl">→</span>
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link to={href}>{content}</Link>;
  }

  return content;
};
