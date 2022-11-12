function metersToFeet(meters) {
    return (meters * 3.281).toFixed(3);
}

function feetToMeter(feet) {
    return (feet / 3.281).toFixed(3);
}

function litersToGallons(liters) {
    return (liters * 0.264172).toFixed(3);
}

function gallonsToLiters(gallons) {
    return (gallons / 0.264172).toFixed(3);
}

function killosToPounds(killos) {
    return (killos * 2.205).toFixed(3);
}

function poundsToKillos(pounds) {
    return (pounds / 2.205).toFixed(3);
}

const inputField = document.querySelector("input");

const convertBtn = document.querySelector("button");
convertBtn.addEventListener('click', function() {
    const sourceUnit = inputField.value;
    updateSourceUnits(sourceUnit);
    unpdateTargetUnits(sourceUnit)
})

function updateSourceUnits(num) {
    const allSourceUnits = document.querySelectorAll(".conversion-start");
    allSourceUnits.forEach(el => el.textContent = num);
}

function unpdateTargetUnits(sourceUnit) {
    document.querySelector("#converted-to-feet")
    .textContent = metersToFeet(sourceUnit);

    document.querySelector("#converted-to-meters")
    .textContent = feetToMeter(sourceUnit);

    document.querySelector("#converted-to-gallons")
    .textContent = litersToGallons(sourceUnit);

    document.querySelector("#converted-to-liters")
    .textContent = gallonsToLiters(sourceUnit);

    document.querySelector("#converted-to-pounds")
    .textContent = killosToPounds(sourceUnit);

    document.querySelector("#converted-to-kilos")
    .textContent = poundsToKillos(sourceUnit);
}