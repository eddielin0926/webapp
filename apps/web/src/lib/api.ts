import type { AppType } from "@webapp/api";

import { hc } from "hono/client";

const api = hc<AppType>("/api");

export default api;
