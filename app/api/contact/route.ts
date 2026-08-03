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

    const submitted = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
    });

    // Email sent to MVMNT LLC
    await resend.emails.send({
      from: "MVMNT LLC <info@mvmnt.llc>",
      to: "info@mvmnt.llc",
      replyTo: email,
      subject: `New ${project} Estimate Request - ${name}`,

      html: `
      <div style="max-width:700px;margin:auto;padding:40px;font-family:Arial,Helvetica,sans-serif;color:#333;background:#ffffff;">

        <h1 style="margin:0;color:#d4af37;">
          MVMNT LLC
        </h1>

        <p style="margin-top:6px;color:#777;">
          New Estimate Request Submitted
        </p>

        <hr style="margin:30px 0;">

        <table style="width:100%;border-collapse:collapse;">

          <tr>
            <td style="padding:10px;font-weight:bold;width:220px;">Customer</td>
            <td>${name}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Email</td>
            <td>
              <a href="mailto:${email}">
                ${email}
              </a>
            </td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Phone</td>
            <td>
              <a href="tel:${phone}">
                ${phone}
              </a>
            </td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Project Address</td>
            <td>${address}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Project Type</td>
            <td>${project}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Desired Timeline</td>
            <td>${timeline}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Estimated Budget</td>
            <td>${budget}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Preferred Contact</td>
            <td>${contactMethod}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Best Time</td>
            <td>${bestTime}</td>
          </tr>

        </table>

        <hr style="margin:30px 0;">

        <h2 style="margin-bottom:15px;">
          Project Description
        </h2>

        <div style="
          background:#f7f7f7;
          border-left:5px solid #d4af37;
          padding:20px;
          border-radius:8px;
          white-space:pre-wrap;
          line-height:1.8;
        ">
${message}
        </div>

        <hr style="margin:30px 0;">

        <p>
          <strong>Submitted:</strong><br>
          ${submitted}
        </p>

        <p style="font-size:13px;color:#888;">
          Submitted from https://mvmnt.llc
        </p>

      </div>
      `,
    });

    // Confirmation email sent to customer
    await resend.emails.send({
      from: "MVMNT LLC <info@mvmnt.llc>",
      to: email,
      replyTo: "info@mvmnt.llc",
      subject: "We've Received Your Estimate Request",

      html: `
      <div style="max-width:700px;margin:auto;padding:40px;font-family:Arial,Helvetica,sans-serif;color:#333;background:#ffffff;">

        <h1 style="margin:0;color:#d4af37;">
          Thank You for Contacting MVMNT LLC
        </h1>

        <p style="font-size:18px;">
          Hello <strong>${name}</strong>,
        </p>

        <p style="line-height:1.8;">
          Thank you for requesting a free estimate.
          We appreciate the opportunity to help with your home improvement project.
        </p>

        <p style="line-height:1.8;">
          Our team has successfully received your information and will review your request shortly.
          We strive to respond as quickly as possible—typically within one business day.
        </p>

        <div style="
          background:#f7f7f7;
          border-left:5px solid #d4af37;
          padding:20px;
          border-radius:8px;
          margin:30px 0;
        ">

          <strong>Your Request</strong>

          <p style="margin-top:15px;">
            Project: ${project}<br>
            Timeline: ${timeline}<br>
            Budget: ${budget}
          </p>

        </div>

        <p>
          If your project is urgent, feel free to contact us directly.
        </p>

        <hr style="margin:35px 0;">

        <h3 style="margin-bottom:8px;">
          MVMNT LLC
        </h3>

        <p>
          🌐 https://mvmnt.llc
        </p>

        <p>
          ✉️ info@mvmnt.llc
        </p>

        <p>
          📞 (240) 284-6484
        </p>

        <br>

        <p style="font-size:13px;color:#888;">
          Premium Kitchen Remodeling • Bathroom Renovations • Basement Finishing • Flooring • Complete Home Transformations
        </p>

      </div>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: "Unable to send email.",
      },
      {
        status: 500,
      }
    );
  }
}