/**
 * Serverless function to handle email signups
 * Deploy to Vercel, Netlify, or AWS Lambda
 * 
 * For Vercel: Place in /api/subscribe.js
 * For Netlify: Place in /functions/subscribe.js
 */

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  // Validate email
  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    // Option 1: Store in a database (requires setup)
    // await saveToDatabase(email);

    // Option 2: Send email via SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sendViaSendGrid(email);
    }

    // Option 3: Send email via Resend
    if (process.env.RESEND_API_KEY) {
      await sendViaResend(email);
    }

    // Option 4: Store in a spreadsheet via Zapier webhook
    if (process.env.ZAPIER_WEBHOOK_URL) {
      await notifyZapier(email);
    }

    return res.status(200).json({ 
      success: true,
      message: 'Successfully joined the waitlist!' 
    });
  } catch (error) {
    console.error('Error processing signup:', error);
    return res.status(500).json({ error: 'Failed to process signup' });
  }
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// SendGrid integration
async function sendViaSendGrid(email) {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  await sgMail.send({
    to: email,
    from: process.env.SENDER_EMAIL || 'noreply@aeqio.dev',
    subject: 'Welcome to Aeqio Waitlist',
    html: `
      <h2>Welcome to Aeqio!</h2>
      <p>Thank you for joining the waitlist for Aeqio - Universal Browser Automation Pipeline.</p>
      <p>We'll send you updates about:</p>
      <ul>
        <li>Product development progress</li>
        <li>Early access opportunities</li>
        <li>New features and releases</li>
      </ul>
      <p>Stay tuned!</p>
    `
  });
}

// Resend integration (modern alternative)
async function sendViaResend(email) {
  const { Resend } = require('resend');
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: 'Aeqio <onboarding@resend.dev>',
    to: email,
    subject: 'Welcome to Aeqio Waitlist',
    html: `
      <h2>Welcome to Aeqio!</h2>
      <p>Thank you for joining the waitlist for Aeqio - Universal Browser Automation Pipeline.</p>
      <p>We'll send you updates about:</p>
      <ul>
        <li>Product development progress</li>
        <li>Early access opportunities</li>
        <li>New features and releases</li>
      </ul>
      <p>Stay tuned!</p>
    `
  });
}

// Zapier webhook for spreadsheet storage
async function notifyZapier(email) {
  const response = await fetch(process.env.ZAPIER_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      timestamp: new Date().toISOString()
    })
  });

  if (!response.ok) {
    throw new Error('Failed to notify Zapier');
  }
}
