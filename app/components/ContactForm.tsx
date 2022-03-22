import { useEffect } from "react";
import { Form } from "remix";

export default function ContactForm({
  transitionState,
}: {
  transitionState: "submitting" | "loading" | "idle";
}) {
  // If the value of transitionState changes to idle, clear the values
  useEffect(() => {
    if (transitionState === "idle") {
      (document.getElementById("email") as HTMLInputElement).value = "";
      (document.getElementById("message-body") as HTMLInputElement).value = "";
    }
  }, [transitionState]);

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
