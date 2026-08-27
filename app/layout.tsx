import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leandro Menegazzo Franceschetto — Senior Software Engineer, Back-End",
  description:
    "Portfólio de Leandro Menegazzo Franceschetto, engenheiro de software sênior especializado em back-end: Java, Spring Boot, Kafka, Kubernetes e arquitetura de sistemas distribuídos.",
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
