export async function GET() {
  return new Response(
    "google-site-verification: googlec016a09ca616f3e4.html",
    { headers: { "Content-Type": "text/html" } }
  );
}
