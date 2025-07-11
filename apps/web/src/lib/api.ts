import type { AppType } from "@webun/api";

import { hc } from "hono/client";

const api = hc<AppType>("/api");

export default api;
