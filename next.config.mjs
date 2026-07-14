/** @type {import('next').NextConfig} */
const nextConfig = {
  // SOLUCIÓN: Cambiar directorio de salida a 'dist' (no está en .gitignore)
  distDir: 'dist',
  
  // Configuración para exportación estática (opcional, útil para Render)
  output: 'standalone', // o 'export' si necesitas HTML estático
  
  // Permitir imágenes de cualquier dominio (ajusta según necesites)
  images: {
    unoptimized: true, // Necesario para export estático
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Variables de entorno disponibles en el cliente
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  },
  
  // Headers CORS para el proxy de video
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: '