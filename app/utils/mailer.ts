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
  const testAccount = await nodemailer.createTestAccount();
  // Just use a test account when in development
  const account =
    process.env.NODE_ENV === "development"
      ? nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass // generated ethereal password
          }
        })
      : nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: 587,
          secure: false,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
          }
        });
  return await account.sendMail({
    to: process.env.SMTP_USER,
    from: process.env.SMTP_USER,
    html: generateEmailHtml(options.email, options.messageBody),
    subject: "Your web form has been submitted"
  });
}
