import {
  HeadContent,
  Scripts,
  createRootRoute,
  Link,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import appCss from "../styles/styles.scss?url";
import { SERVICE_CATEGORIES } from "#/data/services";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  ),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning={true}>
        <header className="p-4 border-b">
          <nav className="flex gap-4 items-center">
            <Link to="/">Home</Link>
            <div className="flex gap-2">
              {SERVICE_CATEGORIES.map((cat) => (
                <Link
                  key={cat}
                  to="/services/$category"
                  params={{ category: cat }}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </nav>
        </header>
        {children}
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
