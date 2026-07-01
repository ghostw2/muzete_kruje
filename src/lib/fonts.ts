import { Cinzel, Lora, Inter } from "next/font/google";

// Cinzel — carved Roman inscriptional letterforms, exactly matching the museum plaque
export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

// Lora — elegant book serif for captions and pull-quotes
export const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-caption",
  display: "swap",
});

// Inter — clean humanist sans for body text and UI
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});
