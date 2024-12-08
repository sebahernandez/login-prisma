"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ProtectedPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/auth/signin");
  };

  // Mostrar un indicador de carga mientras se verifica la sesión
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Cargando...</p>
      </div>
    );
  }

  // Mostrar mensaje de acceso denegado si el usuario no está autenticado
  if (status === "unauthenticated") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">
          Acceso denegado. Inicia sesión para acceder.
        </p>
      </div>
    );
  }

  // Mostrar contenido protegido si el usuario está autenticado
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {session && (
        <p className="text-xl font-bold">Bienvenido, {session.user?.email}!</p>
      )}
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Cerrar Sesión
      </button>
    </div>
  );
}
