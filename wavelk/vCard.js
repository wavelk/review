// Resize Base64 image for phone compatibility
function resizeBase64Img(base64, maxWidth = 200, maxHeight = 200) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      let width = img.width;
      let height = img.height;

      // Maintain aspect ratio
      if (width > maxWidth) {
        height *= maxWidth / width;
        width = maxWidth;
      }
      if (height > maxHeight) {
        width *= maxHeight / height;
        height = maxHeight;
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL("image/png").split(",")[1]);
    };
    img.src = "data:image/png;base64," + base64;
  });
}

// Generate vCard when button clicked
document.getElementById("save-contact").addEventListener("click", async function() {
  const imgElement = document.getElementById("logo-image");

  // Wait for image to load
  await new Promise(resolve => {
    if (imgElement.complete) resolve();
    else imgElement.onload = resolve;
  });

  // Draw image to canvas
  const canvas = document.createElement("canvas");
  canvas.width = imgElement.naturalWidth;
  canvas.height = imgElement.naturalHeight;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(imgElement, 0, 0);

  // Convert to Base64
  let base64Image = canvas.toDataURL("image/png").split(",")[1];

  // Resize for phone compatibility
  base64Image = await resizeBase64Img(base64Image);

  // vCard content
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

  // Download vCard
  const blob = new Blob([vcard], { type: "text/vcard" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "WaveBusiness.vcf";
  link.click();
});
