export function GET(request) {
  const token = request.headers.get("x-admin-token");
  if (token === process.env.ADMIN_TOKEN) {
    return Response.json({ ok: true });
  }
  return Response.json({ error: "No autorizado" }, { status: 401 });
}
