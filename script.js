const generateButton = document.getElementById('generate-button');
const textInput = document.getElementById('text-input');
const qrcode = new QRCode(document.getElementById('qrcode'));

generateButton.addEventListener('click', () => {
    const text = textInput.value;
    if (text) {
        qrcode.makeCode(text);
    }
});
