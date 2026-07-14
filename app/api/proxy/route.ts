// app/api/proxy/route.ts (App Router)
// o pages/api/proxy.ts (Pages Router)

import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url');
  
  if (!url) {
    return NextResponse.json(
      { error: 'URL no proporcionada' }, 
      { status: 400 }
    );
  }

  console.log(`[PROXY] Solicitando: ${url.substring(0, 100)}...`);

  try {
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
      timeout: 30000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': '*/*',
        'Referer': 'https://www.google.com/',
      },
      maxRedirects: 5,
    });

    // Crear respuesta con los datos binarios
    const nextResponse = new NextResponse(response.data, {
      status: 200,
      headers: {
        'Content-Type': response.headers['content-type'] || 'text/html',
        'Cache-Control': 'public, max-age=3600',
      },
    });

    console.log(`[PROXY] Éxito: ${response.status} - ${url.substring(0, 50)}...`);
    return nextResponse;

  } catch (error: any) {
    console.error(`[PROXY] Error: ${error.message}`);
    
    return NextResponse.json(
      { 
        error: 'Error al obtener el contenido',
        message: error.message,
        code: error.code 
      }, 
      { status: 502 }
    );
  }
}