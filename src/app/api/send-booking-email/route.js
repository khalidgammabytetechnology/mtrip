import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, message, bookingItem } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465, // 587 bhi use ho sakta hai
      secure: true, // 465 ke liye true
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL, // admin ko bhejna
      subject: "New Inquiry From Website",
      html: `
        <h3>New Inquiry Details</h3>
        <p><strong>Booking For:</strong> ${bookingItem || "Mtrip"}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });

  } catch (error) {
    console.error("Email send error:", error.message, error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
