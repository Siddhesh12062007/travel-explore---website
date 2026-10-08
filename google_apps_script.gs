// GOOGLE APPS SCRIPT
// 1. Create a Google Sheet with these headers in Row 1:
// Timestamp | Name | Email | Phone | Destination | Message
//
// 2. Open Extensions > Apps Script.
// 3. Paste this code.
// 4. Replace SHEET_ID with the ID of your Google Sheet.
//    Example URL: https://docs.google.com/spreadsheets/d/SHEET_ID/edit
// 5. Deploy > New deployment > Web app.
//    Execute as: Me
//    Who has access: Anyone
// 6. Copy the Web App URL into script.js.

const SHEET_ID = "PASTE_YOUR_GOOGLE_SHEET_ID_HERE";
const SHEET_NAME = "Responses";

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

    sheet.appendRow([
      new Date(),
      e.parameter.name || "",
      e.parameter.email || "",
      e.parameter.phone || "",
      e.parameter.destination || "",
      e.parameter.message || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
