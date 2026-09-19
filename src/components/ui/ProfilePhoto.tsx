"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

const nameParts = siteConfig.name.split(" ");
const initials = `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`.toUpperCase();

/**
 * Reserva o espaço para a foto profissional. Enquanto `public/profile.jpg`
 * não existir, cai graciosamente para um avatar com as iniciais — basta
 * colocar o arquivo em public/profile.jpg para a foto real aparecer aqui.
 */
export function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-accent/40 bg-gradient-to-br from-surface to-bg shadow-lg shadow-black/30 sm:h-32 sm:w-32">
      {!failed ? (
        <Image
          src="/profile.jpg"
          alt={`Foto de ${siteConfig.name}`}
          fill
          sizes="128px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center font-display text-3xl font-bold text-accent">
          {initials}
        </div>
      )}
    </div>
  );
}
