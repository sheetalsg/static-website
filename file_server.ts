import { serveFile } from "https://deno.land/std@0.140.0/http/file_server.ts";
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

const port = 8001; // Choose a port number

serve(async (req) => {
  const url = new URL(req.url);
  return await serveFile(req, url.pathname === "/" ? "index.html" : url.pathname);
}, { port });

console.log(`HTTP web server running. Access it at: http://localhost:${port}/`);
