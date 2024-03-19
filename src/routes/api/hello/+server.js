export function GET(request) {
    // console.log(request);
    const name = request.url.searchParams.get("name") || "World";
    return new Response(`Hello ${name}!`);
}

export async function POST({request}) {
    const name = await request.json();
    console.log(request)
    return new Response();
}