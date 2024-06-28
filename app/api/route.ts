export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
    const res = await fetch(request.url, {
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY!,
        },
    })
    const data = await res.json()

    return Response.json({ data })
}
export async function POST(params: Request) { }