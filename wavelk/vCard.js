document.getElementById("saveContact").addEventListener("click", function () {
  // Example: a small transparent PNG (1x1) as base64
  // Replace this with your company logo in base64
  const base64Image =
    "iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAMAAAArDjJDAAAAPFBMVEUJFmwAAAABBWECB2lhaJgJFmsJFmtAR4UrK28JFmurr8IJFmr9pTSEiqzQ0tcJFmrxgTf4+fN1TFavakcsNdTxAAAAFHRSTlP/AP8F/9q3//88/2z///+O/////+laqdEAAAKJSURBVHic7ZjhkqsgDIVpTE1EgwXf/11v0LpiRasuv3bumc4ua4dvDyFEwDyKyfxHPR6V6teoqmnbvh7Vt21zDDxANW39NCs967a5gWpqk1W9C9tB7YGOYFnUEWgflkFV/TEoqs/MwBbVPL+TdAa2xjao5gwoasP6RLVnSca0x6gTYVrUH6EueNr6WqFOx2lWs4e6TFqzElR1KgvWelZZ1KWQz+pzqBvDi2q2qOrLuttTXW1QN00ltn5QN02prU/UbVOLLfNbU4stcz+nZs259UZdXHxrtSvU5/jgCqpOUZvxhWHg06j3CE12/sKLQ9izuXXcJKh1qACGABwYxm7w/jF93o/WandRHIagI1RfJKAfFCNOhBG1CWgtjdg8Ki0KELque0V1zI7EsRVxaD2hAyvkUB8Bc+KtX1DrpTyjhi6AtdaJJSdgPBoXuV6sR1DTy7xMS3qDohVKvEXvwTlG7W+9+lJ3ljWa+u0hCohgSFDsxWh/xXlFoRdg573EaA5fUAZNghoANCSkMWZkZhibRqOvj9NpzKHACIyo7jUEiqmFNHLUrIJQuxMbjCEn+oJije9LQUFnzmmwNe4oOm3WitMZ1FmwqA/Ghs0N8CcZwFgTJ4diuLVXHA0iMSORMMn0l4wNwlwyLCkKEpNS/2u0QDGxo6ZfU3t+BkmSZrMdjENDGpuYO6fLQ4paljOQ02hYr6lzvtCkyzkpMhp5G1fZhYq1KjJp6Zuich70UfrWpeEa6LMgF3xNFHx5lXylFnzRl9x+FNwUFdyqldxAltzWFtxslzwClDyYlDwulTzElTxaljzwljyGPwpeDnyDXbqyOIJdvkgZYaWud0aVunRagCWuwi7pz6P+Ae5RH+eBAtRBAAAAAElFTkSuQmCC";

  const vcardData = `
BEGIN:VCARD
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
PHOTO;ENCODING=b;TYPE=PNG:${base64Image}
NOTE:Official business contact card of Wave Lanka
END:VCARD
  `.trim();

  const blob = new Blob([vcardData], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "wave-business.vcf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});