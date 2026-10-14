/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
        destination: 'https://www.segingenieria.com/:path*',
        permanent: true,
      },

      // --- Links viejos de reportes publicados en redes (web anterior) ---
      {
        source: '/2026/04/15/marzo-2023-la-matriz-energetica-de-uruguay-sigue-cambiando',
        destination: '/indicadores/marzo-2026',
        permanent: true,
      },
      {
        source: '/2026/03/16/febrero-2026-el-rapido-avance-de-la-movilidad-electrica-en-uruguay',
        destination: '/indicadores/febrero-2026',
        permanent: true,
      },
      {
        source: '/2026/02/16/enero-2026-la-era-de-la-electricidad-y-la-transformacion-del-sistema-electrico',
        destination: '/indicadores/enero-2026',
        permanent: true,
      },
      {
        source: '/2026/01/15/diciembre-2025-destacados-energeticos-de-uruguay-en-2025',
        destination: '/indicadores/diciembre-2025',
        permanent: true,
      },
      {
        source: '/2025/12/15/noviembre-2025-el-rol-del-hidrogeno-verde-en-la-descarbonizacion-del-transporte-pesado',
        destination: '/indicadores/noviembre-2025',
        permanent: true,
      },
      {
        source: '/2025/11/14/octubre-2025-la-nueva-fase-de-expansion-del-gas-natural-licuado',
        destination: '/indicadores/octubre-2025',
        permanent: true,
      },
      {
        source: '/2025/10/18/setiembre-2025-balance-nacional-en-energia-util-del-sector-residencial-2023',
        destination: '/indicadores/setiembre-2025',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
