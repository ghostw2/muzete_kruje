import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qendra Muzeore Krujë",
  description: "Qendra Muzeore Krujë — Muzeu Kombëtar Gjergj Kastrioti Skënderbeu dhe Muzeu Kombëtar Etnografik Krujë",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
