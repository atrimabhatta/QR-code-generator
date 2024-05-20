function generateQRCode() { 
    var qr; 
    var textInput = document.getElementById("text-input").value; 
    var qrContainer = document.getElementById("qrcode"); 
     
    qrContainer.innerHTML = ""; 
 
    if (textInput !== "") { 
 
        qr = new QRCode(qrContainer, { 
            text: textInput, 
            width: 150, 
            height: 140,
            colorDark : "#000000", 
            colorLight : "#ffffff", 
            correctLevel : QRCode.CorrectLevel.H 
        }); 
    } else { 
        alert("Please enter the text to generate QR Code."); 
    } 
}