import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muzeu Historik dhe Etnografik, Krujë",
  description: "Historical and Ethnographic Museum of Krujë, Albania",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
