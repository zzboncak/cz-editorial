import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return {
    title: "CZ Editorial - Freelance Copyeditor and Proofreader",
    description:
      "Professional Copyediting and Proofreading services by Courtney Zboncak"
  };
};

export default function App() {
  console.log("%c Hey there 👋", "font-size: 30px;");
  console.log(
    `%c If you're reading this, you probably know a thing or two about web development. 
    My name is Zack Zboncak, and I built this site for my wife, who is a boss copyeditor and proofreader. 
    If you ever want to talk web development, or have any web development needs, feel free to reach out to me at zachary.zboncak@gmail.com.
    You can find me on Twitter at @zzdevelops, and on GitHub at https://github.com/zzboncak.`,
    "line-height: 1.5; font-size: 14px;"
  );
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="theme-color"
          content="#d9e8e6"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          name="theme-color"
          content="#d9e8e6"
          media="(prefers-color-scheme: light)"
        />
        <Meta />
        <Links />
        {process.env.NODE_ENV === "development" ? null : (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=UA-226836789-1`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-226836789-1');
              `
              }}
            />
          </>
        )}
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
