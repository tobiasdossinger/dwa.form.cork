const name = document.getElementById('name');
const email = document.getElementById('email');
const digitCode = document.getElementById('6DigitCode');
const errorElement = document.getElementById('error');


const form = document.getElementById('form');

const submitButton = document.getElementById('submit-form');

submitButton.addEventListener('click', function() {
    let url = "http://webdevcit.com/displayvalues.php?";
    const erroredFields = [];
    const errorMessages = document.querySelectorAll('.error-message.show');
    for (let i = 0; i < errorMessages.length; i++) {
        errorMessages[i].classList.remove('show');
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

    if(email.value.match(/.+\@.+\..+/gmi)) {
        url += "email=" + encodeURI(email.value) + '&';
    } else {
        erroredFields.push('email');
    }

    for (let i = 0; i < erroredFields.length; i++) {
        const fieldID = erroredFields[i];
        
        const errorMessage = document.getElementById('error-' + fieldID);

        errorMessage.classList.add('show');
    }

    if(erroredFields.length == 0) {
        window.location = url;
    }
})

// form.addEventListener('onclick', (e) => {
//     let messages = [];

//     if (name.value === '' || name.value == null)  {
//         messages.push('Name is required!');
//     }

//     if (messages.length > 0) {
//         e.defaultPrevented();
//         errorElement.innerText = messages.join(', ');
//     }

//     if (digitCode.length > 6) {
//         messages.push('Code has to have 6 characters');
//         console.log(digitCode.value.length);
//     }

// });

// function heartmark(item) {
//     let count;
//     count = item.id[0];
//     sessionStorage.starRating = count;
//     let subid = item.id.substring(1);
//     for (let i = 0; i < 5; i++) {
//         if (i < count) {
//             document.getElementById((i + 1) + subid).style.color = "red";
//         }
//         else {
//             document.getElementById((i + 1) + subid).style.color = "black";
//         }
//     }
// }
