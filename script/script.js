window.onload = function() {
            document.getElementById("phone").focus();
        }
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    preferredCountries: ["in"],
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

function submitForm(e) {
    e.preventDefault();

    const phoneNumber = phoneInput.getNumber();
    let msg = encodeURI(document.getElementById('message').value) || '';

    if (!phoneNumber || !phoneInput.isValidNumber()) {
        alert('Please enter a valid phone number.')
        return;
    }


    location.href = `https://api.whatsapp.com/send?phone=${encodeURI(phoneNumber)}&text=${msg}`;
}