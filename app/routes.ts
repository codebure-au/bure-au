import {
   type RouteConfig,
   index,
   layout,
   route,
   prefix,
} from "@react-router/dev/routes";

export default [
   layout("routes/layout.tsx", [
      index("routes/index.tsx"),
      route("support", "routes/support.tsx"),
      ...prefix("apps", [
         index("routes/apps/index.tsx"),
         route("freecell", "routes/apps/freecell.tsx"),
      ]),
      ...prefix("policies", [
         index("routes/policies/index.tsx"),
         route("privacy", "routes/policies/privacy.tsx"),
      ]),
   ]),
] satisfies RouteConfig;
