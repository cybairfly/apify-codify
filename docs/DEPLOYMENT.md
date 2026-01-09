# Aeqio GitHub Pages Deployment Guide

## Quick Start

### Step 1: GitHub Pages Configuration

1. **Go to your GitHub repository settings**
   - Navigate to `Settings` → `Pages`
   - Under "Build and deployment":
     - Source: Select `GitHub Actions`
     - This will automatically use the workflow file

2. **Enable GitHub Pages**
   - Your site will be available at: `https://your-username.github.io/apify-robot/`
   - (or `https://your-organization.github.io/apify-robot/`)

### Step 2: Push to Trigger Deployment

```bash
git add .github/workflows/deploy-pages.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

The workflow will automatically:
- Build and deploy the `design/aeqio` folder
- Make it available at your GitHub Pages URL
- Re-deploy on any changes to the `design/aeqio` folder

---

## Email Signup Implementation

### Option A: Formspree (Easiest, No Backend Required)

Perfect for static sites on GitHub Pages.

**Setup:**
1. Go to https://formspree.io
2. Sign up with GitHub
3. Create a new form
4. Get your form ID (e.g., `abcdef123`)

**Update `index.html`:**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="waitlist-form" id="waitlistForm">
  <div class="form-row">
    <input type="email" name="email" placeholder="your@email.com" required class="form-input">
    <button type="submit" class="btn btn-primary">
      Join Waitlist →
    </button>
  </div>
</form>
```

**Benefits:**
- ✓ No backend needed
- ✓ Free plan includes up to 50 submissions/month
- ✓ Emails sent to your inbox
- ✓ Works directly with GitHub Pages

---

### Option B: Vercel Serverless Functions (Most Flexible)

Gives you full control with backend processing.

**Setup:**

1. **Move your site to Vercel:**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Create `/api/subscribe.js` in your repo root:**
   Use the provided `api.example.js` file and rename to `api/subscribe.js`

3. **Set environment variables in Vercel:**
   - Go to Project Settings → Environment Variables
   - Add your email service credentials:

   **For SendGrid:**
   - `SENDGRID_API_KEY` - Get from sendgrid.com
   - `SENDER_EMAIL` - Your sender email

   **For Resend:**
   - `RESEND_API_KEY` - Get from resend.com

   **For Zapier Webhook:**
   - `ZAPIER_WEBHOOK_URL` - Your Zapier webhook URL

4. **Your API will be at:** `https://your-domain.vercel.app/api/subscribe`

**Install dependencies:**
```bash
npm install @sendgrid/mail
# OR
npm install resend
```

**Update form action in `index.html`:**
```html
<form class="waitlist-form" id="waitlistForm">
  <div class="form-row">
    <input type="email" name="email" placeholder="your@email.com" required class="form-input">
    <button type="submit" class="btn btn-primary">
      Join Waitlist →
    </button>
  </div>
</form>
```

The `script.js` is already configured to post to `/api/subscribe`.

---

### Option C: Netlify Functions + Forms

Deploy to Netlify with built-in form handling.

**Setup:**

1. **Connect your GitHub repo to Netlify:**
   - Go to netlify.com
   - Click "New site from Git"
   - Select your repository
   - Build settings:
     - Base directory: `design/aeqio`
     - Build command: (leave empty for static site)
     - Publish directory: `design/aeqio`

2. **Use Netlify Forms** (simplest):
   ```html
   <form name="waitlist" method="POST" netlify class="waitlist-form" id="waitlistForm">
     <div class="form-row">
       <input type="email" name="email" placeholder="your@email.com" required class="form-input">
       <button type="submit" class="btn btn-primary">
         Join Waitlist →
       </button>
     </div>
   </form>
   ```

   Then disable the JavaScript form handler and let Netlify handle it.

3. **Or use Netlify Functions:**
   - Create `/netlify/functions/subscribe.js`
   - Use the provided `api.example.js` as template
   - Set environment variables in Netlify dashboard

---

### Option D: Google Sheets + Zapier (Most Cost-Effective)

Store emails in a Google Sheet for easy management.

**Setup:**

1. **Create a Google Sheet:**
   - Create columns: `Email`, `Timestamp`, `Source`

2. **Set up Zapier:**
   - Create a new Zap:
     - Trigger: Webhooks (catch raw hook)
     - Action: Google Sheets (create spreadsheet row)
   - Get your webhook URL

3. **Set environment variable:**
   - `ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/...`

4. **Deploy with Vercel or Netlify** using the serverless function approach

**Cost:** ~$20/month for Zapier (or free if you use Formspree)

---

## Testing Email Submissions

### Test Locally

1. If using Formspree: Just fill the form and submit
2. If using serverless: Set up a test endpoint

### Production Testing

1. Visit your deployed site
2. Fill in the email form
3. Check:
   - ✓ Success message appears
   - ✓ Email is received
   - ✓ Browser console for errors (F12)

---

## Environment Variables Reference

### SendGrid
```
SENDGRID_API_KEY=SG.xxx...
SENDER_EMAIL=noreply@aeqio.dev
```

### Resend
```
RESEND_API_KEY=re_xxx...
```

### Zapier
```
ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/xxxxx
```

---

## Troubleshooting

**Site not deploying:**
- Check GitHub Actions tab for workflow errors
- Ensure `design/aeqio` folder exists and has `index.html`
- Verify branch is `main` or `master`

**Emails not working:**
- Check browser console (F12) for errors
- Verify API endpoint is correct
- Check environment variables are set
- Test API directly: `curl -X POST https://your-api.com/api/subscribe -d '{"email":"test@example.com"}'`

**CORS errors:**
- Add CORS headers to your API
- Or use Formspree (handles CORS automatically)

---

## Next Steps

1. **Choose an email service** from options above
2. **Configure environment variables**
3. **Test locally** if possible
4. **Deploy and verify** at your GitHub Pages URL
5. **Monitor submissions** in your email service dashboard

For questions, check the documentation of your chosen service!
