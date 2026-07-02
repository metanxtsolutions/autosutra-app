import {
  BadgeCheck,
  Bike,
  Camera,
  Car,
  Cloud,
  Database,
  Factory,
  Layers,
  Search,
  MapPin,
  Megaphone,
  MessageCircle,
  PenTool,
  Recycle,
  Share2,
  Target,
  Video,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/data/services";
import type { Solution } from "@/data/solutions";
import type { Industry } from "@/data/industries";

export const serviceIconMap: Record<Service["icon"], LucideIcon> = {
  target: Target,
  megaphone: Megaphone,
  database: Database,
  search: Search,
  share2: Share2,
  mapPin: MapPin,
  messageCircle: MessageCircle,
  penTool: PenTool,
  camera: Camera,
  video: Video,
  layers: Layers,
  cloud: Cloud,
};

export const solutionIconMap: Record<Solution["icon"], LucideIcon> = {
  target: Target,
  megaphone: Megaphone,
  messageCircle: MessageCircle,
  camera: Camera,
  cloud: Cloud,
};

export const industryIconMap: Record<Industry["icon"], LucideIcon> = {
  car: Car,
  bike: Bike,
  zap: Zap,
  recycle: Recycle,
  factory: Factory,
  badgeCheck: BadgeCheck,
};
