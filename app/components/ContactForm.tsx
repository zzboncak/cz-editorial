export default function ContactForm() {
  return (
    <form className="contact-form" id="contact" method="POST">
      <h2>Let's get in touch</h2>
      <input type="text" name="email" id="email" placeholder="Your Email" />
      <textarea
        name="messageBody"
        id="message-body"
        placeholder="Dear Courtney..."
      ></textarea>
      <button type="submit">Email Me</button>
    </form>
  );
}
