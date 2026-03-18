import {
  Briefcase,
  Building2,
  CreditCard,
  Database,
  Globe,
  Megaphone,
  Palette,
  ShieldCheck,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Smartphone,
  Globe,
  CreditCard,
  Database,
  Palette,
  Briefcase,
  Building2,
  ShieldCheck,
  Wrench,
  Megaphone,
};

export function IconMap({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? Globe;
  return <Icon className={className} />;
}
