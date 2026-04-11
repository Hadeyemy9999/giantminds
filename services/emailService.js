const nodemailer = require('nodemailer');

const toEmail = (process.env.EMAIL_TO || 'giantminds3@gmail.com').split(',').map(e => e.trim());

// Candidate email transporter
const candidateTransporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER_CANDIDATE,
    pass: process.env.SMTP_PASS_CANDIDATE,
  },
});

// Partner email transporter
const partnerTransporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER_PARTNER,
    pass: process.env.SMTP_PASS_PARTNER,
  },
});

if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER_CANDIDATE || !process.env.SMTP_PASS_CANDIDATE) {
  console.warn('WARNING: Candidate SMTP environment variables are not fully configured.');
}

if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER_PARTNER || !process.env.SMTP_PASS_PARTNER) {
  console.warn('WARNING: Partner SMTP environment variables are not fully configured.');
}

function buildCandidateBody({ name, email, phone, career_field, career_goals }) {
  return {
    subject: 'Your Breakthrough Starts Here We welcome you to the Giant Minds System',
    text: `Dear ${name},\n\nSuccess isn't an accident; it's the result of a System\n\nThank you for submitting your application to Giant Minds Enterprise. By taking this initiative, you have moved from a "Job Seeker" to a "Strategic Asset" in our database.\n\nWhat Happens Next?\nOur internal vetting system is now reviewing your profile. We don't just look at CVs; we look for Breakthrough Potential—the ability to engineer solutions and drive excellence.\n\n1. Vetting: Our team will categorize your skills within our High-Impact tiers.\n2. Matching: If your profile aligns with our current corporate or government projects (including our upcoming Legacy Series), a Senior Consultant will reach out for a preliminary briefing.\n3. Growth: In the meantime, ensure your digital presence reflects the Giant Mind standard.\n\nWelcome to the economy engine. We don't just find jobs; we build careers.\n\nBuild the System. Fuel the Breakthrough.\n\nBest regards,\nThe Admissions Team\nGiant Minds Enterprise\nhttp://www.giantmindsenterprise.com`,
    html: `<p>Dear ${name},</p>
<p>Success isn't an accident; it's the result of a System.</p>
<p>Thank you for submitting your application to <strong>Giant Minds Enterprise</strong>. By taking this initiative, you have moved from a <em>Job Seeker</em> to a <strong>Strategic Asset</strong> in our database.</p>
<p><strong>What Happens Next?</strong><br>
Our internal vetting system is now reviewing your profile. We don't just look at CVs; we look for <strong>Breakthrough Potential</strong>—the ability to engineer solutions and drive excellence.</p>
<ul>
  <li><strong>Vetting:</strong> Our team will categorize your skills within our High-Impact tiers.</li>
  <li><strong>Matching:</strong> If your profile aligns with our current corporate or government projects (including our upcoming <em>Legacy Series</em>), a Senior Consultant will reach out for a preliminary briefing.</li>
  <li><strong>Growth:</strong> In the meantime, ensure your digital presence reflects the Giant Mind standard.</li>
</ul>
<p>Welcome to the <em>economy engine</em>. We don't just find jobs; we build careers.</p>
<p><strong>Build the System. Fuel the Breakthrough.</strong></p>
<p>Best regards,<br>
The Admissions Team<br>
Giant Minds Enterprise<br>
<a href="http://www.giantmindsenterprise.com">www.giantmindsenterprise.com</a></p>`,
  };
}

