/* QR Code Generator Script starts */

const qr_code_generator_container = document.querySelector(".qr-code-generator-container");
const qr_code_generator_userInput = document.getElementById("qr-code-generator-userInput");
const qr_code_generator_submitBtn = document.getElementById("qr-code-generator-submit");
const qr_code_generator_downloadBtn = document.getElementById("qr-code-generator-download");
const qr_code_generator_sizeOptions = document.querySelector(".qr-code-generator-sizeOptions");
const qr_code_generator_BGColor = document.getElementById("qr-code-generator-BGColor");
const qr_code_generator_FGColor = document.getElementById("qr-code-generator-FGColor");
let qr_code_generator_QR_Code;
let qr_code_generator_sizeChoice, qr_code_generator_BGColorChoice, qr_code_generator_FGColorChoice;

//Set size
qr_code_generator_sizeOptions.addEventListener("change", () => {
  qr_code_generator_sizeChoice = qr_code_generator_sizeOptions.value;
});

//Set background color
qr_code_generator_BGColor.addEventListener("input", () => {
  qr_code_generator_BGColorChoice = qr_code_generator_BGColor.value;
});

//Set foreground color
qr_code_generator_FGColor.addEventListener("input", () => {
  qr_code_generator_FGColorChoice = qr_code_generator_FGColor.value;
});

//Format input
const qr_code_generator_inputFormatter = (value) => {
  value = value.replace(/[^a-z0-9A-Z]+/g, "");
  return value;
};

qr_code_generator_submitBtn.addEventListener("click", async () => {
  qr_code_generator_container.innerHTML = "";
  //QR code genertion
  qr_code_generator_QR_Code = await new QRCode(qr_code_generator_container, {
    text: qr_code_generator_userInput.value,
    width: qr_code_generator_sizeChoice,
    height: qr_code_generator_sizeChoice,
    colorDark: qr_code_generator_FGColorChoice,
    colorLight: qr_code_generator_BGColorChoice,
  });

  //Set url for download
  const qr_code_generator_src = qr_code_generator_container.firstChild.toDataURL("image/pmg");
  qr_code_generator_downloadBtn.href = qr_code_generator_src;
  let qr_code_generator_userValue = qr_code_generator_userInput.value;
  try {
    qr_code_generator_userValue = new URL(qr_code_generator_userValue).hostname;
  } catch (_) {
    qr_code_generator_userValue = qr_code_generator_inputFormatter(qr_code_generator_userValue);
    qr_code_generator_downloadBtn.download = `${qr_code_generator_userValue}QR`;
    qr_code_generator_downloadBtn.classList.remove("qr-code-generator-hide");
  }
});

qr_code_generator_userInput.addEventListener("input", () => {
  if (qr_code_generator_userInput.value.trim().length < 1) {
    qr_code_generator_submitBtn.disabled = true;
    qr_code_generator_downloadBtn.href = "";
    qr_code_generator_downloadBtn.classList.add("qr-code-generator-hide");
  } else {
    qr_code_generator_submitBtn.disabled = false;
  }
});

window.onload = () => {
  qr_code_generator_container.innerHTML = "";
  qr_code_generator_sizeChoice = 100;
  qr_code_generator_sizeOptions.value = 100;
  qr_code_generator_userInput.value = "";
  qr_code_generator_BGColor.vavlue = qr_code_generator_BGColorChoice = "#ffffff";
  qr_code_generator_FGColor.value = qr_code_generator_FGColorChoice = "#377dff";
  qr_code_generator_downloadBtn.classList.add("qr-code-generator-hide");
  qr_code_generator_submitBtn.disabled = true;
};


/* QR Code Generator Script ends */