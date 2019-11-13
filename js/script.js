const name = document.getElementById('name');
const email = document.getElementById('email');
const digitCode = document.getElementById('6DigitCode');
const errorElement = document.getElementById('error');

const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
    let messages = [];

    if (name.value === '' || name.value == null)  {
        messages.push('Name is required!');
    }

    if (messages.length > 0) {
        e.defaultPrevented();
        errorElement.innerText = messages.join(', ');
    }

    if (digitCode.length > 6) {
        messages.push('Code has to have 6 characters');
        console.log(digitCode.value.length);
    }

})

function heartmark(item) {
    let count;
    count = item.id[0];
    sessionStorage.starRating = count;
    let subid = item.id.substring(1);
    for (let i = 0; i < 5; i++) {
        if (i < count) {
            document.getElementById((i + 1) + subid).style.color = "red";
        }
        else {
            document.getElementById((i + 1) + subid).style.color = "black";
        }
    }
}
