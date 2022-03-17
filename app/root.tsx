import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction, ActionFunction } from "remix";
import { sendEmail } from "./utils/mailer";

export const meta: MetaFunction = () => {
  return { title: "CZ Editorial" };
};

export const action: ActionFunction = async ({ request }) => {
  let body = await request.formData();
  const email = body.get("email");
  const messageBody = body.get("messageBody");
  console.log("email", email);
  console.log("messageBody", messageBody);
  await sendEmail({
    email: email as string,
    messageBody: messageBody as string
  });
  return null;
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
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
