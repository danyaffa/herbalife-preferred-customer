import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message, type } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const subject =
    type === "member"
      ? "New Member Registration Enquiry – NutriPreferred"
      : "New Preferred Customer Enquiry – NutriPreferred";

  const htmlBody = `
    <h2>${subject}</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Type:</strong> ${type === "member" ? "Independent Herbalife Member" : "Preferred Customer"}</p>
    <hr />
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br />")}</p>
  `;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"NutriPreferred Website" <${process.env.GMAIL_USER}>`,
      to: "leffleryd@gmail.com",
      replyTo: email,
      subject,
      html: htmlBody,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ error: "Failed to send email. Please try again." });
  }
}
