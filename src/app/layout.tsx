"use client";

import { SessionProvider } from "next-auth/react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Es recomendable agregar etiquetas meta u otras optimizaciones aquí */}
      </head>
      <body>
        {/* Proveedor de sesiones para manejar autenticación */}
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
