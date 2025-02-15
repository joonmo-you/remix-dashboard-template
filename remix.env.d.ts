/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

import type { AuthService, ItemsService } from "./app/services";

declare module "@remix-run/server-runtime" {
  export interface AppLoadContext {
    services: {
      auth: AuthService;
      items: ItemsService;
    };
  }
}
