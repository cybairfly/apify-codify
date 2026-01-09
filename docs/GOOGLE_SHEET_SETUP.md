# Google Sheet Setup Guide

Follow these steps to connect your website form to a Google Sheet for waitlist collection.

## 1. Create a Google Sheet
1. Open [sheets.new](https://sheets.new).
2. Add headers in Row 1: **Email** and **Timestamp**.

## 2. Add the Apps Script
1. In your sheet, go to **Extensions > Apps Script**.
2. Delete any existing code and paste this snippet:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const email = e.parameter.email;
  const timestamp = new Date().toISOString();
  
  if (!email) return createResponse(false, "No email");

  const values = sheet.getDataRange().getValues();
  for (let i = 1; i < values.length; i++) {
    if (values[i][0] === email) return createResponse(false, "Exists");
  }
  
  sheet.appendRow([email, timestamp]);
  return createResponse(true, "Saved");
}

function createResponse(success, message) {
  return ContentService.createTextOutput(JSON.stringify({success, message}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 3. Deploy
1. Click **Deploy > New Deployment**.
2. Select **Web app**.
3. Set "Execute as" to **Me**.
4. Set "Who has access" to **Anyone**.
5. Click **Deploy** and copy the **Web App URL**.

> [!IMPORTANT]
> Whenever you change the script code, you must create a **New Deployment** (or update the version) to make the changes live.

## 4. Connect to your Website
In `index.html`, find the script block at the bottom and update the URL:

```javascript
window.GOOGLE_SHEET_URL = 'PASTE_YOUR_COPIED_URL_HERE';
```

## 5. Verification
1. Refresh your live site.
2. Submit a test email.
3. Check your Google Sheet — the data should appear instantly.

## 💡 Troubleshooting: "App not verified"
When you first deploy, Google will show a warning saying "Google hasn't verified this app".
1. Click **Advanced**.
2. Click **Go to [Project Name] (unsafe)**.
3. Click **Allow**.

This is normal for personal scripts that haven't been submitted to Google for a public review.
