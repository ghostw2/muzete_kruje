import type { GalleryImage } from "@/types";
import { galleryImages } from "@/data/gallery";

export function getGalleryImages(category?: GalleryImage["category"]): GalleryImage[] {
  if (!category) return galleryImages;
  return galleryImages.filter((img) => img.category === category);
}
