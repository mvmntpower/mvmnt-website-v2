import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
  name,
  email,
  phone,
  address,
  project,
  timeline,
  budget,
  contactMethod,
  bestTime,
  message,
} = await req.json();

    await resend.emails.send({
      from: "MVMNT Website <onboarding@resend.dev>",
      to: "mvmntpower@outlook.com",
      subject: "New Estimate Request",
      html: `
  <h2>🏡 New MVMNT Estimate Request</h2>

  <hr>

  <p><strong>Name:</strong> ${name}</p>

  <p><strong>Email:</strong> ${email}</p>

  <p><strong>Phone:</strong> ${phone}</p>

  <p><strong>Project Address:</strong> ${address}</p>

  <p><strong>Project Type:</strong> ${project}</p>

  <p><strong>Desired Start Time:</strong> ${timeline}</p>

  <p><strong>Estimated Budget:</strong> ${budget}</p>

  <p><strong>Preferred Contact:</strong> ${contactMethod}</p>

  <p><strong>Best Time to Contact:</strong> ${bestTime}</p>

  <hr>

  <h3>Project Description</h3>

  <p>${message}</p>
`,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}