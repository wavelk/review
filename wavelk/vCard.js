document.getElementById("save-contact").addEventListener("click", async function() {
  // Load image from page
  const img = document.querySelector(".logo img"); // logo_no_bg.png
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  // Convert image to Base64
  const base64Image = canvas.toDataURL("image/png").split(",")[1];

  // Create vCard content
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:Wave;Business;;;
FN:Wave Business
ORG:Wave Lanka
TEL;TYPE=cell:+94772260973
TEL;TYPE=home:+94112345678
TEL;TYPE=work:+94112349876
TEL;TYPE=fax:+94112349877
TEL;TYPE=whatsapp:+94772260973
EMAIL;TYPE=work:info@wavelk.com
EMAIL;TYPE=support:support@wavelk.com
URL;TYPE=website:https://www.wavelk.com
URL;TYPE=facebook:https://www.facebook.com/wavelk
URL;TYPE=instagram:https://www.instagram.com/contact.wavelk/
URL;TYPE=linkedin:https://www.linkedin.com/company/wavelk
URL;TYPE=tiktok:https://www.tiktok.com/@wavelk
ADR;TYPE=work:;;123 Wave Tower;Colombo;;10000;Sri Lanka
PHOTO;ENCODING=b;TYPE=PNG:
${base64Image}
NOTE:Official business contact card of Wave Lanka
END:VCARD`;

  // Download the vCard
  const blob = new Blob([vcard], { type: "text/vcard" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "WaveBusiness.vcf";
  link.click();
});
