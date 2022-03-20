export default function ContactForm() {
  return (
    <form className="contact-form" id="contact" method="POST">
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
        required
      />
      <button type="submit">Email Me</button>
    </form>
  );
}
