const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length !== Number(inputEl.attributes['data-length'].value)) {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  } else {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  }
}
