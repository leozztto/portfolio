import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

const title = "Leandro Menegazzo Franceschetto — Senior Software Engineer, Back-End";
const description =
  "Portfólio de Leandro Menegazzo Franceschetto, engenheiro de software sênior especializado em back-end: Java, Spring Boot, Kafka, Kubernetes e arquitetura de sistemas distribuídos.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  authors: [{ name: siteConfig.name }],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={``}>
      <body className="bg-bg text-text font-body antialiased">{children}</body>
    </html>
  );
}
