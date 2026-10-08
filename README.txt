TRAVEL EXPLORER - STUDENT WEBSITE PROJECT

WHAT IS INCLUDED
- index.html       = Home page
- about.html       = About Us page
- services.html    = Services/Places page
- gallery.html     = Gallery page
- contact.html     = Contact + Feedback form
- style.css        = Website design
- script.js        = Form submission code
- google_apps_script.gs = Google Sheets connection code
- images/          = Local SVG images

HOW TO RUN THE WEBSITE
1. Keep all files and the images folder together.
2. Double-click index.html to open the website in a browser.
3. Use the navigation menu to visit all 5 pages.

HOW TO CONNECT GOOGLE SHEETS
1. Create a new Google Sheet.
2. In Row 1, add:
   Timestamp | Name | Email | Phone | Destination | Message
3. Give the sheet tab the name: Responses
4. Open Extensions > Apps Script.
5. Copy the code from google_apps_script.gs into Apps Script.
6. Replace PASTE_YOUR_GOOGLE_SHEET_ID_HERE with your Sheet ID.
7. Deploy > New deployment > Web app.
8. Select "Execute as: Me".
9. Select "Who has access: Anyone".
10. Deploy and copy the Web App URL.
11. Open script.js and replace:
    PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE
    with your Web App URL.
12. Save the file and test the form.

IMPORTANT
- If the website is opened directly as a local HTML file, browser restrictions can sometimes affect external form requests.
- For the most reliable submission, publish the website using a simple static hosting service such as GitHub Pages, Netlify, or similar.
- Do not put private information in the website.
