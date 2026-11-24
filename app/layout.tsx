import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "LASAF IMMOBILIER | Rêver grand, investir malin", description: "Terrains, maisons et services immobiliers en Côte d'Ivoire." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body>{children}</body></html>; }
