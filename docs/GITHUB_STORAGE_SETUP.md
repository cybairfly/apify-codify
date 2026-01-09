# Email Signup Setup - GitHub Storage

This simplest approach saves emails directly to your GitHub repository in a JSON file.

## Quick Setup (5 minutes)

### 1. Generate GitHub Personal Access Token

1. Go to https://github.com/settings/tokens/new
2. Create a **Fine-grained Personal Access Token**:
   - Name: `Aeqio Email Signup`
   - Expiration: 90 days (or your preference)
   - Repository access: Select `apify-robot` (or your repo)
   - Permissions: Enable `Contents` (read & write)
3. Copy the token (you'll need it in step 3)

### 2. Deploy to Vercel (Free)

```bash
npm i -g vercel
vercel
```

Follow the prompts to connect your GitHub repo.

### 3. Set Environment Variables in Vercel

In your Vercel dashboard:
1. Go to your project settings
2. Environment Variables
3. Add these variables:
   - `GITHUB_TOKEN`: Paste your token from step 1
   - `GITHUB_REPO_OWNER`: `cybairfly` (your GitHub username)
   - `GITHUB_REPO_NAME`: `apify-robot` (your repo name)

### 4. That's it! 🎉

Your site will now:
- Collect emails via the form
- Save them to `design/aeqio/data/emails.json` in your repo
- Create a commit each time someone signs up
- You can view/manage emails directly in the repo

## What Happens

1. User submits email on your GitHub Pages site
2. Request goes to Vercel API (`/api/subscribe`)
3. API reads the current `emails.json` from your GitHub repo
4. API appends the new email
5. API commits the updated file back to GitHub
6. Emails are now saved in your repository!

## Viewing Submitted Emails

After signups:
1. Go to your GitHub repo
2. Navigate to `design/aeqio/data/emails.json`
3. You'll see all submitted emails with timestamps

The file looks like:
```json
[
  {
    "email": "john@example.com",
    "timestamp": "2026-01-01T12:00:00.000Z"
  },
  {
    "email": "jane@example.com",
    "timestamp": "2026-01-01T12:05:00.000Z"
  }
]
```

## Alternative: Deploy to Netlify

```bash
npm i -g netlify-cli
netlify deploy
```

Then set environment variables in Netlify dashboard under Site Settings → Environment.

## Troubleshooting

**"Token not set":**
- Check Vercel/Netlify environment variables
- Make sure token has `Contents` permission

**Emails not saving:**
- Check API logs in Vercel dashboard
- Verify repository owner and name are correct
- Token might have expired (regenerate if > 90 days old)

**CORS errors:**
- Vercel handles this automatically
- If using Netlify Functions, CORS is also handled

## Security Notes

- ✓ Emails stored in private repo (if private)
- ✓ Token has limited permissions (contents only)
- ✓ Token set server-side (not exposed to client)
- ✓ Vercel/Netlify handles HTTPS

## Next Steps

1. **Install dependencies locally** (optional):
   ```bash
   npm install @octokit/rest
   ```

2. **Test locally** (requires GITHUB_TOKEN in .env):
   ```bash
   npm run dev
   # Visit http://localhost:3000/design/aeqio
   ```

3. **Monitor submissions** by checking your repo!
