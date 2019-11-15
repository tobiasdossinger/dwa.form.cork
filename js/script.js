// Variables
const name = document.getElementById('name');
const email = document.getElementById('email');
const digitCode = document.getElementById('6DigitCode');

// ErrorElement
const errorElement = document.getElementById('error');

//Buttons
const submitButton = document.getElementById('submit-form');
const resetButton = document.getElementById('reset-form');


// Checks the validation and if all inputs are valide submits the data
submitButton.addEventListener('click', function() {
    let url = "http://webdevcit.com/displayvalues.php?";
    const erroredFields = [];



    const errorMessages = document.querySelectorAll('.error-message.show');
    for (let i = 0; i < errorMessages.length; i++) {
        errorMessages[i].classList.remove('show');
    }

    if(name.value.match(/[A-Z][a-zA-Z]/)) {
        url += "name=" + encodeURI(name.value) + '&';
    } else {
        erroredFields.push('name');
    }
    
    if(email.value.match(/.+\@.+\..+/gmi)) {
        url += "email=" + encodeURI(email.value) + '&';
    } else {
        erroredFields.push('email');
    }
    
    if(digitCode.value.match(/^\d{6}$/)) {
        url += "6DigitCode=" + encodeURI(digitCode.value) + '&';
    } else {
        erroredFields.push('6DigitCode');
    }
    
   
    const selectedAlbum = document.querySelector('input[name="favorite"]:checked');
    if(selectedAlbum) {
        url += "favorite=" + encodeURI(selectedAlbum.value) + '&';
    } else {
        erroredFields.push('favorite-album');
    }
    

    const rating = document.querySelector('input[name="rating"]:checked');
    if(rating) {
        url += "rating=" + encodeURI(rating.value) + '&';
    } else {
        erroredFields.push('rating');
    }


// Error check and show in html (hidden class in html) 
    for (let i = 0; i < erroredFields.length; i++) {
        const fieldID = erroredFields[i];
        
        const errorMessage = document.getElementById('error-' + fieldID);

        errorMessage.classList.add('show');
     

    }

    if(erroredFields.length == 0) {
        window.location = url;
    }


})




resetButton.addEventListener('click', function() {
    name.value = null
    email.value = null;
    digitCode.value = null;
    selectedAlbum.value = null;
    rating.value = null;
})



