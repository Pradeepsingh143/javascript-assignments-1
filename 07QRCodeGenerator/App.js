const mainDiv = document.getElementById("main");
const input = document.getElementById("input");
const qrGeneratorBtn = document.getElementById("submit");
const qrCode = document.getElementById("img");
qrGeneratorBtn.addEventListener("click", ()=> {
    if (!input.value.length == 0) {
        qrGeneratorBtn.innerHTML = "Generating QR Code...";
    qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}` ;
    }
    qrCode.addEventListener("load", ()=>{
        qrGeneratorBtn.innerHTML = "Generate QR Code";
        qrCode.hidden = false;
        const downloadImg = document.createElement('a');
        downloadImg.style.display = "block";
        downloadImg.setAttribute("download", `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`);
        downloadImg.setAttribute("href", `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`);
        downloadImg.innerHTML = "Download image";
        mainDiv.appendChild(downloadImg);
    });
});