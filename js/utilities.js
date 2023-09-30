function getInputFieldById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueSt = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueSt);

    inputField.value = '';

    return inputFieldValue;
}

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const elementValueSt = textElement.innerText;
    const textElementValue = parseFloat(elementValueSt);

    return textElementValue;
}

function setElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}