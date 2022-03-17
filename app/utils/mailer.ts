import nodemailer from "nodemailer";
import xss from "xss";

function generateEmailHtml(email: string, messageBody: string): string {
  return `
    <h1>Someone submitted the form on your website</h1>
    <p>Their email is: <a href="mailto:${xss(email)}">${xss(email)}</a></p>

    <h3>Their message</h3>
    <p>${xss(messageBody)}</p>
  `;
}

export async function sendEmail(options: {
  email: string;
  messageBody: string;
}) {
  const account = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT!),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await account.sendMail({
    to: process.env.SMTP_USER,
    from: process.env.SMTP_USER,
    html: generateEmailHtml(options.email, options.messageBody),
    subject: "Your web form has been submitted"
  });
}
