/**
 * Google Apps Script — Webhook receiver for Jeevan Tatva Foot Detox Patch leads.
 *
 * SETUP STEPS:
 * 1. Open your Google Sheet (create a new one if you haven't).
 * 2. Go to Extensions → Apps Script.
 * 3. Delete any existing code and paste this entire script.
 * 4. Click Deploy → New Deployment.
 * 5. Select Type: "Web app" (click the gear icon next to "Select type").
 * 6. Set "Execute as": Me (your email).
 * 7. Set "Who has access": Anyone.
 * 8. Click Deploy. Authorize access if prompted.
 * 9. Copy the generated Web App URL.
 * 10. Paste this URL into your Cloudflare environment variables or local .env file as GOOGLE_SCRIPT_URL.
 *
 * SHEET SETUP:
 * Add these headers in Row 1 of Sheet1:
 * A1: Timestamp | B1: Name | C1: Contact | D1: City
 */

// Handle POST requests from the webhook
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
    
    // If Sheet1 doesn't exist, use the active sheet
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    }

    var data = JSON.parse(e.postData.contents);

    // Append a new row with the lead data
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }), // Timestamp
      data.name || "",                                                                    // Name
      data.contact || "",                                                                 // Contact
      data.city || "",                                                                    // City
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (for testing the URL in browser)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", message: "Webhook is active. Use POST to send data." }))
    .setMimeType(ContentService.MimeType.JSON);
}
