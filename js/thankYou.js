// 🔗 Google Apps Script Web App URL
// Senga ishlayotgan URL: shu yerga O'ZINGNING script URL'ingni qo'y.
// Sen yozgan: AKfycby8NhAistIsWsWewxTsxv4p_e54ORNfRPJxrz3WCWsdS4nISbPgm5xQDrzv7ma2-x8cCw
const SHEET_URL =
  "https://script.google.com/macros/s/AKfycby8NhAistIsWsWewxTsxv4p_e54ORNfRPJxrz3WCWsdS4nISbPgm5xQDrzv7ma2-x8cCw/exec";

// 🔹 Shu yerga Google Sheetsdagi VARAQ nomini yoz
// Masalan: "Leads" yoki "Ro'yxat" va hokazo
const SHEET_NAME = "Leads"; // <---- varaq nomini ALMASHTIR

async function sendFormData() {
  const raw = localStorage.getItem("FormData");
  if (!raw) {
    console.log("Ma'lumotlar yo‘q (localStorage bo‘sh).");
    return;
  }

  let data;
  try {
    data = JSON.parse(raw);
  } catch (err) {
    console.error("FormData JSON buzilgan:", err);
    return;
  }

  // Form ma'lumotlarini Apps Script kutayotgan formatda yuboramiz
  const formData = new FormData();

  // Apps Script uchun varaq nomi
  formData.append("sheetName", SHEET_NAME);

  // Headerlar bilan BIR XIL bo‘lishi shart
  formData.append("Ism", data.name || "");
  formData.append("Telefon raqam", data.phone || "");
  formData.append("Royhatdan o'tgan vaqti", data.time || "");

  try {
    // no-cors: brauzer "CORS error" qilmasin, lekin so'rov boradi
    await fetch(SHEET_URL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    });

    console.log("Google Sheetsga yuborildi (no-cors).");
    // Xohlasang: muvaffaqiyatdan keyin localStorage ni tozalash mumkin
    localStorage.removeItem("FormData");
  } catch (err) {
    console.error("Form yuborishda xatolik:", err);
    const el = document.getElementById("errorMessage");
    if (el) el.style.display = "block";
  }
}

// thankYou sahifa yuklanganda avtomatik yuboradi
window.addEventListener("load", sendFormData);
