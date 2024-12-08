import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/signin", // Redirige a esta ruta si no hay sesión
  },
});

export const config = {
  matcher: ["/protected/:path*"], // Aplica el middleware a todas las rutas bajo `/protected`
};
