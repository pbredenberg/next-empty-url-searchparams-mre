import { type NextRequest } from 'next/server';

export const dynamic = 'force-static';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const example = searchParams.get('example');

  console.log(request.nextUrl.searchParams);

  if (!example) {
    return Response.json(
      { items: [], message: 'No example provided.' },
      {
        status: 403,
      }
    );
  }

  return Response.json({ items: [] });
}
