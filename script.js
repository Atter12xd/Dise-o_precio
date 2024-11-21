// Selección de elementos
const recargaBtn = document.getElementById("web-btn");
const apiBtn = document.getElementById("api-btn");
const recargaPlans = document.getElementById("web-plans");
const apiPricing = document.getElementById("api-pricing");

// Mostrar Recarga y ocultar API
recargaBtn.addEventListener("click", () => {
    recargaBtn.classList.add("active");
    apiBtn.classList.remove("active");
    recargaPlans.classList.remove("hidden");
    apiPricing.classList.add("hidden");
});

// Mostrar API y ocultar Recarga
apiBtn.addEventListener("click", () => {
    apiBtn.classList.add("active");
    recargaBtn.classList.remove("active");
    apiPricing.classList.remove("hidden");
    recargaPlans.classList.add("hidden");
});

// Manejo del deslizador y precios dinámicos
const slider = document.getElementById("volume-slider");
const sliderValue = document.getElementById("slider-value");
const priceFirmEasy = document.getElementById("price-firmeasy");
const priceDocusign = document.getElementById("price-docusign");
const priceDropbox = document.getElementById("price-dropbox");
const PEN_TO_USD = 3.7; // Tasa de conversión

slider.addEventListener("input", () => {
    const volume = parseInt(slider.value, 10);
    sliderValue.textContent = `${volume.toLocaleString()} sobres al mes`;

    // Calcular precio para FirmEasy
    let priceFirm = 0;
    if (volume <= 1000) {
        priceFirm = volume * 0.09; // Rango 1
    } else if (volume <= 10000) {
        priceFirm = volume * 0.07; // Rango 2
    } else {
        priceFirm = volume * 0.05; // Rango 3
    }
    priceFirmEasy.textContent = `$ ${(priceFirm / PEN_TO_USD).toFixed(2)}`;

    // Precios de DocuSign API (más caro)
    const priceDocusignLow = (volume * 0.25 / PEN_TO_USD).toFixed(2);
    const priceDocusignHigh = (volume * 0.35 / PEN_TO_USD).toFixed(2);
    priceDocusign.textContent = `$ ${priceDocusignLow} - $ ${priceDocusignHigh}`;

    // Precios de Dropbox Sign API (más caro que DocuSign)
    const priceDropboxLow = (volume * 0.50 / PEN_TO_USD).toFixed(2);
    const priceDropboxHigh = (volume * 0.55 / PEN_TO_USD).toFixed(2);
    priceDropbox.textContent = `$ ${priceDropboxLow} - $ ${priceDropboxHigh}`;
    
});
