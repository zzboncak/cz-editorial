import Topbar from "~/components/Topbar";
import globalStyles from "~/styles/global.css";
import topbarStyles from "~/styles/topbar.css";
import landingStyles from "~/styles/landing.css";
import { useTransition } from "remix";
import type { LinksFunction, ActionFunction } from "remix";
import CZEditorialLogo from "~/images/cz-editorial.svg";
import ContactForm from "~/components/ContactForm";
import { sendEmail } from "~/utils/mailer";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: topbarStyles
    },
    {
      rel: "stylesheet",
      href: globalStyles
    },
    {
      rel: "stylesheet",
      href: landingStyles
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png"
    },
    {
      rel: "manifest",
      href: "/site.webmanifest"
    }
  ];
};

export const action: ActionFunction = async ({ request }) => {
  let body = await request.formData();
  const email = body.get("email");
  const messageBody = body.get("messageBody");
  await sendEmail({
    email: email as string,
    messageBody: messageBody as string
  });
  return null;
};

export default function Index() {
  const transition = useTransition();

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Topbar />
      <img src={CZEditorialLogo} alt="CZ Editorial Logo" className="cz-logo" />
      <section className="skills" id="skills">
        <p>Proofreading</p>
        <p>Copyediting</p>
        <p>Researching</p>
      </section>
      <section className="about-me" id="about">
        <h2>Hi, my name is Courtney</h2>
        <p>And I'm here to make sure your work looks its best.</p>
        <p>
          I have a B.S. in Biblical & Theological Studies from Wheaton College
          and a M.A. in Theology from Talbot School of Theology.
        </p>
        <p>
          I have years of experience working with biblical scholars from working
          in the Ph.D. office at Wheaton College.
        </p>
      </section>
      <section>
        <ContactForm transitionState={transition.state} />
      </section>
    </main>
  );
}
