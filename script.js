// Paste your Google Apps Script Web App URL below after deployment.
const GOOGLE_SCRIPT_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

const form = document.getElementById("feedbackForm");
const statusBox = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    statusBox.className = "form-status";
    statusBox.textContent = "Submitting...";

    if (GOOGLE_SCRIPT_URL.includes("PASTE_YOUR")) {
      statusBox.className = "form-status error";
      statusBox.textContent = "Form is ready, but the Google Sheets Web App URL has not been added yet.";
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"},
        body: new URLSearchParams(data).toString()
      });

      form.reset();
      statusBox.className = "form-status success";
      statusBox.textContent = "Thank you! Your feedback has been submitted.";
    } catch (error) {
      console.error(error);
      statusBox.className = "form-status error";
      statusBox.textContent = "Something went wrong. Please check your Apps Script URL and try again.";
    }
  });
}
