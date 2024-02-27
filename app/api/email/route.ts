import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { name, email, phone, company, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: "sastra.network",
    port: 587,
    secure: false,
    auth: {
      user: "noc@sastranetwork.com",
      pass: "Sku11C@ndy@777",
    },
  });

  const mailOptions: Mail.Options = {
    from: "noc@sastranetwork.com",
    to: "noc@sastranetwork.com",
    subject: `A query from customer through website`,
    text: `Customer Details\nName: ${name}\nEmail: ${email}\nPhone no: ${phone}\nCompany: ${company}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Success!", status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed!", status: 500 });
  }
}
