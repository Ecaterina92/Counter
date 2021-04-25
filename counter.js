let plus = document.querySelector('#inc');
let minus = document.querySelector('#dcr');
let input = document.querySelector('input');


plus.addEventListener('click', () => {
    input.value = parseInt(input.value) + 1;
});

minus.addEventListener('click', () => {
    if(input.value > 1) {
        input.value = parseInt(input.value) -1;
    } else {
        return error;
    }
});