function buildPartnerBody({ name, company, email, partner_type, needs }) {
  return {
    subject: 'Strategic Partnership Initiated | Giant Minds Enterprise',
    text: `Attn: ${company || name},\n\nEfficiency is the only currency in high-level administration.\n\nThank you for reaching out to Giant Minds Enterprise. We have received your inquiry regarding our Systems Engineering and Strategic Recruitment services.\n\nAt Giant Minds, we solve the two biggest problems in the modern workplace: System Failure and Mediocre Hiring. Whether you are looking to audit your internal workflows or secure a Breakthrough Hire for a critical role, we provide the infrastructure to make it happen.\n\nOur Next Steps:\n- A Principal Consultant (Office of Idris Yusuf Snipes) will review your requirements within the next 24 hours.\n- We will prepare a Draft Capability Brief tailored to your specific organizational needs.\n- We may request a brief 10-minute discovery call to align our Narrative Engineering with your long-term goals.\n\nWe look forward to building a system that works for you.\n\nFueling Your Next Breakthrough.\n\nBest regards,\nThe Operations Desk\nGiant Minds Enterprise\nhttp://www.giantmindsenterprise.com`,
    html: `<p>Attn: ${company || name},</p>
<p><strong>Efficiency is the only currency in high-level administration.</strong></p>
<p>Thank you for reaching out to <strong>Giant Minds Enterprise</strong>. We have received your inquiry regarding our <em>Systems Engineering</em> and <em>Strategic Recruitment</em> services.</p>
<p>At Giant Minds, we solve the two biggest problems in the modern workplace: <strong>System Failure</strong> and <strong>Mediocre Hiring</strong>. Whether you are looking to audit your internal workflows or secure a <em>Breakthrough Hire</em> for a critical role, we provide the infrastructure to make it happen.</p>
<p><strong>Our Next Steps:</strong></p>
<ul>
  <li>A Principal Consultant (Office of Idris Yusuf Snipes) will review your requirements within the next 24 hours.</li>
  <li>We will prepare a Draft Capability Brief tailored to your specific organizational needs.</li>
  <li>We may request a brief 10-minute discovery call to align our Narrative Engineering with your long-term goals.</li>
</ul>
<p>We look forward to building a system that works for you.</p>
<p><strong>Fueling Your Next Breakthrough.</strong></p>
<p>Best regards,<br>
The Operations Desk<br>
Giant Minds Enterprise<br>
<a href="http://www.giantmindsenterprise.com">www.giantmindsenterprise.com</a></p>`,
  };
}

async function sendCandidateEmail(payload) {
  const { subject, text, html } = buildCandidateBody(payload);

  // Send welcome email to candidate
  const candidateEmail = {
    from: process.env.SMTP_USER_CANDIDATE,
    to: payload.email, // Send to candidate's email
    replyTo: process.env.SMTP_USER_CANDIDATE,
    subject,
    text,
    html,
  };

  // Send data email to admissions
  const admissionsEmail = {
    from: process.env.SMTP_USER_CANDIDATE,
    to: toEmail,
    replyTo: payload.email,
    subject: 'New Candidate Application - ' + payload.name,
    text: `New candidate application received:

Name: ${payload.name}
Email: ${payload.email}
Phone: ${payload.phone}
Desired field: ${payload.career_field}
Career goals: ${payload.career_goals}`,
    html: `<h3>New Candidate Application</h3>
<p><strong>Name:</strong> ${payload.name}</p>
<p><strong>Email:</strong> ${payload.email}</p>
<p><strong>Phone:</strong> ${payload.phone}</p>
<p><strong>Desired field:</strong> ${payload.career_field}</p>
<p><strong>Career goals:</strong> ${payload.career_goals}</p>`,
    attachments: [
      {
        filename: payload.file.originalname,
        content: payload.file.buffer,
      },
    ],
  };

  // Send both emails using candidate transporter
  await candidateTransporter.sendMail(candidateEmail);
  await candidateTransporter.sendMail(admissionsEmail);
}

async function sendPartnerEmail(payload) {
  const { subject, text, html } = buildPartnerBody(payload);
  const attachments = [];

  if (payload.file) {
    attachments.push({
      filename: payload.file.originalname,
      content: payload.file.buffer,
    });
  }

  // Send welcome email to partner
  const partnerEmail = {
    from: process.env.SMTP_USER_PARTNER,
    to: payload.email, // Send to partner's email
    replyTo: process.env.SMTP_USER_PARTNER,
    subject,
    text,
    html,
  };

  // Send data email to admissions
  const admissionsEmail = {
    from: process.env.SMTP_USER_PARTNER,
    to: toEmail,
    replyTo: payload.email,
    subject: 'New Partner Inquiry - ' + payload.name,
    text: `New partner inquiry received:

Name: ${payload.name}
Company: ${payload.company}
Email: ${payload.email}
Partner type: ${payload.partner_type}
Needs: ${payload.needs}`,
    html: `<h3>New Partner Inquiry</h3>
<p><strong>Name:</strong> ${payload.name}</p>
<p><strong>Company:</strong> ${payload.company}</p>
<p><strong>Email:</strong> ${payload.email}</p>
<p><strong>Partner type:</strong> ${payload.partner_type}</p>
<p><strong>Needs:</strong> ${payload.needs}</p>`,
    attachments,
  };

  // Send both emails using partner transporter
  await partnerTransporter.sendMail(partnerEmail);
  await partnerTransporter.sendMail(admissionsEmail);
}

module.exports = {
  sendCandidateEmail,
  sendPartnerEmail,
};
