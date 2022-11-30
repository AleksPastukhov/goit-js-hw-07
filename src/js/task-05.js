const refs = {
  inputEl: document.querySelector('#name-input'),
  nameLable: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value !== '') {
    return (refs.nameLable.textContent = event.currentTarget.value);
  } else {
    return (refs.nameLable.textContent = 'Anonymous!');
  }
}
