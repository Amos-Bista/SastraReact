// pages/api/contact.ts

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
      host: 'sastra.network', // e.g., 'smtp.example.com'
      port: "tls587", // or your outgoing port
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'noc@sastranetwork.com',
        pass: 'Sku11C@ndy@777',
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: 'your_email@example.com',
        to: 'recipient@example.com',
        subject: 'New Contact Form Submission',
        text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
