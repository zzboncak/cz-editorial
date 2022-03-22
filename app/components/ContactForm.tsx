import { Form } from "remix";

export default function ContactForm({
  transitionState,
}: {
  transitionState: "submitting" | "loading" | "idle";
}) {
  return (
    <Form className="contact-form" id="contact" method="post">
      <h2>Let's get in touch</h2>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Your Email"
        required
      />
      <textarea
        name="messageBody"
        id="message-body"
        placeholder="Dear Courtney..."
        spellCheck="true"
        autoCapitalize="sentences"
        required
      />
      <button
        type="submit"
        disabled={
          transitionState === "loading" || transitionState === "submitting"
        }
      >
        Email Me
      </button>
    </Form>
  );
}
