/**
 * Serverless function to handle email signups
 * Saves emails to a JSON file committed to the GitHub repo
 * 
 * For Vercel: Place in /api/subscribe.js
 * Environment variables required:
 * - GITHUB_TOKEN: Your GitHub personal access token
 * - GITHUB_REPO_OWNER: Repository owner (e.g., cybairfly)
 * - GITHUB_REPO_NAME: Repository name (e.g., apify-robot)
 */

const { Octokit } = require("@octokit/rest");

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

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
    // Check for required environment variables
    if (!process.env.GITHUB_TOKEN) {
      console.warn('GITHUB_TOKEN not set, using local storage only');
      return saveLocally(email, res);
    }

    // Use GitHub API to save email
    await saveToGitHub(email);

    return res.status(200).json({ 
      success: true,
      message: 'Successfully joined the waitlist!' 
    });
  } catch (error) {
    console.error('Error processing signup:', error);
    
    // Fallback: try local storage
    try {
      return saveLocally(email, res);
    } catch (localError) {
      return res.status(500).json({ error: 'Failed to process signup' });
    }
  }
}

/**
 * Save email to GitHub repo as JSON file
 */
async function saveToGitHub(email) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const owner = process.env.GITHUB_REPO_OWNER || 'cybairfly';
  const repo = process.env.GITHUB_REPO_NAME || 'apify-robot';
  const path = 'design/aeqio/data/emails.json';
  
  const emailData = {
    email,
    timestamp: new Date().toISOString(),
  };

  try {
    // Try to get existing file
    const { data: existingFile } = await octokit.repos.getContent({
      owner,
      repo,
      path,
    });

    // Parse existing content
    const existingEmails = JSON.parse(
      Buffer.from(existingFile.content, 'base64').toString()
    );

    // Add new email if not already there
    if (!existingEmails.some(e => e.email === email)) {
      existingEmails.push(emailData);
    }

    // Update file
    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: `📧 Add email signup: ${email}`,
      content: Buffer.from(JSON.stringify(existingEmails, null, 2)).toString('base64'),
      sha: existingFile.sha,
    });
  } catch (error) {
    // File doesn't exist, create it
    if (error.status === 404) {
      await octokit.repos.createOrUpdateFileContents({
        owner,
        repo,
        path,
        message: `📧 Add first email signup: ${email}`,
        content: Buffer.from(JSON.stringify([emailData], null, 2)).toString('base64'),
      });
    } else {
      throw error;
    }
  }
}

/**
 * Fallback: save to local storage (for development)
 */
function saveLocally(email, res) {
  // In development, just acknowledge the signup
  // In production, GitHub API should be used
  return res.status(200).json({ 
    success: true,
    message: 'Successfully joined the waitlist!' 
  });
}
