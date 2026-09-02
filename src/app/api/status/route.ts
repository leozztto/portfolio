import { NextResponse } from "next/server";

// GET /api/status
// Endpoint real, consumido pelo terminal no hero da página.
// Troque os valores abaixo pelos seus dados reais.
export async function GET() {

  return NextResponse.json(
    {
      status: "online",
      name: "Leandro Menegazzo Franceschetto",
      role: "Senior Software Engineer — Back-End",
      location: "Pato Branco, Paraná, Brasil",
      stack: ["Java", "Kotlin", "Spring Boot", "Kafka", "Docker", "Kubernetes", "AWS"],
      experience_time: "10 years",
      available_for: "novos projetos e oportunidades",
      contact: "leozztto@gmail.com",
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}
