function generateQRCode() {
    var qrText = document.getElementById("qrText").value;
    var qrCodeDiv = document.getElementById("qrCode");
    qrCodeDiv.innerHTML = "";
    if (qrText.trim() === "") {
        alert("Please enter a text or URL to generate QR Code.");
        return;
    }
    var qrcode = new QRCode(qrCodeDiv, {
        text: qrText,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}
